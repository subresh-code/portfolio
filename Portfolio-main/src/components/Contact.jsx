import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    setFormStatus("submitting");
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/penLwRb7", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json", // Ensure getform.io accepts this
        },
      });

      if (response.ok) {
        setFormStatus("success");
        setTimeout(() => {
          form.reset();
          setFormStatus(null);
          setIsSubmitting(false);
        }, 5000); // Delay reset until after success message
      } else {
        const errorText = await response.text();
        setFormStatus(`error: ${response.status} - ${errorText || "Server error"}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      setFormStatus(`error: ${error.message || "Network error"}`);
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className={`flex justify-center my-8 min-h-[70vh] items-center ${
        darkMode ? "bg-gradient-to-b from-[#232325] to-[#1a1f27]" : "bg-gradient-to-b from-gray-100 to-white"
      }`}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className={`p-6 rounded-xl flex flex-col justify-center transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 text-white border border-gray-700/50"
                : "bg-white text-gray-900 border border-gray-200"
            }`}
            variants={childVariants}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Contact <span className="text-blue-500">Me</span>
            </h1>
            <p className={`text-base sm:text-lg mt-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Let’s connect on{" "}
              <a
                href="https://linkedin.com/in/subresh-thakulla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>{" "}
              or send me an email.
            </p>
            <div className={`flex items-center mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <FaEnvelope className="w-6 h-6" />
              <a
                href="mailto:tsubresh@example.com"
                className="ml-3 text-base sm:text-md hover:underline"
                aria-label="Email Subrace at tsubresh@example.com"
              >
                tsubresh@example.com
              </a>
            </div>
          </motion.div>

          <motion.form
            action="https://getform.io/f/penLwRb7"
            method="POST"
            onSubmit={handleSubmit}
            className="p-6 flex flex-col justify-center max-w-[700px]"
            variants={childVariants}
            aria-describedby="form-status"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className={`w-full mt-2 p-3 rounded-lg transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-transparent"
                    : "bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-transparent"
                } focus:ring-2 focus:outline-none`}
                required
                aria-label="Enter your full name"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={`w-full mt-2 p-3 rounded-lg transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-transparent"
                    : "bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-transparent"
                } focus:ring-2 focus:outline-none`}
                required
                aria-label="Enter your email address"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="4"
                className={`w-full mt-2 p-3 rounded-lg transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-transparent"
                    : "bg-gray-100 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-transparent"
                } focus:ring-2 focus:outline-none`}
                required
                aria-label="Enter your message"
              />
            </div>

            <motion.button
              type="submit"
              className={`bg-blue-500 text-white py-3 px-6 rounded-lg mt-4 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              disabled={isSubmitting}
              aria-label="Submit contact form"
              aria-describedby="form-status"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </motion.button>

            <div id="form-status">
              {formStatus === "submitting" && (
                <motion.p
                  className={`mt-3 text-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Submitting your message...
                </motion.p>
              )}
              {formStatus === "success" && (
                <motion.p
                  className={`mt-3 text-center ${darkMode ? "text-green-400" : "text-green-600"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {formStatus && formStatus.startsWith("error") && (
                <motion.p
                  className={`mt-3 text-center ${darkMode ? "text-red-400" : "text-red-600"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {formStatus === "error"
                    ? "Oops! Something went wrong. Try again."
                    : formStatus.replace("error: ", "")}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;