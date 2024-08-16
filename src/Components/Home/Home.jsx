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
import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <div className="w-full h-14 flex items-center justify-center  bg-[#FCEEC5]">
        <p className="font-semibold text-lg text-[#F58612] ">
          Lets Join Us To Cross The Sky Limits 🏆
        </p>
      </div>
      <div className="w-full h-40 flex items-center justify-center">
        <div className="w-[80%] bg-[#f8851127] h-24  rounded-full flex items-center justify-evenly">
          <img
            className="w-[12%]"
            src="../../../public/Images/CTS   Logo.png"
            alt=""
          />
          <div className="w-[50%] h-full flex items-center justify-evenly font-bold text-[#393E46]  ">
            <a className="" href="">
              ROADMAP
            </a>
            <a className="" href="">
              COMMUNITY
            </a>
            <a className="" href="">
              RESOURCES
            </a>
            <a className="" href="">
              CTS ABROAD
            </a>
            <a className="" href="">
              ABOUT
            </a>
          </div>
          <div className="w-[25%] h-full flex items-center justify-evenly ">
            <a href="/login">
              <button className="w-32 h-14 rounded-full border-2 border-[#0000000c]  font-bold">
                LOGIN
              </button>
            </a>
            <a href="/signup">
              <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
                REGISTER
              </button>
            </a>
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
          <a
            className=" h-12 gap-5 rounded-full pl-5 bg-[#F58612] text-white flex items-center justify-between p-2 font-bold"
            href=""
          >
            <button className="">Start Your Journey </button>
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              {" "}
              <RiArrowRightSLine className=" text-[#0000009b]" />{" "}
            </div>
          </a>
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
        <div className="w-full flex items-center justify-center">
          <img
            src="https://i.pinimg.com/originals/63/fd/ff/63fdff4b7c1964f08c3c16f18f581bd7.gif"
            alt=""
          />
        </div>
        <div className="w-full flex items-center gap-24 justify-center">
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4">
            <p className="font-extrabold text-3xl">50,000+</p>
            <p className="font-medium">Students Joined</p>
          </div>
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4">
            <p className="font-extrabold text-3xl">1M+</p>
            <p className="font-medium">Students Impacting</p>
          </div>
          <div className="bg-[#FEF6EE] text-[#946800] flex items-center justify-center flex-col rounded-full w-60 py-4">
            <p className="font-extrabold text-3xl">110+</p>
            <p className="font-medium">Countries</p>
          </div>
        </div>
        
      </div>
      <div className="w-full pt-20 pb-20 flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col">
          <p className="text-5xl font-bold">Everything</p>
          <p className="text-5xl font-bold text-[#00000082]">A Student Needs</p>
        </div>
        <div className="w-[80%] pt-4 ">
          <div className=" flex items-center w-fit justify-center bg-black text-white rounded-full px-8 py-4">
            <RiArrowRightSFill/>
            <p>Feature Walkthrough</p>
          </div>
        </div>
        <div className="w-[80%] flex pt-10 gap-8 text-5xl font-bold text-[#0000003c] flex-col">
          <p>Membership paywall</p>
          <p>Gated Content</p>
          <p>1:1 Calls</p>
          <p>Landing Pages</p>
          <p>Audience List</p>
          <p>Chat Integration</p>
          <p>Sell Digital Product</p>
          <p>Run Challenges and Contests</p>
          <p>Host Paid Events</p>
          <p>Analytics</p>
        </div>
      </div>
      <div className="w-full h-32 bg-blue-300"></div>
    </div>
  );
}
