import { RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from "@remixicon/react";
import React from "react";

const HomeFooter = () => {
  return (
    <>
      <div className="w-full flex items-center  justify-center px-32 p-20 pb-10 max-[600px]:p-0">
        <div
          id="footer"
          className=" max-[600px]:rounded-none rounded-2xl flex flex-col gap-10 w-full  bg-zinc-900 p-5"
        >
          <div className="footer-wrapper flex flex-wrap gap-8 lg:justify-evenly">
            <div className="image-wrapper w-[300px] h-[100px]">
              <img
                className="max-[600px]:w-[60%] max-[600px]:mt-6 "
                src="https://www.crosstheskylimits.online/Images/CTS%20%20%20Logo.png"
                alt=""
              />
            </div>
            <div className="links-wrapper grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 md:ml-10 lg:ml-20 lg:mt-10 lg:grid-cols-4">
              <div className="section">
                <h2 className="text-white font-semibold mb-2">ROADMAP</h2>
                <a
                  href="#home"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Home
                </a>
                <a
                  href="/signup"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Start for free
                </a>
                <a
                  href="/login"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Login now
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">FEATURES</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  WhatsApp Communities
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Challenges
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Event Hosting
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  CTS Internships
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  SATisfactory
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  DSAT Crash Course
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  CTS Graduate
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Personalized Portfolio
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Interlango Plus
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">USE CASES</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For UnderGrade Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For High School Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For Graduate Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For Aspiring Parents
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  For Networking
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Aspiring Communities
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">ORGANIZATION</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Partner With Us
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Career
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Academy
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper flex flex-col gap-4 items-center justify-center">
            <div className="socials-wrapper flex gap-4 text-3xl">
              <a
                href="https://www.instagram.com/krishna_mit_"
                className="text-zinc-300"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-mit"
                className="text-zinc-300"
              >
                <RiLinkedinBoxFill />
              </a>
              <a href="https://wa.link/wbwwp2" className="text-zinc-300">
                <RiWhatsappFill />
              </a>
              <a
                href="https://youtube.com/@krishnamit"
                className="text-zinc-300"
              >
                <RiYoutubeFill />
              </a>
            </div>
            <p className="text-zinc-300">
              © 2024 Cross The Sky Limits. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
