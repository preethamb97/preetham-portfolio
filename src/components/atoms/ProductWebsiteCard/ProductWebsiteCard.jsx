import React from "react";
import { motion } from "framer-motion";

const LINK_BTN =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-hc-md bg-white px-[18px] py-[10px] font-display text-button text-neutral-950 shadow-sm transition-[opacity,transform] hover:opacity-90 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:w-auto";

const REPO_BTN = {
  terraform:
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-hc-md border border-white/40 bg-white/10 px-[18px] py-[10px] font-display text-button text-white shadow-sm transition-[background-color,opacity,transform] hover:bg-white/15 hover:opacity-100 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto",
  waypoint:
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-hc-md border border-neutral-950/20 bg-black/[0.06] px-[18px] py-[10px] font-display text-button text-neutral-950 shadow-sm transition-[background-color,opacity,transform] hover:bg-black/10 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:w-auto",
  vault:
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-hc-md border border-neutral-950/22 bg-black/[0.08] px-[18px] py-[10px] font-display text-button text-neutral-950 shadow-sm transition-[background-color,opacity,transform] hover:bg-black/12 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:w-auto",
  nomad:
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-hc-md border border-white/40 bg-white/10 px-[18px] py-[10px] font-display text-button text-white shadow-sm transition-[background-color,opacity,transform] hover:bg-white/15 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto",
};

const ACCENTS = {
  terraform: {
    wrap: "border border-white/15 bg-product-terraform text-white",
    pill: "bg-black/25 text-white",
  },
  waypoint: {
    wrap: "border border-black/10 bg-product-waypoint text-neutral-950",
    pill: "bg-black/10 text-neutral-950",
  },
  vault: {
    wrap: "border border-black/10 bg-product-vault text-neutral-950",
    pill: "bg-black/15 text-neutral-950",
  },
  nomad: {
    wrap: "border border-white/15 bg-product-nomad text-white",
    pill: "bg-black/20 text-white",
  },
};

export default function ProductWebsiteCard({
  title,
  pill,
  description,
  url,
  githubUrl,
  accent,
  index,
}) {
  const palette = ACCENTS[accent] ?? ACCENTS.terraform;
  const repoBtnClass = REPO_BTN[accent] ?? REPO_BTN.terraform;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px", amount: 0.12 }}
      transition={{
        type: "spring",
        stiffness: 330,
        damping: 28,
        mass: 0.88,
        delay: index * 0.07,
      }}
      className={`flex h-full flex-col rounded-hc-lg p-5 sm:p-6 md:p-8 ${palette.wrap}`}
    >
      <span
        className={`inline-flex w-fit rounded-pill px-[10px] py-1 font-display text-caption font-semibold ${palette.pill}`}
      >
        {pill}
      </span>
      <h3 className="font-display mt-4 text-card-title text-current sm:mt-5">{title}</h3>
      <p className="mt-3 flex-1 text-[0.9375rem] font-medium leading-[1.62] opacity-95 sm:mt-4 sm:text-body">
        {description}
      </p>
      <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6">
        <div>
          <p className="mb-2 font-display text-caption font-semibold text-current opacity-80">
            Live site
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className={LINK_BTN}>
            Open website
          </a>
        </div>
        {githubUrl ? (
          <div>
            <p className="mb-2 font-display text-caption font-semibold text-current opacity-80">
              GitHub
            </p>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={repoBtnClass}
            >
              View repository
            </a>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
