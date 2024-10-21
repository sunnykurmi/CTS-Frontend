import {
  RiBookLine,
  RiHome2Line,
  RiPassValidLine,
  RiPhoneLine,
  RiRoadMapLine,
  RiSettings5Line,
  RiSpyFill,
  RiTeamLine,
  RiWindow2Line,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

export default function LeftSlide({ selectedComponent, setSelectedComponent,closeSidebar }) {
  const getButtonClass = (component) => {
    return selectedComponent === component
      ? "flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg bg-[black] text-white"
      : "flex gap-4 items-center justify-start pl-6 font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg";
  };

  return (
    <div className="z-[9]">
      <div className="w-full h-full flex gap-3 flex-col justify-center px-5 py-[8vh]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-full justify-center px-6">
            <div className="w-[60%] h-[2px] bg-[#393e4675]"></div>
            <p className="text-[#393e4675] font-semibold text-xs">HOME</p>
            <div className="w-[60%] h-[2px] bg-[#393e4675]"></div>
          </div>

          <div className="w-full h-[8vh] flex items-center justify-center ">
            <button
              className={getButtonClass("Dashboard")}
              onClick={() => {
                setSelectedComponent("Dashboard");
                closeSidebar();
              }}
            >
              <RiHome2Line />
              <p className="max-[600px]:">Dashboard</p>
            </button>
          </div>

          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("Roadmap")}
              onClick={() => {setSelectedComponent("Roadmap"); closeSidebar();}}
            >
              <RiRoadMapLine />
              <p>Roadmap</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-full justify-center px-6">
            <div className="w-[50%] h-[2px] bg-[#393e4675]"></div>
            <p className="text-[#393e4675] font-semibold text-xs">ENGAGE</p>
            <div className="w-[50%] h-[2px] bg-[#393e4675]"></div>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <a
              className={getButtonClass("Resources")}
              // onClick={() => {setSelectedComponent("Resources"); closeSidebar();}}
              href="https://nas.io/Cross-The-Skylimits/products"
            >
              <RiBookLine />
              <p>Resource</p>
            </a>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <a
              className={getButtonClass("Events")}
              // onClick={() =>{ setSelectedComponent("Events"); closeSidebar();}}
              href="https://nas.io/Cross-The-Skylimits/events"
            >
              <RiWindow2Line />
              <p>Events</p>
            </a>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <a
              className={getButtonClass("Community")}
              // onClick={() => {setSelectedComponent("Community"); closeSidebar();}}
              href="https://wa.me/9174491318"
            >
              <RiTeamLine />
              <p>Community</p>
            </a>
          </div>

          <div className="w-full h-[8vh] flex items-center justify-center">
            <Link
              className={getButtonClass("Community")}
              // onClick={() => {setSelectedComponent("Community"); closeSidebar();}}
              to={"/portfolio"}
            >
              <RiPassValidLine />
              <p>Portfolio</p>
            </Link>
          </div>

          <div className="w-full h-[8vh] flex items-center justify-center">
            <Link
              className={getButtonClass("Community")}
              // onClick={() => {setSelectedComponent("Community"); closeSidebar();}}
              to={"/services"}
            >
              <RiSpyFill />
              <p className="whitespace-nowrap max-[393px]:whitespace-normal min-[600px]:whitespace-normal">Exclusive Services</p>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-full justify-center px-6">
            <div className="w-[50%] h-[2px] bg-[#393e4675]"></div>
            <p className="text-[#393e4675] font-semibold text-xs">OTHERS</p>
            <div className="w-[50%] h-[2px] bg-[#393e4675]"></div>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("Settings")}
              onClick={() => {setSelectedComponent("Settings"); closeSidebar();}}
            >
              <RiSettings5Line />
              <p>Settings</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("Contactus")}
              onClick={() => {setSelectedComponent("Contactus"); closeSidebar();}}
            >
              <RiPhoneLine />
              <p>Contact Us</p>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
