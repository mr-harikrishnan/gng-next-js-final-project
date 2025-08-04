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
            type: "Individual Plan",
            price: "₹0",
            validity: "Per Month",
            desc: "For students learning independently. Includes limited features like quiz nudges and basic tracking."

        },
        {
            type: "Campus Rollout",
            price: "₹XX",
            validity: "per student/month",
            desc: "Full access to all AI features, analytics, and admin dashboards. Pricing based on batch size."

        },
        {
            type: "Institutional License",
            price: "$119",
            validity: "Per Month",
            desc: "Custom packages for colleges, universities, and edtech partners.\n "

        }

    ]

    return (
        <div className="w-full grid grid-cols-1  mt-7 gap-6  p-4 justify-items-center
          sm:grid-cols-2 sm:place-items-center 
          md:mt-8    md:gap-8  md:p-8
          lg:grid-cols-3 lg:mt-5
          xl:gap-23
          ">
            <div className='zoom-scale col-span-1 '>
                <PlanCardSmall  data={planData[0]}></PlanCardSmall>
            </div>

            <div className='zoom-scale col-span-1'>
                <PlanCardBig data={planData[1]}></PlanCardBig>
            </div>

            <div className='zoom-scale col-span-1 sm:col-span-2 lg:col-span-1'>
                <PlanCardSmall data={planData[2]}></PlanCardSmall>
            </div>
        </div>
    )
}

export default PlanFullCard