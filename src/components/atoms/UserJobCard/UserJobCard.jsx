import React from "react";
import { motion } from "framer-motion";

const UserJobCard = ({
  period,
  location,
  title,
  responsibilities,
  skills,
  variants,
  dotVariants,
}) => {
  return (
    <motion.article
      variants={variants}
      className="relative pb-16 pl-7 last:pb-0 sm:pl-8 md:pb-24 md:pl-12 lg:pb-[6rem]"
    >
      <motion.span
        variants={dotVariants}
        className="absolute left-0 top-8 z-[1] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-blue ring-[5px] ring-canvas sm:h-[10px] sm:w-[10px] sm:top-10 sm:ring-[6px]"
        aria-hidden
      />
      <div className="rounded-hc-lg border border-hairline bg-surface-1 p-5 sm:p-6 md:p-8">
        <p className="font-display text-caption font-medium text-ink-muted">{period}</p>
        <h3 className="font-display mt-3 text-[clamp(1.125rem,2.8vw,1.75rem)] font-semibold leading-[1.21] tracking-[-0.025em] text-ink sm:mt-4">
          {title}
        </h3>
        <p className="mt-2 text-body font-medium text-ink-muted">{location}</p>
        <ul className="mt-4 list-disc space-y-2 pl-4 text-[0.9375rem] font-medium leading-relaxed text-ink-muted marker:text-ink-subtle sm:mt-5 sm:pl-5 sm:text-body">
          {responsibilities.map((item, i) => (
            <li key={i} className="pl-0.5 sm:pl-1">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="rounded-hc-sm border border-hairline bg-surface-2 px-2.5 py-1.5 font-display text-[0.8125rem] font-medium text-ink-muted sm:px-3 sm:text-body-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default UserJobCard;
