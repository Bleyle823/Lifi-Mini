export function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  const envUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.VERCEL_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (typeof envUrl === "string" && envUrl.length > 0) {
    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
