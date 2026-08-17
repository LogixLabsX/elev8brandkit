import { next } from '@vercel/edge';

export default function middleware(req) {
  return next({
    headers: {
      'Referrer-Policy': 'origin-when-cross-origin',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-DNS-Prefetch-Control': 'on',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      // The kit names compounds and prices. A search-indexed page in this
      // category is exactly the artifact ad-platform and regulatory reviewers
      // surface — creators reach it by link, so nothing is lost by hiding it.
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
