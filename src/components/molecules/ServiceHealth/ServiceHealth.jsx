import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../../atoms/Eyebrow/Eyebrow";

const HEALTH_TIMEOUT_MS = 12000;

const HEALTH_GATEWAY = import.meta.env.VITE_HEALTH_GATEWAY?.trim() || "";

function probeUrl(check) {
  if (HEALTH_GATEWAY) {
    const base = HEALTH_GATEWAY.replace(/\/?$/, "");
    return `${base}?target=${encodeURIComponent(check.url)}`;
  }
  if (import.meta.env.DEV) {
    return `${import.meta.env.BASE_URL}__health/${check.id}`;
  }
  return check.url;
}

function summarizeHealthBody(bodyText) {
  if (!bodyText?.trim()) return null;
  const trimmed = bodyText.trim().slice(0, 4096);
  try {
    const j = JSON.parse(trimmed);
    if (typeof j !== "object" || j === null) return String(j);
    const keys = [
      "status",
      "state",
      "healthy",
      "ok",
      "success",
      "message",
      "uptime",
      "version",
      "service",
      "timestamp",
    ];
    const parts = [];
    for (const k of keys) {
      if (!(k in j)) continue;
      const v = j[k];
      if (v === null || v === undefined || v === "") continue;
      parts.push(`${k}: ${typeof v === "object" ? JSON.stringify(v) : String(v)}`);
    }
    if (parts.length) return parts.slice(0, 6).join(" · ");
    const json = JSON.stringify(j);
    return json.length <= 220 ? json : `${json.slice(0, 220)}…`;
  } catch {
    return null;
  }
}

function statusLabel(entry) {
  if (entry.loading) return "Checking…";
  if (entry.error === "cors_or_network") return "Unavailable";
  if (entry.error === "upstream_fetch_failed") return "Unreachable";
  if (entry.ok) return "Operational";
  return "Down";
}

export default function ServiceHealth({ checks }) {
  const [results, setResults] = useState(() =>
    checks.map((c) => ({
      id: c.id,
      label: c.label,
      url: c.url,
      loading: true,
      ok: false,
      httpStatus: null,
      error: null,
      checkedAt: null,
      apiSummary: null,
    }))
  );

  const probe = useCallback(async () => {
    const viaGateway = Boolean(HEALTH_GATEWAY);

    setResults((prev) =>
      prev.map((r) => ({
        ...r,
        loading: true,
        ok: false,
        httpStatus: null,
        error: null,
        apiSummary: null,
      }))
    );

    const next = await Promise.all(
      checks.map(async (c) => {
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS);
        try {
          const res = await fetch(probeUrl(c), {
            method: "GET",
            signal: controller.signal,
            cache: "no-store",
          });
          clearTimeout(t);
          const rawBody = await res.text().catch(() => "");

          if (viaGateway) {
            let payload;
            try {
              payload = JSON.parse(rawBody);
            } catch {
              return {
                id: c.id,
                label: c.label,
                url: c.url,
                loading: false,
                ok: false,
                httpStatus: res.status,
                error: res.ok ? "http" : "http",
                checkedAt: Date.now(),
                apiSummary: null,
              };
            }

            if (payload.gatewayError === "upstream_fetch_failed") {
              return {
                id: c.id,
                label: c.label,
                url: c.url,
                loading: false,
                ok: false,
                httpStatus:
                  typeof payload.upstreamStatus === "number"
                    ? payload.upstreamStatus
                    : null,
                error: "upstream_fetch_failed",
                checkedAt: Date.now(),
                apiSummary: null,
              };
            }

            const httpStatus =
              typeof payload.upstreamStatus === "number"
                ? payload.upstreamStatus
                : null;
            const ok = Boolean(payload.upstreamOk);
            const apiSummary = summarizeHealthBody(payload.bodyText ?? "");
            return {
              id: c.id,
              label: c.label,
              url: c.url,
              loading: false,
              ok,
              httpStatus,
              error: ok ? null : "http",
              checkedAt: Date.now(),
              apiSummary,
            };
          }

          const ok = res.ok;
          return {
            id: c.id,
            label: c.label,
            url: c.url,
            loading: false,
            ok,
            httpStatus: res.status,
            error: ok ? null : "http",
            checkedAt: Date.now(),
            apiSummary: summarizeHealthBody(rawBody),
          };
        } catch (e) {
          clearTimeout(t);
          const isAbort = e?.name === "AbortError";
          return {
            id: c.id,
            label: c.label,
            url: c.url,
            loading: false,
            ok: false,
            httpStatus: null,
            error: isAbort ? "timeout" : "cors_or_network",
            checkedAt: Date.now(),
            apiSummary: null,
          };
        }
      })
    );

    setResults(next);
  }, [checks]);

  useEffect(() => {
    probe();
  }, [probe]);

  return (
    <div className="page-gutter w-full">
      <Eyebrow className="mb-3">Reliability</Eyebrow>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <h2 className="font-display text-display-md font-semibold text-ink">
          Systems status
        </h2>
        <button
          type="button"
          onClick={() => probe()}
          className="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center rounded-hc-md bg-inverse-canvas px-[18px] py-[10px] font-display text-button text-inverse-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:w-auto"
        >
          Refresh checks
        </button>
      </div>

      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {results.map((row, index) => (
          <motion.li
            key={row.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px", amount: 0.1 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 28,
              delay: index * 0.05,
            }}
            className="rounded-hc-lg border border-hairline bg-surface-1 p-5 sm:p-6"
          >
            <p className="font-display text-card-title text-ink">{row.label}</p>
            <p className="mt-2 break-words font-display text-[0.8125rem] font-medium text-ink-subtle sm:text-body-sm">
              {row.url}
            </p>
            <p
              className={`mt-5 font-display text-[0.9375rem] font-medium sm:mt-6 sm:text-body ${
                row.loading
                  ? "text-ink-subtle"
                  : row.ok
                    ? "text-ink"
                    : "text-ink-muted"
              }`}
            >
              {statusLabel(row)}
              {!row.loading && row.httpStatus != null && (
                <span className="ml-2 font-display text-[0.8125rem] text-ink-subtle sm:text-body-sm">
                  HTTP {row.httpStatus}
                </span>
              )}
              {!row.loading && row.error === "timeout" && (
                <span className="ml-2 font-display text-[0.8125rem] text-ink-subtle sm:text-body-sm">
                  Timed out
                </span>
              )}
            </p>
            {row.apiSummary && (
              <p className="mt-3 break-words font-mono text-[0.8125rem] leading-relaxed text-ink-subtle sm:text-body-sm">
                {row.apiSummary}
              </p>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
