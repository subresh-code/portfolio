import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-12 max-w-[800px] mx-auto border-t border-gray-500 text-center py-5">
      <p className="my-5 text-gray-500">We come to the jungle <br /> @All right reserved</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-500 text-3xl">
        <div className="flex items-center gap-2">
          <FaFacebookSquare />
          <FaInstagram />
          <FaLinkedin />
          <FaGithubSquare />
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="text-sm md:text-base">9847301883</span>
          <span className="text-sm md:text-base">|</span>
          <a href="mailto:silwalsolomon@gmail.com" className="text-gray-500 hover:text-white text-sm md:text-base">subrace@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
