import React from 'react'
import no1Image from "@/assets/services/number1Image.png"
import no2Image from "@/assets/services/number2Image.png"
import no3Image from "@/assets/services/number3Image.png"
import no4Image from "@/assets/services/number4Image.png"

function ServiceCard() {

  const serviceCardData = [
    {
      img: no1Image,
      headline: "Skilled Lecturers",
      desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
    },
    {
      img: no2Image,
      headline: "Book Library",
      desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
    },
    {
      img: no3Image,
      headline: "Online Classes",
      desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
    },
    {
      img: no4Image,
      headline: "Skilled Lecturers",
      desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
    }
  ]




  return (
    <div className='w-full  grid grid-cols-1 gap-8 place-content-center place-items-center 
    sm:grid-cols-2 sm:gap-6 '>

      {
        serviceCardData.map((data, index) =>

          <div key={index} className={` border border-white ${index == 0 ? "bg-white " : "bg-[#387975] text-white"}  rounded-lg p-2 flex flex-col items-left px-4
      sm:${index % 2 == 0 ? "-mt-8" : "mt-8"} sm:pb-10 `}>
            <img
              className='w-14 mt-6'
              src={data.img.src} alt="" />
            <h1 className='font-morebold  mt-4 text-[22px]'>{data.headline}</h1>
            <p className='text-center  mt-4 mb-9 sm:mb-0 sm:text-left'>{data.desc}</p>
          </div>
        )
      }






    </div>
  )
}

export default ServiceCard