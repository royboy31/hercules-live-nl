// Which form-handler worker a Pages Function talks to, decided per request host.
//
// The same source tree is built for both lanes, so the target cannot be a build-time
// constant: the staging Pages project and the production one ship identical Functions.
// Mirrors functions/product-image/[[path]].ts, but fails the other way round — only a
// known production host reaches the production worker. Anything else (the staging host,
// a pages.dev preview, local dev) keeps the staging worker, so an unrecognised host can
// never send live mail or write into the production R2 bucket.

const STAGING_FORM_HANDLER = 'https://hercules-form-handler-nl.gilles-86d.workers.dev';
const PRODUCTION_FORM_HANDLER = 'https://hercules-form-handler-nl-prod.gilles-86d.workers.dev';

const PRODUCTION_HOSTS = new Set([
  'hercules-merchandise.nl',
  'www.hercules-merchandise.nl', // 301s to the apex at the edge, but keep it correct here too
  'hercules-nl.pages.dev',
]);

export function formHandlerUrl(request: Request): string {
  const { hostname } = new URL(request.url);
  return PRODUCTION_HOSTS.has(hostname) ? PRODUCTION_FORM_HANDLER : STAGING_FORM_HANDLER;
}
