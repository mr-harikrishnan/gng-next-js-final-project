"use client"
import {
  animateZoomIn,
} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import no1Image from "@/assets/services/number1Image.png"
import no2Image from "@/assets/services/number2Image.png"
import no3Image from "@/assets/services/number3Image.png"
import no4Image from "@/assets/services/number4Image.png"
import NumberIcon from "@/common/icons/NumberIcon"

function ServiceCard() {



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

  const serviceCardData = [
    {
      img: no1Image,
      headline: "AI-Powered Feedback",
      desc: "Real-time micro-assessments that reinforce learning."
    },
    {
      img: no2Image,
      headline: "Content-Aware Nudges",
      desc: "Smart reminders based on what you're studying right now."
    },
    {
      img: no3Image,
      headline: "Interactive Dashboards",
      desc: "Get insights on time spent, strengths, gaps, and consistency."
    },
    {
      img: no4Image,
      headline: "WhatsApp Integration",
      desc: "Receive timely nudges and task lists right on your phone."
    }
  ]




  return (
    <div className='w-full   grid grid-cols-1 place-items-center  place-content-center 
    sm:grid-cols-2 sm:gap-6 lg:gap-5 xl:gap-8  sm:px-4 gap-7.5 xl:px-0 px-4  '>

      {
        serviceCardData.map((data, index) =>

          <div key={index} className={`zoom-scale flex  flex-col items-center  h-67 md:h-61 md:items-start lg:h-73 pt-7 lg:pt-7.5 xl:h-66   w-full px-5  border border-white ${index == 0 ? "bg-white " : "bg-[#6754A4] text-white"}  rounded-lg 
             ${index == 1 ? "sm:mt-15" : ""} ${index == 2 ? "sm:-mt-12 lg:-mt-15" : ""}
             `}>
            <div className="w-full flex justify-center sm:justify-start">
              <NumberIcon index={index+1}></NumberIcon>
            </div>
            <h1 className='font-morebold mt-4  text-[22px] '>{data.headline}</h1>
            <p className={`text-center   ${index == 0 ? "text-gray-500" : "text-white"} mt-4 mb-9 sm:mb-0 sm:text-left`}>{data.desc}</p>
          </div>
        )
      }






    </div>
  )
}

export default ServiceCard