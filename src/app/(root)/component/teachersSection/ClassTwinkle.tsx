"use client"
import {

  animateFromBottom,
  animateZoomIn

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import Button from '@/common/Button'
import stackImage from "@/assets/teachersSection/wrapper-Image.webp"
import expImage from "@/assets/teachersSection/experience-image.png"



function ClassTwinkle() {

  const runAnimations = () => {
    animateFromBottom(".bottom-animated-img"),
      animateZoomIn(".zoom-scale")

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
    <div className="mt-15 sm:mt-15 md:mt-20 lg:mt-5 px-[15px] w-full mb-15">
  <div className="flex flex-col lg:flex-row gap-9 lg:gap-15 xl:gap-24 w-full sm:items-center">
    
    {/* Left Image Section */}
    <div className="relative sm:flex sm:items-center sm:justify-center w-full">
      <img src={stackImage.src} alt="Stack" className="w-full  mt-16 sm:max-w-80 md:max-w-98 lg:min-w-127.5 xl:min-w-142 xl:-ml-2" />
      
      <img
        src={expImage.src}
        alt="Experience"
        className="zoom-scale absolute bottom-[-50px] left-[163px] sm:left-[298px]  md:left-[398px] md:top-[230px] lg:left-[343.5px] lg:top-[310px] xl:left-[395px] xl:top-[360px]"
      />
    </div>

    {/* Right Text Content Section */}
    <div className="w-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 py-12">
      <h1 className="font-morebold text-white text-[32px] md:text-[36px] text-center lg:text-left leading-10 md:mt-7">
        Why Students & Colleges Love Vaathiyar.ai
      </h1>
      <p className="text-white text-[20px] text-center lg:text-left">
        Vaathiyar makes learning stick. Instead of watching and forgetting, students get mini-quizzes, reminders, and personalized feedback — exactly when they need it. For colleges, Vaathiyar brings visibility into student progress, training impact, and performance metrics across batches.
      </p>

      <div className="mt-[29px]">
        <Button text={"About Us"} bgColour={"white"} textColour={"black"} />
      </div>
    </div>

  </div>
</div>

  )
}

export default ClassTwinkle