import React from 'react'
import no1Image from "@/assets/services/number1Image.png"
import no2Image from "@/assets/services/number2Image.png"
import no3Image from "@/assets/services/number3Image.png"
import no4Image from "@/assets/services/number4Image.png"

function ServiceCard() {
  return (
    <div className='w-full  grid grid-cols-1 gap-8 place-content-center place-items-center  '>


      <div className=' border py-10 p-2 flex flex-col -mt-12 '>
        <img src={no1Image.src} alt="" />

        <h1 className='font-morebold text-left'>Skilled Lecturers</h1>
        <p>Cras ornare sagittis tortor a facilisis nteger augue quam, placerat.</p>
      </div>

      <div className=' border py-10 p-2 flex flex-col '>
        <h1 className='font-morebold text-left'>1</h1>
        <h1 className='font-morebold text-left'>Skilled Lecturers</h1>
        <p>Cras ornare sagittis tortor a facilisis nteger augue quam, placerat.</p>
      </div>

      <div className=' border py-10 p-2 flex flex-col -mt-12'>
        <h1 className='font-morebold text-left'>1</h1>
        <h1 className='font-morebold text-left'>Skilled Lecturers</h1>
        <p>Cras ornare sagittis tortor a facilisis nteger augue quam, placerat.</p>
      </div>

      <div className=' border py-10 p-2 flex flex-col '>
        <h1 className='font-morebold text-left'>1</h1>
        <h1 className='font-morebold text-left'>Skilled Lecturers</h1>
        <p>Cras ornare sagittis tortor a facilisis nteger augue quam, placerat.</p>
      </div>

    </div>
  )
}

export default ServiceCard