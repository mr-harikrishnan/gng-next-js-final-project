import Button from '@/common/Button'
import React from 'react'

function FindAndStartCourse() {
    return (
        <div className="w-full">
            <div className='flex gap-12 justify-center border p-8 rounded-lg py-17'>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-morebold text-4xl max-w-60'>Find Your Course</h1>
                    <p className='max-w-80'>Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis.</p>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" placeholder='Full Name*' className='border border-gray-500 rounded-md py-3 px-12' />
                    <input type="text" placeholder='Email*' className='border border-gray-500 rounded-md py-3 px-12' />
                    <input type="text" placeholder='English*' className='border border-gray-500 rounded-md py-3 px-12' />
                    <Button text={"Button"} ></Button>
                </div>
            </div>
        </div>
    )
}

export default FindAndStartCourse