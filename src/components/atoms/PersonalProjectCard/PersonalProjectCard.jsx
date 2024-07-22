import React from 'react';
import { motion } from 'framer-motion';

const PersonalProjectCard = ({ title, description, skills, githubLink }) => {
  return (
    <div className="bg-[#152243] rounded-lg shadow-md p-6 transition-all duration-300 hover:bg-[#1e2a5a] hover:shadow-lg w-full max-w-4xl mt-14 relative">
      <div className="text-gray-300">
        <div className="font-semibold text-xl">{title}</div>
        <p className="mt-2">{description}</p>
        <a
          href={githubLink}
          className="text-blue-400 underline mt-2 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
      <div className="mt-4 flex flex-wrap">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#141e49] text-white py-1 px-3 rounded-full m-1 shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjectCard;
