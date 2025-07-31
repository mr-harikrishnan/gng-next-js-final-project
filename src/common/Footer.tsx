import React from 'react'
import Button from './Button'

function Footer() {
    return (
        <div className='w-full '>
            {/* Main Footer Content */}
            <div className='flex flex-col lg:flex-row gap-8  justify-between items-center p-4 md:p-8  max-w-7xl mx-auto
            lg:p-4 lg:gap-0
            '>

                {/* Left Section */}
                <div className='flex flex-col items-center gap-6 w-full 
                lg:items-start lg:w-170'>
                    {/* Social Icons */}
                    <div className='flex gap-8 justify-center  '>
                        <div className='w-12 h-12 flex justify-center items-center border border-[#387975] text-[#387975] rounded-full hover:bg-[#387975] hover:text-white transition-colors cursor-pointer'>
                            <span className=' text-[18px]'>In</span>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center border border-[#387975] text-[#387975] rounded-full hover:bg-[#387975] hover:text-white transition-colors cursor-pointer'>
                            <span className=' text-[18px]'>Yt</span>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center border border-[#387975] text-[#387975] rounded-full hover:bg-[#387975] hover:text-white transition-colors cursor-pointer'>
                            <span className=' text-[18px]'>Tw</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className='font-morebold text-center lg:text-left text-[32px] md:text-4xl lg:text-[42px] text-black leading-tight max-w-md'>
                        Let&apos;s Find Best Course For You
                    </h1>

                    {/* Contact Button */}
                    <div className='mt-6'>
                        <Button text={"Contact Us"}></Button>
                    </div>
                </div>

                {/* Right Section */}
                <div className='w-full  flex flex-col  gap-6'>
                    {/* Navigation Menu */}
                    <div>
                        <ul className='grid  grid-cols-1 sm:grid-cols-3 items-center mt-8 gap-[23.5px] text-[#387975] 
                        sm:flex-row sm:flex-wrap sm:gap-[20px] sm:px-14 sm:mt-14  
                        md:gap-8 md:grid-cols-6 md:px-5 
                        lg:gap-20 lg:px-0 lg:-mt-12 '>
                            <li className='hover:text-teal-800 cursor-pointer text-center text-nowrap text-[20px]  transition-colors'>Home</li>
                            <li className='hover:text-teal-800 cursor-pointer text-center text-nowrap text-[20px]  transition-colors'>About Us</li>
                            <li className='hover:text-teal-800 cursor-pointer text-center text-nowrap text-[20px]  transition-colors'>Courses</li>
                            <li className='hover:text-teal-800 cursor-pointer text-center text-nowrap text-[20px]  transition-colors'>Services</li>
                            <li className='hover:text-teal-800 cursor-pointer text-center text-nowrap text-[20px]  transition-colors'>Blog</li>
                            <li className='hover:text-teal-800 cursor-pointer text-center text-nowrap text-[20px]  transition-colors'>FAQ</li>
                        </ul>
                    </div>

                    {/* Divider */}
                    <hr className='border-gray-300' />

                    {/* Newsletter Section */}
                    <div className='flex flex-col items-center  gap-4 mt-7 sm:px-15 md:px-28 lg:px-0 lg:items-start'>
                        <h2 className='font-morebold text-center text-[22px] px-4 md:text-2xl lg:text-start lg:px-0 leading-6.5 text-[#387975]'>Subscribe to our newsletter</h2>
                        <div className='w-full flex flex-col sm:flex-row gap-5 lg:max-w-120 '>
                            <input
                                type="email"
                                placeholder='Email*'
                                className='flex mt-2 placeholder-gray-600 text-[20px] border w-full border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#387975] focus:border-transparent
                                sm:mt-0'
                            />
                            <div className="w-full sm:w-max flex justify-center items-center">
                                <Button text={"Subscribe"}></Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className=' mt-5 border-gray-300 py-6 px-6 mb-5  sm:px-15  md:px-8 lg:px-16 '>
                <div className='max-w-7xl mx-auto flex justify-center'>
                    <p className='text-gray-600 text-[18px] leading-8 md:text-base text-center lg:text-center lg:max-w-120'>
                        © Language Courses 128. All Rights Reserved. Licensing Webflow Templates by 128.digital. Powered by Webflow
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer