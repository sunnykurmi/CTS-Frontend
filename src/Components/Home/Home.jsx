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
          src={`/Images/home/swiper universities/img${i + 1}.jpeg`}
          alt=""
        />
      </SwiperSlide>
    );
  }

  return (
    <div id="home">
      <div className="w-full h-14 flex items-center justify-center darkcolor max-[600px]:hidden">
        <img className="w-12 mr-8" src="/Images/deepak.gif" alt="" />
        <div className="font-semibold text-xl text-zinc-50 whitespace-nowrap">
          <span className="ml-5">Diwali Offer: 20% off on all courses!</span>
        </div>
        <div className="ml-4 font-semibold text-lg w-64 text-zinc-50">
          {`Time left: ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </div>
        <img className="w-12" src="/Images/deepak.gif" alt="" />
      </div>
      <div className="w-full flex items-center justify-center fixed z-[9]">
        <HomeNav />
      </div>
      <div className="w-full h-[100vh] relative flex items-center justify-center overflow-hidden">
        <div className="w-[70%] h-full absolute top-10 pt-44 overflow-hidden left-0 pl-36 max-[600px]:w-full max-[600px]:pl-5 max-[600px]:top-0 max-[600px]:pt-32 max-[600px]:">
          <p className="text-6xl font-bold tracking-tight  capitalize max-[600px]:text-4xl">
            Want to get into your <br />
            dream university <span className="text-[#008BDC]">?</span>
          </p>

          <p className="font-medium text-2xl mt-5 max-[600px]:text-xl">
            Ivy Accelerator: Your 600% Acceptance Boost
          </p>

          <p className="text-xl font-normal w-[60%] opacity-70  text-justify mt-1 max-[600px]:w-[90%] ">
            For five years, Ivy Accelerator has been the most innovative,
            first-of-its-kind program crafted with insights from Ivy League
            students.
          </p>
          <Link to={"/ivy"}>
            <button className=" mt-10 w-32 h-14 rounded-lg bg-[#008BDC] text-white font-bold uppercase">
              Explore ivy
            </button>
          </Link>
        </div>
        <img
          className="  h-full object-contain absolute right-[-0vh] max-[600px]:hidden"
          src="/Images/home/Accelerator.png"
          alt=""
        />
      </div>

      {/* <div className="w-full h-[100vh] bg-red-200"></div> */}

      {/* <div className="w-full h-[60vh] flex flex-col items-center justify-center mt-10">
        <div className="w-full center mb-5  flex flex-col">
          <p className="text-6xl font-semibold">
            Study Abroad
            </p> 
            <p className="text-2xl font-medium">In the best universities </p>
            </div>
        
          <div className="slides relative h-full w-full ">
            <Swiper
              className="w-full h-full object-cover"
              // install Swiper modules
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
            >
              {slides}
            </Swiper>
            <div className="slider-controler absolute h-full   top-0 w-full  ">
              <div className="swiper-button-prev slider-arrow  p-8 rounded-full  scale-[.8] text-[#008BDC] font-extrabold btn btn-gradient-border btn-glow   ">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow  p-8 rounded-full scale-[.8] text-[#008BDC] font-extrabold btn btn-gradient-border btn-glow  ">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}
