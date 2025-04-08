import React from "react";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: <FaFacebookSquare />,
      href: "https://facebook.com/yourprofile",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <FaGithubSquare />,
      href: "https://github.com/yourprofile",
      label: "GitHub",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      className={`mt-12 max-w-[1200px] mx-auto py-6 ${
        darkMode
          ? "bg-gradient-to-t from-[#1a1f27] to-[#232325] text-gray-300"
          : "bg-gradient-to-t from-white to-gray-100 text-gray-700"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="border-t border-gray-500/50 pt-6 text-center">
        <p className="text-sm sm:text-base mb-4">
          © {new Date().getFullYear()} Subrace. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 text-2xl sm:text-3xl">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode ? "text-gray-300 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"
                }`}
                whileHover="hover"
                variants={iconVariants}
                aria-label={`Visit my ${link.label} profile`}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <a
              href="tel:+19847301883"
              className={`${
                darkMode ? "text-gray-300 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label="Call me at (984) 730-1883"
            >
              (984) 730-1883
            </a>
            <span className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}>|</span>
            <a
              href="mailto:subrace@gmail.com"
              className={`${
                darkMode ? "text-gray-300 hover:text-blue-500" : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label="Email me at subrace@gmail.com"
            >
              subrace@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;