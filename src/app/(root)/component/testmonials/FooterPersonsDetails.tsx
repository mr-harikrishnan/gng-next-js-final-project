import React from 'react'

type TestmonialsData = {
    img: string;
    desc: string;
    name: string;
    role: string;
}

type FooterPersonDataProps = {
    dataArry?: TestmonialsData[];
    useStateData?: number;
    correctPerson: boolean;
}

function FooterPersonsDetails({ dataArry = [], useStateData, correctPerson }: FooterPersonDataProps) {
    const index = useStateData ?? 0;
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center mb-8 '>
                <div className={`${correctPerson == true ? "bg-[#387975] " : "bg-gray-300"} h-[2px] w-full mx-50 mt-9 min-w-50`}></div>
            </div>
            {/* User 1 */}
            <div className='flex justify-center w-full '>

                <div className='flex items-center gap-4'>
                    <div className=''>
                        <img
                            src={dataArry[index].img}
                            alt={dataArry[index].name}
                            className='w-full'
                        />
                    </div>
                    <div>
                        <h3 className="font-morebold text-[22px] text-[#387975]">{dataArry[index].name}</h3>
                        <p className='text-gray-600'>{dataArry[index].role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterPersonsDetails