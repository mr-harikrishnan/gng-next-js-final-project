import React from 'react'

function Plan() {
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 py-8 md:py-16'>
            <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16 px-4'>Choose Your Plan</h1>
            <div className='w-full'>
                <div className="flex flex-col lg:flex-row mt-4 md:mt-8 justify-center items-center gap-6 md:gap-8 p-4 md:p-8">
                    {/* Individual Plan */}
                    <div className="flex items-center gap-6 flex-col w-full max-w-sm mx-auto p-6 md:p-8 rounded-2xl border-2 border-white/30 bg-teal-600/50 backdrop-blur-sm text-white">
                        <h5 className="text-xl md:text-2xl font-bold text-white">Individual</h5>
                        <h1 className="text-5xl md:text-6xl font-bold text-white">$50</h1>
                        <div className="text-base md:text-lg text-white/80 mb-2">Per Month</div>
                        <hr className="w-12 md:w-16 border-white/50 mb-4" />
                        <p className="mb-6 md:mb-8 text-sm text-center text-white/90 leading-relaxed px-2">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                        <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Get Started</button>
                    </div>

                    {/* Up to 3 people Plan (Featured) */}
                    <div className="flex items-center gap-6 flex-col w-full max-w-sm mx-auto p-6 md:p-8 rounded-2xl bg-white text-gray-800 shadow-2xl lg:transform lg:scale-105">
                        <h5 className="text-xl md:text-2xl font-bold text-teal-700">Up to 3 people</h5>
                        <h1 className="text-5xl md:text-6xl font-bold text-black">$89</h1>
                        <div className="text-base md:text-lg text-gray-600 mb-2">Per Month</div>
                        <hr className="w-12 md:w-16 border-teal-600 mb-4" />
                        <p className="mb-6 md:mb-8 text-sm text-center text-gray-600 leading-relaxed px-2">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                        <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">Get Started</button>
                    </div>

                    {/* Up to 5 people Plan */}
                    <div className="flex items-center gap-6 flex-col w-full max-w-sm mx-auto p-6 md:p-8 rounded-2xl border-2 border-white/30 bg-teal-600/50 backdrop-blur-sm text-white">
                        <h5 className="text-xl md:text-2xl font-bold text-white">Up to 5 people</h5>
                        <h1 className="text-5xl md:text-6xl font-bold text-white">$119</h1>
                        <div className="text-base md:text-lg text-white/80 mb-2">Per Month</div>
                        <hr className="w-12 md:w-16 border-white/50 mb-4" />
                        <p className="mb-6 md:mb-8 text-sm text-center text-white/90 leading-relaxed px-2">Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis elementum justo, vel consequat ex urna ut massa maecenas justo sapien.</p>
                        <button className="w-full md:w-auto px-6 md:px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan