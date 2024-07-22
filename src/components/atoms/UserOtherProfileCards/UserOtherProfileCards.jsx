import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaHackerrank, FaCode } from 'react-icons/fa'; // Using FaCode as a generic icon for LeetCode

const profileLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/preethamb97',
    icon: <FaGithub />
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Preetham_b_97',
    icon: <FaCode /> // Using FaCode as a placeholder for LeetCode
  },
  {
    name: 'HackerEarth',
    url: 'https://www.hackerearth.com/@preethamb97',
    icon: <FaHackerrank />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/preetham_acharya__', // Replace with actual Instagram URL
    icon: <FaInstagram />
  }
];

const UserOtherProfileCards = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {profileLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          className="bg-[#152243] text-white py-1 px-2 rounded-full m-1 flex items-center space-x-2 shadow-lg transition-all duration-300 hover:bg-[#1e2a5a] hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xl">{link.icon}</span>
          <span className="text-sm">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default UserOtherProfileCards;
