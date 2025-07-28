import Button from '@/common/Button'
import CourseCard from '@/common/CourseCard'
import React from 'react'

function OurCourses() {
    return (
        <div className='w-full'>
            <h1 className="font-morebold text-4xl">Our Courses</h1>
            <div className='w-full flex justify-between'>
                <p className='w-200'>Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                <div>
                    <Button></Button>
                </div>
            </div>


            <div className='w-full grid grid-cols-3  place-items-center gap-8 mt-25'>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </div>
        </div>
    )
}

export default OurCourses