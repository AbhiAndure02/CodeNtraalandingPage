import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/AmarProfile.png';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-10"
    >
      {/* Accent Background Gradient Blur Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-[#fb8500]/30 blur-[180px] rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] bg-[#fb8500]/20 blur-[140px] rounded-full bottom-10 right-10 animate-ping" />
        <div className="absolute w-[250px] h-[250px] bg-[#fb8500]/10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>

      {/* Main Grid Content */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="z-10 mx-[8%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT: Text Block (❌ No Card, No Blur) */}
        <motion.div
          variants={fadeInUp}
          className="text-left space-y-6"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-white"
          >
            Hi, I’m Amarnath Ambure
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white"
          >
            CEO & CFO of CodeNtraa | Full Stack Developer | UI/UX Designer
          </motion.h2>

          {/* About Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-white max-w-2xl"
          >
            As the CEO and CFO of <strong>CodeNtraa</strong>, I lead strategy, design, and engineering with deep experience in Java Full Stack Development, UI/UX, and Cloud. I transform business ideas into scalable and intuitive digital solutions through design-driven development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mt-6"
          >
            {/* Contact Button */}
            <a
              href="#contact"
              className="border border-[#ffff] text-[#ffff] hover:bg-[#fb8500]/10 px-6 py-2 rounded-full font-semibold transition duration-300"
            >
              Contact Me
            </a>

            {/* Visit Company Button */}
            <a
              href="https://codentraa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#e63946] to-[#e63946] hover:from-[#ff9e00] hover:to-[#fb8500] text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300"
            >
              Visit My Company
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Profile Image with Black Glass Circle (✅ KEEP AS IS) */}
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center h-full"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="p-4 rounded-full backdrop-blur-lg bg-black/30 shadow-2xl border-4 border-[#e63946] hover:shadow-[#e63946]/30 transform transition duration-700"
          >
            <img
              src={profileImg}
              alt="Amarnath Ambure"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
