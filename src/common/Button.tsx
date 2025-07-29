import React from 'react'

function Button({text}:{text:string}) {
  return (
    <a
      href="/about-us"
      className="px-8 py-3 text-[20px] border border-gray-500 text-black bg-white font-medium rounded-md inline-block w-max"
    >{text ? `${text}`:"Button"}
    </a>

  )
}

export default Button