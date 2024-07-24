import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaHackerrank, FaCode, FaEnvelope, FaPhone } from 'react-icons/fa'; // Adding FaEnvelope and FaPhone for Gmail and contact

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
    url: 'https://www.instagram.com/preetham_acharya__',
    icon: <FaInstagram />
  },
  {
    name: 'Gmail',
    url: 'mailto:preethamb97@gmail.com',
    icon: <FaEnvelope />,
    tooltip: 'preethamb97@gmail.com'
  },
  {
    name: 'Contact',
    url: 'tel:+917899033055',
    icon: <FaPhone />,
    tooltip: '+917899033055'
  }
];

const UserOtherProfileCards = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8 sm:mt-12 lg:mt-16 max-w-lg ">
      {profileLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          className="relative group bg-[#152243] text-white py-2 px-4 rounded-full m-2 flex items-center space-x-2 shadow-lg transition-all duration-300 hover:bg-[#1e2a5a] hover:shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xl">{link.icon}</span>
          <span className="text-sm">{link.name}</span>
          {link.tooltip && (
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
              {link.tooltip}
            </span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default UserOtherProfileCards;
