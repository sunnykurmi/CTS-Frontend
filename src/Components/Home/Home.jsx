import {
  RiArrowRightSFill,
  RiArrowRightSLine,
  RiBookOpenFill,
  RiCalendarEventFill,
  RiCommunityFill,
  RiGraduationCapFill,
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

  return (
    <div id="home">
      <div className="w-full h-14 flex items-center justify-center  bg-[#FCEEC5]">
        <p className="font-semibold text-lg text-[#F58612] ">
          Lets Join Us To Cross The Sky Limits 🏆
        </p>
      </div>
      <div className="w-full h-40 flex items-center justify-center">
        <div className="w-[80%] bg-[#f8851127] h-24  rounded-full flex items-center justify-evenly">
          <img className="w-[12%]" src="/Images/CTS   Logo.png" alt="" />
          <div className="w-[50%] h-full flex items-center justify-evenly font-bold text-[#393E46]  ">
            <a className="" href="#home">
              HOME
            </a>
            <Link className="" to="/login">
              COMMUNITY
            </Link>
            <Link className="" to="/login">
              RESOURCES
            </Link>
            <Link className="" to="/abroadstudy">
              CTS ABROAD
            </Link>
            <a className="" href="#footer">
              ABOUT
            </a>
          </div>
          <div className="w-[25%] h-full flex items-center justify-evenly ">
            <Link to="/login">
              <button className="w-32 h-14 rounded-full border-2 border-[#0000000c]  font-bold">
                LOGIN
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center flex-col justify-evenly">
        <div className="w-[60%]  h-40 flex items-center justify-center  text-center">
          <p className="  font-bold text-6xl ">
            Start Your Journey By Creating Your Roadmap
          </p>
        </div>
        <div className="w-[30%]   flex items-center justify-center  text-center text-[#00000089]">
          <p className="  font-medium text-xl">
            All you need is the plan, the road map, and the courage to press on
            to your destination.
          </p>
        </div>
        <div className="w-full h-20 flex items-center justify-center pt-5">
          <div
            className=" h-12 gap-5 rounded-full pl-5 bg-[#F58612] text-white flex items-center justify-between p-2 font-bold"
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
        <div className="w-full flex items-center gap-24 justify-center mt-5">
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4">
            <p className="font-extrabold text-3xl">
              {studentsJoined.toLocaleString()}+
            </p>
            <p className="font-medium">Students Joined</p>
          </div>
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4">
            <p className="font-extrabold text-3xl">
              {studentsImpacting.toLocaleString()}+
            </p>
            <p className="font-medium">Students Impacting</p>
          </div>
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4">
            <p className="font-extrabold text-3xl">{countries}+</p>
            <p className="font-medium">Countries</p>
          </div>
        </div>
        <div className="  flex font-bold items-center justify-center flex-col gap-2 pt-10  w-full ">
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
          className="w-[50%] "
            src="/Images/Careersgif.gif"
            alt=""
          />
        </div>
      </div>

      <div className="w-full pt-20 pb-20 flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col">
          <p className="text-5xl font-bold">Everything</p>
          <p className="text-5xl font-bold text-[#00000082]">A Student Needs</p>
        </div>
        <div className="w-[80%] pt-4 ">
          <div className=" flex items-center w-fit justify-center bg-black text-white rounded-full px-8 py-4">
            <RiArrowRightSFill />
            <p>Feature Walkthrough</p>
          </div>
        </div>
        <div className="w-[80%] relative flex pt-10 gap-8 text-5xl font-bold text-[#0000003c] flex-col">
          <p className="hover:text-[#000000d0]">Personalised Roadmap</p>
          <p className="hover:text-[#000000d0]">Community Support</p>
          <p className="hover:text-[#000000d0]">Exclusive Resources </p>
          <p className="hover:text-[#000000d0]">1-1 Guidance</p>
          <p className="hover:text-[#000000d0]">Exclusive Opportunities</p>
          <p className="hover:text-[#000000d0]">Events</p>
          <p className="hover:text-[#000000d0]">Master Storytelling</p>
          <p className="hover:text-[#000000d0]">Networking Opportunity</p>
          <p className="hover:text-[#000000d0]">Exam Preparation</p>
          <p className="hover:text-[#000000d0]">Competitions and Challenges</p>
          <img className="absolute scale-110 right-0 top-[20%]" src="https://cdn.pixabay.com/animation/2022/11/15/11/35/11-35-07-140_512.gif" alt="" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center pb-10">
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
