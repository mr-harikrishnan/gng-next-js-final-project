"use client"
import {

  animateZoomIn,
} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import PlanCardSmall from './PlanCardSmall'
import PlanCardBig from './PlanCardBig'



function PlanFullCard() {

      
      const runAnimations = () => {
    
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

    const planData = [
        {
            type: "Individual",
            price: "$50",
            validity: "Per Month",
            desc: "Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien."

        },
        {
            type: "Up to 3 people",
            price: "$89",
            validity: "Per Month",
            desc: "Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien."

        },
        {
            type: "Up to 5 people",
            price: "$119",
            validity: "Per Month",
            desc: "Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien."

        }

    ]

    return (
        <div className="w-full grid grid-cols-1  mt-7 gap-6  p-4 justify-items-center
          sm:grid-cols-2 sm:place-items-center 
          lg:grid-cols-3

          md:mt-8    md:gap-8  md:p-8">
            <div className='zoom-scale col-span-1 '>
                <PlanCardSmall  data={planData[0]}></PlanCardSmall>
            </div>

            <div className='zoom-scale col-span-1'>
                <PlanCardBig data={planData[1]}></PlanCardBig>
            </div>

            <div className='zoom-scale col-span-1 sm:col-span-2 lg:col-span-1'>
                <PlanCardSmall data={planData[0]}></PlanCardSmall>
            </div>
        </div>
    )
}

export default PlanFullCard