// import React from 'react';
// import { skills, softskills } from "../data"; // Corrected import path
// import { BsCheck2All } from "react-icons/bs";

// const Skills = () => {
//   return (
//     <div className='w-full flex flex-col py-20 overflow-y-auto max-h-[calc(100vh - 200px)]'>
//       <h4 className='text-3xl font-bold text-black dark:text-white mb-10 text-center'>
//       I Develop Skills Regularly
//       </h4>

//       <div className='w-full flex flex-wrap gap-10 items-center justify-center'>
//         {skills.map((skill, index) => (
//           <div
//             data-aos='zoom-in-down'
//             data-aos-offset='200'
//             data-aos-delay='50'
//             data-aos-duration='1000'
//             data-aos-easing='ease-in-out'
//             key={index}
//             className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-300'
//           >
//             <div className='w-10 h-10'>
//               <img src={skill.icon} className='w-full h-full rounded-full' alt={`${skill.name} icon`} />
//             </div>
//             <div className='flex flex-col gap-1'>
//               <div className='flex items-center justify-between'>
//                 <p className='text-md font-semibold text-white '>
//                   {skill.name}
//                 </p>
//                 <p className='text-md font-semibold text-white'>
//                   {skill.value + "%"}
//                 </p>
//               </div>
//               <div className='w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1'>
//                 <div
//                   className='bg-neutral-300 h-full'
//                   style={{ width: skill.value + "%" }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='mt-[10rem]'>
//         <h4 className='text-3xl font-bold text-black dark:text-white mb-14 text-center'>
//          My Soft Skills
//         </h4>

//         <div className='flex flex-col md:flex-row gap-16 items-center justify-center'>
//           <div className='flex flex-col bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0'>
//             {softskills.slice(0, 5).map((s, index) => (
//               <div key={index + s} className='flex items-center gap-3 p-4'>
//                 <BsCheck2All color='white' size={22} />
//                 <p className='text-white'>{s}</p>
//               </div>
//             ))}
//           </div>

//           <div className='flex flex-col bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl scale-110 hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0'>
//             {softskills.slice(5, 10).map((s, index) => (
//               <div key={index + s} className='flex items-center gap-3 p-4'>
//                 <BsCheck2All color='white' size={22} />
//                 <p className='text-white'>{s}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';
import css from '../assets/css.png';
import github from '../assets/google.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.svg';
import python from '../assets/python.svg';
import reactImage from '../assets/reactjs.svg';
import tailwind from '../assets/tailwind.png';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500'
    },
    {
      id: 7,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500'
    }
  ];

  return (
    <div id='experience' name='experience' className='bg-black w-full h-screen text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-15 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Skills;
