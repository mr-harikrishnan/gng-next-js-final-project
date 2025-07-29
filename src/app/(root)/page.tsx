import logo from "@/assets/vathiyar-ai-logo.png";
import heroSectionBg from "@/assets/homeSection/1_white_and_green_bg.jpg";
import teachersSectionBg from "@/assets/teachersSection/teachersSection.bg.png"


import AnimationBanner from "./component/heroSection/AnimationBanner";
import InformationContainer from "./component/heroSection/InformationContainer";
import TeacherHeadline from "./component/teachersSection/TeacherHeadline";
import TeacherCard from "./component/teachersSection/TeacherDetails";
import Header from "../../common/Header";
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



export default function Home() {
  return (
    <div className="overflow-x-hidden ">

      <Header></Header>

      {/* -----section 1-------- */}
      <section
        style={{ backgroundImage: `url(${heroSectionBg.src})` }}
        className="bg-cover bg-center w-full  pt-25 xl:px-44  ">

        <div className="w-full h-full flex flex-col  lg:flex-row gap-10 lg:gap-4.5 ">
          <div className="w-full  mx-auto  lg:w-[50%] relative ">
            <AnimationBanner></AnimationBanner>
          </div>
          <div className="  mb-15  bg-gray lg:w-[50%] lg:flex ">
            <InformationContainer></InformationContainer>
          </div>
        </div>

      </section>



      {/* -----section 2 teachers details-------- */}

      <section className=" w-full   mt-27 xl:px-44 relative ">

        <div className="w-full  overflow-hidden">
          <TeacherHeadline></TeacherHeadline>
          <TeacherCard></TeacherCard>
          <ClassTwinkle></ClassTwinkle>
          <img
            className='w-full object-cover h-[145rem] sm:h-[87rem] md:h-[92.5rem]  lg:h-[56.5rem] xl:h-[57.1rem] absolute  top-[498px] left-0 z-[-1] sm:top-[380px] lg:top-[320px] xl:top-[400px] '
            src={teacherSecBg.src}
            alt=""
          />
        </div>

      </section>


      {/* -----section 3 services-------- */}

      <section className=" w-full   mt-15 xl:px-38  relative xl:pt-38">


        <Services></Services>
        <img
          className="object-cover w-full  absolute z-[-1] left-[0px] top-[-75px] h-[112.5rem]
        sm:h-[72.5rem] sm:top-[-128px]
        md:h-[70.6rem] 
        lg:h-[54.3rem]
        xl:top-[12px] xl:h-[56.2rem] "
          src={servicesSecBg.src} alt="" />

      </section>



      {/* -----section 4 OurCourses-------- */}

      <section className=" w-full   mt-25 xl:px-44  ">

        <OurCourses></OurCourses>

      </section>



      {/* -----section 5 VideoCourses-------- */}

      <section className=" w-full  mt-15 xl:px-44  ">

        <VideoCourses></VideoCourses>

      </section>

      {/* -----section 6 tesmonials-------- */}

      <section className=" w-full  mt-15 xl:px-44  ">

        <Testmonials></Testmonials>

      </section>

      {/* -----section 7 plan-------- */}

      <section className=" w-full   mt-15 xl:px-44  ">

        <Plan></Plan>

      </section>

      {/* -----section 8 Find And Start Course-------- */}

      <section className=" w-full mt-15 xl:px-44  ">

        <FindAndStartCourse></FindAndStartCourse>

      </section>

      {/* -----section 8 Footer-------- */}

      <section className=" w-full  mt-15 xl:px-44  ">

        <Footer></Footer>

      </section>


    </div >
  );
}
