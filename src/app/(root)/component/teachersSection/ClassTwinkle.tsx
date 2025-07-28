import Buton from '@/common/Button'
import React from 'react'

function ClassTwinkle() {
    return (
        <div className="mt-30 w-full  p-2 ">

            <div className='w-full  flex p-4 gap-4'>

                <div className=''>
                    <div className="  px-65 py-40 relative flex justify-center items-center">
                        <div className="border absolute rounded px-60 py-35 bg-gray-600 z-3"></div>
                        <div className="border absolute rounded px-55 py-30 bottom-25 bg-gray-400 z-2"></div>
                        <div className="border absolute rounded px-50 py-25 bottom-45 bg-gray-200 z-1"></div>
                    </div>
                </div>

                <div className='flex justify-center items-start gap-4 flex-col '>
                    <h1>Welcome to Online Class Twinkle</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sit nunc mauris arcu blandit. Turpis vitae lectus a ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Buton></Buton>
                </div>
            </div>

        </div>
    )
}

export default ClassTwinkle