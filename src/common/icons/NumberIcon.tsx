import React from 'react';

type NumberProps = {
    index: number;
};

const NumberIcon = ({ index }: NumberProps) => {
    return (
        <>
            {index === 1 ? (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#6754A4" fillOpacity="0.13" />
                    <circle cx="30" cy="30" r="20" fill="#6754A4" />
                    <text
                        x="30"
                        y="35"
                        textAnchor="middle"
                        fontSize="20"
                        fontFamily="morebold"
                        fill="white"
                    >
                        {index}
                    </text>
                </svg>
                    ) : (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#9588C0" fillOpacity="0.3" />
                    <circle cx="30" cy="30" r="20" fill="white" />
                    <text
                        x="30"
                        y="35"
                        textAnchor="middle"
                        fontSize="20"
                        fontFamily="morebold"
                        fill="#6754A4"
                        
                    >
                        {index}
                    </text>
                </svg>
            )}
        </>
    );
};

export default NumberIcon;
