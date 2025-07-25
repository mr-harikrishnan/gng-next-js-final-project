import logo from "@/assets/vathiyar-ai-logo.png";
import bg1 from "@/assets/homeSection/1_white_and_green_bg.jpg";

import AnimationBanner from "./component/heroSection/AnimationBanner";
import InformationContainer from "./component/heroSection/InformationContainer";


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

        <div className="w-full h-full flex flex-col  lg:flex-row gap-10 ">
          <div className="w-full  mx-auto  lg:w-[50%] relative ">
            <AnimationBanner></AnimationBanner>
          </div>
          <div className="  mb-15  bg-gray lg:w-[50%] ">
            <InformationContainer></InformationContainer>
          </div>
        </div>




      </section>


    </div >
  );
}
