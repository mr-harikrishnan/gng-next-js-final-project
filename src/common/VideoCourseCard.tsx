import Link from 'next/link'
import React from 'react'

function VideoCourseCard() {
    return (
        <div className='w-full '>

            <div className='relative'>
                <img src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/642bed7d7775c4be53c506de_Free%20Online%20Courses%20(1)%20(1)-p-800.webp" alt="" />
                <p className='absolute bg-green-800 rounded-xl text-white px-3 top-5 left-5'>Free</p>
            </div>

            <div className='mt-8 flex flex-col gap-4'>
                <h1 className='font-morebold text-2xl'>Free Video Course</h1>
                <p>These courses are designed to help people learn new skills or improve existing ones through a series of video lectures, interactive activities, and assessments.</p>
                <Link href={""} className='text-blue-500 underline-offset-8 '>View More</Link>
            </div>

        </div>
    )
}

export default VideoCourseCard