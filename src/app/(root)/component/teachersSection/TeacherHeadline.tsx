"use client"
import {

  animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'


import personIcon from "@/assets/teachersSection/person_icon.png"

function TeacherHeadline() {

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
        <div className='bottom-animated-img w-full px-3.5 md:px-18.5 lg:px-50 xl:px-68.5'>
            <div className='w-full  md:mt-5 '>
                <div className='w-full flex justify-center'>
                    <img src={personIcon.src} alt="" />
                </div>
                <h1 className='font-morebold text-[32px] text-center mt-8 leading-9 md:text-[36px] lg:text-[42px] lg:mt-9'>Our Professional Teachers</h1>
                <p className='font-primary text-[#535756] text-[20px] text-center mt-6 lg:mt-7'>We provide the best service that comes with the best results.</p>
                <div className='w-full flex justify-center mt-7.5 sm:mt-6.5 lg:mt-7 xl:mt-7.5'>
                    <div className='bg-[#387975] py-[2px] px-12.5'>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TeacherHeadline