import React from "react";
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const headingVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.section
      className={`py-16 px-4 sm:px-6 pt-28 sm:pt-32 ${
        darkMode ? "bg-[#232325]" : "bg-gray-50"
      }`}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.h2
          className={`text-3xl sm:text-4xl font-extrabold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          variants={headingVariants}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>
        <p className={`text-lg sm:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
          I'm Subrace, a passionate Software Developer with over 3 years of experience in building scalable web applications. I specialize in backend development, web design, and creating seamless user experiences. My goal is to leverage technology to solve real-world problems while continuously learning and growing in the tech space.
        </p>
      </div>
    </motion.section>
  );
};

export default About;