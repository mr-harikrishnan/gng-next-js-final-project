import VideoCourseCard from '@/common/VideoCourseCard'
import React from 'react'

function VideoCourses() {
    return (
        <div className='w-full mt-31 xl:mt-66'>

            <div className="w-full flex flex-col items-center justify-center gap-4 px-4 sm:px-17 text-center  xl:px-80  ">
                <h1 className="font-morebold text-[32px] md:text-[36px] lg:text-[42px] text-center ">Online Video Courses</h1>
                <p className='text-[20px]'>We provide the best service that comes with the best results.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-11 px-4'>
                <VideoCourseCard></VideoCourseCard>
                <VideoCourseCard></VideoCourseCard>
            </div>

        </div>
    )
}

export default VideoCourses