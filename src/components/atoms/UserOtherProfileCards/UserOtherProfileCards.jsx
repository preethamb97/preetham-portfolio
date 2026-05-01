import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaHackerrank,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

const profileLinks = [
  {
    name: "GitHub",
    url: "https://github.com/preethamb97",
    icon: FaGithub,
    variant: "primary",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Preetham_b_97",
    icon: FaCode,
    variant: "secondary",
  },
  {
    name: "HackerEarth",
    url: "https://www.hackerearth.com/@preethamb97",
    icon: FaHackerrank,
    variant: "secondary",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/preetham_acharya__",
    icon: FaInstagram,
    variant: "secondary",
  },
  {
    name: "Email",
    url: "mailto:preethamb97@gmail.com",
    icon: FaEnvelope,
    tooltip: "preethamb97@gmail.com",
    variant: "secondary",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 26 },
  },
};

export default function UserOtherProfileCards() {
  return (
    <motion.div
      className="page-gutter mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-12 sm:gap-3 md:gap-3.5"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px", amount: 0.2 }}
    >
      {profileLinks.map((link) => {
        const Icon = link.icon;
        const primary =
          "border border-transparent bg-inverse-canvas text-inverse-ink hover:opacity-90 active:scale-[0.98]";
        const secondary =
          "border border-hairline bg-surface-2 text-ink hover:border-hairline-soft hover:bg-surface-3 active:scale-[0.98]";
        return (
          <motion.a
            key={link.name}
            variants={itemVariants}
            href={link.url}
            title={link.tooltip || link.name}
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-hc-md px-4 py-2.5 font-display text-button transition-[opacity,transform] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:px-[18px] sm:py-[10px] ${
              link.variant === "primary" ? primary : secondary
            }`}
            target={
              link.url.startsWith("mailto") || link.url.startsWith("tel")
                ? undefined
                : "_blank"
            }
            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <Icon className="text-[15px] shrink-0" aria-hidden />
            <span>{link.name}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
}
