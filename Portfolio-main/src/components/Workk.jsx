import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";

function Workk({ darkMode }) {
  const projects = [
    {
      id: 1,
      type: "Website",
      title: "E-commerce Platform",
      description: "A responsive e-commerce website built with React and Tailwind.",
      tech: ["React", "Tailwind", "JavaScript"],
      image: proj1,
      demoLink: "https://example.com/demo1",
      repoLink: "https://github.com/yourprofile/repo1",
    },
    {
      id: 2,
      type: "UI/UX Design",
      title: "Mobile App Prototype",
      description: "A UI/UX design for a fitness tracking app created in Figma.",
      tech: ["Figma", "Adobe XD"],
      image: proj2,
      demoLink: "https://example.com/demo2",
      repoLink: null,
    },
    {
      id: 3,
      type: "App Development",
      title: "Task Manager App",
      description: "A cross-platform task management app built with React Native.",
      tech: ["React Native", "Firebase"],
      image: proj3,
      demoLink: "https://example.com/demo3",
      repoLink: "https://github.com/yourprofile/repo3",
    },
    {
      id: 4,
      type: "Website",
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: proj4,
      demoLink: "https://example.com/demo4",
      repoLink: "https://github.com/yourprofile/repo4",
    },
  ];

  const categories = ["All", "Website", "UI/UX Design", "App Development", "Data Analysis"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.type === selectedCategory
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      id="work"
      className={`py-16 px-4 sm:px-6 lg:px-20 ${
        darkMode ? "bg-gradient-to-b from-[#232325] to-[#1a1f27]" : "bg-gradient-to-b from-gray-100 to-white"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white dark:text-gray-200 mb-6 text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-500">Projects</span>
      </motion.h2>

      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" layout>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-800/50 backdrop-blur-sm"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover="hover"
              transition={{ duration: 0.3 }}
              onClick={() => handleProjectClick(project)}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{project.type}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className={`relative max-w-lg w-full rounded-lg p-6 sm:p-8 ${
                darkMode ? "bg-[#1a1f27] text-white" : "bg-white text-gray-900"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} screenshot`}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-sm sm:text-base mb-4">{selectedProject.description}</p>
              <p className="text-sm sm:text-base mb-4">
                <strong>Technologies:</strong> {selectedProject.tech.join(", ")}
              </p>
              <div className="flex gap-4">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.repoLink && (
                  <a
                    href={selectedProject.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Workk;