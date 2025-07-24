import logo from "@/assets/vathiyar-ai-logo.png";
import Btn from "@/component/Btn";
import bg1 from "@/assets/homeSection/1_white_and_green_bg.jpg";

import anHello from "@/assets/homeSection/animation_hello.png";
import anPe1 from "@/assets/homeSection/animation_person_image_1.webp"
import purpleCicle from "@/assets/homeSection/purple_circle.png"

import anhola from "@/assets/homeSection/animation_hola.png"
import anPe2 from "@/assets/homeSection/animation_person_image_2.webp"
import blueCircle from "@/assets/homeSection/sky_blue_cicle.png"


import anhoj from "@/assets/homeSection/animation_ahoj.png"
import anPe3 from "@/assets/homeSection/animation_person_image_3.webp"
import greenCircle from "@/assets/homeSection/green_circle.png"


import anbhonj from "@/assets/homeSection/animation_bonjour.png"
import anPe4 from "@/assets/homeSection/animation_person_image_4.webp"
import orangeCicle from "@/assets/homeSection/orange_circle.png"


export default function Home() {
  return (
    <div className="overflow-auto ">

      <header className="absolute w-full px-3.5 py-4 lg:px-3.5  lg:mt-2.5  xl:px-44 ">

        <div className=" pt-1 flex justify-between   items-center">

          <div>
            <img src={logo.src} alt="" />
          </div>

          <div className="hidden lg:block">

            <div className="flex gap-10 items-center xl:ml-24">
              <p className="text-[1.3rem] text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Demos</p>
              <p className="text-[1.3rem] text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">About Us</p>
              <p className="text-[1.3rem] text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Courses</p>
              <p className="text-[1.3rem] text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Events</p>
              <p className="text-[1.3rem] text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">All Pages</p>
            </div>

          </div>

          <div className="flex items-center gap-4">
            <p className=" text-[1.3rem] text-[#535756] font-medium cursor-pointer tracking-wide text-nowrap">Cart</p>

            <button className="hidden lg:block bg-[#387975] px-8 rounded-xl py-3 text-[1.3rem] xl:mr-2 text-white font-medium cursor-pointer tracking-wide text-nowrap hover:bg-[#E5FEFB] hover:text-[#387975] hover:border">
              Log in
            </button>

            <svg
              className="lg:hidden"
              width="25" height="15" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M26.7048 1.9946C26.7048 2.54688 26.2571 2.9946 25.7048 2.9946H9.29051C8.73823 2.9946 8.29051 2.54688 8.29051 1.9946V1.9946C8.29051 1.44231 8.73823 0.994598 9.29051 0.994598H25.7048C26.2571 0.994598 26.7048 1.44231 26.7048 1.9946V1.9946ZM26.7048 9.01617C26.7048 9.56846 26.2571 10.0162 25.7048 10.0162H4.08252C3.53023 10.0162 3.08252 9.56846 3.08252 9.01617V9.01617C3.08252 8.46389 3.53023 8.01617 4.08252 8.01617H25.7048C26.2571 8.01617 26.7048 8.46389 26.7048 9.01617V9.01617ZM26.7048 15.9448C26.7048 16.497 26.2571 16.9448 25.7048 16.9448H9.29051C8.73823 16.9448 8.29051 16.497 8.29051 15.9448V15.9448C8.29051 15.3925 8.73823 14.9448 9.29051 14.9448H25.7048C26.2571 14.9448 26.7048 15.3925 26.7048 15.9448V15.9448Z" fill="black" />
            </svg>

          </div>
        </div>

      </header >


      {/* -----section 1-------- */}

      <section
        style={{ backgroundImage: `url(${bg1.src})` }}
        className="bg-cover bg-center h-full w-full mb-50 pt-25 xl:px-44">

        <div className="w-full h-full flex flex-col  lg:flex-row gap-11 ">

          <div className="w-full  mx-auto  lg:w-[50%] relative ">

            <div className="grid grid-cols-2 place-items-center mb-20">

              <div className=" ml-12 relative ">
                <img src={anHello.src} alt="" className="absolute bottom-47 left-25 w-17 z-10 sm:-top-10 sm:left-60.5 sm:w-24 lg:left-45 lg:-top-12 xl:left-49" />
                <img src={anPe1.src} alt="" className="mr-12 mb-20 w-33  sm:w-61 sm:ml-7 sm:-mt-5 lg:-mt-8 lg:-ml-3.5 lg:min-w-50 xl:min-w-65 xl:-mt-8 xl:mr-14.5" />
                <img src={purpleCicle.src} alt="" className="absolute bottom-35 left-35 w-12 sm:bottom-60 sm:left-81.5 lg:left-67 lg:top-9 xl:left-77.5" />
              </div>
              <div className="xl:mr-1 mt-9 relative">
                <img src={anhola.src} alt="" className="absolute left-19 top-1.5  w-16 z-10 sm:top-7 sm:left-35 sm:w-22.5 lg:top-29.5 lg:left-37" />
                <img src={anPe2.src} alt="" className="mt-11 mr-12  w-33 sm:w-61 sm:-ml-7 sm:mt-16 lg:w-58 lg:mt-39 lg:-ml-3.5 xl:w-65 xl:-ml-9.5"  />
                <img src={blueCircle.src} alt="" className="absolute bottom-14 right-80 w-19  sm:bottom-34 sm:right-132.5 md:-left-110 xl:bottom-46 xl:-left-100" />
              </div>
              <div className=" -mt-10.5 lg:-mt-14 ml-12 relative">
                <img src={anhoj.src} alt="" className="absolute top-8 right-27.5 w-16 z-10 sm:-top-2 sm:-left-11 sm:w-22.5 lg:-top-36.5 lg:-left-8 xl:-top-16 xl:-left-27" />
                <img src={anPe3.src} alt="" className="mb-19.5  w-33 sm:w-61 sm:ml-7 sm:-mt-10  lg:-ml-8 lg:-mt-26.5 lg:min-w-58 xl:min-w-65 xl:-mt-27 xl:mr-10 "  />
                <img src={greenCircle.src} alt="" className="absolute bottom-33 left-66 w-10 sm:left-136 sm:bottom-50 lg:left-55 lg:-top-1 xl:left-67 xl:-top-2" />
              </div>
              <div className="mt-1.5 relative">
                <img src={anbhonj.src} alt="" className="absolute top-25.5 right-36 w-22 z-10 sm:top-44.5 sm:-left-31  sm:w-31 lg:-left-27.5 lg:top-42 xl:top-47 xl:-left-33" />
                <img src={anPe4.src} alt="" className="mt-8.5 mr-12 w-33 sm:w-61 sm:-ml-7 lg:w-59 lg:mt-13.5 lg:-ml-4 xl:w-65 xl:-ml-10" />
                <img src={orangeCicle.src} alt="" className="absolute bottom-3 right-59 w-13 sm:right-108 lg:-left-45 lg:bottom-6 xl:-left-59" />
              </div>

            </div>

          </div>


          <div className=" border    bg-gray lg:w-[50%] ">
            
          </div>

        </div>




      </section>


    </div >
  );
}
