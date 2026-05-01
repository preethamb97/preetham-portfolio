import { motion } from "framer-motion";
import React from "react";

const block = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-56px", amount: 0.12 },
  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
};

export default function UserBackStory() {
  return (
    <div className="page-gutter">
      <motion.p className="text-[0.9375rem] font-medium leading-[1.62] text-ink-muted sm:text-body" {...block}>
        I started building software in earnest around 2014—curious about how solid systems support
        great user experiences—and earned a bachelor&apos;s degree in Computer Science from SDIT,
        Mangalore.
      </motion.p>
      <motion.p
        className="mt-6 text-[0.9375rem] font-medium leading-[1.62] text-ink-muted sm:mt-8 sm:text-body"
        {...block}
        transition={{ ...block.transition, delay: 0.05 }}
      >
        My career began in game technology at Juego Studios: multiplayer backends, real-time data, and
        resilient Node.js services, including serverless game logic on titles such as Kalutai and Earth
        Arena.
      </motion.p>
      <motion.p
        className="mt-6 text-[0.9375rem] font-medium leading-[1.62] text-ink-muted sm:mt-8 sm:text-body"
        {...block}
        transition={{ ...block.transition, delay: 0.1 }}
      >
        Today I focus on web platforms—leading full-stack delivery at Persistent Systems with React,
        Next.js, TypeScript, and AWS—and previously scaling micro-frontends and mentoring engineers at
        Capillary Technologies.
      </motion.p>
      <motion.p
        className="mt-6 text-[0.9375rem] font-medium leading-[1.62] text-ink-subtle sm:mt-8 sm:text-body"
        {...block}
        transition={{ ...block.transition, delay: 0.15 }}
      >
        Outside of work I contribute to open source when I can, practice competitive programming, and
        unwind with football, CS:GO, and travel.
      </motion.p>
    </div>
  );
}
