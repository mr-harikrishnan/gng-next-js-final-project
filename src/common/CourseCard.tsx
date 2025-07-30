import Link from 'next/link'
import React from 'react'

type CourseCardProps = {
  data: {
    level: string;
    lang: string;
    desc: string;
  }
}

function CourseCard({ data }: CourseCardProps) {
  return (
    <div className='w-full  px-2'>
      <div className='relative'>
        <img src="https://cdn.prod.website-files.com/64184874f371bc66ec2236f9/641acc8e45baae2caa45f142_French%20Img.png" alt="" />
        <p className='absolute bg-white top-3.5 left-3.5 px-5 py-1 rounded-[40px] text-[#459a94]'>{data.level}</p>
      </div>

      <div className='flex gap-4 flex-col mt-4'>
        <h1 className="font-morebold text-[22px] mt-3">{data.lang}</h1>
        <p>{data.desc}</p>
        <Link href={""} className='text-[#2e6763] text-[18px] underline underline-offset-2'>View More</Link>
      </div>

    </div>
  )
}

export default CourseCard