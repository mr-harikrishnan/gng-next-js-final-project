import React from 'react'
import Button from './Button'

function Footer() {
    return (
        <div className='w-full'>
            <div className='flex gap-8 justify-center  p-8 rounded-lg py-17'>

                <div className='flex flex-col gap-3'>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 flex justify-center items-center border rounded-[100px] '>In</div>
                        <div className='w-10 h-10 flex justify-center items-center border rounded-[100px] '>yt</div>
                        <div className='w-10 h-10 flex justify-center items-center border rounded-[100px] '>Tw</div>
                    </div>
                    <h1 className='font-morebold text-4xl max-w-90'>Let’s Find Best Course For You</h1>
                    <Button></Button>
                </div>

                <div className=''>
                    <div>
                        <ul className='flex gap-16 text-nowrap'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>FaQ</li>
                        </ul>
                    </div>

                    <hr className='my-3' />
                    <h1 className='font-morebold text-2xl'>Subscribe to our newsletter</h1>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Email*' className='border border-gray-500 rounded-md py-3 px-12' />
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer