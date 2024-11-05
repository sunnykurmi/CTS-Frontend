import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "@remixicon/react";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

function IVYHome() {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/ivy-form` } });
      return;
    }
  };






  useEffect(() => {
    gsap.to(".straightLine", {
      scrollTrigger: {
        trigger: ".ivySteps",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      height: "85%",
      ease: "expoScale(1,2,none)",
    });
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="w-full h-fit">
      <div className="w-44 absolute left-0 flex items-center justify-center text-base mt-3">
        <Link
          className="h-12 gap-3 rounded-full z-[99] bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
          to={"/"}
        >
          <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
            <RiArrowLeftSLine className="text-[#0000009b]" />
          </div>
          <button className="mr-2">Go Back</button>
        </Link>
      </div>
      <div className="ivyheader w-full h-32 flex pl-32 max-[600px]:pl-0">
        <div className="ivy-heading w-[30%] h-full relative">
          <img
            className="size-32 absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2"
            src="/Images/ivy/leaf.gif"
            alt=""
          />
          <img src="/Images/ivy/6.png" className="h-48 m-auto" alt="" />
          <img
            className="size-32 absolute top-1/2 left-[20%] scale-x-[-1] -translate-x-1/2 -translate-y-1/2"
            src="/Images/ivy/leaf.gif"
            alt=""
          />
        </div>
        <div className="universitylist w-[70%] h-full">
          <img
            src="/Images/ivy/nav univesities.png"
            className="w-full h-32 object-cover mt-5"
            alt=""
          />
        </div>
      </div>
      <div className="ivy-acceptance center flex-col mt-24">
        <h1 className="text-4xl Rubik font-bold max-[600px]:text-3xl">Acceptance Rate : 16%</h1>
        <p className="text-lg Rubik font-[500] w-[55%] text-center leading-6 mt-5 max-[600px]:w-full">
          Note: We focus on quality, not quantity. With an acceptance rate of
          just 16%, IV Accelerator is an elite program designed for those who
          truly stand out. This is your chance to join the select few on the
          fast track to top universities—don’t let this opportunity slip by!
          Apply now and secure your spot before it’s too late!
        </p>
        
          <button 
          onClick={checkLoginHandler} className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2 mt-5">
            Apply Now
          </button>
        
      </div>
      <div className="ivyhero w-full h-fit p-5">
        <h2 className="text-zinc-400 text-xl font-medium text-start ml-48 max-[600px]:ml-0">
          Offerings
        </h2>
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-5xl tracking-tighter font-semibold text-center Rubik max-[600px]:text-3xl">
            Ivy Accelerator Program: Boost Your{" "}
            <span className="text-[#008BDC]">Chances by 600%</span>
          </h1>
          <p className="text-2xl font-normal Rubik text-center w-1/2 mt-3 max-[600px]:text-xl max-[600px]:w-full">
            The only program that has every tool, guide, and insider support you
            need to unlock your future! Here’s how we’ll get you to the top:
          </p>
        </div>
      </div>
      <div className="ivySteps w-full p-5 px-32 h-fit Rubik relative overflow-hidden max-[600px]:px-5">
        <div className="straightLine w-[5px] h-0 bg-blue-500 z-[9] block absolute top-1 left-1/2 after:content-[''] after:absolute after:top-full after:left-[-140%] after:border-l-[10px] after:border-r-[10px] after:border-t-[20px] after:border-t-blue-500 after:border-l-transparent after:border-r-transparent max-[600px]:left-2"></div>
        <div className="dotted w-[5px] h-[80%] border-l-4 border-blue-300 border-dotted block absolute top-1 left-1/2 max-[600px]:left-2"></div>
        <div className="ivystep-1 flex justify-between items-center bg-[#f5fafeae] max-[600px]:flex-col max-[600px]:w-full">
          <div className="ivyleft w-[45%] h-fit overflow-hidden max-[600px]:w-full">
            <img
              className="w-full h-[40vh] object-contain scale-[1.2]"
              src="/Images/ivy/gif1.gif"
              alt=""
            />
          </div>
          <div className="ivyright w-[45%] h-fit center flex-col max-[600px]:w-full ">
            <h2 className="text-xl text-[#008BDC] mb-5 font-medium">
              Step 1: Apply FREE & Join the Elite!
            </h2>
            <h1 className="text-3xl text-center font-semibold">
              Apply now and join the {"world's"} #1 profile-building program!
            </h1>
            <p className="text-center mt-3 text-zinc-600 text-lg leading-5">
              Don’t let anything hold you back! Apply for free today and begin
              the journey with the best. Financial aid or background won’t
              impact your application. Just bring your ambition, and we’ll
              handle the rest.{" "}
            </p>
            
              <button 
              onClick={checkLoginHandler}
               className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2 mt-5">
                Apply Now
              </button>
          
          </div>
        </div>
        <div className="ivystep-1 flex justify-between mt-20 items-center bg-white max-[600px]:flex-col-reverse">
          <div className="ivyright w-[45%] h-fit center flex-col max-[600px]:w-full">
            <h2 className="text-xl text-[#008BDC] mb-5 font-medium">
              Step 2: 1-1 Meeting
            </h2>
            <h1 className="text-3xl text-center font-semibold">
              Meet Krishna MIT One-on-One – Your Road to Success Starts Here{" "}
            </h1>
            <p className="text-center mt-3 text-zinc-600 text-lg leading-5">
              Selected students get an exclusive, one-on-one session with
              Krishna MIT, the mastermind behind countless admissions successes.
              This session will be your launchpad! Once you apply, keep an eye
              on your email inbox where you will receive results and 1-1 session
              scheduling link—your future awaits.
            </p>
            <a
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="center"
          >
            <button className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2 mt-5">
              Check Your Mail Here
            </button>
          </a>
          </div>
          <div className="ivyleft w-[45%] h-fit overflow-hidden max-[600px]:w-full">
            <img
              className="w-full h-[40vh] object-contain scale-[1.2]"
              src="/Images/ivy/gif2.gif"
              alt=""
            />
          </div>
        </div>
        <div className="ivystep-1 flex justify-between mt-20 items-center bg-[#f5fafeae] max-[600px]:flex-col">
          <div className="ivyleft w-[45%] h-fit overflow-hidden max-[600px]:w-full">
            <img
              className="w-full h-[40vh] object-contain scale-[1.2]"
              src="/Images/ivy/gif3.gif"
              alt=""
            />
          </div>
          <div className="ivyright w-[45%] h-fit center flex-col max-[600px]:w-full">
            <h2 className="text-xl text-[#008BDC] mb-5 font-medium">
              Step 3: Vardaan Roadmap
            </h2>
            <h1 className="text-3xl text-center font-semibold">
              Your Vardaan Roadmap – Monthly Goals to Secure Your Spot
            </h1>
            <p className="text-center mt-3 text-zinc-600 text-lg leading-5">
              With Krishna MIT as your guide, He will build a tailored “Vardaan
              Roadmap”—a monthly action plan with powerful tasks, goals, and
              blueprints that ensure you’re on the right path. If you’re in the
              Ivy Accelerator, download your exclusive roadmap and get started!
            </p>
            <button
              onClick={togglePopup}
              className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2 mt-5"
            >
              Download Your Roadmap
            </button>
          </div>
        </div>
        <div className="ivystep-1 flex justify-between mt-20 items-center bg-white max-[600px]:flex-col-reverse">
          <div className="ivyright w-[45%] h-fit center flex-col max-[600px]:w-full">
            <h2 className="text-xl text-[#008BDC] mb-5 font-medium">
              Step 4: ECs Booster
            </h2>
            <h1 className="text-3xl text-center font-semibold">
              Extracurricular Booster – Stand Out, Shine Bright
            </h1>
            <p className="text-center mt-3 text-zinc-600 text-lg leading-5">
              Get ready for an EC transformation! Our powerhouse team of
              designers, researchers, marketers, and more will supercharge your
              extracurricular profile with unmatched quality. Plus, we’re
              teaming up with top startups, investors, and university students
              to make sure you leave an unforgettable mark.
            </p>
            <button
              onClick={togglePopup}
              className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2 mt-5"
            >
              Check your ECs Progress
            </button>
          </div>
          <div className="ivyleft w-[45%] h-fit overflow-hidden max-[600px]:w-full">
            <img
              className="w-full h-[40vh] object-contain scale-[1.2]"
              src="/Images/ivy/gif4.gif"
              alt=""
            />
          </div>
        </div>
        <div className="ivystep-1 flex justify-between mt-20 items-center relative bg-[#f5fafeae]">
          <div className="ivyleft w-[45%] h-fit overflow-hidden blur-md max-[600px]:w-full">
            <img
              className="w-full h-[40vh] object-contain scale-[1.2]"
              src="/Images/ivy/gif4.gif"
              alt=""
            />
          </div>
          <div className="ivyright w-[45%] h-fit center flex-col blur-md max-[600px]:hidden">
            <h2 className="text-xl text-[#008BDC] mb-5 font-medium">
              Step 4: Only For IVY Accelerator Enrolled Students
            </h2>
            <h1 className="text-3xl text-center font-semibold">
              Nothing here please enrll in the IVY Accelerator Program
            </h1>
            <p className="text-center mt-3 text-zinc-600 text-lg leading-5">
              this is only for the students who are enrolled in the IVY
              Accelerator Program. If you are not enrolled in the program please
              apply for the program to get access to this feature.
            </p>
            <button
              onClick={togglePopup}
              className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2 mt-5"
            >
              Apply Now
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-[#008BDC] text-center">
              Only for Ivy Accelerator Enrolled Students
            </h1>
          </div>
        </div>
      </div>

      <div className="quote w-full h-screen max-[600px]:h-[50vh] bg-[url('/Images/ivy/bg-university.png')] bg-contain bg-no-repeat bg-center center flex-col">
        <h1 className="text-3xl mt-2 text-center text-black font-medium max-[600px]:text-xl">
          The Secret to Your Success Awaits!
        </h1>
        <h2 className="text-sm w-1/2 leading-5 p-5 text-center text-black mt-1 font-normal max-[600px]:w-full max-[600px]:text-xs">
          This is the one and only program of its kind, crafted over 5 years
          with innovative, exclusive tools you won’t find anywhere else. While
          we can’t reveal all 15 powerful steps here—reserved solely for
          students who join—we assure you, they’re the key to making your dream
          university a reality. Our unique structure and competitive edge are
          highly guarded, but you can unlock everything by applying now. Don’t
          wait—apply today and step into the future you’ve been working for!
        </h2>
        <Link to={"/ivy-form"}>
          <button className="text-[#008BDC] px-6 py-2 text-lg font-medium rounded-full border-[#008BDC] border-2 mt-5 max-[600px]:scale-75">
            Apply Now
          </button>
        </Link>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center center flex-col w-[50vh] h-[30vh]">
            <h2 className="text-2xl font-bold mb-4">Not Enrolled</h2>
            <p className="mb-4">
              You are not enrolled in the IVY Accelerator Program. Please enroll
              to access this feature.
            </p>
            <button
              onClick={togglePopup}
              className="text-[#008BDC] px-10 py-2 text-xl font-medium rounded-full border-[#008BDC] border-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default IVYHome;