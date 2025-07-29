import React from 'react'
import TeacherCard from '@/common/TeacherCard'
import ClassTwinkle from './ClassTwinkle'

function TeacherDetails() {
  return (
    <div className="w-full mt-10 ">
      <div className="w-full grid grid-cols-1 gap-7.5 items-center sm:grid-cols-2 sm:gap-5 sm:px-4 md:gap-7 md:mt-13.5 lg:grid-cols-4 lg:gap-2 xl:gap-8 xl:mx-0 xl:mt-13">
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </div>

     

      
    </div>

  )
}

export default TeacherDetails