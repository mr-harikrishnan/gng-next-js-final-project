import React from 'react'
import Button from './Button'

type DataType = {
    type: string,
    price: string,
    validity: string,
    desc: string
}

type DataTypeProps = {
    data:DataType
}


function PlanCardSmall({ data }: DataTypeProps) {
    return (
        <div className="flex items-center flex-col w-full max-w-[20rem] xl:min-w-[23rem]   rounded-lg border border-gray-300 text-white">
            <h5 className="text-[22px] mt-9.5  font-morebold text-white">{data.type}</h5>
            <h1 className="text-[72px]  font-morebold text-white">{data.price}</h1>
            <div className="font- m text-white -mt-3.5 ">{data.validity}</div>
            <div className="w-20 h-1 mt-4  bg-white " ></div>
            <p className="text-[16px] mt-7.5   text-center text-white/90  px-4">{data.desc.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>

            <div className='px-6 mt-10 mb-7.5'>
                <Button text={"Get Started"} bgColour={"secondary"} ></Button>
            </div>
        </div>
    )
}

export default PlanCardSmall