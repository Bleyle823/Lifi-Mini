export function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  const PUBLIC_URL = process.env.NEXT_PUBLIC_APP_URL;
  if (typeof PUBLIC_URL === "string" && PUBLIC_URL.length > 0) {
    return PUBLIC_URL.startsWith("http") ? PUBLIC_URL : `https://${PUBLIC_URL}`;
  }
  const VERCEL_URL = process.env.VERCEL_URL;
  if (typeof VERCEL_URL === "string" && VERCEL_URL.length > 0) {
    return `https://${VERCEL_URL}`;
  }
  const VERCEL_PROJECT_PRODUCTION_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (
    typeof VERCEL_PROJECT_PRODUCTION_URL === "string" &&
    VERCEL_PROJECT_PRODUCTION_URL.length > 0
  ) {
    return `https://${VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
