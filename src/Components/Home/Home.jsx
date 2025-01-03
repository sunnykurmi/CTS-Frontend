import React, { useEffect, useState } from "react";
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
      img: "/Images/home/testimonials/IMG_8405.JPG",
      name: "Rumman Jan",
      university: "Cornell University ' 28",
    },
    {
      img: "/Images/home/testimonials/IMG_8407.JPG",

      name: "Prashant Kafle",
      university: "Lehigh University ' 28",
    },
    {
      img: "/Images/home/testimonials/IMG_8406.JPG",

      name: "Mohnish Sao",
      university: "MSU ' 27",
    },
    {
      img: "/Images/home/testimonials/IMG_8408.JPG",

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
      image: "/Images/Essay-editing.png",
      link: "/services/essay-editing",
      button: "Book Now",
    },
    {
      title: "Common App Review",
      description:
        "Perfect your Common App with expert review! 80% of students make mistakes—don’t be one of them. Our team will polish your activities and ensure every section shines. Enroll now to submit an error-free, standout application!",
      image: "/Images/common-app-review.png",
      link: "/services/common-app-review",
      button: "Book Now",
    },
    {
      title: "CSS Profile Help",
      description:
        "Your CSS Profile could be the key to unlocking valuable financial aid! Don’t let mistakes or overlooked sections cost you. Our CSS Profile Review program ensures your submission is accurate and maximizes your chances for aid. Let us help you secure the support you deserve—schedule your review today!",
      image: "/Images/css-profile-helper.png",
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

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(2025, 0, 5); // January 5, 2025
    const difference = targetDate - now;
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div id="home" className="bg-[#F5FAFE]">
      <div className="w-full flex items-center justify-center fixed z-[9] max-[600px]:bg-[#E7F9FF]">
        <HomeNav />
      </div>
      <div className="w-full h-[100vh] relative flex items-center justify-center overflow-hidden">
        <div className="w-[70%] h-full absolute top-10 pt-44 overflow-hidden left-0 pl-36 max-[600px]:w-full max-[600px]:pl-5 max-[600px]:top-0 max-[600px]:pt-32 max-[600px]:">
          <p className="text-6xl font-bold tracking-tight  capitalize max-[600px]:text-4xl">
            Want to get into your <br />
            dream university <span className="text-[#008BDC]">?</span>
          </p>

          <p className="font-medium text-2xl mt-5 pr-5 max-[600px]:text-xl">
            🚀 Exclusive 1-1 Session with Krishna MIT! 🌟
          </p>

          <p className="text-xl font-medium w-[60%] opacity-70  text-justify mt-1 max-[600px]:w-[90%] ">
            Join one of the world’s top counselors who’s transformed thousands
            of college applications and skyrocketed admission chances by 400%.
            💡 Don’t miss this FREE opportunity to craft your personalized
            success roadmap! Offer valid only until Jan 5. 🗓️
          </p>
          <a
            href="https://scheduler.zoom.us/ekiv2mqhqucm9n7w7-4-wg/krishna-mit"
            target="a"
          >
            <button className=" mt-5 px-6 h-10 rounded-lg bg-[#008BDC] text-white font-bold uppercase">
              JOIN 1V1 SESSION !!
            </button>
          </a>
          <p className="mt-5 text-orange-500 text-xl font-medium">
            {timeLeft.days} DAYS {timeLeft.hours} HOURS {timeLeft.minutes} MIN{" "}
            {timeLeft.seconds} SEC !!
          </p>
        </div>
        <img
          className="  h-full object-contain absolute right-[-0vh] max-[600px]:hidden"
          src="/Images/home/Accelerator.png"
          alt=""
        />
      </div>

      <div
        id="cts-graduate"
        className="w-full h-[80vh] p-20 max-[600px]:p-5 max-[600px]:h-[60vh]"
      >
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
                  className="feedback-card w-[55vh] h-[50vh] shadow-lg  rounded-md overflow-hidden cursor-grab"
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

      <div className="w-full h-fit px-20 max-[600px]:p-5 max-[600px]:mt-28 max-[600px]:px-0">
        <h1 className="text-5xl font-medium Rubik my-5 max-[600px]:px-5">
          Our <span className="text-[#36C2F3]">Services</span>
        </h1>
        <div className="w-full h-[70vh] flex justify-between items-center max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:h-fit max-[600px]:p-5 gap-10 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[24%] h-[65vh] max-[600px]:w-full  shadow-lg rounded-md border-2  flex flex-col justify-between"
            >
              <div className="w-full h-[60%] p-5 rounded-t-md max-[600px]:h-[40%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover max-[600px]:object-contain "
                />
              </div>
              <div className="p-4 flex h-[40%] flex-col max-[600px]:h-[70%]">
                <div className="">
                  <h2 className="text-xl max-[600px]:text-2xl font-bold">
                    {service.title}
                  </h2>
                </div>
                <div className="h-[50%] overflow-auto scrollernone mt-2 ">
                  <p className="text-sm leading-4 text-zinc-500">
                    {service.description}
                  </p>
                </div>
                <button
                  onClick={() => NavigateHandler(service.link)}
                  className="bg-[#008BDC] w-1/2 text-white  max-[600px]:text-xl px-4 py-2 rounded-md mt-4"
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
