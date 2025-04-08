import React from "react";
import { motion } from "framer-motion";
import Intuji from "../assets/Intuji.svg";
import GitHubLogo from "../assets/github.png";
import GoogleLogo from "../assets/google.png";
import AmazonLogo from "../assets/logo.png";
import MicrosoftLogo from "../assets/microsoft.png";

const Experience = ({ darkMode }) => {
  const experienceData = [
    {
      company: "intuji",
      title: "Backend Developer",
      period: "Jan 20 - Present",
      description:
        "Developed Api and concerned on security with seamless user experiences, leading backend development for multiple client projects.",
      achievements: ["Developed 5+ client websites", "Improved user engagement by 30%"],
      tech: ["PHP", "Laravel", "Docker"],
      logo: Intuji,
      companyLink: "https://intuji.com/",
    },
    {
      company: "GitHub",
      title: "Frontend Developer",
      period: "Mar 2019 - Dec 2021",
      description:
        "Built responsive web components, collaborated with backend teams, and ensured code quality through rigorous testing.",
      achievements: ["Developed 10+ reusable components", "Reduced load times by 20%"],
      tech: ["React", "JavaScript", "Tailwind"],
      logo: GitHubLogo,
      companyLink: "https://github.com",
    },
    {
      company: "Google",
      title: "Software Engineer",
      period: "Jun 2018 - Feb 2020",
      description:
        "Developed innovative solutions for cloud-based tools and contributed to cutting-edge AI projects.",
      achievements: ["Optimized algorithms for 15% faster processing", "Co-authored 2 patents"],
      tech: ["Python", "TensorFlow", "GCP"],
      logo: GoogleLogo,
      companyLink: "https://www.google.com",
    },
    {
      company: "Amazon",
      title: "Full Stack Developer",
      period: "Sep 2016 - May 2018",
      description:
        "Built scalable e-commerce applications and optimized backend processes for high-traffic systems.",
      achievements: ["Scaled API to handle 1M+ requests/day", "Integrated payment gateways"],
      tech: ["Node.js", "AWS", "MongoDB"],
      logo: AmazonLogo,
      companyLink: "https://www.amazon.com",
    },
    {
      company: "Microsoft",
      title: "UI/UX Designer",
      period: "Jan 2015 - Aug 2016",
      description:
        "Crafted intuitive interfaces for productivity tools, enhancing user satisfaction through iterative design.",
      achievements: ["Designed UI for a top-selling app", "Conducted 50+ user testing sessions"],
      tech: ["Sketch", "HTML", "CSS"],
      logo: MicrosoftLogo,
      companyLink: "https://www.microsoft.com",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.03,
      rotateY: 10,
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.5,
      backgroundColor: "#3b82f6",
      transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const techTagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: i * 0.1 },
    }),
  };

  return (
    <motion.section
      className={`py-16 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-[#232325] to-[#1a1f27]"
          : "bg-gradient-to-b from-gray-100 to-white"
      }`}
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      role="region"
      aria-label="Work Experience Timeline"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className={`text-3xl sm:text-4xl font-extrabold text-center mb-12 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-500">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-transparent z-0"
            variants={lineVariants}
          />
          <motion.div
            className="block sm:hidden absolute left-4 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent z-0"
            variants={lineVariants}
          />

          <div className="space-y-8 sm:space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center sm:items-start ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                transition={{ duration: 0.3 }}
                role="listitem"
                aria-label={`${item.company} experience`}
                tabIndex={0}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 left-4 w-4 h-4 bg-blue-500 rounded-full z-10"
                  variants={dotVariants}
                  whileHover="hover"
                />

                {/* Curved Connector (Visible on Desktop) */}
                <svg
                  className={`hidden sm:block absolute top-4 w-1/2 h-12 z-0 ${
                    index % 2 === 0 ? "left-1/2" : "right-1/2"
                  }`}
                  viewBox="0 0 100 50"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={
                      index % 2 === 0
                        ? "M0,0 Q50,50 100,0"
                        : "M100,0 Q50,50 0,0"
                    }
                    stroke={darkMode ? "#3b82f6" : "#2563eb"}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </svg>

                {/* Experience Card */}
                <div
                  className={`relative w-full sm:w-[45%] p-6 rounded-lg shadow-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-[#333333]/80 backdrop-blur-md border border-gray-700/50 text-white"
                      : "bg-white border border-gray-200 text-gray-900"
                  } mt-6 sm:mt-0 ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <motion.a
                        href={item.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                        }}
                        transition={{ duration: 0.3 }}
                        aria-label={`Visit ${item.company} website`}
                      >
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="w-10 h-10 sm:w-12 sm:h-12 mr-3 rounded-full object-contain"
                          loading="lazy"
                        />
                      </motion.a>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-blue-500">
                          {item.company}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400">{item.title}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 mb-2">{item.period}</p>
                  <p className="text-sm sm:text-base">{item.description}</p>
                  <ul className="mt-3 list-disc list-inside text-sm sm:text-base text-gray-400">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm"
                        variants={techTagVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "#ffffff" }}
                        title={`Used ${tech} in this role`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;  