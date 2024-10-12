import {
  RiArrowRightSFill,
  RiArrowRightSLine,
  RiBookOpenFill,
  RiCalendarEventFill,
  RiCloseLine,
  RiCommunityFill,
  RiGraduationCapFill,
  RiMenuLine,
  RiPresentationFill,
  RiRoadMapFill,
  RiTrophyFill,
  RiUserStarFill,
} from "@remixicon/react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "@remixicon/react";
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { asynccurrentUser } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asynccurrentUser());
  // }, [dispatch]);

  const [studentsJoined, setStudentsJoined] = useState(0);
  const [studentsImpacting, setStudentsImpacting] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    const incrementValue = (target, setValue) => {
      let current = 0;
      const increment = target / 100; // Adjust the speed of the countdown
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(interval);
          setValue(target);
        } else {
          setValue(Math.ceil(current));
        }
      }, 20); // Adjust the speed of the countdown
    };

    incrementValue(50000, setStudentsJoined);
    incrementValue(1000000, setStudentsImpacting);
    incrementValue(110, setCountries);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="home">
      <div className="w-full h-14 flex items-center justify-center  bg-[#FCEEC5] max-[600px]:hidden">
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
            <Link className="hover-link" to="/services">
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
        <a href="/">Home</a>
       <Link to="/portfolio">Portfolio</Link>
       <Link to="/apply-internship-form">Internship </Link>
       <Link to="/abroadstudy">CTS Abroad</Link>
       <Link to="/services">Services</Link>
       <Link to="/login" className="">
            Login{" "}
          </Link>
          <Link to="/signup" className="">
            Register
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center flex-col justify-evenly">
        <div className="w-[60%]  h-40 flex items-center justify-center  text-center max-[600px]:w-[80%] max-[600px]:h-24">
          <p className="  font-bold text-6xl max-[600px]:text-2xl  ">
            Start Your Journey By Creating Your Roadmap
          </p>
        </div>
        <div className="w-[30%]   flex items-center justify-center  text-center text-[#00000089] max-[600px]:w-[90%]">
          <p className="  font-medium text-xl max-[600px]:text-lg">
            All you need is the plan, the road map, and the courage to press on
            to your destination.
          </p>
        </div>
        <div className="w-full h-20 flex items-center justify-center pt-5">
          <div
            className=" h-12 gap-5 rounded-full pl-5 bg-[#F58612] text-white flex items-center justify-between p-2 font-bold max-[600px]:scale-75"
            href=""
          >
            <button className="">
              <Link to="/signup">Start Your Journey</Link>{" "}
            </button>
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              {" "}
              <RiArrowRightSLine className=" text-[#0000009b]" />{" "}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-24 justify-center mt-5 max-[600px]:mt-2 max-[600px]:gap-0">
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4 max-[600px]:py-2 ">
            <p className="font-extrabold text-3xl max-[600px]:text-lg ">
              {studentsJoined.toLocaleString()}+
            </p>
            <p className="font-medium max-[600px]:text-xs">Students Joined</p>
          </div>
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4 max-[600px]:py-2 ">
            <p className="font-extrabold text-3xl max-[600px]:text-lg ">
              {studentsImpacting.toLocaleString()}+
            </p>
            <p className="font-medium max-[600px]:text-xs">
              Students Impacting
            </p>
          </div>
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4 max-[600px]:py-2 ">
            <p className="font-extrabold text-3xl max-[600px]:text-lg ">
              {countries}+
            </p>
            <p className="font-medium max-[600px]:text-xs">Countries</p>
          </div>
        </div>
        <div className="  flex font-bold items-center justify-center flex-col gap-2 pt-10  w-full max-[600px]:whitespace-nowrap max-[600px]:scale-[.6] max-[600px]:pt-0 ">
          <div className="flex items-center justify-center gap-5">
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#00C2FF]">
                <RiPresentationFill className="scale-75" />
              </div>
              <p>Super Mentors</p>
            </div>
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#00FF29]">
                <RiCalendarEventFill className="scale-75" />
              </div>
              <p>Events</p>
            </div>
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#FF0000]">
                <RiCommunityFill className="scale-75" />
              </div>
              <p>Community Help</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#4E2500]">
                <RiTrophyFill className="scale-75" />
              </div>
              <p>Challenges</p>
            </div>
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#4200FF]">
                <RiRoadMapFill className="scale-75" />
              </div>
              <p>Personalized Roadmaps</p>
            </div>
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#00C2FF]">
                <RiUserStarFill className="scale-75" />
              </div>
              <p>One to One Guidance</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#FF0000]">
                <RiBookOpenFill className="scale-75" />
              </div>
              <p>Unique Resources</p>
            </div>
            <div className="flex border-2 w-fit px-2 py-1.5 gap-3 rounded-full items-center justify-center">
              <div className="h-7 w-7 text-white rounded-full opacity-70 flex items-center justify-center bg-[#4E2500]">
                <RiGraduationCapFill className="scale-75" />
              </div>
              <p>ECs Opportunities</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <img
            className="w-[50%] max-[600px]:w-[90%] "
            src="/Images/Careersgif.gif"
            alt=""
          />
        </div>
      </div>
      <div className="w-full pt-20 pb-20 flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col max-[600px]:text-2xl">
          <p className="text-5xl font-bold max-[600px]:text-3xl">Everything</p>
          <p className="text-5xl font-bold text-[#00000082] max-[600px]:text-3xl">
            A Student Needs
          </p>
        </div>
        <div className="w-[80%] pt-4  max-[600px]:w-full">
          <div className=" flex items-center w-fit justify-center bg-black text-white rounded-full px-8 py-4 max-[600px]:scale-75">
            <RiArrowRightSFill />
            <p>Feature Walkthrough</p>
          </div>
        </div>
        <div className="w-[80%] relative flex pt-10 gap-8 text-5xl font-bold text-[#0000003c] flex-col max-[600px]:text-2xl max-[600px]:gap-2 max-[600px]:text-[#000000c1] ">
          <p className="hover:text-[#000000d0] z-[9] ">Personalised Roadmap</p>
          <p className="hover:text-[#000000d0] z-[9] ">Community Support</p>
          <p className="hover:text-[#000000d0] z-[9] ">Exclusive Resources </p>
          <p className="hover:text-[#000000d0] z-[9] ">1-1 Guidance</p>
          <p className="hover:text-[#000000d0] z-[9] ">
            Exclusive Opportunities
          </p>
          <p className="hover:text-[#000000d0] z-[9] ">Events</p>
          <p className="hover:text-[#000000d0] z-[9] ">Master Storytelling</p>
          <p className="hover:text-[#000000d0] z-[9] ">
            Networking Opportunity
          </p>
          <p className="hover:text-[#000000d0] z-[9] ">Exam Preparation</p>
          <p className="hover:text-[#000000d0] z-[9] ">
            Competitions and Challenges
          </p>
          <img
            className="absolute scale-110 right-0 top-[20%] max-[600px]:hidden"
            src="https://cdn.pixabay.com/animation/2022/11/15/11/35/11-35-07-140_512.gif"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center  justify-center px-32 p-20 pb-10 max-[600px]:p-0">
        <div
          id="footer"
          className=" max-[600px]:rounded-none rounded-2xl flex flex-col gap-10 w-full  bg-zinc-900 p-5"
        >
          <div className="footer-wrapper flex flex-wrap gap-8 lg:justify-evenly">
            <div className="image-wrapper w-[300px] h-[100px]">
              <img
                className="max-[600px]:w-[60%] max-[600px]:mt-6 "
                src="https://www.crosstheskylimits.online/Images/CTS%20%20%20Logo.png"
                alt=""
              />
            </div>
            <div className="links-wrapper grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 md:ml-10 lg:ml-20 lg:mt-10 lg:grid-cols-4">
              <div className="section">
                <h2 className="text-white font-semibold mb-2">ROADMAP</h2>
                <a
                  href="#home"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Home
                </a>
                <a
                  href="/signup"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Start for free
                </a>
                <a
                  href="/login"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Login now
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">FEATURES</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  WhatsApp Communities
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Challenges
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Event Hosting
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  CTS Internships
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  SATisfactory
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  DSAT Crash Course
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  CTS Graduate
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Personalized Portfolio
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Interlango Plus
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">USE CASES</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For UnderGrade Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For High School Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For Graduate Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For Aspiring Parents
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For Networking
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Aspiring Communities
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">ORGANIZATION</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Partner With Us
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Academy
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper flex flex-col gap-4 items-center justify-center">
            <div className="socials-wrapper flex gap-4 text-3xl">
              <a
                href="https://www.instagram.com/krishna_mit_"
                className="text-zinc-300"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-mit"
                className="text-zinc-300"
              >
                <RiLinkedinBoxFill />
              </a>
              <a href="https://wa.link/wbwwp2" className="text-zinc-300">
                <RiWhatsappFill />
              </a>
              <a
                href="https://youtube.com/@krishnamit"
                className="text-zinc-300"
              >
                <RiYoutubeFill />
              </a>
            </div>
            <p className="text-zinc-300">
              © 2024 Cross The Sky Limits. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
