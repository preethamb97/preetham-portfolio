import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "../../atoms/Eyebrow/Eyebrow";

const HEALTH_TIMEOUT_MS = 12000;

function statusLabel(entry) {
  if (entry.loading) return "Checking…";
  if (entry.error === "cors_or_network") return "Unavailable";
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
    }))
  );

  const probe = useCallback(async () => {
    setResults((prev) =>
      prev.map((r) => ({
        ...r,
        loading: true,
        ok: false,
        httpStatus: null,
        error: null,
      }))
    );

    const next = await Promise.all(
      checks.map(async (c) => {
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS);
        try {
          const res = await fetch(c.url, {
            method: "GET",
            signal: controller.signal,
            cache: "no-store",
          });
          clearTimeout(t);
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
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
