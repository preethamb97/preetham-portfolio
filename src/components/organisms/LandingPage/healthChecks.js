/**
 * Canonical API health URLs (shown in UI). Actual fetch URL is chosen by ServiceHealth:
 * - Local dev: same-origin `/preetham-portfolio/__health/{id}` (Vite proxies to APIs)
 * - Production: direct fetch, or optional `VITE_HEALTH_GATEWAY` (see workers/portfolio-health-proxy.js)
 */
const healthChecks = [
  {
    id: "nammarental",
    label: "Namma Rental API",
    url: "https://api.nammarental.com/health",
  },
  {
    id: "torquebill",
    label: "Torquebill API",
    url: "https://api.torquebill.com/api/health",
  },
];

export default healthChecks;
