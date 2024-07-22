import React from "react";
import "./UserTitleCard.css";
import { motion } from "framer-motion";

export default function UserTitleCard() {
  return (
    <motion.div
      className="max-w-sm ml-64"
      drag
      dragTransition={{
        power: 0,
        modifyTarget: (target) => Math.round(target / 50) * 50,
      }}
    >
      <div className="flex flex-col items-start pb-10">
        <motion.img
          initial={{ x: 100 }} // Start position (off the screen to the right)
          animate={{ x: 0 }} // End position (center of the screen)
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
          className="w-28 h-28 mb-3 rounded-full shadow-lg border"
          src="/preethamprofileimage.jpeg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-4xl font-medium text-gray-900 dark:text-white">
          Preetham B
        </h5>
        <span className="text-md text-gray-500 dark:text-gray-400">
          Senior Frontend Engineer | Bangalore, IN
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          I develop scalable, efficient software solutions and dynamic
          micro-frontends, enhancing system performance and reducing integration
          time.
        </span>
      </div>
    </motion.div>
  );
}
