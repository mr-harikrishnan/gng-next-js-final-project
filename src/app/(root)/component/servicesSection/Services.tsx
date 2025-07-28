import Buton from '@/common/Button'
import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <div className=' p-2 flex gap-4'>

            <div className="w-[50%]  p-2  flex justify-center items-left flex-col gap-4">
                <p className="font-primary">Services</p>
                <h1 className="font-morebold">What We Provide To You</h1>
                <p className="font-primary">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                <Buton></Buton>
            </div>

            <div className="w-[50%]  p-2  gap-4">

                <div className='w-full'>

                    <ServiceCard></ServiceCard>

                </div>
                
            </div>

        </div>
    )
}

export default Services