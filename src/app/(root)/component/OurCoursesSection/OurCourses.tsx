import Button from '@/common/Button'
import CourseCard from '@/common/CourseCard'
import React from 'react'

function OurCourses() {

    const ourCourseData = [
        {
            level: "Beginner",
            lang: "French Language",
            desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
        },
        {
            level: "Upper-Intermediate",
            lang: "English Language",
            desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
        },
        {
            level: "Beginner",
            lang: "German Language",
            desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
        },
        {
            level: "Beginner",
            lang: "Children Courses",
            desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
        },
        {
            level: "Intermediate",
            lang: "Intermediate",
            desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
        },
        {
            level: "Advanced",
            lang: "Advanced Course",
            desc: "Cras ornare sagittis tortor a facilisis nteger augue quam, placerat."
        },
    ]
    return (
        <div className='w-full mt-59.5
        sm:mt-29
         md:mt-38
         xl:mt-48 '>
            <h1 className="font-morebold text-[32px] text-center md:text-[36px] lg:text-left lg:pl-3.5 lg:text-[42px] xl:pl-0">Our Courses</h1>
            <div className='w-full mt-1 flex flex-col items-center sm:px-20 lg:flex-row lg:px-3.5 lg:mt-2 lg:gap-12 xl:px-0 xl:mt-1 xl:gap-58'>
                <p className='text-center  text-[20px] lg:text-left'>Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                <div className='mt-8 sm:mt-8 md:mt-12 lg:mt-0'>
                    <Button text={"Veiw More"}></Button>
                </div>
            </div>


            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 mt-12 px-2 xl:px-0">
                {ourCourseData.map((data, index) => (
                    <div key={index} className="flex justify-center">
                        <CourseCard data={data} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurCourses