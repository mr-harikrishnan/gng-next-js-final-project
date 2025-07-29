import Buton from '@/common/Button'
import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <div className='  flex flex-col items-center px-2 gap-12'>

            <div className="px-4 text-white  flex justify-center items-center flex-col gap-4">
                <p className="font-primary  text-center text-[20px]">Services</p>
                <h1 className="font-morebold -mt-1 text-center text-[32px]">What We Provide To You</h1>
                <p className="font-primary text-center text-[20px]">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                <div className='mt-7'>
                    <Buton text={"Veiw More"}></Buton>
                </div>

            </div>

            <div className="w-full  p-2  ">

                <div className='w-full'>

                    <ServiceCard></ServiceCard>

                </div>

            </div>

        </div>
    )
}

export default Services