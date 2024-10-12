import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const ServicesHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const services = [
    {
      title: "Essay Editing",
      description: "loren",
      image: "./Images/Essay-editing.webp",
      link: "/services/essay-editing",
    },
    {
      title: "Common App Review",
      description: "loren",
      image: "./Images/common-app-review.jpg",
      link: "/services/common-app-review",
    },
    {
      title: "ECS booster",
      description: "loren",
      image: "./Images/ecs-booster.webp",
    },
    {
      title: "SAT Expert Classes",
      description: "loren",
      image: "./Images/sat-exam.png",
    },
    {
      title: "CSS Profile Help",
      description: "loren",
      image: "./Images/css-profile-helper.jpg",
    },
    {
      title: "Transcript Making",
      description: "loren",
      image: "./Images/Transcript-making.jpeg",
    },
  ];


  const NavigateHandler = (link)=>{
  
    navigate(link)  
  }


  return (
    <div id="services">
      <div className="w-full h-40 center max-[600px]:h-16 ">
        <div className="w-fit  bg-[#f8851127] h-24  rounded-full flex items-center justify-evenly max-[600px]:w-full max-[600px]:rounded-none max-[600px]:pr-2 max-[600px]:h-full max-[600px]:justify-between max-[600px]:px-5 ">
          <img
            className="w-[12%] max-[600px]:w-[30%]"
            src="/Images/CTS   Logo.png"
            alt=""
          />
          <div className="w-[50%] h-full flex items-center justify-evenly font-bold text-[#393E46] max-[600px]:text-xs max-[600px]:w-fit max-[600px]:gap-2 max-[600px]:hidden">
            <Link className="hover-link" to="/">
              HOME
            </Link>
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
              CTS-ABROAD
            </Link>
            <Link className="hover-link" to="#footer">
              ABOUT
            </Link>
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
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center">Exclusive Services</h1>
      </div>
      <div className="w-full h-fit p-10 pl-36 pr-36 grid grid-cols-3 gap-10 place-items-center max-[1180px]:pl-10 max-[1180px]:pr-10">
        {services.map((service, index) => (
          <div key={index} className="w-[40vh] h-[50vh] shadow-lg rounded-md border-2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-1/2 object-contain rounded-t-md"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-sm leading-4 mt-2 text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus impedit sed obcaecati consequatur! Temporibus ut, </p>
              <button onClick={()=>NavigateHandler(service.link)} className="bg-[#ff9728] text-white px-4 py-2 rounded-md mt-2">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
