import React from 'react';
import { motion } from 'framer-motion';

const UserJobCard = ({ period, location, title, responsibilities, skills }) => {
  return (
    <div className="bg-[#152243] rounded-lg shadow-md p-6 transition-all duration-300 hover:bg-[#1e2a5a] hover:shadow-lg w-full max-w-4xl mt-14 relative mx-auto">
      <div className="flex flex-col">
        <div className="w-full  text-gray-400">{period}</div>
        <div className="w-full  text-gray-300 ml-0  mt-4 ">
          <div className="font-semibold">{title}</div>
          <div>{location}</div>
          <ul className="list-disc mt-2 ml-5">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
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

export default UserJobCard;
