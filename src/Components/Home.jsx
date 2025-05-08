import React from 'react'
import TypingAnimatedText from './Typing'

function Home() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center flex-col gap-5 text-white">
    {/* Background Image with Blur */}
    <div className='absolute inset-0 bg-[url("/src/assets/pic02.jpg")] bg-cover bg-center blur-[1px] -z-10'></div>
    {/* Content */}
    <div className=' sm:h-[20%] sm:w-full'>empty</div>
    <div className='w-[90%] h-full flex flex-col justify-end items-center gap-5 sm:gap-3'>
      <h1 className='font-bold text-3xl'>Notes, Syllabus, and More for BCA Students</h1>
      <section className='sm:w-6/12 sm:h-[50px]'>
        <TypingAnimatedText />
      </section>
      <section className=' sm:w-6/14'>
      <p className='sm:w-[70%] pl-3 pr-3'>
        BCA Aspirant – A platform for BCA students to access notes, syllabus, and essential learning resources.
      </p>
      </section>
    </div>
  
    <div className='w-[90%] h-[60%] flex justify-center items-center gap-5'>
    <button className='w-[150px] bg-white text-black h-[40px] rounded-4xl hover:bg-black hover:text-white hover:shadow-[0px_0px_10px_2px_white] transition-all'>
  Explore
</button>
<button className='w-[150px] bg-white text-black h-[40px] rounded-4xl hover:bg-black hover:text-white hover:shadow-[0px_0px_10px_2px_white] transition-all'>
  More
</button>

    </div>
  </div>
  
  
  )
}

export default Home
