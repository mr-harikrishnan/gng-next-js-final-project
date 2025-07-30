import Link from 'next/link'
import React from 'react'

function VideoCourseCard() {
    return (
        <div className='w-full '>

            <div className='relative'>
                <img
                className='rounded-lg'
                src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/642bed7d7775c4be53c506de_Free%20Online%20Courses%20(1)%20(1)-p-800.webp" alt="" />
                <p className='absolute text-[18px]  bg-[#387975] rounded-[30px] text-white px-5.5 py-1 top-3 left-3'>Free</p>
            </div>

            <div className='mt-8 flex flex-col gap-4'>
                <h1 className='font-morebold text-[22px]'>Free Video Course</h1>
                <p>These courses are designed to help people learn new skills or improve existing ones through a series of video lectures, interactive activities, and assessments.</p>
                <Link href={""} className='text-[#387975] text-[18px] underline underline-offset-2 '>View More</Link>
            </div>

        </div>
    )
}

export default VideoCourseCard