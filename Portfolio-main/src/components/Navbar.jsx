import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, activeSection, setActiveSection }) => {
  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Work", section: "work" },
    { name: "Experience", section: "experience" },
    { name: "Contact", section: "contact" },
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 80; // Adjust based on your Navbar height
      const offset = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-40 py-4 sm:py-6 ${
        darkMode ? "bg-[#20242d] text-white" : "bg-white text-gray-800"
      } shadow-lg`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-500">
          Subresh Thakulla
        </h1>
        <ul className="flex space-x-4 sm:space-x-6">
          {navItems.map((item) => (
            <li key={item.section}>
              <motion.button
                onClick={() => handleScroll(item.section)}
                className={`text-sm sm:text-base font-medium relative transition-colors duration-300 ${
                  activeSection === item.section
                    ? "text-blue-500"
                    : darkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Scroll to ${item.name} section`}
                aria-current={activeSection === item.section ? "page" : undefined}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                    layoutVary
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;