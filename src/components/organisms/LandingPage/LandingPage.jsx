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
      const elements = document.querySelectorAll('.hover-text');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(event.clientX - (rect.left + rect.width / 2), 2) +
          Math.pow(event.clientY - (rect.top + rect.height / 2), 2)
        );
        if (distance < 250) { // 500px diameter
          element.classList.add('text-white');
        } else {
          element.classList.remove('text-white');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (section) => {
    const headerOffset = 40; // Adjust this value to your header height
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
    <div className="flex mt-16 gap-8">
      <div className="w-full md:w-1/3 pt-14 overflow-y-auto custom-scroll pb-64">
        <UserTitleCard />
        <div className="ml-0 md:ml-20 mt-72 hover-text">
          <UserOtherProfileCards />
        </div>
      </div>

      <motion.div
        className="w-full md:w-2/3 h-screen overflow-y-auto custom-scroll pb-64"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div ref={aboutRef} className="pt-6 hover-text">
          <UserBackStory />
        </div>
        <div ref={experienceRef} className="pt-16 hover-text">
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
