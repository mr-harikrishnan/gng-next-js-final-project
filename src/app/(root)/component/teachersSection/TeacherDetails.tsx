"use client"
import {

  animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'


import TeacherCard from '@/common/TeacherCard'


function TeacherDetails() {

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
    <div className="w-full mt-10 ">
      <div className="bottom-animated-img w-full grid grid-cols-1 gap-7.5 items-center sm:grid-cols-2 sm:gap-5 sm:px-4 md:gap-7 md:mt-13.5 lg:grid-cols-4 lg:gap-2 xl:gap-8 xl:mx-0 xl:mt-13">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>

     

      
    </div>

  )
}

export default TeacherDetails