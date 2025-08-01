"use client"
import {
  animateFromBottom,
  animateZoomIn,
} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import Buton from '@/common/Button'
import ServiceCard from './ServiceCard'

function Services() {

     const runAnimations = () => {
     
        animateFromBottom(".bottom-animated-img");
    
        animateZoomIn(".zoom-scale");
        
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
        <div className='  flex flex-col items-center px-2 gap-12
        lg:flex-row lg:items-start
        '>

            <div className="bottom-animated-imglg:w-[50%] px-4 text-white  flex justify-center items-center flex-col gap-4
            lg:items-start
            xl:max-w-123">
                <p className="font-primary  text-center text-[20px]">Services</p>
                <h1 className="font-morebold -mt-1 text-center text-[32px] lg:text-left lg:text-[42px]">What We Provide To You</h1>
                <p className="font-primary text-center text-[20px] lg:text-left">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                <div className='mt-7'>
                    <Buton text={"Veiw More"} bgColour={"white"} textColour={"black"}></Buton>
                </div>

            </div>

            <div className="lg:w-[50%] w-full  p-2  ">

                <div className='w-full'>

                    <ServiceCard></ServiceCard>

                </div>

            </div>

        </div>
    )
}

export default Services