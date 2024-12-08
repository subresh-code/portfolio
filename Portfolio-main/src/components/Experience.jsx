import React from 'react';
import { motion } from 'framer-motion';
import IdeoLogo from '../assets/IDEO.jpg';
import GitHubLogo from '../assets/code.png';
import GoogleLogo from '../assets/google.png';
import AmazonLogo from '../assets/logo.png';
import MicrosoftLogo from '../assets/microsoft.png';

const Experience = () => {
  const experienceData = [
    {
      company: 'Ideo',
      period: '2020 - Present',
      description: 'At Ideo since 2020, I\'ve been a standout Web Designer, creating captivating layouts and seamless user experiences.',
      logo: IdeoLogo
    },
    {
      company: 'GitHub',
      period: '2020 - Present',
      description: 'At GitHub, as a Frontend Developer, I built responsive web components, collaborated with backend teams, and ensured code quality.',
      logo: GitHubLogo
    },
    {
      company: 'Google',
      period: '2020 - Present',
      description: 'At Google, I worked as a Software Engineer, developing innovative solutions and contributing to cutting-edge projects.',
      logo: GoogleLogo
    },
    {
      company: 'Amazon',
      period: '2020 - Present',
      description: 'At Amazon, as a Full Stack Developer, I participated in the development of scalable applications and optimized backend processes.',
      logo: AmazonLogo
    },
    {
      company: 'Microsoft',
      period: '2020 - Present',
      description: 'At Microsoft, I served as a UI/UX Designer, crafting intuitive interfaces and enhancing user satisfaction through innovative designs.',
      logo: MicrosoftLogo
    },      
  ];

  return (
    <div className="py-10 bg-[#232325] h-auto mt-20" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 text-white">Experience</h2>
        <div className="grid grid-cols-1">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="experience-item mb-6 relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <div className="bg-[#333333] mt-5 p-6 relative rounded-lg z-1 shadow-md transition-transform mx-auto w-11/12 md:w-1/2  hover:scale-105">
                  <div className="text-center md:text-left flex items-center justify-center">
                    <h3 className="text-xl font-bold mb-2 text-[#FF44EC]">{item.company}</h3>
                    <img src={item.logo} alt="logo" className="w-8 h-8 ml-2" /> {/* Adjust the size of the logo */}
                  </div>
                  <p className="text-white text-sm">{item.period}</p>
                  <p className="text-white mt-2">{item.description}</p>
                </div>
              </div>
              {index !== experienceData.length - 1 && (
                <div className="absolute h-1/2 bg-white w-1 z-0 left-1/2 transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
