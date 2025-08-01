import React from 'react'
import Button from './Button'

type DataType = {
    type: string,
    price: string,
    validity: string,
    desc: string
}

type DataTypeProps = {
    data: DataType
}


function PlanCardBig({ data }: DataTypeProps) {
    return (
        <div className="flex items-center flex-col w-full max-w-[20rem]  bg-[#E2EDEC] rounded-lg border border-gray-300  text-white
        lg:py-5
        ">
            <h5 className="text-[22px] mt-9.5  font-morebold text-[#387975]">{data.type}</h5>
            <h1 className="text-[72px]  font-morebold text-black">{data.price}</h1>
            <div className="font-  text-black -mt-3.5 ">{data.validity}</div>
            <div className="w-20 h-1 mt-4  bg-[#387975] " ></div>
            <p className="text-[16px] mt-7.5   text-center text-[#565A59]  px-4">{data.desc}</p>

            <div className='px-6 mt-10 mb-7.5'>
                <Button text={"Get Started"} bgColour={"#387975"} textColour={"white"}></Button>
            </div>
        </div>
    )
}

export default PlanCardBig