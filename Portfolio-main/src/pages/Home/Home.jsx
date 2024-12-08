import About from "../../components/About";
import Experience from "../../components/Experience";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Work from "../../components/Workk";
import Footer from "../../components/Footer";
import { useState } from 'react'
import React, { useEffect } from 'react'
import Skills from '../../components/Skills';
function Home() {
    let [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      }
      else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
  
  
    const toggleMode = () => {
      setDarkMode(prevMode => !prevMode);
    };
  return (
      <div className={`${darkMode ? 'dark' : ''} ${darkMode ? 'bg-20242d text-white' : 'bg-white text-black'}`}>

<Navbar />
<Hero />
<About />
<Skills /> 
<Work />
<Experience />
<Footer />


<div className='dark:bg-20242d dark:text-white '>
  <button onClick={toggleMode} className="absolute md:right-3 sm:right-10 md:top-16 xl:top-6 right-14 top-7  dark:text-white text-black px-4 py-2 md:px-5 md:py-3 rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
    <span className="inline-flex items-center">
      {darkMode ? (
        <span className="mr-1" role="img" aria-label="Moon">🌞</span>
      ) : (
        <span className="mr-1" role="img" aria-label="Sun">🌜</span>
      )}
    </span>
  </button>
</div>
</div>
  )
}

export default Home;
