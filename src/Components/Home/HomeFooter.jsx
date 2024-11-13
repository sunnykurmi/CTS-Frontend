import { RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

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
                src="/Images/CTSLogo.png"
                alt=""
              />
            </div>
            <div className="links-wrapper grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 md:ml-10 lg:ml-20 lg:mt-10 lg:grid-cols-4">
              <div className="section">
                <h2 className="text-white font-semibold mb-2">ROADMAP</h2>
                <a
                  href="#home"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Home
                </a>
                <a
                  href="/signup"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Start for free
                </a>
                <a
                  href="/login"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Login now
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">FEATURES</h2>
                <Link
                  to={"/services"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Exclusive Services
                </Link>
                <Link
                  to={"/services/essay-editing"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Essay Editing
                </Link>
                <Link
                  to={"/services/common-app-review"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Common App Review
                </Link>
                <Link
                  to={"/apply-internship-form"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  CTS Internships
                </Link>
                <Link
                  to={"/services/css-profile"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  CSS Profile Help
                </Link>
                <Link
                  to={"/services/exam-prepration/sat-prepration"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  DSAT Crash Course
                </Link>
                <a
                  href="#cts-graduate"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  CTS Graduate
                </a>
                <Link
                  to={"/portfolio"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Personalized Portfolio
                </Link>
                <Link
                  to={"/services/exam-prepration"}
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Exam Prepration
                </Link>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">USE CASES</h2>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  For UnderGrade Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  For High School Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  For Graduate Students
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  For Aspiring Parents
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  For Networking
                </a>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Aspiring Communities
                </a>
              </div>
              <div className="section">
                <h2 className="text-white font-semibold mb-2">ORGANIZATION</h2>
                <Link
                  to="/about-us"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  About Us
                </Link>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Partner With Us
                </a>
                <Link
                  to={"/privacy-policy"}  
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
                >
                  Privacy-policy
                </Link>
                <a
                  href="#"
                  className="text-zinc-300 block ml-1 mb-1 hover:text-zinc-50"
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
            <p className="text-zinc-300 text-center">
              © 2024 Cross The Skylimits. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
