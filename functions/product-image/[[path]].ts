// Cloudflare Pages Function - /product-image/* on the bare pages.dev hosts
//
// On the real domain the edge router answers /product-image/* before Pages is reached.
// A pages.dev preview has no edge router in front, so proxy to the NL product-sync worker
// the same way: /product-image/{slug}[/{index}][?size=thumb] → /image/{slug}[/{index}][?size=thumb]

const STAGING_WORKER_URL = 'https://hercules-product-sync-nl.gilles-86d.workers.dev';
const PRODUCTION_WORKER_URL = 'https://hercules-product-sync-nl-prod.gilles-86d.workers.dev';

export const onRequestGet: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const workerUrl = url.hostname.includes('hercules-nl-staging') ? STAGING_WORKER_URL : PRODUCTION_WORKER_URL;
  const imagePath = url.pathname.replace('/product-image/', '/image/');

  const response = await fetch(`${workerUrl}${imagePath}${url.search}`);
  return new Response(response.body, response);
};
