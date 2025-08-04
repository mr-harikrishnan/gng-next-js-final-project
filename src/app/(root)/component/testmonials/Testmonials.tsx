"use client";
import {
    
    animateFromBottom,
    animateFromLeft,
    animateFromRight,
    
} from "@/utils/gsapAnimations"
import React, { useEffect, useState } from 'react'

import FooterPersonsDetails from "./FooterPersonsDetails";

function Testimonials() {

    const runAnimations = () => {
        animateFromBottom(".bottom-animated-img");
        animateFromLeft(".left-animated-img");
        animateFromRight(".right-animated-img");
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

    const testmonialsData = [
        {
            img: "https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc10c890d2d9149eac7_Testimonial%202.webp",
            desc: "With Vaathiyar, I finally feel like someone &apos;s watching over my learning — and pushing me to finish",
            name: "Harin",
            role: "Final Year ECE Student",
        },
        {
            img: "https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc146b44664c7dd4da6_Testimonial%203.webp",
            desc: "We have improved course completion rates by 30% after introducing Vaathiyar in our training programs.",
            name: "Prof. Suresh",
            role: "Training Head, SRM Institute",
        }
    ];

    const [data, setData] = useState(1);

    const dataChange = (value: number) => {
        setData(value);
    };

    return (
        <section className="w-full  px-1 md:px-3  xl:px-0 ">

            <div className="w-full  ">

                {/* Header Section */}
                <div className="flex flex-col justify-center items-center gap-4 ">
                    <p className="bottom-animated-img text-[20px] md:text-xl text-[#387975] ">Testimonials</p>
                    <h1 className="bottom-animated-img font-morebold text-[32px] md:text-[36px] lg:text-4xl max-w-md text-center leading-9">
                        See What Our Students Say&apos;s
                    </h1>
                </div>

                {/* Main Testimonial */}
                <div className="w-full  flex flex-col sm:flex-row items-center justify-between mt-10 sm:px-3 md:px-0">

                    <button
                        onClick={() => {
                            if (0 < data) {
                                dataChange(data - 1);
                            }
                            else {
                                dataChange(testmonialsData.length - 1)
                            }
                        }}
                        className="left-animated-img cursor-pointer min-w-12.5 min-h-12.5 hidden  sm:flex items-center  text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="4"
                            stroke="currentColor"
                            className="size-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>

                    <div className="bottom-animated-img text-center flex items-center overflow-y-auto  px-10 font-morebold text-[34px] md:text-[32px] lg:text-3xl text-[#387975] max-w-4xl  leading-9">
                        {testmonialsData[data].desc}
                    </div>

                    <button
                        onClick={() => {
                            if (testmonialsData.length - 1 > data) {
                                dataChange(data + 1);
                            }
                            else {
                                dataChange(0)
                            }
                        }}
                        className="right-animated-img cursor-pointer min-w-12.5 min-h-12.5 hidden  sm:flex items-center  text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="4"
                            stroke="currentColor"
                            className="size-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>

                    {/* Navigation Buttons only xs size */}
                    <div className="flex w-full justify-center mt-9 px-2  sm:hidden">
                        <button
                            onClick={() => {
                                if (0 < data) {
                                    dataChange(data - 1);
                                }
                                else {
                                    dataChange(testmonialsData.length - 1)
                                }
                            }}
                            className="left-animated-img cursor-pointer min-w-10 max-h-10 flex items-center px- text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="4"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                />
                            </svg>
                        </button>

                        <div className="bottom-animated-img w-full  flex justify-center ">
                            <div className="bg-[#387975] h-[2px] w-full mx-3 mt-9.5"></div>
                        </div>

                        <button
                            onClick={() => {
                                if (testmonialsData.length - 1 > data) {
                                    dataChange(data + 1);
                                }
                                else {
                                    dataChange(0)
                                }
                            }}
                            className="right-animated-img cursor-pointer min-w-10 max-h-10 flex items-center px- text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="4"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Testimonial Users xs t0 sm*/}
                <div className="w-full flex md:hidden flex-col justify-center mt-20 ">
                    {/* User 1 */}
                    <div className="w-full  flex justify-center ">
                        <div className="bottom-animated-img bg-[#387975] h-[2px] w-full mx-20 hidden sm:block "></div>
                    </div>
                    <div className="bottom-animated-img flex justify-center w-full sm:mt-8 ">
                        <div className="flex items-center gap-4">
                            <div className="">
                                <img
                                    src={testmonialsData[data].img}
                                    alt={testmonialsData[data].name}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <h3 className="font-morebold text-[22px] text-[#387975]">
                                    {testmonialsData[data].name}
                                </h3>
                                <p className="text-gray-600">{testmonialsData[data].role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Users mt to ...*/}
                <div className="bottom-animated-img hidden md:grid grid-cols-3 justify-center mt-0 ">
                    <FooterPersonsDetails
                        dataArry={testmonialsData}
                        useStateData={data == 0 ? testmonialsData.length - 1 : data - 1}
                        correctPerson={false}
                    ></FooterPersonsDetails>

                    <FooterPersonsDetails
                        dataArry={testmonialsData}
                        useStateData={data}
                        correctPerson={true}
                    ></FooterPersonsDetails>

                    <FooterPersonsDetails
                        dataArry={testmonialsData}
                        useStateData={data == testmonialsData.length - 1 ? 0 : data + 1}
                        correctPerson={false}
                    ></FooterPersonsDetails>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
