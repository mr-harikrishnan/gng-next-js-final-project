import logo from "@/assets/vathiyar-ai-logo.png";
import heroSectionBg from "@/assets/homeSection/1_white_and_green_bg.jpg";
import teachersSectionBg from "@/assets/teachersSection/teachersSection.bg.png"


import AnimationBanner from "./component/heroSection/AnimationBanner";
import InformationContainer from "./component/heroSection/InformationContainer";
import TeacherHeadline from "./component/teachersSection/TeacherHeadline";
import TeacherCard from "./component/teachersSection/TeacherDetails";
import Header from "../../common-component/Header";


export default function Home() {
  return (
    <div className="overflow-auto ">

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

      {/* -----section 2-------- */}

      <section className=" w-full h-screen mb-0 mt-15 xl:px-44  ">

        <div className="w-full  overflow-hidden">
          <TeacherHeadline></TeacherHeadline>
          <TeacherCard></TeacherCard>
        </div>


      </section>


    </div >
  );
}
