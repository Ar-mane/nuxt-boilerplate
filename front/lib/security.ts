export const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'accelerometer=(), geolocation=(self), fullscreen=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), display-capture=(self)',
  'X-Powered-By': 'Ar-mane'
};
