import React from "react";
import { useNavigate } from "react-router-dom";
import HomeNav from "../HomeNav";
import HomeFooter from './../HomeFooter';

const ServicesHome = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Essay Editing",
      description:
        "Turn your essay into a powerful story! Our Ivy League experts will edit and enhance your writing to make it stand out. Submit your essay for a professional review and get one step closer to your dream college. Enroll now for a polished, compelling essay!",
      image: "./Images/Essay-editing.webp",
      link: "/services/essay-editing",
      button: "Book Now",
    },
    {
      title: "Common App Review",
      description:
        "Perfect your Common App with expert review! 80% of students make mistakes—don’t be one of them. Our team will polish your activities and ensure every section shines. Enroll now to submit an error-free, standout application!",
      image: "./Images/common-app-review.jpg",
      link: "/services/common-app-review",
      button: "Book Now",
    },
    // {
    //   title: "ECS booster",
    //   description: "loren",
    //   image: "./Images/ecs-booster.webp",
    //   button:"Comming Soon"
    // },
    {
      title: "CSS Profile Help",
      description:
      "Your CSS Profile could be the key to unlocking valuable financial aid! Don’t let mistakes or overlooked sections cost you. Our CSS Profile Review program ensures your submission is accurate and maximizes your chances for aid. Let us help you secure the support you deserve—schedule your review today!",
      image: "./Images/css-profile-helper.jpg",
      link: "/services/css-profile",
      button: "Book Now",
    },
    {
      title: "Exam Prepration",
      description:
        "Get ready to ace your exams with expert-led SAT, TOEFL, IELTS, and Duolingo English Test (DET) classes! Whether you’re aiming for top scores or need a boost in your test prep, we’ve got you covered. Join our prep classes now and give yourself the best chance at success!",
      image: "./Images/sat-exam.png",
      button: "Comming Soon",
    },
  ];

  const NavigateHandler = (link) => {
    navigate(link);
  };

  return (
    <div id="services">
      <HomeNav />
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center max-[456px]:mt-5">
          Exclusive Services
        </h1>
      </div>
      <div className="w-full h-fit p-10 pl-36 pr-36 grid grid-cols-3 gap-10 place-items-center max-[456px]:grid max-[456px]:grid-cols-1 max-[1180px]:pl-10 max-[1180px]:pr-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[45vh] h-[65vh] max-[456px]:h-fit max-[456px]:w-[90vw] shadow-lg rounded-md border-2 max-[456px]:p-5 p-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-1/2 object-contain rounded-t-md"
            />
            <div className="p-4">
              <h2 className="text-xl max-[456px]:text-2xl max-[456px]:mt-2 font-bold">
                {service.title}
              </h2>
              <p className="text-sm leading-4 mt-2 text-zinc-500">
                {service.description}
              </p>
              <button
                onClick={() => NavigateHandler(service.link)}
                className="bg-[#ff9728] text-white max-[456px]:text-xl max-[456px]:mt-4 px-4 py-2 rounded-md mt-2"
              >
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <HomeFooter />
    </div>
  );
};

export default ServicesHome;
