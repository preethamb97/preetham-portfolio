import React from "react";
import { motion } from "framer-motion";

const PersonalProjectCard = ({
  title,
  description,
  skills,
  githubLink,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px", amount: 0.12 }}
      transition={{
        type: "spring",
        stiffness: 340,
        damping: 30,
        mass: 0.85,
        delay: index * 0.07,
      }}
      className="flex h-full flex-col rounded-hc-lg border border-hairline bg-surface-1 p-5 sm:p-6 md:p-8"
    >
      <h3 className="font-display text-card-title text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-[0.9375rem] font-medium leading-[1.71] text-ink-muted sm:mt-4 sm:text-body-sm">
        {description}
      </p>
      <a
        href={githubLink}
        className="mt-5 inline-flex min-h-[44px] items-center text-body-sm font-semibold text-accent-blue hover:underline visited:text-semantic-visited focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:mt-6"
        target="_blank"
        rel="noopener noreferrer"
      >
        View repository
      </a>
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
    </motion.article>
  );
};

export default PersonalProjectCard;
