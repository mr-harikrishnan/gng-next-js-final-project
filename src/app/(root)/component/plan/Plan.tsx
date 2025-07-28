import React from 'react'

function Plan() {
    return (
        <div className='w-full'>
            <h1 className='font-morebold text-center'>Choose Your Plan</h1>
            <div className='w-full'>
                <div className="flex  mt-15 justify-center items-center gap-8  p-8">
                    <div className="flex items-center gap-9 flex-col max-w-90 p-6 rounded-2xl shadow-lg border">
                        <h5 className="text-2xl font-morebold ">Individual</h5>
                        <h1 className="text-7xl font-morebold ">$50</h1>
                        <div className="text-sm text-gray-300 ">Per Month</div>
                        <p className="mb-6 text-sm">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                        <button className="inline-block  px-5 py-2 border  border-black  rounded-lg  hover:bg-white hover:text-gray-900 transition">Get Started</button>
                    </div>

                    <div className="flex items-center gap-12 flex-col max-w-90 p-6 rounded-2xl shadow-lg border">
                        <h5 className="text-2xl font-morebold ">Individual</h5>
                        <h1 className="text-7xl font-morebold ">$50</h1>
                        <div className="text-sm text-gray-300 ">Per Month</div>
                        <p className="mb-6 text-sm">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                        <button className="inline-block  px-5 py-2 border  border-black  rounded-lg  hover:bg-white hover:text-gray-900 transition">Get Started</button>
                    </div>

                    <div className="flex items-center gap-9 flex-col max-w-90 p-6 rounded-2xl shadow-lg border">
                        <h5 className="text-2xl font-morebold ">Individual</h5>
                        <h1 className="text-7xl font-morebold ">$50</h1>
                        <div className="text-sm text-gray-300 ">Per Month</div>
                        <p className="mb-6 text-sm">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                        <button className="inline-block  px-5 py-2 border  border-black  rounded-lg  hover:bg-white hover:text-gray-900 transition">Get Started</button>
                    </div>

            
                </div>

            </div>

        </div>
    )
}

export default Plan