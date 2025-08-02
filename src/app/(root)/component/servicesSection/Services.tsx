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
    <div className='  flex flex-col items-center  gap-9 sm:gap-2 lg:gap-15 
        lg:flex-row lg:items-start lg:-mt-3 xl:pt-38 xl:gap-28'>

      <div className="bottom-animated-img lg:w-[45%]  xl:w-[36.5%]  text-white  flex justify-center items-center flex-col gap-4
            lg:items-start lg:pt-12.5 lg:px-4  xl:px-0
            xl:max-w-123">
        <div className=" flex flex-col  items-center lg:items-start lg:pt-2.5 xl:justify-start gap-4">
          <p className="font-primary  text-left text-[20px] ">Services</p>
          <h1 className="font-morebold -mt-1 text-center text-[32px] lg:text-left lg:text-[42px] leading-12">Our Core Features</h1>
          <p className="font-primary text-center text-[20px] lg:text-left ">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
          <div className='mt-7'>
            <Buton text={"Veiw More"} bgColour={"white"} textColour={"black"}></Buton>
          </div>
        </div>


      </div>

      <div className=" w-full   lg:w-[56%]   ">

        <div className='w-full mt-6 flex justify-center '>

          <ServiceCard></ServiceCard>

        </div>

      </div>

    </div>
  )
}

export default Services