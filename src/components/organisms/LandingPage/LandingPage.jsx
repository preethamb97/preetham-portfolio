import React, { useRef } from "react";
import { motion } from "framer-motion";
import UserTitleCard from "../../atoms/UserTitleCard/UserTitleCard";
import UserBackStory from "../../atoms/UserBackStory/UserBackStory";
import UserJobCard from "../../atoms/UserJobCard/UserJobCard";
import jobDetails from "./jobDetails";
import "./LandingPage.css";
import personalProjects from "./personalProjects";
import PersonalProjectCard from "../../atoms/PersonalProjectCard/PersonalProjectCard";
import UserOtherProfileCards from "../../atoms/UserOtherProfileCards/UserOtherProfileCards";
import ProfileReferenceCard from "../../atoms/ProfileReferenceCard/ProfileReferenceCard";

export default function LandingPage() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const openSourceRef = useRef(null);

  const scrollToSection = (section) => {
    const headerOffset = 50; // Adjust this value to your header height
    const element =
      section === "about"
        ? aboutRef.current
        : section === "experience"
        ? experienceRef.current
        : openSourceRef.current;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex mt-28"> {/* Added top margin */}
      <div className="ml-36 pt-16">
        <UserTitleCard />
        <ProfileReferenceCard scrollToSection={scrollToSection} />
        <motion.div
          className="absolute bottom-20"
          drag
          dragTransition={{
            power: 0,
            modifyTarget: (target) => Math.round(target / 50) * 50,
          }}
        >
          <UserOtherProfileCards />
        </motion.div>
      </div>

      <motion.div
        drag
        dragTransition={{
          power: 0,
          modifyTarget: (target) => Math.round(target / 50) * 50,
        }}
        className="ml-64 h-screen overflow-y-auto custom-scroll pb-64"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div ref={aboutRef} className="pt-16">
          <UserBackStory />
        </div>
        <div ref={experienceRef} className="pt-16">
          {jobDetails.map((job, index) => (
            <UserJobCard
              key={index}
              period={job.period}
              location={job.location}
              title={job.title}
              responsibilities={job.responsibilities}
              skills={job.skills}
            />
          ))}
        </div>
        <div ref={openSourceRef} className="pt-16">
          {personalProjects.map((project, index) => (
            <PersonalProjectCard
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
