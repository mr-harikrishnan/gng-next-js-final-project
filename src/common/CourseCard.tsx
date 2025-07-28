import Link from 'next/link'
import React from 'react'

function CourseCard() {
  return (
    <div className='w-full'>
      <div className='relative'>
        <img src="https://cdn.prod.website-files.com/64184874f371bc66ec2236f9/641acc8e45baae2caa45f142_French%20Img.png" alt="" />
        <p className='absolute bg-white top-5 left-5 px-2 rounded-xl'>Beginer</p>
      </div>

      <div className='flex gap-4 flex-col mt-4'>
        <h1 className="font-morebold">French Language</h1>
        <p>Cras ornare sagittis tortor a facilisis nteger augue quam, placerat.</p>
        <Link href={""} className='text-blue-500 underline-offset-8'>View More</Link>
      </div>

    </div>
  )
}

export default CourseCard