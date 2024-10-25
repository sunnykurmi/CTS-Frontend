import { RiPlayLine } from "@remixicon/react";
import React from "react";
import {
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiWhatsappFill,
    RiYoutubeFill,
  } from "@remixicon/react";
import HomeNav from "./HomeNav";

function AbroadHome() {
  return (
    <div id="home" >
      <div className="w-full h-14 flex items-center justify-center  bg-[#FCEEC5]">
        <p className="font-semibold text-lg text-[#F58612] ">
          Lets Join Us To Cross The Sky Limits 🏆
        </p>
      </div>
      <HomeNav />
      <div className="w-full flex items-center justify-center">
        <img className="w-[30%]" src="/Images/abroad.png" alt="" />
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <div className="w-60 h-10 rounded-full flex items-center justify-center font-semibold border-2 border-dashed text-[#000000bd] border-black">
          Play features walkthrough <RiPlayLine className="w-6 h-6" />
        </div>
        <div className="w-28 h-10 rounded-full flex items-center justify-center bg-[#1d8aff] ml-2">
          <p className="text-white font-semibold">Join Now</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-5 font-semibold text-[#262a31] max-[600px]:text-3xl  text-4xl">
        <p>Our Squad Global Takeover</p>
      </div>
      <div className="w-full h-[50vh] flex items-center justify-center max-[600px]:h-[30vh] mt-5">
        <img src="/Images/abroad2.png" alt="" />
      </div>
      <div className="w-full h-20 flex items-center justify-center  font-semibold text-[#262a31]   text-4xl">
        <p>Resources to level up</p>
      </div>
      <div className="w-full h-[60vh]  flex items-center justify-around max-[600px]:flex-col max-[600px]:h-fit max-[600px]:py-5 max-[600px]:gap-10 ">
        <div className="w-[23%] max-[600px]:w-[85%] h-full rounded-3xl max-[600px]:border-2  shadow-2xl p-8">
            <p className="text-red-400">free (yep! not kidding)</p>
            <p className="text-3xl">lor templates</p>
            <p>ace your applications with our free, killer lor templates!</p>
            <img src="/Images/image.png" alt="" />
        </div>
        <div className="w-[23%] max-[600px]:w-[85%] h-full rounded-3xl max-[600px]:border-2  shadow-2xl p-8">
            <p className="text-red-400">free ({"don't"} u believe?)</p>
            <p className="text-3xl">dsat study material</p>
            <p>access our free dsat study materials and boost your score</p>
            <img src="/Images/image2.png" alt="" />
        </div>
        <div className="w-[23%] max-[600px]:w-[85%] h-full rounded-3xl  max-[600px]:border-2 shadow-2xl p-8">
            <p className="text-red-400">10$ (it worth fsfs)</p>
            <p className="text-3xl">ielts prep material</p>
            <p>ace your applications with our free, killer lor templates!</p>
            <img className="w-full" src="/Images/image3.png" alt="" />
        </div>
      </div>
      <div className="w-full h-20 text-center px-[50vh] mt-20 
      mb-16 flex items-center justify-center  font-medium text-[#262a31] text-4xl max-[600px]:text-xl max-[600px]:px-3">
        <p>introducing <span className="text-blue-500">
            ivy accelerator
            </span> 
             : max out ur shot of gettin into top schools </p>
      </div>
      <div className="w-full h-[50vh]  flex items-center justify-around  max-[600px]:h-fit max-[600px]:flex-col max-[600px]:py-5 max-[600px]:gap-10">
        <div className="w-[23%] h-full rounded-3xl  max-[600px]:w-[85%] shadow-2xl p-8">
            <p className="text-red-400">99$ (financial-aid available)</p>
            <p className="text-3xl">ivy accelerator <span className="text-amber-900 text-lg" >(premium)</span> </p>
            <p>amp up your academic skills with Ivy Accelerator’s game-changing tools and expert advice</p>
            <p className="ml-2 font-medium mt-5">-dsat prep</p>
            <p className="ml-2 font-medium mt-2 ">-personalised roadmap</p>
            <p className="ml-2 font-medium mt-2 ">-ielts prep</p>
            <p className="ml-2 font-medium mt-2 ">-ap prep</p>
            <p className="ml-2 font-medium mt-2 ">-essay editing</p>
        </div>
        <div className="w-[23%] h-full rounded-3xl max-[600px]:w-[85%]  shadow-2xl p-8">
            <p className="text-red-400">99$ (financial-aid available)</p>
            <p className="text-3xl">ivy accelerator <span className="text-amber-900 text-lg" >(premium)</span> </p>
            <p>amp up your academic skills with Ivy Accelerator’s game-changing tools and expert advice</p>
            <p className="ml-2 font-medium mt-5">-dsat prep</p>
            <p className="ml-2 font-medium mt-2 ">-personalised roadmap</p>
            <p className="ml-2 font-medium mt-2 ">-ielts prep</p>
            <p className="ml-2 font-medium mt-2 ">-ap prep</p>
            <p className="ml-2 font-medium mt-2 ">-essay editing</p>
        </div>
        <div className="w-[23%] h-full rounded-3xl max-[600px]:w-[85%]  shadow-2xl p-8">
            <p className="text-red-400">99$ (financial-aid available)</p>
            <p className="text-3xl">ivy accelerator <span className="text-amber-900 text-lg" >(premium)</span> </p>
            <p>amp up your academic skills with Ivy Accelerator’s game-changing tools and expert advice</p>
            <p className="ml-2 font-medium mt-5">-dsat prep</p>
            <p className="ml-2 font-medium mt-2 ">-personalised roadmap</p>
            <p className="ml-2 font-medium mt-2 ">-ielts prep</p>
            <p className="ml-2 font-medium mt-2 ">-ap prep</p>
            <p className="ml-2 font-medium mt-2 ">-essay editing</p>
        </div>
        
      </div>
      <div className="w-full flex items-center  justify-center px-32 p-20 pb-10 max-[600px]:p-0">
      <div id="footer" className=" max-[600px]:rounded-none rounded-2xl flex flex-col gap-10 w-full  bg-zinc-900 p-5">
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
              <a href="#home" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Home</a>
              <a href="/signup" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Start for free</a>
              <a href="/login" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Login now</a>
            </div>
            <div className="section">
              <h2 className="text-white font-semibold mb-2">FEATURES</h2>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">WhatsApp Communities</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Challenges</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Event Hosting</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">CTS Internships</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">SATisfactory</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">DSAT Crash Course</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">CTS Graduate</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Personalized Portfolio</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Interlango Plus</a>
            </div>
            <div className="section">
              <h2 className="text-white font-semibold mb-2">USE CASES</h2>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">For UnderGrade Students</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">For High School Students</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">For Graduate Students</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">For Aspiring Parents</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">For Networking</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Aspiring Communities</a>
            </div>
            <div className="section">
              <h2 className="text-white font-semibold mb-2">ORGANIZATION</h2>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">About Us</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Partner With Us</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Career</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Academy</a>
              <a href="#" className="text-zinc-300 block ml-3 mb-1 hover:text-zinc-50">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper flex flex-col gap-4 items-center justify-center">
          <div className="socials-wrapper flex gap-4 text-3xl">
            <a href="https://www.instagram.com/krishna_mit_" className="text-zinc-300"
              >
                <RiInstagramFill/>
               
            </a>
            <a href="https://www.linkedin.com/in/krishna-mit" className="text-zinc-300"
              >
                <RiLinkedinBoxFill/>
            </a>
            <a href="https://wa.link/wbwwp2" className="text-zinc-300"
              >
              <RiWhatsappFill/>
            </a>
            <a href="https://youtube.com/@krishnamit" className="text-zinc-300"
              >
              <RiYoutubeFill/>
            </a>
          </div>
          <p className="text-zinc-300">
            © 2024 Cross The Sky Limits. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AbroadHome;
