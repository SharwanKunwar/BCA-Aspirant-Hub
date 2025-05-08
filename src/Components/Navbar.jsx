import React from 'react'
import { useState } from 'react';
// import connection from '../assets/connection.GIF';  // Correct import

function Navbar() {
    
    const style01 = {
        base: "transition-transform duration-[300ms]",
        hover: "hover:scale-125 hover:text-blue-500 hover:border-b hover:border-blue-500",
      };

      

  return (
    <div className='bg-white w-screen sm:h-[100px] h-[70px] flex justify-center items-center fixed z-10'>
      <nav className='sm:bg-red w-[90%] h-[70%] flex justify-between items-center sm:border-2 rounded-2xl'>
        {/* //left */}
        <div className=' w-[20%] h-[100%] flex justify-center items-center'>
            <section className='sm:hidden block'>
            {/* <a href="#"><img src={connection} alt="Animated GIF" /></a>  */}
            <img className='sm:w-[60px] w-[50px]' src="/vite.svg" alt="logo" />
            </section>
            <section className='hidden sm:block'>
                <h1 className='font-bold text-2xl'>BCA <span className='font-extrabold'>-</span> <span className='text-yellow-300'>Aspirant</span></h1>
            </section>
        </div>
        {/* //middle */}
        <div className='w-[50%] h-[50%] sm:block flex justify-center items-center'>
            <ul className='sm:flex justify-around items-center w-full h-full hidden'>
                <a href="#" className={`${style01.base} ${style01.hover}`}>
                    <li>Home</li>
                </a>
                <a href="#" className={`${style01.base} ${style01.hover}`}>
                    <li>About</li>
                </a>
                <a href="#" className={`${style01.base} ${style01.hover}`}>
                    <li>Sem</li>
                </a>
                <a href="#" className={`${style01.base} ${style01.hover}`}>
                    <li>Notes</li>
                </a>
                <a href="#" className={`${style01.base} ${style01.hover}`}>
                    <li>Blogs</li>
                </a>
                <a href="#" className={`${style01.base} ${style01.hover}`}>
                    <li>Contact</li>
                </a>
            </ul>
        </div>
        {/* //right */}
        <div className='w-[20%] h-[100%] flex justify-center items-center'>
            <section className='sm:hidden'>
                <a href="#"> <i className="ri-menu-3-line text-black text-3xl"></i></a>
            </section>
            <section className='hidden sm:w-full sm:h-full sm:flex sm:justify-around sm:items-center px-20'>
                <a href="#">
                    <i className="ri-facebook-circle-fill text-2xl"></i>
                </a>
                <a href="#">
                    <i className="ri-github-fill text-2xl"></i>
                </a>
                <a href="#">
                    <i className="ri-instagram-fill text-2xl"></i>
                </a>
            </section>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
