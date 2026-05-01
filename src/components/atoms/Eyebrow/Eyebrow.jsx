import React from "react";

export default function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`font-display text-eyebrow uppercase tracking-[0.6px] text-ink-eyebrow ${className}`}
    >
      {children}
    </p>
  );
}
