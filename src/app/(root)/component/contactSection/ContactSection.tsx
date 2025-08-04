import Button from '@/common/Button'
import Footer from '@/common/Footer'
import React from 'react'

function ContactSection() {
    return (
        <div className="w-full px-4 xl:px-0">
            <div
                className="flex flex-col gap-12 justify-center items-center shadow-lg p-4 rounded-lg bg-white
                 sm:flex-col sm:gap-10 sm:p-6
                 md:gap-12 md:p-14
                 lg:flex-row lg:items-center lg:justify-start lg:p-8 lg:pt-13
                 xl:py-14 xl:px-10.5 xl:mt-1 ">

                {/* Text Section */}
                <div
                    className="flex flex-col px-2 mt-9 text-center  justify-center items-center xl:items-start
                 sm:mt-6
                  md:mt-0">

                    <h1
                        className="font-morebold leading-9 text-center xl:text-left lg:text-left text-[32px] sm:text-3xl md:text-[36px] lg:text-[42px] lg:leading-[3.25rem] ">
                        Want Vaathiyar at Your Campus?
                    </h1>

                </div>




                {/* Form Section */}
                <div className="grid grid-cols-1 gap-4 w-full px-5 sm:px-12 md:grid-cols-2 md:gap-5 md:px-0 xl:pt-12">
                    <input
                        type="text"
                        placeholder="Name*"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] w-full"
                    />
                    <input
                        type="text"
                        placeholder="Institute*"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] w-full"
                    />
                    <input
                        type="text"
                        placeholder="Mobile No *"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] w-full"
                    />
                    <input
                        type="text"
                        placeholder="Email *"
                        className="border border-gray-300 placeholder-gray-600 rounded-lg py-[15px] px-5 text-[18px] w-full"
                    />

                    {/* Submit Button - spans full width below inputs */}
                    <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end mt-4 md:mt-6">
                        <Button text={"Submit"} bgColour={"#387975"} textColour={"white"} />
                    </div>
                </div>



            </div >

        </div >

    )
}

export default ContactSection