import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import UserTitleCard from "../../atoms/UserTitleCard/UserTitleCard";
import UserBackStory from "../../atoms/UserBackStory/UserBackStory";
import UserJobCard from "../../atoms/UserJobCard/UserJobCard";
import jobDetails from "./jobDetails";
import personalProjects from "./personalProjects";
import PersonalProjectCard from "../../atoms/PersonalProjectCard/PersonalProjectCard";
import UserOtherProfileCards from "../../atoms/UserOtherProfileCards/UserOtherProfileCards";
import "./LandingPage.css";

export default function LandingPage() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const openSourceRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const elements = document.querySelectorAll(".hover-text");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(event.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(event.clientY - (rect.top + rect.height / 2), 2)
        );
        if (distance < 250) {
          element.classList.add("text-white");
        } else {
          element.classList.remove("text-white");
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row mt-16 gap-8 h-screen overflow-y-auto lg:overflow-hidden hide-scrollbar sm:h-max pb-60">
      <div className="w-full lg:w-1/2 pt-14 lg:pb-64 md: pb:64 sm:pb-8 lg:overflow-y-auto">
        <UserTitleCard />
        <UserOtherProfileCards />
      </div>

      <motion.div
        className="w-full lg:w-1/2 lg:h-screen overflow-y-auto pb-64 hide-scrollbar"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div ref={aboutRef} className="pt-6 hover-text">
          <UserBackStory />
        </div>
        <div ref={experienceRef} className="pt-16 hover-text pl-0 lg:pl-12">
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
        <div ref={openSourceRef} className="pt-16 hover-text">
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
