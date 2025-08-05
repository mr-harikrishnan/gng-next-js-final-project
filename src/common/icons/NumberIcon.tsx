import React from 'react'
type NumberProps = {
    index: number;
}
const NumberIcon = ({ index }: NumberProps) => {
    return (
       
            <div className={`w-11 h-11 pt-1 rounded-full border-7 border-purple-300 border-opacity-5  flex font-morebold text-[25px] justify-center items-center ${index == 1 ? "bg-white" : "bg-primary"}`}>
                {index}
            </div>
            
       
        )
}

export default NumberIcon