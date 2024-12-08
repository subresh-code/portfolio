import React from 'react';
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
      <div className='flex lg:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

        <div>
          <div className='w-full h-full'>
            <img src={aboutImg} alt=''
              className='object-cover rounded-xl h-full w-full filter grayscale brightness-50 hover:brightness-100 transition duration-300' />
          </div>
        </div>

        <div>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
                Hello! I'm a data analyst focused on Exploratory data analysis (EDA). Currently, my expertise lies in Data Cleaning, where I have experience in data Engineering applications utilizing Numpy,Pandas and Matplotlib.
              </p>
            </div>
          </div>

          <div className='flex mt-10 gap-7 justify-center items-center'>




            <div
              class="hover:-translate-y-2 group  duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/20"
                class="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
              >
                <path
                  transform="translate(100 100)"
                  d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                ></path>
              </svg>

              <div class="z-20 flex flex-col justify-center items-center">
                <span class="font-bold text-6xl ml-2">11+</span>
                <p class="font-bold">Projects</p>
              </div>
            </div>

            <div
              class="hover:-translate-y-2 group  duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
              >
                <path
                  transform="translate(100 100)"
                  d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                ></path>
              </svg>

              <div class="z-20 flex flex-col justify-center items-center">
                <span class="font-bold text-6xl ml-2">5+</span>
                <p class="font-bold">years of <br /> Experience</p>
              </div>
            </div>

            <div
              class="hover:-translate-y-2 group duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
              >
                <path
                  transform="translate(100 100)"
                  d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                ></path>
              </svg>

              <div class="z-20 flex flex-col justify-center items-center">
                <span class="font-bold text-6xl ml-2">30+</span>
                <p class="font-bold">happy <br /> customer</p>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
