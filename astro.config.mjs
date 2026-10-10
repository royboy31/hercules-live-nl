// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
// critters removed — Astro's auto inlineStylesheets handles critical CSS sizing
// import critters from 'astro-critters';
import sitemap from '@astrojs/sitemap';

// Fetch product and post dates at build time for sitemap lastmod
const WORKER_URL = 'https://hercules-product-sync-nl-prod.gilles-86d.workers.dev';
const buildDate = new Date().toISOString();

/** @type {Map<string, string>} slug → ISO date */
const lastmodMap = new Map();

try {
  const [productsRes, postsRes] = await Promise.all([
    fetch(`${WORKER_URL}/products`).catch(() => null),
    fetch(`${WORKER_URL}/posts`).catch(() => null),
  ]);

  if (productsRes?.ok) {
    const products = await productsRes.json();
    /** @type {Map<string, string>} */
    const categoryLastmod = new Map();

    for (const p of products) {
      const mod = p.date_modified || buildDate;
      lastmodMap.set(`/products/${p.slug}/`, mod);
      if (p.categories) {
        for (const catSlug of p.categories) {
          const existing = categoryLastmod.get(catSlug);
          if (!existing || mod > existing) {
            categoryLastmod.set(catSlug, mod);
          }
        }
      }
    }
    for (const [catSlug, mod] of categoryLastmod) {
      lastmodMap.set(`/collections/${catSlug}/`, mod);
    }
  }

  if (postsRes?.ok) {
    const posts = await postsRes.json();
    for (const p of posts) {
      lastmodMap.set(`/blogs/news/${p.slug}/`, p.modified || p.date || buildDate);
    }
  }
} catch (e) {
  console.warn('Sitemap lastmod: failed to fetch dates, using build date as fallback', e);
}

// The newest date across every product, category and post. Used for the pages that have no
// date of their own but list content that does, so they still move when the catalogue moves.
const newestContentDate = [...lastmodMap.values()].reduce(
  (newest, d) => (!newest || Date.parse(d) > Date.parse(newest) ? d : newest),
  /** @type {string | undefined} */ (undefined)
);

// Index pages: no date of their own, but they change when their content does.
const CONTENT_INDEX_PATHS = new Set(['/', '/winkel/', '/blogs/news/']);

// Hercules NL Configuration
// https://astro.build/config
export default defineConfig({
  site: 'https://hercules-merchandise.nl',
  trailingSlash: 'always',
  build: {
    // 'auto' inlines small CSS, links larger bundles externally
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize bundle splitting
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // React core - cached separately
            'react-vendor': ['react', 'react-dom'],
            // Interactive components - loaded on demand
            'configurator': ['./src/components/ProductConfigurator.tsx'],
          }
        },
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false
        }
      },
      // Target modern browsers for smaller bundles
      target: 'es2020',
      // Inline small assets
      assetsInlineLimit: 4096,
      // Minimize CSS
      cssMinify: true,
      // Better minification
      minify: 'esbuild'
    }
  },

  integrations: [
    react(),
    sitemap({
      // Filter out pages that shouldn't be in sitemap
      filter: (page) => {
        // Exclude cart, checkout, account, search pages
        const excludePatterns = [
          '/cart',
          '/checkout',
          '/winkelwagen',
          '/afrekenen',
          '/mijn-account',
          '/offerte-generator',
          '/search',
          '/api/',
          '/verlanglijst',
          '/collections/niet-gecategoriseerd',
          '/collections/uncategorized',
          '/collections/nationale-ploeg',
          '/design-by-perelweb',
        ];
        return !excludePatterns.some(pattern => page.includes(pattern));
      },
      // Change frequency hints for crawlers
      changefreq: 'weekly',
      priority: 0.7,
      // Custom serialization for sitemap entries
      serialize: (item) => {
        const path = new URL(item.url).pathname;

        // NEVER fall back to the build date. It used to, which gave the homepage and the nine
        // static pages a new lastmod on every deploy even when nothing about them had changed —
        // Google learns to distrust the whole sitemap's lastmod when that happens. A page with
        // no real date is better off with no lastmod at all.
        const lastmod = lastmodMap.get(path)
          || (CONTENT_INDEX_PATHS.has(path) ? newestContentDate : undefined);
        const entry = lastmod ? { ...item, lastmod } : { ...item };

        // Higher priority for homepage
        if (item.url === 'https://hercules-merchandise.nl/') {
          return { ...entry, changefreq: 'daily', priority: 1.0 };
        }
        // Higher priority for product pages
        if (item.url.includes('/products/')) {
          return { ...entry, changefreq: 'weekly', priority: 0.9 };
        }
        // Higher priority for category pages
        if (item.url.includes('/collections/')) {
          return { ...entry, changefreq: 'weekly', priority: 0.8 };
        }
        // Higher priority for blog posts
        if (item.url.includes('/blogs/') && item.url !== 'https://hercules-merchandise.nl/blogs/') {
          return { ...entry, changefreq: 'monthly', priority: 0.6 };
        }
        return entry;
      },
      // i18n support - Dutch (Belgium)
      i18n: {
        defaultLocale: 'nl',
        locales: {
          nl: 'nl-BE',
        },
      },
    })
  ],

  redirects: {
    // SEO: redirect standard sitemap path to actual sitemap
    '/sitemap.xml': '/sitemap-index.xml',
  }
});
