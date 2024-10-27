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
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import React from "react";
import { Link } from "react-router-dom";
import { asynccurrentUser } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HomeNav from "./HomeNav";
import HomeFooter from "./HomeFooter";
import { Swiper, SwiperSlide } from "swiper/react";

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

  const slides = [];

  for (let i = 0; i <= 3; i++) {
    slides.push(
      <SwiperSlide className="center" key={`slide-${i}`}>
        <img
          className="w-[80%]  rounded-md h-full object-cover"
          src={`/Images/swiper universities/img${i + 1}.jpeg`}
          alt=""
        />
      </SwiperSlide>
    );
  }

  return (
    <div id="home">
      <div className="w-full h-14 flex items-center justify-center darkcolor max-[600px]:hidden">
        <img className="w-12 mr-8" src="/Images/deepak.gif" alt="" />
        <div className="font-semibold text-xl text-[#20373f] whitespace-nowrap">
          <span className="ml-5">Diwali Offer: 20% off on all courses!</span>
        </div>
        <div className="ml-4 font-semibold text-lg w-64 text-[#20373f]">
          {`Time left: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </div>
        <img className="w-12" src="/Images/deepak.gif" alt="" />
      </div>
      <div className="w-full flex items-center justify-center fixed z-[9]">
        <HomeNav />
      </div>
      <div className="w-full h-[100vh] relative flex items-center justify-center overflow-hidden">
        <div className="w-[70%] h-full absolute top-10 pt-44 overflow-hidden left-0 pl-36">
          <p className="text-6xl font-bold tracking-tight  capitalize">
            Want to get into your <br />
            dream university <span className="text-[#4353cd]">?</span>
          </p>

          <p className="font-medium text-2xl mt-5">
            Ivy Accelerator: Your 600% Acceptance Boost
          </p>

          <p className="text-xl font-normal w-[60%] opacity-70 leading-[1.5vw] text-justify mt-1">
            For five years, Ivy Accelerator has been the most innovative,
            first-of-its-kind program crafted with insights from Ivy League
            students.
          </p>
          <button className=" mt-10 w-32 h-14 rounded-lg bg-[#30c8ff] text-white font-bold">
                    Exploreivy                                         
                  </button>
        </div>
        <img
          className="  h-full object-contain absolute right-[-0vh] "
          src="/Images/home/Accelerator.png"
          alt=""
        />
      </div>

      {/* <div className="w-full pt-20 pb-20 flex flex-col items-center justify-center">
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
      <HomeFooter /> */}
    </div>
  );
}
