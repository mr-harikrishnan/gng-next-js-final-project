import React from 'react'

function InformationContainer() {
    return (
        <div className='px-3.5 sm:px-19  w-full'>

            <div className='border w-full pt-[10px] sm:pt-[11px]'>
                <div>
                    <h1 className='text-[40px] sm:text-[42px] font-morebold text-center leading-12 sm:leading-12.5 '>Learn With The Best Online School.</h1>
                </div>

                <div className='mt-12.5 text-[20px] text-[#535756] text-center sm:px-1'>
                    <p>The world-leading platform with 10K+ successful lessons.</p>
                </div>

                <form action="" className='flex items-center justify-center w-full border mt-12.5 py-4 border-[#535756]  rounded-xl text-lg
                sm:justify-between sm:px-5
                '>
                    <input type="text" name="" id="" placeholder='Search course, mentor ect' className='placeholder-[#646B6A] sm:w-full' />
                    <button className=' bg-[#387975] ml-1 px-4.5 py-3 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" 
                        className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
                </form>

            </div>
        </div>
    )
}

export default InformationContainer