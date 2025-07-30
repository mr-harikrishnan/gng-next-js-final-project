import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-gray-50'>
            {/* Main Footer Content */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start p-6 md:p-8 lg:p-16 max-w-7xl mx-auto'>
                
                {/* Left Section */}
                <div className='flex flex-col gap-6 w-full lg:w-1/2'>
                    {/* Social Icons */}
                    <div className='flex gap-4'>
                        <div className='w-12 h-12 flex justify-center items-center border-2 border-teal-600 text-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors cursor-pointer'>
                            <span className='font-semibold'>In</span>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center border-2 border-teal-600 text-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors cursor-pointer'>
                            <span className='font-semibold'>Yt</span>
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center border-2 border-teal-600 text-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors cursor-pointer'>
                            <span className='font-semibold'>Tw</span>
                        </div>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight max-w-md'>
                        Let's Find Best Course For You
                    </h1>
                    
                    {/* Contact Button */}
                    <button className='bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors w-fit'>
                        Contact Us
                    </button>
                </div>

                {/* Right Section */}
                <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                    {/* Navigation Menu */}
                    <div>
                        <ul className='flex flex-wrap gap-4 md:gap-8 lg:gap-12 text-teal-600 font-medium'>
                            <li className='hover:text-teal-800 cursor-pointer transition-colors'>Home</li>
                            <li className='hover:text-teal-800 cursor-pointer transition-colors'>About Us</li>
                            <li className='hover:text-teal-800 cursor-pointer transition-colors'>Courses</li>
                            <li className='hover:text-teal-800 cursor-pointer transition-colors'>Services</li>
                            <li className='hover:text-teal-800 cursor-pointer transition-colors'>Blog</li>
                            <li className='hover:text-teal-800 cursor-pointer transition-colors'>FAQ</li>
                        </ul>
                    </div>

                    {/* Divider */}
                    <hr className='border-gray-300' />
                    
                    {/* Newsletter Section */}
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-bold text-xl md:text-2xl text-teal-600'>Subscribe to our newsletter</h2>
                        <div className='flex flex-col sm:flex-row gap-3'>
                            <input 
                                type="email" 
                                placeholder='Email*' 
                                className='flex-1 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent' 
                            />
                            <button className='bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className='border-t border-gray-300 py-6 px-6 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <p className='text-gray-600 text-sm md:text-base text-center lg:text-left'>
                        © Language Courses 128. All Rights Reserved. Licensing Webflow Templates by 128.digital. Powered by Webflow
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer