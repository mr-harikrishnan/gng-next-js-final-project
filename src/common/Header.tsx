"use client"
import React from 'react'
import logo from "@/assets/vathiyar-ai-logo.png";
import Link from 'next/link';

type SideBarToggleProps = {
    toggleSideBar: () => void;
};

function Header({ toggleSideBar }: SideBarToggleProps) {
    return (
        <header className="absolute flex justify-center  w-full  px-3.5 py-4 lg:px-3.5  lg:mt-2.5  ">

            <div className="  flex w-full justify-between  max-w-292.5  items-center ">

                <div>
                   <Link href={"/"}> <img src={logo.src} className='cursor-pointer ' alt="" /> </Link>
                </div>

                <div className="hidden lg:flex justify-center     ">

                    <div className="flex  items-center justify-center gap-10">
                        <p className="text-[20px] text-center text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Demos</p>
                        <p className="text-[20px] text-center text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">About Us</p>
                        <p className="text-[20px] text-center text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Courses</p>
                        <p className="text-[20px] text-center text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Events</p>
                        <p className="text-[20px] text-center text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">All Pages</p>
                    </div>

                </div>

                <div className="flex items-center gap-8">
                    <p className=" text-[20px] text-center text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Cart</p>

                    <button className="hidden lg:block bg-[#387975] px-8 rounded-xl py-3 text-[1.3rem]  text-white font-medium cursor-pointer tracking-wide text-nowrap hover:bg-[#E5FEFB] hover:text-[#387975] hover:border">
                        Log in
                    </button>

                    <svg
                        onClick={toggleSideBar}
                        className="lg:hidden"
                        width="25" height="15" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.7048 1.9946C26.7048 2.54688 26.2571 2.9946 25.7048 2.9946H9.29051C8.73823 2.9946 8.29051 2.54688 8.29051 1.9946V1.9946C8.29051 1.44231 8.73823 0.994598 9.29051 0.994598H25.7048C26.2571 0.994598 26.7048 1.44231 26.7048 1.9946V1.9946ZM26.7048 9.01617C26.7048 9.56846 26.2571 10.0162 25.7048 10.0162H4.08252C3.53023 10.0162 3.08252 9.56846 3.08252 9.01617V9.01617C3.08252 8.46389 3.53023 8.01617 4.08252 8.01617H25.7048C26.2571 8.01617 26.7048 8.46389 26.7048 9.01617V9.01617ZM26.7048 15.9448C26.7048 16.497 26.2571 16.9448 25.7048 16.9448H9.29051C8.73823 16.9448 8.29051 16.497 8.29051 15.9448V15.9448C8.29051 15.3925 8.73823 14.9448 9.29051 14.9448H25.7048C26.2571 14.9448 26.7048 15.3925 26.7048 15.9448V15.9448Z" fill="black" />
                    </svg>

                </div>
            </div>

        </header >
    )
}

export default Header