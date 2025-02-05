import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/Designer.jpeg';
import imgHover from '../../assets/people.jpeg';
import { IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

// Animation function
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // ✅ Import useNavigate and initialize

  return (
    <div className="bg-[#1e3a8a] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text Section */}
        <div className="md:w-1/2 px-4">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-white text-4xl sm:text-5xl font-bold mb-4 leading-snug"
          >
            Connect Locally, Dial Globally
          </motion.h1>
          <motion.p
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="text-white text-lg sm:text-xl mb-6"
          >
            Discover the best businesses, offers, and services right around the corner.
          </motion.p>
          <motion.button
            variants={FadeUp(0.9)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            onClick={() => navigate('/category')} // ✅ Navigate to Category page on click
            className="bg-[#ffcc00] text-black text-semibold font-medium px-10 py-3 rounded-lg shadow-md 
              hover:bg-white hover:text-[#363964] transition-transform duration-100 flex items-center justify-center w-[200px]"
          >
            Find Services
            <IoArrowForward className="inline ml-2" />
          </motion.button>
        </div>

        {/* Supporting Visual Section */}
        <div
          className="md:w-1/2 mt-6 md:mt-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
            src={isHovered ? imgHover : img}
            alt="Banner Visual"
            className="w-[300px] h-auto mx-auto rounded-lg shadow-2xl opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
