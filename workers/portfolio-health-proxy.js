/**
 * Optional Cloudflare Worker: allows reading API /health from a static site when the API
 * rejects browser Origin headers. Deploy separately and set VITE_HEALTH_GATEWAY to the
 * worker URL (no trailing slash), e.g. https://portfolio-health.xx.workers.dev
 */
const ALLOWED = new Set([
  "https://api.nammarental.com/health",
  "https://api.torquebill.com/api/health",
]);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    const url = new URL(request.url);
    const target = url.searchParams.get("target");
    if (!target || !ALLOWED.has(target)) {
      return new Response(
        JSON.stringify({ error: "invalid or missing target" }),
        {
          status: 400,
          headers: { ...corsHeaders, "content-type": "application/json" },
        }
      );
    }
    const ac = new AbortController();
    const timeoutId = setTimeout(() => ac.abort(), 10_000);
    try {
      const r = await fetch(target, {
        headers: {
          Accept: "application/json",
          "User-Agent": "portfolio-health-gateway/1",
        },
        signal: ac.signal,
      });
      const bodyText = await r.text().catch(() => "");
      return new Response(
        JSON.stringify({
          upstreamStatus: r.status,
          upstreamOk: r.ok,
          contentType: r.headers.get("content-type") ?? "",
          bodyText: bodyText.slice(0, 8192),
        }),
        { headers: { ...corsHeaders, "content-type": "application/json" } }
      );
    } catch {
      return new Response(
        JSON.stringify({
          upstreamStatus: null,
          upstreamOk: false,
          contentType: "",
          bodyText: "",
          gatewayError: "upstream_fetch_failed",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "content-type": "application/json" },
        }
      );
    } finally {
      clearTimeout(timeoutId);
    }
  },
};
