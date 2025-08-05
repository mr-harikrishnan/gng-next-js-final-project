"use client"
import heroSectionBg from "@/assets/homeSection/1_white_and_green_bg.jpg";
import AnimationBanner from "./component/heroSection/AnimationBanner";
import InformationContainer from "./component/heroSection/InformationContainer";
import TeacherHeadline from "./component/learingsAndGuidansSection/LAndGHeadline";
import TeacherCard from "./component/learingsAndGuidansSection/LAndgcardDetails";
import Services from "./component/servicesSection/Services";
import OurCourses from "./component/learningTracksSection/LearningTracks";
import VideoCourses from "./component/SelfPacedOrStructuredSelection/SelfPaced";
import Testmonials from "./component/testmonials/Testmonials";
import Plan from "./component/plan/Plan";
import Footer from "@/common/Footer";
import ClassTwinkle from "./component/learingsAndGuidansSection/LoveVathiyar";

import NavBar from "@/common/NavBar";
import ContactSection from "./component/contactSection/ContactSection";
import LightBgSvg from "@/assets/svg/svgFiles/lightBgSvg";
import TopBottomCurveSvg from "@/assets/svg/svgFiles/TopBottomCurveSvg";
import DarkBottomCurveOnlySvg from "@/assets/svg/svgFiles/DarkBottomCurveOnlySvg";
import LightBottomCurveSvg from "@/assets/svg/svgFiles/LightBottomCurveSvg";


export default function Home() {



  return (
    <div className="overflow-hidden ">

      <NavBar />

      {/* ----- section 1 --------*/}

      <section className="bg-cover bg-center w-full pt-28 flex justify-center relative overflow-hidden min-h-[500px]">
        {/* SVG as background layer - FIXED: Added h-full */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]"> {/* ← Added h-full */}
          <LightBgSvg />
        </div>

        <div className="w-full h-full  flex flex-col lg:flex-row gap-10 lg:gap-4.5 max-w-292.5">
          <div className="w-full flex justify-center mx-auto lg:w-[50%] relative">
            <AnimationBanner />
          </div>
          <div className="mb-20 bg-gray lg:w-[50%] lg:flex">
            <InformationContainer />
          </div>
        </div>
      </section>


      {/* -----section 2 teachers details-------- */}

      <section className="w-full flex justify-center relative min-h-[600px]">
        {/* SVG Background - ensure it covers full height */}
        <div className="absolute top-[610px] sm:top-[565px] md:top-[598px] lg:top-[385px] xl:top-[465px] left-1/2 transform -translate-x-1/2 w-full h-full z-[-1]">
          <TopBottomCurveSvg />
        </div>


        <div className="w-full max-w-292.5 mt-7 overflow-hidden relative z-10">
          <TeacherHeadline />
          <TeacherCard />
          <ClassTwinkle />
        </div>
      </section>


      {/* -----section 3 services-------- */}

      <section className="w-full flex justify-center  relative ">

        <div className="absolute top-[-70px] sm:top-[-82px] md:top-[-54px] lg:top-[-42px] xl:top-[57px] xl:m-[-1px] left-0 w-full  h-full z-[-1]">
          <DarkBottomCurveOnlySvg></DarkBottomCurveOnlySvg>
        </div>

        <div className="max-w-292.5 pt-5 ">
          <Services></Services>
        </div>


      </section>



      {/* -----section 4 OurCourses-------- */}

      <section className=" w-full  flex justify-center  relative ">
        <div className="absolute top-50 left-0 w-full  h-full z-[-1]">
          <LightBottomCurveSvg></LightBottomCurveSvg>
        </div>
        <div className="max-w-292.5 pt-38 sm:pt-31 md:pt-46.5 lg:pt-41 xl:pt-65.5">
          <OurCourses></OurCourses>
        </div>
      </section>



      {/* -----section 5 VideoCourses-------- */}

      <section className=" w-full flex justify-center   relative">

        <div className="max-w-292.5 pt-31 sm:pt-31 md:pt-40.5 lg:pt-37.5 xl:pt-66">
          <VideoCourses></VideoCourses>
        </div>
      </section>

      {/* -----section 6 tesmonials-------- */}

      <section className=" w-full  flex justify-center  ">

        <div className="max-w-292.5 pt-16.5 md:pt-22 xl:pt-54.5    ">
          <Testmonials></Testmonials>

        </div>


      </section>

      {/* -----section 7 plan-------- */}

      <section className=" w-full bg-[#6754A4] flex justify-center  ">

        <div className="max-w-292.5 pt-8 sm:pt-10 md:pt-5 xl:pt-17.5">
          <Plan></Plan>
        </div>



      </section>

      {/* -----section 8 Find And Start Course-------- */}

      <section className=" w-full  flex justify-center  relative ">


        <div className="absolute top-[-40px] left-[0px] h-91  w-screen bg-[#6754A4] z-[-1] 
        sm:h-78
        md:h-65
        lg:h-45
        xl:h-58">

        </div>
        <div className="max-w-292.5 pt-5 md:pt-0 md:-mt-4 xl:pt-12">
          <ContactSection></ContactSection>
        </div>



      </section>

      {/* -----section 8 Footer-------- */}

      <section className=" w-full flex justify-center  relative">
        <div className="absolute  h-100 bottom-0  w-screen bg-gradient-to-b from-white to-[#9588C0] z-[-4]  
       
        
        "></div>

        <div>
          <Footer></Footer>
        </div>

      </section>


    </div >
  );
}
