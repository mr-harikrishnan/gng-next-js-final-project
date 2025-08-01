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
        <div className="mt-26 sm:mt-15 md:mt-20 px-2 w-full mb-15 lg:mt-5 ">

            <div className='w-full sm:items-center flex flex-col  lg:flex-row  gap-9 xl:gap-24'>

                <div className='bottom-animated-img sm:flex sm:items-center sm:justify-center relative'>
                    <img
                        className='sm:w-[55%] md:w-[69%] lg:w-full '
                        src={stackImage.src}alt="" />
                    <img
                        className='zoom-scale absolute bottom-[-60] left-[180px] sm:left-[275px] md:left-[313px] md:top-[165px] lg:left-[320px] lg:top-[225px] xl:top-[300px] xl:left-[405px]'
                        src={expImage.src} alt="" />
                </div>

                <div className='bottom-animated-img flex justify-center items-center gap-4 flex-col max-w-120 md:max-w-full lg:max-w-120 py-12 lg:items-start lg:gap-6 '>
                    <h1 className='font-morebold text-center text-white text-[32px] md:text-[36px] lg:text-[43px] md:mt-7 lg:text-left'>Welcome To Online Class Twinkle</h1>
                    <p className='text-[20px] text-center text-white lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sit nunc mauris arcu blandit. Turpis vitae lectus a ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='mt-5'>
                        <Button text={"About Us"} bgColour={"white"} textColour={"black"}></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClassTwinkle