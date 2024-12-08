import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
    const handleScroll = (id) => {
      setTimeout(() => {
          const item = document.getElementById(id);
          if (item) {
              window.scrollTo({
                  top: item.offsetTop - 60,
                  behavior: "auto"
              });
          }
      }, 100); // 1000 milliseconds = 1 second
  };
  

  return (
    <div className='z-10 text-gray-500 flex  justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1'>

        <h1 className='text-3xl font-bold primary-color ml-4'>Subrace</h1>
        <ul className='hidden md:flex'>
        <Link onClick={()=>{handleScroll('home'); }} to="/" className="p-5">Home</Link>
        <Link onClick={()=>{handleScroll('about'); }} to="/" className="p-5">About</Link>
        <Link onClick={()=>{handleScroll('work'); }} to="/" className="p-5">Work</Link>
        <Link onClick={()=>{handleScroll('experience'); }} to="/" className="p-5">Experience</Link>
        <Link to="/contact" className="p-5">Contact</Link>
        </ul>
      
      <div onClick={handleNav} className='block fixed mx-[-16px] right-10 z-50 md:hidden /*z-10*/'>
        {nav ? <AiOutlineClose size= {20}/> : <AiOutlineMenu size={20}/>}
      </div>


        <div className={nav ?  'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500'
                                    : "fixed left-[-100%]"}>
            
        <h1 className='text-3xl font-bold primary-color m-4'>Subrace</h1>
        <ul className='p-8 text-2xl flex z-50 flex-col'>

        <Link onClick={()=>{handleScroll('home'); setNav(!nav)}} to="/" className="p-5">Home</Link>
        <Link onClick={()=>{handleScroll('about'); setNav(!nav)}} to="/" className="p-5">About</Link>
        <Link onClick={()=>{handleScroll('work'); setNav(!nav)}} to="/" className="p-5">Work</Link>
        <Link onClick={()=>{handleScroll('experience'); setNav(!nav)}} to="/" className="p-5">Experience</Link>
        <Link to="/contact" className="p-5">Contact</Link>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
