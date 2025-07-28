import React from 'react'

function Testmonials() {
    return (
        <div className="w-full">
            <div className='flex flex-col items-center gap-4'>
                <p>Testmonials</p>
                <h1 className='font-morebold text-4xl max-w-80 text-center'>See What Our Students Say’s</h1>
            </div>

            <div className='w-full flex items-center justify-center mt-15 '>
                <div className='flex-[1] text-center text-4xl border max-w-12'>{"<"}</div>
                <div className='flex-[10] text-center px-7 font-morebold text-3xl'>The teachers are simply wonderful. I am very happy that I went to study English here. Lessons and practice at the highest level. Thanks for the lessons!</div>
                <div className='flex-[1] text-center text-4xl border max-w-12'>{">"}</div>
            </div>

            <div className='w-full flex items-center gap-4 justify-center mt-15 '>
                <div className='flex-[1]'>
                    <div className='w-full flex justify-center my-7.5 '>
                        <div className='bg-[#c0c0c0] py-[0.5px] w-full'>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc1ff0f86116af72b41_Testimonial%201.webp" alt="" />
                        </div>
                        <div>
                            <h1 className="font-morebold text-2xl">Courtney Henry</h1>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>

                <div className='flex-[1]'>
                    <div className='w-full flex justify-center my-7.5 '>
                        <div className='bg-[#387975] py-[0.5px] w-full'>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc1ff0f86116af72b41_Testimonial%201.webp" alt="" />
                        </div>
                        <div>
                            <h1 className="font-morebold text-2xl">Courtney Henry</h1>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>

                <div className='flex-[1]'>
                    <div className='w-full flex justify-center my-7.5 '>
                        <div className='bg-[#b5b5b5] py-[0.5px] w-full'>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc1ff0f86116af72b41_Testimonial%201.webp" alt="" />
                        </div>
                        <div>
                            <h1 className="font-morebold text-2xl">Courtney Henry</h1>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Testmonials