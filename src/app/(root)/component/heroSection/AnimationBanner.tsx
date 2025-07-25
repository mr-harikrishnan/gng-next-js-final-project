import React from 'react'
import anHello from "@/assets/homeSection/animation_hello.png";
import anPe1 from "@/assets/homeSection/animation_person_image_1.webp"
import purpleCicle from "@/assets/homeSection/purple_circle.png"

import anhola from "@/assets/homeSection/animation_hola.png"
import anPe2 from "@/assets/homeSection/animation_person_image_2.webp"
import blueCircle from "@/assets/homeSection/sky_blue_cicle.png"


import anhoj from "@/assets/homeSection/animation_ahoj.png"
import anPe3 from "@/assets/homeSection/animation_person_image_3.webp"
import greenCircle from "@/assets/homeSection/green_circle.png"


import anbhonj from "@/assets/homeSection/animation_bonjour.png"
import anPe4 from "@/assets/homeSection/animation_person_image_4.webp"
import orangeCicle from "@/assets/homeSection/orange_circle.png"

function AnimationBanner() {
  return (


    <div className="grid grid-cols-2 place-items-center ">

      <div className=" ml-12 relative ">
        <img src={anHello.src} alt="" className="absolute bottom-47 left-25 w-17 z-10 sm:-top-10 sm:left-60.5 sm:w-24 md:left-[315px] md:top-[-35px] lg:left-45 lg:-top-12 xl:left-49" />
        <img src={anPe1.src} alt="" className="mr-12 mb-20 w-33 sm:w-61 sm:ml-7 sm:-mt-5 md:-mt-5 md:ml-24 md:min-w-67 lg:-mt-8 lg:-ml-3.5 lg:min-w-50 xl:min-w-65 xl:-mt-8 xl:mr-14.5" />
        <img src={blueCircle.src} alt="" className="absolute left-[-80px] top-[77px] w-[76px] sm:left-[-42px] sm:top-[110px] md:left-[0.5px] md:top-[125px] lg:left-[-100px] lg:top-[110px] xl:left-[-127px] xl:top-[122px]" />

      </div>
      <div className="xl:mr-1 mt-9 relative">
        <img src={anhola.src} alt="" className="absolute left-19 top-1.5  w-16 z-10 sm:top-7 sm:left-35 sm:w-22.5 md:top-[37px] md:left-[145px] lg:top-29.5 lg:left-37" />
        <img src={anPe2.src} alt="" className="mt-11 mr-12  w-33 sm:w-61 sm:-ml-7 sm:mt-16 md:w-67 md:mr-21 lg:w-58 lg:mt-39 lg:-ml-3.5 xl:w-65 xl:-ml-9.5" />
        <img src={purpleCicle.src} alt="" className="absolute top-[-11px] left-[5px] w-[48px] sm:top-[2px] sm:left-[24px] md:left-[-13px] lg:left-[55px]  lg:top-[67px] xl:left-[40px] xl:top-[70px]" />

      </div>

      <div className=" -mt-10.5 lg:-mt-14 ml-12 relative">
        <img src={anhoj.src} alt="" className="absolute top-8 right-27.5 w-16 z-10 sm:-top-2 sm:-left-11 sm:w-22.5 md:left-[-20px] md:top-[-2.5px]  lg:-top-36.5 lg:-left-8 xl:-top-14.5 xl:-left-35.5" />
        <img src={anPe3.src} alt="" className="mb-19.5  w-33 sm:w-61 sm:ml-7 sm:-mt-10 md:w-67 md:-mt-8 md:ml-12 lg:-ml-8 lg:-mt-26.5 lg:min-w-58 xl:min-w-65 xl:-mt-26 xl:-ml-16 " />
        <img src={orangeCicle.src} alt="" className="absolute left-[25px] bottom-[10px] w-[52px] sm:left-[77px] sm:bottom-[-5px] md:bottom-[-28px] md:left-[105px] lg:top-[200px] lg:left-[13px] xl:left-[-12px] xl:top-[230px]" />
      </div>

      <div className="mt-1.5 lg:ml-1.5  relative">
        <img src={anbhonj.src} alt="" className="absolute top-25.5 right-36 w-22 z-10 sm:top-44.5 sm:-left-31 md:top-[202px] md:left-[-105px]  sm:w-31 lg:-left-27.5 lg:top-42 xl:top-47 xl:-left-33" />
        <img src={anPe4.src} alt="" className="mt-8.5 mr-12 w-33 sm:w-61 sm:-ml-7 md:w-67 md:mr-21 md:mt-9 lg:w-59 lg:mt-13.5 lg:-ml-4 xl:w-65 xl:-ml-10" />
        <img src={greenCircle.src} alt="" className="absolute right-[11px] top-[-8px] w-[40px] sm:right-[-19px] sm:top-[14px] md:right-[0px] md:top-[23px]  lg:left-[20px] lg:top-[9px] xl:left-[19px] xl:top-[4px]" />

      </div>



    </div>


  )
}

export default AnimationBanner