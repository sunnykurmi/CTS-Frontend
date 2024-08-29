import React, { useEffect, useState } from "react";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Nav from "../Nav";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useDispatch, useSelector } from "react-redux";
import { CreateRoadmap } from "./../../../store/Actions/roadmapAction";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateRoadmapp = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);
  const loading = useSelector((state) => state.roadmap.loading);
  const [formSubmitted, setFormSubmitted] = useState(false); // Add state for form submission
  const [userInput, setUserInput] = useState({
    //first step
    fullname: "",
    gender: "",
    dateofbirth: "",
    state: "",
    city: "",
    //second step
    class: "",
    educationBoard: "",
    tenthMarks: "",
    eleventhMarks: "",
    stream: "",
    abroadStudy: "",
    entranceExam: "",
    dreamuniversity: "",
    aboutsatexam: "",
    satScore: "",
    englishtest: "",
    countrypreferance: "",
    challengingSubject: "",
    shortTermGoal: "",
    longTermGoal: "",
    //third step
    interestField: "",
    skills: "",
    BecomeInFuture: "",
    //last step
    familyincome: "",
    caste: "",
    physicaldisabilities: "",
    physicaldisabilitiestype: "",
  });
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const prevStep = () => {
    setPage((currPage) => (currPage > 0 ? currPage - 1 : currPage));
  };

  const handleChange = (input) => (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      [input]: e.target.value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(CreateRoadmap(userInput));
      setFormSubmitted(true);
    } else {
      toast.error('❌Fill All The Details❌', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setPage(-1);
    }
  };

  const validateForm = () => {
    const excludedFields = [
      "tenthMarks",
      "eleventhMarks",
      "stream",
      "physicaldisabilitiestype",
      "dreamuniversity",
      "satScore",
      "aboutsatexam",
      "countrypreferance",
      "englishtest",
    ];
    return Object.entries(userInput)
      .filter(([key]) => !excludedFields.includes(key))
      .every(([, value]) => value.trim() !== "");
  };

  const PageDisplay = () => {
    if (page === 0)
      return (
        <FirstStep
          nextStep={nextStep}
          handleChange={handleChange}
          userInput={userInput}
        />
      );
    else if (page === 1)
      return (
        <SecondStep
          nextStep={nextStep}
          handleChange={handleChange}
          userInput={userInput}
        />
      );
    else if (page === 2)
      return (
        <ThirdStep
          nextStep={nextStep}
          handleChange={handleChange}
          userInput={userInput}
        />
      );
    else
      return (
        <LastStep
          nextStep={nextStep}
          handleChange={handleChange}
          userInput={userInput}
        />
      );
  };

  const stepPercentage = (page / 3) * 100;


  useEffect(() => {
    if (!loading && formSubmitted) {
      toast.success('🎉Successfully Roadmap Created 🎉 ', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  
      setTimeout(() => {
        toast.success('🎉Mail Sent Successfully 🎉 ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }, 1000); 
  
      setTimeout(() => {
        navigate("/home");
      }, 5000); 
    }
  }, [loading, formSubmitted, navigate]);

  useEffect(() => {
    if (loading) {
      setProgress(0); // Reset progress to 0 when loading starts
    }
  }, [loading]);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return 98;
        }
        const increment = Math.floor(Math.random() * 1) +1; // Randomly skip 3-5%
        return Math.min(prev + increment, 98);
      });
    }, 90000 / 98); // 90 seconds divided by 98 steps

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Nav />
      {loading && (
        <div className="fixed w-full h-[100vh] pb-32  bg-[#F5F5F5] z-[9] flex flex-col items-center justify-center">
          <img className="w-[30%]" src="/Images/roadmap loading.gif" alt="" />
          <div className="w-full flex font-semibold text-xl items-center justify-center">
            <p>Please wait your roadmap is creating . . . </p>
            <img className="w-[3%]" src="/Images/roadmap loading2.gif" alt="" />
            <p>{progress}%</p>
          </div>
            <div className="w-[50%] rounded-full h-2">
      <div
        className="bg-green-700 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
        </div>
      )} 
      <div className="w-full h-20  relative  flex items-center justify-center ">
        <div className="w-44 absolute left-0 h-full flex items-center justify-center">
          <Link
            className=" h-12 gap-3 rounded-full  bg-[#F58612] text-white flex items-center justify-center p-2 font-bold"
            to={-1}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className=" text-[#0000009b]" />{" "}
            </div>
            <button className="mr-2">Go Back </button>
          </Link>
        </div>
        <div className="w-[20%] ">
          <MultiStepProgressBar step={stepPercentage} />
        </div>
      </div>
      <div className="w-full h-[75vh]  overflow-y-scroll scroller flex flex-col gap-5 items-center justify-center]">
        <div className="w-[80%] h-fit  flex items-center justify-center ">
          {PageDisplay()}
        </div>
        <div className="flex gap-4">
          <div
            onClick={prevStep}
            className={`h-12 cursor-pointer gap-3 rounded-full bg-[#F58612] text-white flex items-center justify-center p-2 font-bold ${
              page === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className=" text-[#0000009b]" />{" "}
            </div>
            <button className="ml-2" disabled={page === 0}>
              Previous
            </button>
          </div>
          <div
            onClick={nextStep}
            className="h-12 cursor-pointer gap-3 rounded-full bg-[#F58612] text-white flex items-center justify-center p-2 font-bold"
          >
            <button className="ml-2">
              {page === 3 ? (
                <button onClick={handlesubmit}>Create your Roadmap</button>
              ) : (
                "Next"
              )}
            </button>

            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowRightSLine className=" text-[#0000009b]" />{" "}
            </div>
          </div>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </div>
      </div>
    </div>
  );
};

export default CreateRoadmapp;
