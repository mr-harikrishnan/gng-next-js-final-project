"use client"
import {
    animateFromBottom,

} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import VideoCourseCard from '@/common/VideoCourseCard'


function VideoCourses() {

    const videoCourse=[
        {
            topic:"Free Learning Roadmaps\n ",
            desc:"Open tracks students can self-enroll into and get guidance.\n",
            img:"https://cdn.prod.website-files.com/64184874f371bc785f2236eb/642bed7d7775c4be53c506de_Free%20Online%20Courses%20(1)%20(1)-p-800.webp"
        },
        {
            topic:"Premium Institution Roadmaps",
            desc:"Structured journeys designed for college batches, with batch-level analytics and certificates.",
            img:"https://cdn.prod.website-files.com/64184874f371bc785f2236eb/642bed504b8284a112ed2f23_Premium%20Online%20Courses%20(1)%20(1).webp"
        }
    ]

    const runAnimations = () => {
        animateFromBottom(".bottom-animated-img");
    };

    useEffect(() => {
        runAnimations();
        const handleResize = () => {
            runAnimations();
        };

        let resizeTimeout: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 200);
        };

        window.addEventListener("resize", debouncedResize);
        return () => {
            window.removeEventListener("resize", debouncedResize);
        };
    }, []);

    return (
        <div className='bottom-animated-img bottom-animated-img w-full '>

            <div className="bottom-animated-img w-full flex flex-col items-center justify-center gap-4 px-4 sm:px-17 text-center  xl:px-80  ">
                <h1 className="font-morebold text-[32px] md:text-[36px] lg:text-[42px] text-center ">Self-Paced or Structured? Your Call.</h1>
                <p className='text-[20px]'>Choose what fits you best — learn at your own speed or follow guided paths with milestones.</p>
            </div>

            <div className='bottom-animated-img grid grid-cols-1 sm:grid-cols-2 gap-8 mt-11 px-4'>
                {videoCourse.map((data,index)=>(
                <VideoCourseCard key={index} data={data}></VideoCourseCard>

                ))}
                
            </div>

        </div>
    )
}

export default VideoCourses