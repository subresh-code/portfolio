import React from 'react';
import profilepic from '../assets/subrace.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div>
            <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-between align-center' id='home'>
                <div className='w-full md:w-1/2 flex-col my-auto'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 text-center md:text-left mt-5'>Hi I'm Subrace</p>
                    <h1 className='md:text-7xl sm:text-6xl text-center md:text-left mb-2 text-4xl font-bold md:py-6'>
                        <TypeAnimation
                            sequence={[
                                "UI/UX Designer",
                                1000,
                                "Web Designer",
                                1000,
                                "Back-End",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className='flex items-center justify-center '>
                        <p className='md:text-5xl sm:text4xl text-xl  md:text-left font-bold text-gray-500'>with am 3+ years experience</p>
                    </div>

                    <div class="relative flex justify-center md:justify-start group my-3">
                        <div class="absolute transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r
                from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                group-hover:-insert-1 group-hover:duration-200">
                        </div>
                        <a href='./Profile.pdf' title='Download CV' role='button'
                            class='w-[150px] h-[60px] relative inline-flex items-center px-8 py-4 text-lg
                 font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Hire Me</a>
                    </div>
                </div>


                <div className='my-auto relative overflow-hidden rounded-full mt-[-20px] animate-pulse'> {/* Add class for animation */}
    <img className='w-[300px] md:w-[500px] mx-auto' src={profilepic} alt="profile pic" />
</div>



            </div>
            
            </div>
    );
};

export default Hero;
