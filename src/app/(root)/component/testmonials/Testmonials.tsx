"use client";

import React, { useState } from "react";
import FooterPersonsDetails from "./FooterPersonsDetails";

function Testimonials() {
    const testmonialsData = [
        {
            img: "https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc10c890d2d9149eac7_Testimonial%202.webp",
            desc: "The teachers are simply wonderful. I am very happy that I went to study English here. Lessons and practice at the highest level. Thanks for the lessons!",
            name: "Darrell Steward",
            role: "Developer",
        },
        {
            img: "https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc146b44664c7dd4da6_Testimonial%203.webp",
            desc: "The classes here are really amazing. Every lesson is filled with new things to learn, and the teachers always make sure we understand everything. I feel more confident speaking English now, thanks to their support and patience.",
            name: "Darlene Robertson",
            role: "Realtor",
        },
        {
            img: "https://cdn.prod.website-files.com/64184874f371bc785f2236eb/641addc1ff0f86116af72b41_Testimonial%201.webp",
            desc: "Studying English here was one of the best decisions I've made. The environment is friendly, and the teachers are always encouraging. They help you not just learn grammar, but also use English in real life. I enjoyed every moment of the course!",
            name: "Courtney Henry",
            role: "Designer",
        },
    ];

    const [data, setData] = useState(1);

    const dataChange = (value: number) => {
        setData(value);
    };

    return (
        <section className="w-full mt-16 px-1 md:px-8 xl:mt-33 xl:px-0 ">

            <div className="w-full mt-16 ">

                {/* Header Section */}
                <div className="flex flex-col justify-center items-center gap-4 mt-17">
                    <p className="text-[20px] md:text-xl text-[#387975] ">Testimonials</p>
                    <h1 className="font-morebold text-[32px] md:text-3xl lg:text-4xl max-w-md text-center leading-9">
                        See What Our Students Say's
                    </h1>
                </div>

                {/* Main Testimonial */}
                <div className="w-full  flex flex-col sm:flex-row items-center justify-between mt-12">

                    <button
                        onClick={() => {
                            if (0 < data) {
                                dataChange(data - 1);
                            }
                        }}
                        className="min-w-12.5 min-h-12.5 hidden  sm:flex items-center  text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">

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

                    <div className="text-center flex items-center overflow-y-auto min-h-130 max-h-130 lg:max-h-60 lg:min-h-60 px-10 font-morebold text-[34px] md:text-2xl lg:text-3xl text-[#387975] max-w-4xl  leading-9">
                        {testmonialsData[data].desc}
                    </div>

                    <button
                        onClick={() => {
                            if (testmonialsData.length - 1 > data) {
                                dataChange(data + 1);
                            }
                        }}
                        className="min-w-12.5 min-h-12.5 hidden  sm:flex items-center  text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">
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
                    <div className="flex w-full justify-center mt-9 sm:hidden">
                        <button
                            onClick={() => {
                                if (0 < data) {
                                    dataChange(data - 1);
                                }
                            }}
                            className="min-w-12.5 min-h-12.5 flex items-center px- text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">
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

                        <div className="w-full  flex justify-center ">
                            <div className="bg-[#387975] h-[2px] w-full mx-3 mt-9"></div>
                        </div>

                        <button
                            onClick={() => {
                                if (testmonialsData.length - 1 > data) {
                                    dataChange(data + 1);
                                }
                            }}
                            className="min-w-12.5 min-h-12.5 flex items-center px- text-white justify-center border bg-[#387975] border-gray-300 rounded-lg text-2xl  transition-colors">
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
                <div className="w-full flex md:hidden flex-col justify-center mt-1 ">
                    {/* User 1 */}
                    <div className="w-full  flex justify-center ">
                        <div className="bg-[#387975] h-[2px] w-full mx-40 hidden sm:block "></div>
                    </div>
                    <div className="flex justify-center w-full ">
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
                <div className="hidden md:grid grid-cols-3 justify-center mt-0 ">
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
