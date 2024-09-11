import React, { useEffect, useRef, useState } from "react";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Nav from "../Nav";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from "@remixicon/react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useDispatch, useSelector } from "react-redux";
import { CreateRoadmap } from "./../../../store/Actions/roadmapAction";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateRoadmapp = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef(null);
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
      setFormSubmitted(true);
      dispatch(CreateRoadmap(userInput));
    } else {
      toast.error("❌Fill All The Details❌", {
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
    if (formSubmitted===true) {
      console.log("Form submitted, loading calendar button...");
      if (calendar && calendar.schedulingButton) {
        calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0G8fTaMy33MET908cjrTeJgCSrKH7xSG2jDbBfo_iMlJE8ELSInzJUjzUVdqEC8ELbgUIBgoFS?gv=true",
          color: "#F58612",
          label: "Book an appointment",
          target: buttonRef.current,
        });
        console.log("Calendar button loaded.");
      } else {
        console.error("Calendar scheduling button script not loaded.");
      }
     
    }
  }, [formSubmitted, navigate]);

  return (
    <div>
      <Nav />
      {formSubmitted === true && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[30%] h-[40vh] bg-white border-2 z-[99] flex flex-col gap-5 items-center text-center justify-center">
            <div className="w-full flex items-end justify-end p-1 px-2">
              <Link to="/home">
                <RiCloseLine className="text-red-600" />
              </Link>
            </div>
            <p className="text-xl font-semibold">
              Book 1-1 Live Session with Krishna MIT
            </p>
            <p>Click the below button to Book Appointment</p>
            <div
              ref={buttonRef}
            >
            </div>
            <p className="text-red-600 text-sm font-semibold">
              Note: It is compulsary to attend the session otherwise your
              roadmap creation process will be neglected{" "}
            </p>
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
                <button onClick={handlesubmit}>Submit Details</button>
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
