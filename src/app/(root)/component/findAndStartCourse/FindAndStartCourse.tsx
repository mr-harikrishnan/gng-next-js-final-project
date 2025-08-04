import Button from '@/common/Button'
import React from 'react'

function FindAndStartCourse() {
    return (
        <div className="w-full px-4 xl:px-0">
            <div
                className="flex flex-col gap-12 justify-center items-center shadow-lg p-4 rounded-lg bg-white
                 sm:flex-col sm:gap-10 sm:p-6
                 md:gap-12 md:p-14
                 lg:flex-row lg:items-center lg:justify-start lg:p-8 lg:pt-13
                 xl:py-14 xl:px-10.5">

                {/* Text Section */}
                <div
                    className="flex flex-col px-2 mt-9 text-center  justify-center items-center xl:items-start
                 sm:mt-6
                  md:mt-0">
                    <h1
                        className="font-morebold leading-9 text-center xl:text-left lg:text-left text-[32px] sm:text-3xl md:text-[36px] lg:text-[42px] lg:leading-[3.25rem] xl:w-80">
                        Find Your Course
                    </h1>
                    <p
                        className="text-[20px] mt-3.5 text-center lg:text-left sm:px-20 md:px-30 md:mt-3 lg:px-0">
                        Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis.
                    </p>
                </div>




                {/* Form Section */}
                <div className="grid grid-cols-1 gap-4 w-full px-5.5 sm:px-33 sm:gap-5 md:grid-cols-2 md:px-0 ">
                    <input
                        type="text"
                        placeholder="Full name*"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] "
                    />
                    <input
                        type="text"
                        placeholder="Email*"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] "
                    />
                    <select
                        defaultValue="English"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] bg-white text-black"
                    >
                        <option disabled value="English">English</option>
                        <option>French</option>
                        <option>Poland</option>
                        <option>Spanish</option>
                        <option>Italian</option>
                        <option>Japanese</option>
                    </select>

                    <div className=" flex justify-center items-center mb-9 sm:mb-6.5 md:mb-0 md:justify-start">
                        <Button text={"Start Now"} bgColour={"#387975"} textColour={"white"} />
                    </div>
                </div>
            </div >
        </div >

    )
}

export default FindAndStartCourse