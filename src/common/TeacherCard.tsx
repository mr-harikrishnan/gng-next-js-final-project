"use client"
import {

  animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

function TeacherCard() {

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
    <div className='w-full '>
      <div className=' flex flex-col shadow-sm bg-[#E2EDEC]  rounded-lg items-center  px-2 mx-4 sm:mx-0  py-2'>
        <div className='w-full flex   items-center justify-center relative'>
          <img
            className='mt-[23px] border-3 border-white hover:border-[#387975] shadow-lg rounded-full'
            src="https://cdn.prod.website-files.com/64184874f371bc66ec2236f9/641ab5d6cec88a5e3da6c523_Teacher%203.png"
            alt=""
          />
          <img
            className='absolute left-[72.7px] top-[19.4px] sm:left-[33px] md:left-[76.7px] md:top-[] lg:top-[10px] lg:left-[27px] xl:left-[40px] '
            src="https://cdn.prod.website-files.com/64184874f371bc66ec2236f9/641ab5f3f54c56a48c3c82b1_Flag%203.png"
            alt=""
          />
        </div>
        <h1 className='font-morebold text-[22.1px] mt-4.5'>Esther Howard</h1>
        <p className='text-[#535756] text-[16px] text-center mt-4 '>Lorem ipsum dolor sit amet consectetur elit sed do.</p>
        <div className='bottom-animated-img w-full flex justify-between text-[16px] text-[#535756]  text-center mt-7 mb-4.5 px-3'>
          <p>Price</p>
          <p className='font-extrabold text-[#367470]'>$25.00</p>
        </div>
      </div>
    </div>

  )
}

export default TeacherCard