"use client"
import {
    animateFromBottom,
    animateZoomIn,
} from "@/utils/gsapAnimations"
import React, { useEffect } from 'react'

import Button from '@/common/Button'
import CourseCard from '@/common/CourseCard'


function OurCourses() {

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

    const ourCourseData = [
        {
            label: "AI Basics",
            topic: "AI for Beginners",
            desc: "Master the basics of AI and ML through interactive videos + quizzes.",
            img: ""
        },
        {
            label: "FullStack Pro",
            topic: "Full Stack Developer",
            desc: "From HTML to deployment — track your way through live coding tasks.",
            img: ""
        },
        {
            label: "Cyber Safe",
            topic: "Cybersecurity Essentials",
            desc: "Learn how to stay safe and understand how systems are protected..",
            img: ""
        }
    ]

    const providingData = [
  {
    label: "FreshStart",
    topic: "SkillBridge\n ",
    desc: "Help freshers build habits\nfrom day one.",
    img: ""
  },
  {
    label: "FullStack Pro",
    topic: "Bridge Courses for\nIntermediate Learners",
    desc: "Revise and reinforce core concepts\nin a smart way.",
    img: ""
  },
  {
    label: "ProEdge",
    topic: "Advanced Skill\nBuilders",
    desc: "Topic-based tracking and learning\nnudges for final years and beyond.",
    img: ""
  }
]


    return (
        <div className='w-full '>
            <h1 className="bottom-animated-img font-morebold text-[32px] text-center md:text-[36px] lg:text-left lg:pl-3.5 lg:text-[42px] xl:pl-0">Popular Learning Tracks</h1>
            <div className='w-full mt-1 flex flex-col items-center sm:px-20 lg:flex-row lg:px-3.5 lg:mt-0 lg:gap-12 xl:px-0 xl:mt-1 xl:gap-58'>
                <p className='bottom-animated-img text-center text-gray-600  text-[20px] lg:text-left'>This section can showcase popular roadmap titles you&apos;ve created.</p>
                <div className='bottom-animated-img mt-8 sm:mt-8 md:mt-12 lg:mt-0'>
                    <Button text={"Veiw More"} bgColour={"primary"}  ></Button>
                </div>
            </div>


            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 mt-12 lg:mt-16 lg:gap-4 xl:gap-8 xl:mt-15 px-2 xl:px-0">
                {ourCourseData.map((data, index) => (
                    <div key={index} className="flex justify-center    lg:mb-3.5 xl:mb-0">
                        <CourseCard data={data} />
                    </div>
                ))}
            </div>

            <h1 className="bottom-animated-img mt-12 font-morebold text-[32px] text-center md:text-[36px] lg:text-left lg:pl-3.5 lg:text-[42px] xl:pl-0">Levels We Support</h1>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-5 mt-12 lg:mt-16 lg:gap-4 xl:gap-8 xl:mt-15 px-2 xl:px-0">
                {providingData.map((data, index) => (
                    <div key={index} className="flex justify-center lg:mb-3.5 xl:mb-0">
                        <CourseCard data={data} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OurCourses