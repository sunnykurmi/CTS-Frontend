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
import { Link } from "react-router-dom";
import { asynccurrentUser } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import HomeFooter from "./HomeFooter";
export default function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asynccurrentUser());
  // }, [dispatch]);

  const [studentsJoined, setStudentsJoined] = useState(0);
  const [studentsImpacting, setStudentsImpacting] = useState(0);
  const [countries, setCountries] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate time left for Diwali
    const diwaliDate = new Date("October 31, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = diwaliDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="w-full h-14 flex items-center justify-center bg-[#FCEEC5] max-[600px]:hidden">
        <div className="font-semibold text-lg text-[#F58612] whitespace-nowrap">
          <span className="ml-5">Diwali Offer: 20% off on all courses! 🎉</span>
        </div>
        <div className="ml-4 font-semibold text-lg w-64 text-[#F58612]">
          {Time left: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s}
        </div>
      </div>
      <HomeNav />
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
        <div className="w-[80%] relative flex pt-10 gap-8 text-5xl font-bold text-[#0000003c] flex-col max-[600px]:text-2xl max-[600px]:gap-2 max-[600px]:text-[#000000c1] z-0">
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
      <HomeFooter />
    </div>
  );
}