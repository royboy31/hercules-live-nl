#!/usr/bin/env node
/**
 * Fetches the live Google rating and review count from the TrustIndex feed
 * that backs the review widget displayed on the site, so the Product schema
 * and the header badge always match what visitors see in the widget.
 *
 * Feed id comes from data-rich-snippet="..." in the TrustIndex widget markup
 * (NL widget b323efb8230e1805d266c7ef231, Google profile "Hercules Merchandise NL").
 *
 * Outputs to src/data/google-place-data.json for build-time consumption.
 *
 * Usage: node scripts/fetch-google-reviews.mjs
 */

import { writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = resolve(__dirname, '../src/data/google-place-data.json');

// TrustIndex company id for hercules-merchandise.nl (data-rich-snippet of widget b323efb8230e1805d266c7ef231)
const TRUSTINDEX_COMPANY_ID = 'da9a1d539521gb33';
const TRUSTINDEX_FEED = `https://cdn.trustindex.io/companies/${TRUSTINDEX_COMPANY_ID.slice(0, 2)}/${TRUSTINDEX_COMPANY_ID}/richsnippet.json`;

const PLACE_NAME = 'Hercules Merchandise NL';
const MAPS_URL = 'https://www.google.com/maps/place/Hercules+Merchandise+NL/data=!4m2!3m1!1s0x8565f6c310e115b1:0xe2cb88b822f6b3c4';

// Last known good values, only used if the feed is unreachable and the
// previous google-place-data.json cannot be read.
const FALLBACK = { rating: 4.9, reviewCount: 17 };

function readPrevious() {
  try {
    return JSON.parse(readFileSync(OUTPUT_FILE, 'utf-8'));
  } catch {
    return null;
  }
}

async function fetchTrustIndexRating() {
  console.log(`[GoogleReviews] Fetching TrustIndex feed ${TRUSTINDEX_FEED}`);

  const response = await fetch(TRUSTINDEX_FEED, {
    headers: { 'User-Agent': 'hercules-merchandise.nl build script' }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const body = await response.text();

  // TrustIndex answers 200 with a plain-text notice when the feed is switched
  // off or the plan no longer covers it.
  if (body.includes('The page is not found') || body.includes('do not have paid package')) {
    throw new Error(`Feed unavailable: ${body.slice(0, 120)}`);
  }

  const data = JSON.parse(body);
  const aggregate = data?.reviews?.aggregateRating;

  const rating = aggregate?.ratingValue;
  const reviewCount = aggregate?.ratingCount;

  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    throw new Error(`Invalid rating in feed: ${rating}`);
  }
  if (!Number.isInteger(reviewCount) || reviewCount < 1) {
    throw new Error(`Invalid review count in feed: ${reviewCount}`);
  }

  return {
    rating,
    reviewCount,
    name: PLACE_NAME,
    url: MAPS_URL,
    scrapedAt: new Date().toISOString(),
    source: 'trustindex-richsnippet'
  };
}

// Main
let result;
try {
  result = await fetchTrustIndexRating();
  console.log(`[GoogleReviews] Success: ${result.rating} stars from ${result.reviewCount} reviews`);
} catch (error) {
  console.error(`[GoogleReviews] Failed: ${error.message}`);
  const previous = readPrevious();
  const rating = typeof previous?.rating === 'number' ? previous.rating : FALLBACK.rating;
  const reviewCount = Number.isInteger(previous?.reviewCount) ? previous.reviewCount : FALLBACK.reviewCount;
  console.warn(`[GoogleReviews] Keeping previous values: ${rating} stars from ${reviewCount} reviews`);
  result = {
    rating,
    reviewCount,
    name: PLACE_NAME,
    url: MAPS_URL,
    scrapedAt: previous?.scrapedAt ?? null,
    source: 'previous-build'
  };
}

// Preserve static reviews text from google-reviews.json
let existingReviews = [];
try {
  const existing = JSON.parse(readFileSync(resolve(__dirname, '../src/data/google-reviews.json'), 'utf-8'));
  existingReviews = existing.reviews || [];
} catch {}

const output = {
  ...result,
  reviews: existingReviews
};

writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2) + '\n');
console.log(`[GoogleReviews] Written to ${OUTPUT_FILE}`);
