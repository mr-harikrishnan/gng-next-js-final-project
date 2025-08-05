"use client"
import PersonIcon from "@/common/icons/PersonIcon";
import {

  animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'



function LAndGHeadline() {

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
    <div className='bottom-animated-img w-full px-3.5 md:px-18.5 lg:px-20 xl:px-5'>
      <div className='w-full  md:mt-5 '>
        <div className='bottom-animated-img w-full flex justify-center'>
          <PersonIcon></PersonIcon>
        </div>
        <h1 className='bottom-animated-img font-morebold text-[32px] text-center mt-8 leading-9 md:text-[36px] lg:text-[42px] lg:mt-9'>Your Learning. Our Guidance.</h1>
        <p className='bottom-animated-img font-primary text-[#535756] text-[20px] text-center mt-6 lg:mt-7'>Vaathiyar.ai isn’t just an app — it’s your personal mentor. With every minute you study, we track, quiz, and support your growth — all without human intervention.</p>
        <div className='w-full flex justify-center mt-7.5 sm:mt-6.5 lg:mt-7 xl:mt-7.5'>
          <div className='bottom-animated-img bg-primary py-[2px] px-12.5'>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LAndGHeadline