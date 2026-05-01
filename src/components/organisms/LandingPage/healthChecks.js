/**
 * Health endpoints to monitor — add any number of `{ id, label, url }` entries.
 * Browser fetch may be blocked by CORS; unreachable / opaque failures show as unavailable.
 */
const healthChecks = [
  {
    id: "nammarental",
    label: "Namma Rental API",
    url: "https://api.nammarental.com/health",
  },
];

export default healthChecks;
