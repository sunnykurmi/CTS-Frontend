import { RiPlayFill, RiPlayLine } from "@remixicon/react";
import React from "react";
import {
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiWhatsappFill,
    RiYoutubeFill,
  } from "@remixicon/react";
import { Link } from "react-router-dom";

function AbroadHome() {
  return (
    <div id="home" >
      <div className="w-full h-14 flex items-center justify-center  bg-[#FCEEC5]">
        <p className="font-semibold text-lg text-[#F58612] ">
          Lets Join Us To Cross The Sky Limits 🏆
        </p>
      </div>
      <div className="w-full h-40 flex items-center justify-center">
        <div className="w-[80%] bg-[#f8851127] h-24  rounded-full flex items-center justify-evenly">
          <img className="w-[12%]" src="/Images/CTS   Logo.png" alt="" />
          <div className="w-[50%] h-full flex items-center justify-evenly font-bold text-[#393E46]  ">
            <Link className="" to="/">
              HOME
            </Link>
            <Link className="" to="/login">
              ROADMAP
            </Link>
            <Link className="" to="/login">
              COMMUNITY
            </Link>

            <a className="" href="#footer">
              ABOUT
            </a>
          </div>
          <div className="w-[25%] h-full flex items-center justify-evenly ">
            <Link to="/login">
              <button className="w-32 h-14 rounded-full border-2 border-[#0000000c]  font-bold">
                LOGIN
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <img src="/Images/abroad.png" alt="" />
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <div className="w-60 h-10 rounded-full flex items-center justify-center font-semibold border-2 border-dashed text-[#000000bd] border-black">
          Play features walkthrough <RiPlayLine className="w-6 h-6" />
        </div>
        <div className="w-28 h-10 rounded-full flex items-center justify-center bg-[#1d8aff] ml-2">
          <p className="text-white font-semibold">Join Now</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-5 font-semibold text-[#262a31]   text-4xl">
        <p>Our Squad Global Takeover</p>
      </div>
      <div className="w-full h-[50vh] flex items-center justify-center mt-5">
        <img src="/Images/abroad2.png" alt="" />
      </div>
      <div className="w-full h-20 flex items-center justify-center  font-semibold text-[#262a31]   text-4xl">
        <p>Resources to level up</p>
      </div>
      <div className="w-full h-[60vh]  flex items-center justify-around">
        <div className="w-[23%] h-full rounded-3xl   shadow-2xl p-8">
            <p className="text-red-400">free (yep! not kidding)</p>
            <p className="text-3xl">lor templates</p>
            <p>ace your applications with our free, killer lor templates!</p>
            <img src="/Images/image.png" alt="" />
        </div>
        <div className="w-[23%] h-full rounded-3xl   shadow-2xl p-8">
            <p className="text-red-400">free (don't u believe?)</p>
            <p className="text-3xl">dsat study material</p>
            <p>access our free dsat study materials and boost your score</p>
            <img src="/Images/image2.png" alt="" />
        </div>
        <div className="w-[23%] h-full rounded-3xl   shadow-2xl p-8">
            <p className="text-red-400">10$ (it worth fsfs)</p>
            <p className="text-3xl">ielts prep material</p>
            <p>ace your applications with our free, killer lor templates!</p>
            <img className="w-full" src="/public/Images/image3.png" alt="" />
        </div>
      </div>
      <div className="w-full h-20 text-center px-[50vh] mt-20
      mb-16 flex items-center justify-center  font-medium text-[#262a31]   text-4xl">
        <p>introducing <span className="text-blue-500">
            ivy accelerator
            </span> 
             : max out ur shot of gettin into top schools </p>
      </div>
      <div className="w-full h-[50vh]  flex items-center justify-around">
        <div className="w-[23%] h-full rounded-3xl   shadow-2xl p-8">
            <p className="text-red-400">99$ (financial-aid available)</p>
            <p className="text-3xl">ivy accelerator <span className="text-amber-900 text-lg" >(premium)</span> </p>
            <p>amp up your academic skills with Ivy Accelerator’s game-changing tools and expert advice</p>
            <p className="ml-2 font-medium mt-5">-dsat prep</p>
            <p className="ml-2 font-medium mt-2 ">-personalised roadmap</p>
            <p className="ml-2 font-medium mt-2 ">-ielts prep</p>
            <p className="ml-2 font-medium mt-2 ">-ap prep</p>
            <p className="ml-2 font-medium mt-2 ">-essay editing</p>
        </div>
        <div className="w-[23%] h-full rounded-3xl   shadow-2xl p-8">
            <p className="text-red-400">99$ (financial-aid available)</p>
            <p className="text-3xl">ivy accelerator <span className="text-amber-900 text-lg" >(premium)</span> </p>
            <p>amp up your academic skills with Ivy Accelerator’s game-changing tools and expert advice</p>
            <p className="ml-2 font-medium mt-2  mt-5">-dsat prep</p>
            <p className="ml-2 font-medium mt-2 ">-personalised roadmap</p>
            <p className="ml-2 font-medium mt-2 ">-ielts prep</p>
            <p className="ml-2 font-medium mt-2 ">-ap prep</p>
            <p className="ml-2 font-medium mt-2 ">-essay editing</p>
        </div>
        <div className="w-[23%] h-full rounded-3xl   shadow-2xl p-8">
            <p className="text-red-400">99$ (financial-aid available)</p>
            <p className="text-3xl">ivy accelerator <span className="text-amber-900 text-lg" >(premium)</span> </p>
            <p>amp up your academic skills with Ivy Accelerator’s game-changing tools and expert advice</p>
            <p className="ml-2 font-medium mt-2  mt-5">-dsat prep</p>
            <p className="ml-2 font-medium mt-2 ">-personalised roadmap</p>
            <p className="ml-2 font-medium mt-2 ">-ielts prep</p>
            <p className="ml-2 font-medium mt-2 ">-ap prep</p>
            <p className="ml-2 font-medium mt-2 ">-essay editing</p>
        </div>
        
      </div>
      <div className="w-full flex items-center justify-center pb-10 mt-32">
        <div
          id="footer"
          className="flex flex-col p-20 bg-zinc-900 rounded-[40px] max-md:px-5"
        >
          <div className="flex flex-wrap justify-between w-full text-sm font-medium min-h-[392px] text-zinc-400 max-md:max-w-full">
            <img
              loading="lazy"
              src="/Images/CTS   Logo.png"
              className="object-contain shrink-0 self-start aspect-[2.87] w-[152px]"
            />
            <div className="flex justify-center h-full min-w-[240px] w-[808px] max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink pl-20 w-full basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex flex-wrap gap-1.5 px-1.5 w-full max-md:max-w-full">
                  <div className="flex flex-col grow shrink self-start w-[115px]">
                    <div className="pb-5 w-full text-xs uppercase whitespace-nowrap text-slate-50">
                      Roadmap
                    </div>

                    <div className="pb-4 w-full">
                      {" "}
                      <a href="#home">Home</a>{" "}
                    </div>
                    <div className="pb-4 w-full">
                      {" "}
                      <Link to="/signup">Start for free</Link>{" "}
                    </div>
                    <div className="pb-4 w-full whitespace-nowrap">
                      <Link to="/login">login now</Link>{" "}
                    </div>
                    <div className="flex pb-4 w-full min-h-[37px]" />
                  </div>
                  <div className="flex flex-col grow shrink justify-center items-start pr-11 w-[175px]">
                    <div className="flex flex-col w-36 max-w-full min-h-[392px]">
                      <div className="pb-5 w-full text-xs uppercase whitespace-nowrap text-slate-50">
                        Features
                      </div>
                      <div className="pb-4 w-full leading-5 whitespace-nowrap">
                        WhatsApp
                        <br />
                        Communities
                      </div>
                      <div className="pb-4 w-full whitespace-nowrap">
                        Challenges
                      </div>
                      <div className="pb-4 w-full">Event Hosting</div>
                      <div className="pb-4 w-full">CTS Internships</div>
                      <div className="pb-4 w-full whitespace-nowrap">
                        SATisfactory
                      </div>
                      <div className="pb-4 w-full">DSAT Crash Course</div>
                      <div className="pb-4 w-full">CTS Graduate</div>
                      <div className="pb-4 w-full">Personalized Portfolio</div>
                      <div className="pb-4 w-full">Interlango Plus</div>
                    </div>
                  </div>
                  <div className="flex flex-col grow shrink justify-center pr-16 w-[175px]">
                    <div className="flex flex-col w-full min-h-[392px]">
                      <div className="pb-5 w-full text-xs uppercase text-slate-50">
                        Use cases
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For UnderGrade Students
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For High School Students
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For Graduate
                        <br />
                        Students
                      </div>
                      <div className="pb-4 w-full leading-5">
                        For Aspiring
                        <br />
                        Parents
                      </div>
                      <div className="pb-4 w-full">For Networking</div>
                      <div className="pb-4 w-full leading-5">
                        Aspiring <br />
                        Communities
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col grow shrink w-[115px]">
                    <div className="pb-5 w-full text-xs uppercase whitespace-nowrap text-slate-50">
                      Organization
                    </div>
                    <div className="pb-4 w-full">About Us</div>
                    <div className="pb-4 w-full">Partner With Us</div>
                    <div className="pb-4 w-full whitespace-nowrap">Career</div>
                    <div className="pb-4 w-full whitespace-nowrap">Academy</div>
                    <div className="pb-4 w-full">Contact Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex items-center self-stretch my-auto text-xs min-w-[240px] text-neutral-400">
            <div className="flex gap-5 mt-2 max-[600px]:gap-2 items-center">
                <a
                  className="hover:text-white"
                  href="https://www.instagram.com/krishna_mit_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="max-[600px]:scale-75" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.link/wbwwp2"
                >
                  <RiWhatsappFill className="max-[600px]:scale-75" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtube.com/@krishnamit"
                >
                  <RiYoutubeFill className="max-[600px]:scale-75" />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/krishna-mit"
                >
                  <RiLinkedinBoxFill className="max-[600px]:scale-75" />
                </a>
              </div>
              <div className="flex self-stretch my-auto items-center">
                <div className="flex flex-col justify-center items-start pr-2 pl-6 max-md:pl-5">
                  <div className="min-h-[18px]">Terms of service</div>
                </div>
                <div className="whitespace-nowrap">Privacy</div>
              </div>
            </div>
            <div className="flex items-center self-stretch my-auto">
              <div className="flex flex-col self-stretch my-auto text-sm font-medium leading-none uppercase whitespace-nowrap text-neutral-100 text-opacity-70 w-[46px]">
                <div className="flex justify-center items-center px-1 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/962216d2ee20b4535be6b35e1dcd699aeda0fcb74363d6fc3ac06e3d163c1997?placeholderIfAbsent=true&apiKey=dddf50d431064bd4b76d52f0b630fcc4"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div className="self-stretch pl-1 my-auto">en</div>
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch pl-4 my-auto text-xs text-neutral-400">
                <div>Copyright © 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbroadHome;
