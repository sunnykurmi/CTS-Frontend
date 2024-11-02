import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { asynccurrentUser } from "../../store/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import HomeNav from "./HomeNav";
import HomeFooter from "./HomeFooter";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const navigate = useNavigate();

  const feedbackData = [
    {
      img: "/public/Images/home/testimonials/IMG_8405.JPG",
      name: "Rumman Jan",
      university: "Cornell University ' 28",
    },
    {
      img: "/public/Images/home/testimonials/IMG_8407.JPG",

      name: "Prashant Kafle",
      university: "Lehigh University ' 28",
    },
    {
      img: "/public/Images/home/testimonials/IMG_8406.JPG",

      name: "Mohnish Sao",
      university: "MSU ' 27",
    },
    {
      img: "/public/Images/home/testimonials/IMG_8408.JPG",

      name: "Aviral Gupta",
      university: "USF ' 28",
    },
  ];

  const NavigateHandler = (link) => {
    navigate(link);
  };

  const services = [
    {
      title: "Essay Editing",
      description:
        "Turn your essay into a powerful story! Our Ivy League experts will edit and enhance your writing to make it stand out. Submit your essay for a professional review and get one step closer to your dream college. Enroll now for a polished, compelling essay!",
      image: "/Images/Essay-editing.webp",
      link: "/services/essay-editing",
      button: "Book Now",
    },
    {
      title: "Common App Review",
      description:
        "Perfect your Common App with expert review! 80% of students make mistakes—don’t be one of them. Our team will polish your activities and ensure every section shines. Enroll now to submit an error-free, standout application!",
      image: "/Images/common-app-review.jpg",
      link: "/services/common-app-review",
      button: "Book Now",
    },
    {
      title: "CSS Profile Help",
      description:
        "Your CSS Profile could be the key to unlocking valuable financial aid! Don’t let mistakes or overlooked sections cost you. Our CSS Profile Review program ensures your submission is accurate and maximizes your chances for aid. Let us help you secure the support you deserve—schedule your review today!",
      image: "/Images/css-profile-helper.jpg",
      link: "/services/css-profile",
      button: "Book Now",
    },
    {
      title: "Exam Prepration",
      description:
        "Get ready to ace your exams with expert-led SAT, TOEFL, IELTS, and Duolingo English Test (DET) classes! Whether you’re aiming for top scores or need a boost in your test prep, we’ve got you covered. Join our prep classes now and give yourself the best chance at success!",
      image: "/Images/sat-exam.png",
      link: "/services/exam-prepration",
      button: "Book Now",
    },
  ];

  return (
    <div id="home" className="bg-[#F5FAFE]">
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

      <div className="w-full h-[80vh] p-20 max-[600px]:p-5 max-[600px]:h-[60vh]">
        <h2 className="text-zinc-600 uppercase">1000+ Success Stories</h2>
        <div>
          <h1 className="text-4xl font-medium Rubik mt-1">
            Who Crossed <span className="text-[#36C2F3]">The Skylimits</span>
          </h1>
        </div>

        <div className="slides relative h-full w-full  max-[600px]:hidden ">
          <Swiper
            className="w-full h-full object-cover"
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
          >
            {feedbackData.map((feedback, index) => (
              <SwiperSlide className="center" key={`slide-${index}`}>
              
              <div
                key={index}
                className="feedback-card w-[55vh] h-[50vh] shadow-lg  rounded-md overflow-hidden"
              >
                <div className="feedback-card-img w-full h-[70%]">
                  <img
                    className="w-full h-full  object-contain"
                    src={feedback.img}
                    alt={feedback.name}
                  />
                </div>
                <div className="feedback-card-content w-full h-[30%]  px-5 flex items-center gap-5">
                  <div className="w-[20%]">
                    <div className="size-16 rounded-full  overflow-hidden">
                      <img
                        className="size-full object-cover"
                        src={feedback.img}
                        alt={feedback.name}
                      />
                    </div>
                  </div>
                  <p className="text-lg font-normal">
                    <span className="font-bold">{feedback.name}</span> <br />
                    <span className="text-sm capitalize">
                    studying at {feedback.university}

                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
          
        </div>

        <div className="slides relative h-full w-full  min-[600px]:hidden ">
          <Swiper
            className="w-full h-full object-cover"
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
          >
            {feedbackData.map((feedback, index) => (
              <SwiperSlide className="center" key={`slide-${index}`}>
              
              <div
                key={index}
                className="feedback-card w-full h-[50vh] shadow-lg  rounded-md overflow-hidden"
              >
                <div className="feedback-card-img w-full h-[70%]">
                  <img
                    className="w-full h-full  object-contain"
                    src={feedback.img}
                    alt={feedback.name}
                  />
                </div>
                <div className="feedback-card-content w-full h-[30%]  px-5 flex items-center gap-5">
                  <div className="w-[20%]">
                    <div className="size-16 rounded-full  overflow-hidden">
                      <img
                        className="size-full object-cover"
                        src={feedback.img}
                        alt={feedback.name}
                      />
                    </div>
                  </div>
                  <p className="text-lg font-normal">
                    <span className="font-bold">{feedback.name}</span> <br />
                    <span className="text-sm capitalize">
                    studying at {feedback.university}

                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>

      <div className="w-full h-fit px-20 max-[600px]:px-5 max-[600px]:mt-28">
        <h1 className="text-5xl font-medium Rubik mt-1">
          Our <span className="text-[#36C2F3]">Services</span>
        </h1>
        <div className="w-full h-fit p-10 pl-36 pr-36 grid grid-cols-3 gap-10 place-items-center max-[456px]:grid max-[456px]:grid-cols-1 max-[1180px]:pl-10 max-[1180px]:pr-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[45vh] h-[65vh] max-[456px]:h-fit max-[456px]:w-[90vw] shadow-lg rounded-md border-2 max-[456px]:p-5 p-1 flex flex-col justify-between"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-1/2 object-contain rounded-t-md"
              />
              <div className="p-4 flex h-1/2 flex-col">
                <div className="">
                  <h2 className="text-xl max-[456px]:text-2xl font-bold">
                    {service.title}
                  </h2>
                </div>
                <div className="h-[50%] overflow-auto scrollernone mt-2">
                  <p className="text-sm leading-4 text-zinc-500">
                    {service.description}
                  </p>
                </div>
                <button
                  onClick={() => NavigateHandler(service.link)}
                  className="bg-[#008BDC] w-1/2 text-white max-[456px]:text-xl px-4 py-2 rounded-md mt-4"
                >
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HomeFooter />
    </div>
  );
}
