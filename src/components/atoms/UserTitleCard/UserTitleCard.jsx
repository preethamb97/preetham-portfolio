import React from "react";
import { motion } from "framer-motion";
import "./UserTitleCard.css";

export default function UserTitleCard() {
  return (
    <motion.div
      className="max-w-sm sm:max-w-md lg:max-w-lg ml-20"
      // drag
      // dragTransition={{
      //   power: 0,
      //   modifyTarget: (target) => Math.round(target / 50) * 50,
      // }}
    >
      <div className="flex flex-col items-start pb-10">
        <motion.img
          initial={{ y: 0 }} // Start position
          animate={{ y: [0, -40, 0, -30, 0, -20, 0, -10, 0, 0] }} // Bounces with decreasing height
          transition={{
            duration: 3, // Total duration for all bounces
            times: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6], // Keyframe times
            ease: "easeOut",
          }} // Applying the bounce transition
          className="w-28 h-28 mb-3 rounded-full shadow-lg border"
          src="/preethamprofileimage.jpeg"
          alt="Profile image"
        />
        <h5 className="mb-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white hover-text">
          Preetham B
        </h5>
        <span className="text-xl text-gray-400 hover-text">
          Senior Frontend Engineer | Bangalore, IN
        </span>
        <span className="text-lg text-gray-400 mt-2 hover-text">
          I develop scalable, efficient software solutions and dynamic
          micro-frontends, enhancing system performance and reducing integration
          time.
        </span>
      </div>
    </motion.div>
  );
}
