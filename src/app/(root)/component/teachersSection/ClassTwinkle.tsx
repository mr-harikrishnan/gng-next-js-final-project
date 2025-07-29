import Buton from '@/common/Button'
import React from 'react'

function ClassTwinkle() {
    return (
        <div className="mt-26 sm:mt-15 md:mt-20 px-2 w-full mb-15 lg:mt-5 ">

            <div className='w-full sm:items-center flex flex-col  lg:flex-row  gap-9 xl:gap-24'>

                <div className='sm:flex sm:items-center sm:justify-center relative'>
                    <img
                        className='sm:w-[55%] md:w-[69%] lg:w-full '
                        src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641ac245dfe41e211053ec72_Img%20Home.webp" alt="" />
                    <img
                        className='absolute bottom-[-60] left-[180px] sm:left-[275px] md:left-[313px] md:top-[165px] lg:left-[320px] lg:top-[225px] xl:top-[300px] xl:left-[405px]'
                        src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641af96a5a8ad469932baea7_Experiance%20Img.png" alt="" />
                </div>

                <div className='flex justify-center items-center gap-4 flex-col max-w-120 md:max-w-full lg:max-w-120 py-12 lg:items-start lg:gap-6 '>
                    <h1 className='font-morebold text-center text-white text-[32px] md:text-[36px] lg:text-[43px] md:mt-7 lg:text-left'>Welcome To Online Class Twinkle</h1>
                    <p className='text-[20px] text-center text-white lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sit nunc mauris arcu blandit. Turpis vitae lectus a ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className='mt-5'>
                        <Buton></Buton>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClassTwinkle