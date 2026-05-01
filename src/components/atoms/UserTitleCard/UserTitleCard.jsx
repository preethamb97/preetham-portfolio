import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Eyebrow from "../Eyebrow/Eyebrow";

const PROFILE_SRC = "/preetham-portfolio/preethamprofileimage.jpeg";
const FALLBACK_SRC = "/preetham-portfolio/default-profile.svg";
const GITHUB_USERNAME = "preethamb97";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px", amount: 0.15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function UserTitleCard() {
  const [avatarSrc, setAvatarSrc] = useState(PROFILE_SRC);

  function handleAvatarError() {
    setAvatarSrc((current) =>
      current === FALLBACK_SRC ? current : FALLBACK_SRC
    );
  }

  return (
    <div className="page-gutter flex w-full flex-col items-center text-center">
      <motion.div {...fadeUp}>
        <Eyebrow className="mb-5 sm:mb-6">Portfolio · Full-stack engineering</Eyebrow>
      </motion.div>
      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.04 }}>
        <div className="relative mx-auto mb-7 w-fit sm:mb-8">
          <img
            className="mx-auto block h-[7.5rem] w-[7.5rem] rounded-full border border-hairline object-cover sm:h-36 sm:w-36"
            src={avatarSrc}
            alt="Preetham B"
            onError={handleAvatarError}
            loading="eager"
            decoding="async"
          />
          <span
            className="pointer-events-none absolute right-0 top-0 z-[11] flex h-9 w-9 -translate-y-0.5 translate-x-0.5 items-center justify-center rounded-full bg-canvas ring-[3px] ring-canvas drop-shadow-md sm:h-10 sm:w-10 sm:-translate-y-1 sm:translate-x-1"
            role="img"
            aria-label="Verified profile"
          >
            <MdVerified
              className="h-[1.65rem] w-[1.65rem] text-[#0095F6] sm:h-[1.85rem] sm:w-[1.85rem]"
              aria-hidden
            />
          </span>
        </div>
      </motion.div>
      <motion.h1
        className="font-display max-w-[min(100%,42rem)] text-display-lg font-bold text-ink"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.08 }}
      >
        Preetham B
      </motion.h1>
      <motion.p
        className="mt-4 max-w-2xl px-1 text-headline font-semibold text-ink sm:mt-5"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.12 }}
      >
        Senior full-stack engineer · Bengaluru, India
      </motion.p>
      <motion.div
        className="mt-5 flex flex-wrap items-center justify-center gap-2 px-2 sm:mt-6"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.14 }}
      >
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[36px] items-center gap-2 rounded-pill border border-hairline bg-surface-1 px-3 py-1.5 font-display text-caption font-semibold text-ink-muted shadow-sm outline-none transition-[background-color,border-color,color,transform] hover:border-hairline hover:bg-surface-2 hover:text-ink focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.99]"
          aria-label={`@${GITHUB_USERNAME} on GitHub, 2k+ followers`}
        >
          <SiGithub className="h-4 w-4 shrink-0 text-ink sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          <span className="whitespace-nowrap tabular-nums">2k+ followers</span>
        </a>
      </motion.div>
      <motion.p
        className="mt-5 max-w-[min(100%,40rem)] px-1 text-body-lg font-medium text-ink-muted sm:mt-6"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.18 }}
      >
        I ship production web apps, micro-frontends, and APIs teammates rely on—from discovery through
        launch, with clear gains in performance, reliability, and delivery speed.
      </motion.p>
    </div>
  );
}
