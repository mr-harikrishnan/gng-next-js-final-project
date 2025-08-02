"use client"
import heroSectionBg from "@/assets/homeSection/1_white_and_green_bg.jpg";
import AnimationBanner from "./component/heroSection/AnimationBanner";
import InformationContainer from "./component/heroSection/InformationContainer";
import TeacherHeadline from "./component/teachersSection/TeacherHeadline";
import TeacherCard from "./component/teachersSection/TeacherDetails";
import Services from "./component/servicesSection/Services";
import OurCourses from "./component/OurCoursesSection/OurCourses";
import VideoCourses from "./component/VideoCoursesSection/VideoCourses";
import Testmonials from "./component/testmonials/Testmonials";
import Plan from "./component/plan/Plan";
import FindAndStartCourse from "./component/findAndStartCourse/FindAndStartCourse";
import Footer from "@/common/Footer";
import ClassTwinkle from "./component/teachersSection/ClassTwinkle";
import teacherSecBg from "@/assets/teachersSection/teachersSection.bg.png"
import servicesSecBg from "@/assets/services/servicesbg.png"
import NavBar from "@/common/NavBar";




export default function Home() {

 

  return (
    <div className="overflow-hidden ">

      <NavBar/>

      {/* ----- section 1 --------*/}
      <section
        style={{ backgroundImage: `url(${heroSectionBg.src})` }}
        className="bg-cover bg-center w-full  pt-25   flex justify-center">

        <div className="w-full h-full flex flex-col  lg:flex-row gap-10 lg:gap-4.5 max-w-292.5 ">
          <div className="w-full flex justify-center  mx-auto  lg:w-[50%] relative ">
            <AnimationBanner></AnimationBanner>
          </div>
          <div className="  mb-15  bg-gray lg:w-[50%] lg:flex ">
            <InformationContainer></InformationContainer>
          </div>
        </div>

      </section>



      {/* -----section 2 teachers details-------- */}

      <section className=" w-full flex justify-center   relative ">

        <div className="w-full max-w-292.5 mt-7 overflow-hidden">
          <TeacherHeadline></TeacherHeadline>
          <TeacherCard></TeacherCard>
          <ClassTwinkle></ClassTwinkle>
          <img
            className='w-full absolute object-cover top-[617px] left-0 z-[-2] h-[153rem] sm:h-[93.5rem] sm:top-[445px] md:h-[93.6rem] md:top-[599px]  lg:h-[61.5rem] lg:top-[385px] xl:h-[60.5rem] xl:top-[465px]        '
            src={teacherSecBg.src}
            alt=""
          />
        </div>

      </section>


      {/* -----section 3 services-------- */}

      <section className=" w-full   mt-15 xl:px-38  relative xl:pt-38">


        <Services></Services>
        <img
          className="object-cover w-full  absolute z-[-3] left-[0px] top-[-105px] h-[112.5rem]
        sm:h-[62.5rem] sm:top-[-138px]
        md:h-[70.6rem] 
        lg:h-[54.3rem]
        xl:top-[12px] xl:h-[52.2rem] "
          src={servicesSecBg.src} alt="" />

      </section>



      {/* -----section 4 OurCourses-------- */}

      <section className=" w-full   mt-25 xl:px-44 relative ">

        <OurCourses></OurCourses>
        <img
          className="object-cover w-full  absolute z-[-4] left-[0px] top-[-63px] h-[177.5rem]
          sm:h-[97rem]
          md:top-[-95px] md:h-[102.5rem]
          lg:h-[68rem]
          xl:top-[-175px] xl:h-[79.7rem]"
          src={heroSectionBg.src} alt="" />

      </section>



      {/* -----section 5 VideoCourses-------- */}

      <section className=" w-full  mt-15 xl:px-40  ">

        <VideoCourses></VideoCourses>

      </section>

      {/* -----section 6 tesmonials-------- */}

      <section className=" w-full  mt-15 xl:px-30  ">

        <Testmonials></Testmonials>

      </section>

      {/* -----section 7 plan-------- */}

      <section className=" w-full bg-[#387975]  mt-15 xl:px-44  ">

        <Plan></Plan>

      </section>

      {/* -----section 8 Find And Start Course-------- */}

      <section className=" w-full  xl:px-44  relative ">
        <div className="absolute top-[-40px] left-[0px] h-91  w-screen bg-[#387975] z-[-1] 
        sm:h-78
        md:h-65
        lg:h-45
        xl:h-50">

        </div>

        <FindAndStartCourse></FindAndStartCourse>

      </section>

      {/* -----section 8 Footer-------- */}

      <section className=" w-full  mt-15 xl:px-44  relative">
        <div className="absolute top-[-337px] left-[0px] h-[93.5rem]   w-screen bg-gradient-to-b from-white to-[#e3f4ef] z-[-4] 
        sm:top-[-330px] sm:h-[82rem]
        md:top-[-330px] md:h-[69.5rem]
        lg:top-[-330px] lg:h-[50.5rem]
        
        "></div>

        <Footer></Footer>



      </section>


    </div >
  );
}
