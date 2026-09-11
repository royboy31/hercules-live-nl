/**
 * Build-time internal-link normalizer for WordPress-sourced HTML.
 *
 * The FR blog/product/collection content is authored in a WordPress CMS we do
 * not have write access to, and it ships legacy links that hurt SEO:
 *   - trailing `#/` hash fragments (Shopify-era junk), e.g.
 *       https://hercules-merchandising.fr/products/drapeau-personnalise#/
 *   - internal page links missing the canonical trailing slash, e.g.
 *       https://hercules-merchandising.fr/products/echarpe-personnalisee-sublimee
 *
 * Since we can't fix the source, we rewrite these links at render time as the
 * raw HTML is injected via `set:html`. Only links pointing at an internal host (or
 * root-relative `/…` links) are touched — external URLs, mailto/tel, cache-buster
 * query strings, and legitimate `#anchor` fragments are left exactly as-is.
 *
 * NL: the content was cloned from FR, so links to the FR host are internal links,
 * and the NL WordPress hosts (temporary and final) serve the same catalogue. Links
 * on any of them become root-relative, so they open on whichever host serves the
 * site (the edge router sends /wp-content/* to WordPress) and never on live FR.
 *
 * See hercules-fr-seo-cleanup-audit.md (§"Wrong Internal Links").
 */

const INTERNAL_HOSTS = new Set([
  'hercules-merchandising.fr',
  'www.hercules-merchandising.fr',
  'nl.hercules-merchandising.fr',
  'hercules-merchandise.nl',
  'www.hercules-merchandise.nl',
]);

/** Normalize a single URL string. Returns the input unchanged if not an internal link we fix. */
function normalizeUrl(input: string): string {
  const original = input;
  let s = input.trim();
  if (!s) return original;

  // Non-navigational schemes: never touch.
  if (/^(mailto:|tel:|sms:|javascript:|data:)/i.test(s)) return original;

  // Peel off hash, then query, so we only reason about the path.
  let hash = '';
  const hashIdx = s.indexOf('#');
  if (hashIdx !== -1) {
    hash = s.slice(hashIdx); // includes leading '#'
    s = s.slice(0, hashIdx);
  }

  let query = '';
  const qIdx = s.indexOf('?');
  if (qIdx !== -1) {
    query = s.slice(qIdx); // includes leading '?'
    s = s.slice(0, qIdx);
  }

  // Isolate the pathname and, for absolute URLs, verify the host is ours.
  let path: string;

  const absMatch = s.match(/^((?:https?:)?\/\/[^/]+)(\/.*)?$/i);
  if (absMatch) {
    const hostname = absMatch[1].replace(/^(https?:)?\/\//i, '').toLowerCase();
    if (!INTERNAL_HOSTS.has(hostname)) {
      return original; // external host — leave untouched
    }
    path = absMatch[2] || '/'; // internal: made root-relative below
  } else if (s.startsWith('//')) {
    return original; // protocol-relative to an external host
  } else if (s.startsWith('/')) {
    path = s; // root-relative internal link
  } else {
    // Bare fragment ("#foo" -> s === '') or relative path ("foo/bar").
    // Leave these alone: rewriting a bare fragment to '' would break the link,
    // and relative paths don't occur in the audited content.
    return original;
  }

  // Drop junk trailing fragments ("#/" and bare "#"); keep real anchors ("#faq").
  if (hash === '#/' || hash === '#') hash = '';

  // Add the canonical trailing slash to extension-less page paths.
  if (path && !path.endsWith('/')) {
    const lastSeg = path.split('/').pop() || '';
    const hasFileExt = /\.[a-zA-Z0-9]{1,8}$/.test(lastSeg);
    if (!hasFileExt) path += '/';
  }

  return path + query + hash;
}

/**
 * Rewrite every `href="…"` in a block of trusted build-time HTML so internal
 * links are canonical. Trusted WP content contains no quote chars inside href
 * values, so a scoped regex is sufficient (no DOM parser needed).
 */
export function normalizeInternalLinks(html: string): string {
  if (!html) return html;
  return html.replace(/href\s*=\s*(["'])(.*?)\1/gi, (match, quote, url) => {
    const fixed = normalizeUrl(url);
    return fixed === url ? match : `href=${quote}${fixed}${quote}`;
  });
}
