"use client"
import {
  animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import PlanFullCard from '@/common/PlanFullCard'


function Plan() {

     const runAnimations = () => {
        
        animateFromBottom(".bottom-animated-img");
        
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
        <div className='w-full min-h-screen  py-8 md:py-16'>
            <h1 className='bottom-animated-img text-[32px] font-morebold mt-8.5  md:text-5xl  text-center text-white  md:mb-16 px-4'>Choose Your Plan</h1>
            <div className='w-full'>
                <PlanFullCard></PlanFullCard>
            </div>
        </div>
    )
}

export default Plan