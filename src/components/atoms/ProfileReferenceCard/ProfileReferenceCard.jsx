import React from "react";
import { motion } from "framer-motion";

const ProfileReferenceCard = ({ scrollToSection }) => {
  const sections = [
    { name: "About", ref: "about" },
    { name: "Experience", ref: "experience" },
    { name: "Open Source Projects", ref: "openSource" },
  ];

  return (
    <motion.div
      className="flex flex-col items-start space-y-4 mt-8"
      drag
      dragTransition={{
        power: 0,
        modifyTarget: (target) => Math.round(target / 50) * 50,
      }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection(section.ref)}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-lg">{section.name}</span>
          <motion.div
            className="ml-2 h-[2px] bg-[#152243] transition-all duration-300"
            whileHover={{ width: "100px" }}
            style={{ width: "20px" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfileReferenceCard;
