import React, { useState } from "react";
import profilepic from "../assets/subrace.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = ({ darkMode }) => {
  const [downloadStatus, setDownloadStatus] = useState(null);

  const handleDownload = async () => {
    setDownloadStatus("downloading");
    try {
      const response = await fetch("/CV.pdf");
      if (!response.ok) {
        throw new Error("File not found");
      }
      setDownloadStatus("success");
      setTimeout(() => setDownloadStatus(null), 3000);
    } catch (error) {
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus(null), 3000);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
    hover: { scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" },
    pulse: { scale: [1, 1.05, 1], transition: { duration: 1.5, repeat: Infinity } },
  };

  return (
    <motion.section
      className={`relative pt-28 sm:pt-32 pb-12 ${
        darkMode
          ? "bg-gradient-to-br from-[#20242d] to-[#1a1f27]"
          : "bg-gradient-to-br from-white to-gray-100"
      } overflow-hidden`}
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-6 relative z-10">
        <motion.div
          className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left"
          variants={textVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-300 mt-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Subrace
          </motion.h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 py-4">
            <TypeAnimation
              sequence={[
                "Backend Developer",
                1000,
                "Web Designer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="inline-block"
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
            with years of experience
          </p>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileInView="pulse"
            className="relative flex justify-center sm:justify-start group my-4"
          >
            <div className="absolute inset-0 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 transition-all duration-300" />
            <a
              href="/CV.pdf"
              download="Subrace_CV.pdf"
              onClick={handleDownload}
              title="Download CV"
              role="button"
              aria-label="Download Subrace's CV"
              className="relative inline-flex items-center px-8 py-3 text-base sm:text-lg font-bold text-white bg-blue-600 dark:bg-blue-500 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Hire ME
            </a>
          </motion.div>

          {downloadStatus === "downloading" && (
            <motion.p
              className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Downloading...
            </motion.p>
          )}
          {downloadStatus === "success" && (
            <motion.p
              className={`mt-2 text-sm ${darkMode ? "text-green-400" : "text-green-600"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Download started successfully!
            </motion.p>
          )}
          {downloadStatus === "error" && (
            <motion.p
              className={`mt-2 text-sm ${darkMode ? "text-red-400" : "text-red-600"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Failed to download CV. Please try again.
            </motion.p>
          )}

          <motion.div
            className="flex space-x-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://linkedin.com/in/subresh-thakulla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Subrace's LinkedIn Profile"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <AiFillLinkedin size={32} />
            </motion.a>
            <motion.a
              href="https://github.com/subresh-code"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Subrace's GitHub Profile"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <AiFillGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/subrace_thakulla?igsh=YjF3ZjBkdmx3Z3A%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Subrace's Instagram Profile"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <AiFillInstagram size={32} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-[200px] sm:w-[300px] md:w-[400px] rounded-full overflow-hidden shadow-xl"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <img
            className="w-full h-auto object-cover"
            src={profilepic}
            alt="Subrace profile picture"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg
          className="w-full h-full text-gray-200 dark:text-gray-700"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,120 900,0 1200,120 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default Hero;