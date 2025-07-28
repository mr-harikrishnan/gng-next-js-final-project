import React from 'react'
import TeacherCard from '@/common/TeacherCard'
import ClassTwinkle from './ClassTwinkle'

function TeacherDetails() {
  return (
    <div className="w-full  mt-20  px-4">

      <div className="w-full  flex justify-between">
        <TeacherCard></TeacherCard>
        <TeacherCard></TeacherCard>
        <TeacherCard></TeacherCard>
        <TeacherCard></TeacherCard>
      </div>

      <div className='overflow-hidden'>
        <ClassTwinkle></ClassTwinkle>
      </div>
    </div>
  )
}

export default TeacherDetails