import React from "react";
import { motion } from "framer-motion";
import UserTitleCard from "../../atoms/UserTitleCard/UserTitleCard";
import UserBackStory from "../../atoms/UserTitleCard/UserBackStory/UserBackStory";
import UserJobCard from "../../atoms/UserTitleCard/UserJobCard/UserJobCard";
import jobDetails from "./jobDetails";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="flex mt-32">
      <UserTitleCard />
      <motion.div
        className="ml-64 h-screen overflow-y-auto custom-scroll mb-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <UserBackStory />
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
        <div className="pb-32"></div> {/* This empty div will add space at the bottom */}
      </motion.div>
    </div>
  );
}
