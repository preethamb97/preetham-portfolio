import React from "react";
import { motion } from "framer-motion";
import SiteHeader from "../../molecules/SiteHeader/SiteHeader";
import UserTitleCard from "../../atoms/UserTitleCard/UserTitleCard";
import UserBackStory from "../../atoms/UserBackStory/UserBackStory";
import UserJobCard from "../../atoms/UserJobCard/UserJobCard";
import jobDetails from "./jobDetails";
import personalProjects from "./personalProjects";
import sitesBuilt from "./sitesBuilt";
import PersonalProjectCard from "../../atoms/PersonalProjectCard/PersonalProjectCard";
import ProductWebsiteCard from "../../atoms/ProductWebsiteCard/ProductWebsiteCard";
import UserOtherProfileCards from "../../atoms/UserOtherProfileCards/UserOtherProfileCards";
import ServiceHealth from "../../molecules/ServiceHealth/ServiceHealth";
import healthChecks from "./healthChecks";
import Eyebrow from "../../atoms/Eyebrow/Eyebrow";
import "./LandingPage.css";

const TIMELINE_VIEWPORT = { once: true, margin: "-8%", amount: 0.12 };

const timelineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

const timelineItem = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
      mass: 0.85,
    },
  },
};

const timelineDot = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 520,
      damping: 18,
    },
  },
};

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px", amount: 0.12 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[100dvh] pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <motion.section
          id="hero"
          className="section-y border-b border-hairline-soft bg-canvas"
          aria-label="Introduction"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <UserTitleCard />
          <UserOtherProfileCards />
        </motion.section>

        <motion.section
          id="about"
          className="section-y border-b border-hairline-soft bg-surface-1"
          aria-label="About"
          {...sectionReveal}
        >
          <div className="page-gutter">
            <Eyebrow className="mb-3">Background</Eyebrow>
            <h2 className="font-display text-display-md font-semibold text-ink">
              How I work, and where I started
            </h2>
            <p className="mt-4 max-w-2xl text-body-lg font-medium text-ink-muted sm:mt-5">
              A concise biography: shipping useful software, mentoring engineers, and staying calm when
              deadlines tighten.
            </p>
          </div>
          <div className="mt-10 sm:mt-12 md:mt-14">
            <UserBackStory />
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="section-y border-b border-hairline-soft bg-canvas"
          aria-label="Experience"
          {...sectionReveal}
        >
          <div className="page-gutter">
            <Eyebrow className="mb-3">Experience</Eyebrow>
            <h2 className="font-display text-display-md font-semibold text-ink">Career timeline</h2>
            <p className="mt-4 max-w-2xl text-body font-medium text-ink-muted sm:mt-5">
              Roles, scope, and outcomes—most recent first.
            </p>
          </div>
          <div className="relative mx-auto mt-10 w-full max-w-content px-4 sm:mt-14 sm:px-6 lg:px-8 xl:px-10">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-[15px] top-8 z-0 w-px origin-top bg-hairline sm:left-[17px] md:top-10 md:left-[23px]"
              style={{ height: "calc(100% - 2rem)" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={TIMELINE_VIEWPORT}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="relative z-[1] ml-3 sm:ml-4 md:ml-6"
              variants={timelineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={TIMELINE_VIEWPORT}
            >
              {jobDetails.map((job) => (
                <UserJobCard
                  key={`${job.title}-${job.period}`}
                  period={job.period}
                  location={job.location}
                  title={job.title}
                  responsibilities={job.responsibilities}
                  skills={job.skills}
                  variants={timelineItem}
                  dotVariants={timelineDot}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="sites"
          className="section-y border-b border-hairline-soft bg-surface-1"
          aria-label="Websites shipped"
          {...sectionReveal}
        >
          <div className="page-gutter">
            <Eyebrow className="mb-3">Shipped products</Eyebrow>
            <h2 className="font-display text-display-md font-semibold text-ink">
              Websites I built and launched
            </h2>
            <p className="mt-4 max-w-2xl text-body font-medium text-ink-muted sm:mt-5">
              Product sites I ship end to end—rentals, billing, TrackItAll apps, and labeling
              tools—with live demos and public repos where code is open.
            </p>
            <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
              {sitesBuilt.map((site, index) => (
                <ProductWebsiteCard
                  key={site.id}
                  title={site.title}
                  pill={site.pill}
                  description={site.description}
                  url={site.url}
                  githubUrl={site.githubUrl}
                  accent={site.accent}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-y border-b border-hairline-soft bg-canvas"
          aria-label="Open source"
          {...sectionReveal}
        >
          <div className="page-gutter">
            <Eyebrow className="mb-3">Open source</Eyebrow>
            <h2 className="font-display text-display-md font-semibold text-ink">Public repositories</h2>
            <p className="mt-4 max-w-2xl text-body font-medium text-ink-muted sm:mt-5">
              Infrastructure experiments and tooling published for anyone to fork or learn from.
            </p>
            <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
              {personalProjects.map((project, index) => (
                <PersonalProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  skills={project.skills}
                  githubLink={project.githubLink}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.footer
          className="footer-y border-b border-hairline-soft bg-canvas"
          {...sectionReveal}
          transition={{ ...sectionReveal.transition, duration: 0.45 }}
        >
          <div className="page-gutter grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
            <div>
              <p className="font-display text-caption font-semibold uppercase tracking-[0.08em] text-ink-eyebrow">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5 font-display text-body-sm font-medium leading-relaxed sm:mt-5 sm:space-y-3">
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="mailto:preethamb97@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="https://github.com/preethamb97"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="https://leetcode.com/u/Preetham_b_97"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-caption font-semibold uppercase tracking-[0.08em] text-ink-eyebrow">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5 font-display text-body-sm font-medium leading-relaxed sm:mt-5 sm:space-y-3">
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="#sites"
                  >
                    Websites
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="#projects"
                  >
                    Open source
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex min-h-[44px] items-center text-accent-blue hover:underline visited:text-semantic-visited"
                    href="#systems"
                  >
                    Systems
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-display text-caption font-semibold uppercase tracking-[0.08em] text-ink-eyebrow">
                About this site
              </p>
              <p className="mt-4 font-display text-body-sm font-medium leading-[1.71] text-ink-muted sm:mt-5">
                Senior full-stack engineer in Bengaluru. I collaborate with product and platform teams to
                ship resilient web products, tighten delivery, and mentor engineers taking their first apps
                to production.
              </p>
            </div>
          </div>
        </motion.footer>

        <motion.section
          id="systems"
          className="bg-surface-1 pt-12 sm:pt-14 md:pt-20 lg:pt-24 lg:pb-8 pb-[calc(5rem+env(safe-area-inset-bottom,0px))]"
          aria-label="Systems status"
          {...sectionReveal}
        >
          <ServiceHealth checks={healthChecks} />
          <p className="page-gutter mx-auto mt-12 text-center font-display text-caption font-medium text-ink-subtle sm:mt-14 md:mt-16">
            © {new Date().getFullYear()} Preetham B. All rights reserved.
          </p>
        </motion.section>
      </main>
    </>
  );
}
