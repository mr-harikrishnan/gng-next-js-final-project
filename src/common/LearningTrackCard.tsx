"use client"
import {
  animateFromBottom,
  animateZoomIn,
} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import Link from 'next/link'

type LearningTrackCardProps = {
  data: {
    label: string;
    topic: string;
    desc: string;
  }
}

function LearningTrackCard({ data }: LearningTrackCardProps) {

  const runAnimations = () => {

    animateFromBottom(".bottom-animated-img");

    animateZoomIn(".zoom-scale");

  };

  useEffect(() => {
    runAnimations();
    const handleResize = () => {
      // Clear previous animations and re-run (optional if you want to reset)
      runAnimations();
    };

    // Debounce resize
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debouncedResize);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div className='w-full   px-2 xl:px-0'>
      <div className='relative'>
        <img className="zoom-scale" src="https://cdn.prod.website-files.com/64184874f371bc66ec2236f9/641acc8e45baae2caa45f142_French%20Img.png" alt="" />
        <p className='bottom-animated-img absolute bg-white top-3.5 left-3.5 px-5 py-1 rounded-[40px] text-primary'>{data.label}</p>
      </div>

      <div className='flex gap-4 flex-col mt-4'>
        <h1 className="bottom-animated-img font-morebold text-[22px] mt-3"> {data.topic.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}</h1>
        <p className="bottom-animated-img">{data.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
        <Link href={""} className='bottom-animated-img text-primary text-[18px] underline underline-offset-2'>View More</Link>
      </div>

    </div>
  )
}

export default LearningTrackCard