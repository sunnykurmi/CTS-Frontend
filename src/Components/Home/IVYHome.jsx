import {
  RiCloseLine,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMenuLine,
  RiWhatsappFill,
  RiYoutubeFill,
} from "@remixicon/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function IVYHome() {

  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="home">
      <div className="w-full h-14 max-[600px]:h-6 flex items-center justify-center  bg-[#FCEEC5]">
        <p className="font-semibold text-lg text-[#F58612] ">
          Lets Join Us To Cross The Sky Limits 🏆
        </p>
      </div>
      <div className="w-full h-40 flex items-center justify-center max-[600px]:h-16 ">
        <div className="w-fit  bg-[#f8851127] h-24  rounded-full flex items-center justify-evenly max-[600px]:w-full max-[600px]:rounded-none max-[600px]:pr-2 max-[600px]:h-full max-[600px]:justify-between max-[600px]:px-5 ">
          <img
            className="w-[12%] max-[600px]:w-[30%]"
            src="/Images/CTS   Logo.png"
            alt=""
          />
          <div className="w-[50%] h-full flex items-center justify-evenly font-bold text-[#393E46] max-[600px]:text-xs max-[600px]:w-fit max-[600px]:gap-2 max-[600px]:hidden">
            <a className="hover-link" href="#home">
              HOME
            </a>
            <Link className="hover-link" to="/portfolio">
              PORTFOLIO
            </Link>
            <Link className="hover-link" to="/apply-internship-form">
              INTERNSHIP
            </Link>
            <Link className="hover-link" to="/abroadstudy">
              SERVICES
            </Link>
            <Link className="hover-link" to="/abroadstudy">
              CTS ABROAD
            </Link>
            <a className="hover-link" href="#footer">
              ABOUT
            </a>
          </div>
          <div className="w-[25%] h-full flex items-center justify-evenly max-[600px]:hidden ">
            <Link to="/login" className="">
              <button className="w-32 h-14 rounded-full border-2 border-[#0000000c]  font-bold">
                LOGIN
              </button>
            </Link>
            <Link to="/signup" className="max-[600px]:scale-50">
              <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
                REGISTER
              </button>
            </Link>
          </div>
          <div className="center flex-col min-[600px]:hidden">
            <RiMenuLine onClick={toggleMenu} />
          </div>
        </div>
      </div>
      <div
        className={`w-full h-fit pb-10 bg-white fixed top-0 left-0 z-[99] min-[600px]:hidden transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {" "}
        <div className="w-full flex items-center justify-end p-5">
          <RiCloseLine className="scale-150" onClick={toggleMenu} />
        </div>
        <div className=" pr-5 flex-col uppercase text-2xl font-semibold center gap-3">
          <a href="#home">Home</a>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/apply-internship-form">Internship </Link>
          <Link to="/abroadstudy">CTS Abroad</Link>
          <Link to="/abroadstudy">Services</Link>
          <Link to="/login" className="">
            Login{" "}
          </Link>
          <Link to="/signup" className="">
            Register
          </Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-center text-4xl mb-10  max-[600px]:text-xl max-[600px]:text-center">
        <p>🚀 The World's Premier College Application Program! 🌐✨</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[70%] shadow-xl rounded-lg py-10 max-[600px]:w-full max-[600px]:py-2">
          <div className="w-full flex flex-col text-xl px-10 items-center justify-center max-[600px]:px-2">
            <p className="text-2xl mt-5 mb-10 max-[600px]:mt-2 max-[600px]:mb-5 max-[600px]:text-xl">
              🎓 Services That Redefine Success:
            </p>
            <p>
              <span className="font-semibold">1. Expert-Led SAT Classes:</span>{" "}
              Master the SAT with guidance from seasoned instructors, propelling
              you towards a score of 1550+.
              <br />
              <span className="font-semibold">
                2. Comprehensive Language Classes:
              </span>{" "}
              Excel in language proficiency exams (IELTS/TOEFL/DET) with
              tailored instruction.
              <br />
              <span className="font-semibold">3. AP Exams Mastery:</span> Ace AP
              exams with expert guidance, securing a competitive edge in your
              application.
              <br />
              <span className="font-semibold">
                4. Personalized Roadmap:
              </span>{" "}
              Navigate the college application journey with a bespoke , tailored
              to your strengths and aspirations.
              <br />
              <span className="font-semibold">
                5. Dynamic Portfolio Website:
              </span>{" "}
              Showcase your achievements with a cutting-edge most creative
              online portfolio that captures the essence of your uniqueness.
              <br />
              <span className="font-semibold">
                6. Exclusive Extracurricular Opportunities:
              </span>{" "}
              Access unique special ECs to enrich your profile and stand out to
              admissions committees.
              <br />
              <span className="font-semibold">7. SAT Fee Waiver:</span> Lighten
              the financial load of standardized testing with our support.
              <br />
              <span className="font-semibold">
                8. Elite Essay Editing:
              </span>{" "}
              Refine your narrative with input from MIT, Ivy League, and top
              university students.
              <br />
              <span className="font-semibold">9. Common App Review:</span>{" "}
              Ensure a flawless presentation of your achievements in the Common
              Application.
              <br />
              <span className="font-semibold">10. Document Support:</span>{" "}
              Receive guidance and assistance in preparing all necessary
              documents for a seamless application process.
              <br />
              <span className="font-semibold">
                11. Financial Aid Assistance:
              </span>{" "}
              Navigate the CSS Profile and financial aid application process
              with expert support.
              <br />
              <span className="font-semibold">
                12. End-to-End Support:
              </span>{" "}
              From i-20 to VISA assistance, departure flight guidance to arrival
              support – we've got you covered.
              <br />
              <span className="font-semibold">
                13. Post-Arrival Support:
              </span>{" "}
              Assistance with part-time jobs, Social Security Number (SSN)
              application, and more after arriving in the USA.
              <br />
              <span className="font-semibold">
                14. One-on-One Sessions:
              </span>{" "}
              Personalized consultations to address your unique needs and
              concerns.
              <br />
              <span className="font-semibold">
                15. Exclusive Event Access:
              </span>{" "}
              Free passes to CTS events and a dedicated summer program counselor
              for a holistic experience.
              <br />
              <span className="font-semibold">
                16. Free Content Access:
              </span>{" "}
              Unlock all paid content for a comprehensive and enriching
              preparation experience.
              <br />
              <span className="font-semibold">17. Monthly Meetings:</span>{" "}
              Connect with students from your dream university for valuable
              insights and guidance.
              <br />
              <span className="font-semibold">
                18. Universities Lists:
              </span>{" "}
              Expert guidance to navigate the intricate web of university
              choices and make informed decisions.
            </p>
          </div>
        </div>
        {/* <div className="w-[90%] font-medium  my-10 flex justify-evenly">
          <div className=" w-[30%] rounded-3xl shadow-2xl p-5">
            <div className="w-full flex flex-col items-start">
              <p className="text-2xl font-medium">Basic</p>
              <p className="opacity-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nobis!</p>
            </div>
            <p className="text-4xl font-medium my-2">599Rs</p>
            <div className="w-full flex items-start flex-col gap-2 ">
                <p className="opacity-40 text-lg">What is included?</p>
              <div className="text-base">
                <p>✔️ Expert-Led SAT Classes</p>
              </div>

              <div className="text-base">
                <p>✔️ Comprehensive Language Classes</p>
              </div>

              <div className="text-base">
                <p>✔️ AP Exams Mastery</p>
              </div>

              <div className="text-base">
                <p>✔️ Personalized Roadmap</p>
              </div>

              <div className="text-base">
                <p>✔️ Dynamic Portfolio Website</p>
              </div>

              <div className="text-base">
                <p>✔️ Exclusive Extracurricular Opportunities</p>
              </div>

              <div className="text-base">
                <p>✔️ SAT Fee Waiver</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Elite Essay Editing</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Common App Review</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Document Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Financial Aid Assistance</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ End-to-End Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Post-Arrival Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ One-on-One Sessions</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Exclusive Event Access</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Free Content Access</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Monthly Meetings</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Universities Lists</p>
              </div>
            </div>
          </div>
          <div className=" w-[30%] rounded-3xl shadow-2xl p-5">
            <div className="w-full flex flex-col items-start">
              <p className="text-2xl font-medium">Basic</p>
              <p className="opacity-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nobis!</p>
            </div>
            <p className="text-4xl font-medium my-2">599Rs</p>
            <div className="w-full flex items-start flex-col gap-2 ">
                <p className="opacity-40 text-lg">What is included?</p>
              <div className="text-base">
                <p>✔️ Expert-Led SAT Classes</p>
              </div>

              <div className="text-base">
                <p>✔️ Comprehensive Language Classes</p>
              </div>

              <div className="text-base">
                <p>✔️ AP Exams Mastery</p>
              </div>

              <div className="text-base">
                <p>✔️ Personalized Roadmap</p>
              </div>

              <div className="text-base">
                <p>✔️ Dynamic Portfolio Website</p>
              </div>

              <div className="text-base">
                <p>✔️ Exclusive Extracurricular Opportunities</p>
              </div>

              <div className="text-base">
                <p>✔️ SAT Fee Waiver</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Elite Essay Editing</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Common App Review</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Document Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Financial Aid Assistance</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ End-to-End Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Post-Arrival Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ One-on-One Sessions</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Exclusive Event Access</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Free Content Access</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Monthly Meetings</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Universities Lists</p>
              </div>
            </div>
          </div>
          <div className=" w-[30%] rounded-3xl shadow-2xl p-5">
            <div className="w-full flex flex-col items-start">
              <p className="text-2xl font-medium">Basic</p>
              <p className="opacity-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nobis!</p>
            </div>
            <p className="text-4xl font-medium my-2">599Rs</p>
            <div className="w-full flex items-start flex-col gap-2 ">
                <p className="opacity-40 text-lg">What is included?</p>
              <div className="text-base">
                <p>✔️ Expert-Led SAT Classes</p>
              </div>

              <div className="text-base">
                <p>✔️ Comprehensive Language Classes</p>
              </div>

              <div className="text-base">
                <p>✔️ AP Exams Mastery</p>
              </div>

              <div className="text-base">
                <p>✔️ Personalized Roadmap</p>
              </div>

              <div className="text-base">
                <p>✔️ Dynamic Portfolio Website</p>
              </div>

              <div className="text-base">
                <p>✔️ Exclusive Extracurricular Opportunities</p>
              </div>

              <div className="text-base">
                <p>✔️ SAT Fee Waiver</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Elite Essay Editing</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Common App Review</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Document Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Financial Aid Assistance</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ End-to-End Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ Post-Arrival Support</p>
              </div>

              <div className="text-base  opacity-30">
                <p>❌ One-on-One Sessions</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Exclusive Event Access</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Free Content Access</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Monthly Meetings</p>
              </div>

              <div className="text-base  opacity-30 ">
                <p>❌ Universities Lists</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className=" mt-10 w-full flex items-center justify-center text-3xl max-[600px]:text-2xl">
          <p>Types of Ivy Accelerator Course</p>
        </div>
        <div className="w-[90%] font-medium  my-10 flex justify-evenly max-[600px]:w-full max-[600px]:text-[2vw]">
          <div className=" hover:border-blue-300 hover:border-2 hover:scale-105 transition-all duration-500 hover:bg-[#b2e3ff43]  w-[30%]  shadow-2xl max-[600px]:shadow-none rounded-2xl gap-2 flex items-center text-center justify-between pt-2 flex-col">
            <div className="w-full px-2 flex items-center justify-center">
              <img
                className="w-full rounded-lg h-fit object-cover"
                src="/Images/plan2.JPG"
                alt=""
              />
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Expert-Led SAT Classes
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              IELTS/TOEFL/DET Classes
            </div>
            <div className="  w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">AP Exams Classes</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Monthly Roadmap
            </div>
            <div className=" w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">Portfolio Website</p>
            </div>
            <div className="  w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">Exclusive Extracurriculars</p>
            </div>
            <div className=" w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">SAT Fee Waiver</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Essay Writing Mastery
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Essay Editing By team members
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Common App Review
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Document Support
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20 ">Roadmap Tracking</p>
            </div>
            <div className="  w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">Research Paper</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              CSS Profile/Financial Aid
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              i-20, VISA Support, Departure Flight
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20 ">
                Support After Arriving In USA, <br /> Part Time Jobs Support,
                SSN
              </p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              1-1 Instant Meeting
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Exclusive Event Access
            </div>
            <div className="  w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">Summer Program Counselor</p>
            </div>
            <div className="w-full flex  h-14 max-[600px]:h-6 border-b-2 pb-2 items-center justify-center">
              University List - 15
            </div>
            <div className="w-full h-24 max-[600px]:h-14 scale-75 p-5 flex items-center justify-center max-[600px]:p-0  ">
              <div className="w-full  text-white font-medium h-full bg-blue-500 rounded-lg flex flex-col items-center justify-center text-center">
                <p className="text-xs">Starting at </p>{" "}
                <p className="text-2xl max-[600px]:text-base">Rs.65k</p>
              </div>
            </div>
          </div>
          <div className=" hover:border-yellow-400 hover:border-2 hover:scale-105 transition-all duration-500 hover:bg-[#ffe59c33]  w-[30%]  pt-2  shadow-2xl max-[600px]:shadow-none rounded-2xl gap-2 flex items-center text-center justify-between flex-col">
            <div className="w-full flex items-center px-2 justify-center">
              <img
                className="w-full  h-fit rounded-lg object-cover"
                src="/Images/plan1.JPG"
                alt=""
              />
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Expert-Led SAT Classes
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              IELTS/TOEFL/DET Classes
            </div>
            <div className="  w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">AP Exams Classes</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Weekly Roadmap
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Portfolio Website
            </div>
            <div className="opacity-20 w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p>Exclusive Extracurriculars</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              1 SAT Fee Waiver
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Essay Writing Mastery
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Essay Editing By Top uni Students
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Common App Review
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Document Support
            </div>
            <div className="opacity-20 w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p>Roadmap Tracking</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              1 Research Paper
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              CSS Profile/Financial Aid
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              i-20, VISA Support, Departure Flight
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Support After Arriving In USA, <br /> Part Time Jobs Support, SSN
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              1-1 Instant Meeting
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Exclusive Event Access
            </div>
            <div className="  w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              <p className="opacity-20">Summer Program Counselor</p>
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              University List - 20
            </div>
            <div className="w-full h-24 max-[600px]:h-14 scale-75 p-5 flex items-center justify-center max-[600px]:p-0  ">
              <div className="w-full  text-white font-medium h-full bg-blue-500 rounded-lg flex flex-col items-center justify-center text-center">
                <p className="text-xs">Starting at </p>{" "}
                <p className="text-2xl max-[600px]:text-base">Rs.1.2Lac</p>
              </div>
            </div>
          </div>
          <div className=" hover:border-gray-400 hover:border-2 hover:scale-105 transition-all duration-500 hover:bg-[#bcf2ff4b]  w-[30%]  pt-2  shadow-2xl max-[600px]:shadow-none rounded-2xl gap-2 flex items-center text-center justify-between flex-col">
            <div className="w-full flex px-2 items-center justify-center">
              <img
                className="w-full h-fit rounded-lg object-cover"
                src="/Images/plan3.JPG"
                alt=""
              />
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Expert-Led SAT Classes
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              IELTS/TOEFL/DET Classes
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              AP Exams Classes
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Weekly Roadmap
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Portfolio Website
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Exclusive Extracurriculars
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              3 SAT Fee Waiver
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Essay Writing Mastery
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Essay Editing By MIT <br /> & Ivy Students
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Common App Review
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Document Support
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Roadmap Tracking
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              2 Research Paper
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              CSS Profile/Financial Aid
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              i-20, VISA Support, Departure Flight
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Support After Arriving In USA, <br /> Part Time Jobs Support, SSN
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              1-1 Instant Meeting
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Exclusive Event Access
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              Summer Program Counselor
            </div>
            <div className="w-full flex border-b-2 h-14 max-[600px]:h-6 pb-2 items-center justify-center">
              University List - 25
            </div>
            <div className="w-full h-24 max-[600px]:h-14 scale-75 p-5 flex items-center justify-center max-[600px]:p-0  ">
              <div className="w-full  text-white font-medium h-full bg-blue-500 rounded-lg flex flex-col items-center justify-center text-center">
                <p className="text-xs">Starting at </p>{" "}
                <p className="text-2xl max-[600px]:text-base">Rs.2.2Lac</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 flex items-center justify-center pb-10 max-[600px]:pb-0">
        <div
          id="footer"
          className="flex flex-col p-20 bg-zinc-900 rounded-[40px] max-md:px-5"
        >
          <div className="flex flex-wrap justify-between w-full text-sm font-medium min-h-[392px] text-zinc-400 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Images/CTS   Logo.png"
              className="object-contain shrink-0 self-start aspect-[2.87] w-[152px]"
            />
            <div className="flex justify-center h-full min-w-[240px] w-[808px] max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink pl-20 w-full basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex flex-wrap gap-1.5 px-1.5 w-full max-md:max-w-full">
                  <div className="flex flex-col grow shrink self-start w-[115px]">
                    <div className="pb-5 w-full text-xs uppercase whitespace-nowrap text-slate-50">
                      Roadmap
                    </div>

                    <div className="pb-4 w-full">
                      {" "}
                      <a href="#home">Home</a>{" "}
                    </div>
                    <div className="pb-4 w-full">
                      {" "}
                      <Link to="/signup">Start for free</Link>{" "}
                    </div>
                    <div className="pb-4 w-full whitespace-nowrap">
                      <Link to="/login">login now</Link>{" "}
                    </div>
                    <div className="flex pb-4 w-full min-h-[37px]" />
                  </div>
                  <div className="flex flex-col grow shrink justify-center items-start pr-11 w-[175px]">
                    <div className="flex flex-col w-36 max-w-full min-h-[392px]">
                      <div className="pb-5 w-full text-xs uppercase whitespace-nowrap text-slate-50">
                        Features
                      </div>
                      <div className="pb-4 w-full leading-5 whitespace-nowrap">
                        WhatsApp
                        <br />
                        Communities
                      </div>
                      <div className="pb-4 w-full whitespace-nowrap">
                        Challenges
                      </div>
                      <div className="pb-4 w-full">Event Hosting</div>
                      <div className="pb-4 w-full">CTS Internships</div>
                      <div className="pb-4 w-full whitespace-nowrap">
                        SATisfactory
                      </div>
                      <div className="pb-4 w-full">DSAT Crash Course</div>
                      <div className="pb-4 w-full">CTS Graduate</div>
                      <div className="pb-4 w-full">Personalized Portfolio</div>
                      <div className="pb-4 w-full">Interlango Plus</div>
                    </div>
                  </div>
                  <div className="flex flex-col grow shrink justify-center pr-16 w-[175px]">
                    <div className="flex flex-col w-full min-h-[392px]">
                      <div className="pb-5 w-full text-xs uppercase text-slate-50">
                        Use cases
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For UnderGrade Students
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For High School Students
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For Graduate
                        <br />
                        Students
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For Aspiring
                        <br />
                        Parents
                      </div>
                      <div className="pb-4 w-full">For Networking</div>
                      <div className="pb-4 w-full leading-5">
                        Aspiring <br />
                        Communities
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col grow shrink w-[115px]">
                    <div className="pb-5 w-full text-xs uppercase whitespace-nowrap text-slate-50">
                      Organization
                    </div>
                    <div className="pb-4 w-full">About Us</div>
                    <div className="pb-4 w-full">Partner With Us</div>
                    <div className="pb-4 w-full whitespace-nowrap">Career</div>
                    <div className="pb-4 w-full whitespace-nowrap">Academy</div>
                    <div className="pb-4 w-full">Contact Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex items-center self-stretch my-auto text-xs min-w-[240px] text-neutral-400">
              <div className="flex gap-5 mt-2 max-[600px]:gap-2 items-center">
                <a
                  className="hover:text-white"
                  href="https://www.instagram.com/krishna_mit_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="max-[600px]:scale-75" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.link/wbwwp2"
                >
                  <RiWhatsappFill className="max-[600px]:scale-75" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtube.com/@krishnamit"
                >
                  <RiYoutubeFill className="max-[600px]:scale-75" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/krishna-mit"
                >
                  <RiLinkedinBoxFill className="max-[600px]:scale-75" />
                </a>
              </div>
              <div className="flex self-stretch my-auto items-center">
                <div className="flex flex-col justify-center items-start pr-2 pl-6 max-md:pl-5">
                  <div className="min-h-[18px]">Terms of service</div>
                </div>
                <div className="whitespace-nowrap">Privacy</div>
              </div>
            </div>
            <div className="flex items-center self-stretch my-auto">
              <div className="flex flex-col self-stretch my-auto text-sm font-medium leading-none uppercase whitespace-nowrap text-neutral-100 text-opacity-70 w-[46px]">
                <div className="flex justify-center items-center px-1 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/962216d2ee20b4535be6b35e1dcd699aeda0fcb74363d6fc3ac06e3d163c1997?placeholderIfAbsent=true&apiKey=dddf50d431064bd4b76d52f0b630fcc4"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div className="self-stretch pl-1 my-auto">en</div>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch pl-4 my-auto text-xs text-neutral-400">
                <div>Copyright © 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IVYHome;
