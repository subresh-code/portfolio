import React from "react";
import { motion } from "framer-motion";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import php from "../assets/php.web";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import reactImage from "../assets/reactjs.svg";
import tailwind from "../assets/tailwind.png";

const Skills = ({ darkMode }) => { // Add darkMode prop
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500", proficiency: 90 },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500", proficiency: 85 },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500", proficiency: 80 },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600", proficiency: 75 },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400", proficiency: 70 },
    { id: 6, src: github, title: "GitHub", style: "shadow-gray-400", proficiency: 85 },
    { id: 7, src: python, title: "Python", style: "shadow-green-500", proficiency: 90 },
    { id: 8, src: php, title: "PHP", style: "shadow-purple-500", proficiency: 65 },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const headingVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (proficiency) => ({
      width: `${proficiency}%`,
      transition: { duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      id="skills"
      className={`py-16 pt-28 sm:pt-32 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-black text-white"
          : "bg-gradient-to-b from-gray-100 to-white text-gray-900"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 flex flex-col justify-center w-full relative z-10">
        <motion.div variants={sectionVariants}>
          <motion.h2
            className={`text-3xl sm:text-4xl font-extrabold border-b-4 border-blue-500 inline-block pb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            variants={headingVariants}
          >
            Skills
          </motion.h2>
          <p className={`py-6 text-lg sm:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Technologies I specialize in, with proficiency levels
          </p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-center py-8 px-4 sm:px-0"
          variants={sectionVariants}
        >
          {techs.map(({ id, src, title, style, proficiency }) => (
            <motion.div
              key={id}
              className={`relative rounded-lg py-4 px-6 ${style} shadow-lg transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800/70 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50"
                  : "bg-white/70 border border-gray-200 hover:border-blue-500/30"
              }`}
              variants={cardVariants}
              whileHover="hover"
              transition={{ duration: 0.3 }}
              role="figure"
              aria-label={`${title} skill with ${proficiency}% proficiency`}
            >
              <motion.img
                src={src}
                alt={`${title} logo`}
                className="w-14 sm:w-16 mx-auto"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
              />
              <p className={`mt-3 text-base sm:text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                {title}
              </p>
              <div className={`mt-2 w-full rounded-full h-2 ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial="hidden"
                  animate="visible"
                  variants={progressVariants}
                  custom={proficiency}
                />
              </div>
              <p className={`mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {proficiency}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;