"use client"
import {

  animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

function InformationContainer() {

  const runAnimations = () => {
    animateFromBottom(".bottom-animated-img")

  };

  useEffect(() => {
    runAnimations();
    const handleResize = () => {
      // Clear previous animations and re-run (optional if you want to reset)
      runAnimations();
    };

    // Debounce resize
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debouncedResize);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className='bottom-animated-img px-3.5 sm:px-19 md:px-[89px] w-full md:mt-5 md:mb-5.5 lg:px-0 lg:mt-10 lg:mr-4 xl:mr-0  '>

      <div className=' w-full pt-[10px] sm:pt-[11px]  lg:mt-7.5'>
        <div>
          <h1 className='text-[40px] font-morebold text-center leading-12 sm:text-[42px]  sm:leading-12.5 md:text-[48px] md:sm:leading-14.5  lg:text-left xl:text-[52px] xl:leading-16'> Learn Smarter with Vaathiyar.ai – Your AI Study Companion</h1>
        </div>

        <div className='md:px-14 lg:px-0 '>
          <div className='mt-12.5 text-[20px] text-[#535756] text-center sm:px-1 md:px-4 md:mt-12 lg:text-left lg:px-0 lg:pr-12 lg:mt-7 xl:mt-8 xl:ml-2'>
            <p>Transform the way you study with real-time quizzes, intelligent nudges, and progress tracking — powered by AI. Perfect for students, built for success.</p>
          </div>

          <form action="" className='flex items-center justify-center w-full border mt-12.5 py-4 border-[#535756]  rounded-xl text-lg
                     sm:justify-between sm:px-5  md:mt-15 md:mx-1 md:rounded-lg lg:mt-12.5 lg:mx-0 '>
            <input type="text" name="" id="" placeholder='Search course,mentor...' className='appearance-none placeholder-[#646B6A] sm:w-full focus:border-none focus:outline-none text-[20px] text-gray-700' />
            <button className=' bg-[#387975] ml-1 px-4.5 py-3 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white"
                className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </button> 
          </form>
        </div>



      </div>
    </div>
  )
}

export default InformationContainer