import VideoCourseCard from '@/common/VideoCourseCard'
import React from 'react'

function VideoCourses() {
    return (
        <div className='w-full'>

            <div className="w-full flex flex-col items-center justify-center gap-4 ">
                <h1 className="font-morebold text-4xl">Online Video Courses</h1>
                <p>We provide the best service that comes with the best results.</p>
            </div>

            <div className='grid grid-cols-2 gap-8 mt-15'>
                <VideoCourseCard></VideoCourseCard>
                <VideoCourseCard></VideoCourseCard>
            </div>

        </div>
    )
}

export default VideoCourses