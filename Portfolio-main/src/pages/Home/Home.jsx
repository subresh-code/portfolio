import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Workk from "../../components/Workk";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 15 },
    tap: { scale: 0.95 },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    pulse: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ease-in-out ${
        darkMode
          ? "dark bg-gradient-to-b from-[#20242d] to-[#1a1f27] text-white"
          : "bg-gradient-to-b from-white to-gray-100 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Workk darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <motion.button
        onClick={toggleMode}
        className={`fixed z-50 top-16 sm:top-20 md:top-24 max-w-[1200px] right-4 sm:right-6 md:right-8 p-2 rounded-full ${
          darkMode
            ? "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
            : "bg-gray-200 text-black border border-gray-400 hover:bg-gray-300"
        } shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        whileInView="pulse"
        variants={buttonVariants}
        aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
        title={`Switch to ${darkMode ? "light" : "dark"} mode`}
      >
        {darkMode ? (
          <FaSun className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <FaMoon className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>
    </div>
  );
}

export default Home;