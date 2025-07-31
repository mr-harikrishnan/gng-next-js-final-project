import Button from '@/common/Button'
import PlanFullCard from '@/common/PlanFullCard'
import React from 'react'

function Plan() {
    return (
        <div className='w-full min-h-screen  py-8 md:py-16'>
            <h1 className='text-[32px] font-morebold mt-8.5  md:text-5xl  text-center text-white  md:mb-16 px-4'>Choose Your Plan</h1>
            <div className='w-full'>
                <PlanFullCard></PlanFullCard>
            </div>
        </div>
    )
}

export default Plan