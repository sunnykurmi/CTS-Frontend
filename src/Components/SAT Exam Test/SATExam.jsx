import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiCloseLine,
  RiEraserFill,
  RiMapPin2Line,
  RiMapPinLine,
  RiMarkPenLine,
  RiPencilLine,
  RiUserLocationLine,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { SAT_Section1_Module1 } from "./SAT_Section1_Module1";
import { SAT_Section1_Module2 } from "./SAT_Section1_Module2";
import Loader from "../Loader/Loader";

export default function SATExam() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInputs, setUserInputs] = useState([]);
  const [highlightMode, setHighlightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isReviewPage, setIsReviewPage] = useState(false);
  const [timeLeft, setTimeLeft] = useState(32 * 60);
  const [isModuleOver, setIsModuleOver] = useState(
    localStorage.getItem("isModuleOver") === "true"
  );

  const [currentModule, setCurrentModule] = useState(SAT_Section1_Module1);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleGoToReviewPage = () => {
    setIsReviewPage(true);
  };

  const handleGoToPreviousPage = () => {
    setIsReviewPage(false);
  };

  const handleOptionSelect = (question, selectedOption) => {
    const updatedInputs = [...userInputs];
    const existingInputIndex = updatedInputs.findIndex(
      (input) => input.question === question
    );

    if (existingInputIndex >= 0) {
      updatedInputs[existingInputIndex].answer = selectedOption;
    } else {
      updatedInputs.push({ question, answer: selectedOption });
    }

    setUserInputs(updatedInputs);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentModule.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRemoveSelection = () => {
    const updatedInputs = userInputs.filter(
      (input) => input.question !== currentQuestion.question
    );
    setUserInputs(updatedInputs);
  };

  const currentQuestion = currentModule[currentQuestionIndex];

  const handleHighlightText = () => {
    setHighlightMode(!highlightMode);
  };

  const handleTextHighlight = (event) => {
    if (highlightMode) {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        range.surroundContents(span);
        selection.removeAllRanges();
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    toggleModal();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleSubmitModule = () => {
    setIsModuleOver(true);
    localStorage.setItem("isModuleOver", "true");
  };

  useEffect(() => {
    const startTime = localStorage.getItem("startTime");
    if (!startTime) {
      const now = Date.now();
      localStorage.setItem("startTime", now);
    } else {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      setTimeLeft(32 * 60 - elapsedTime);
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timer);
          setIsReviewPage(true);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentModule(SAT_Section1_Module2);
      setCurrentQuestionIndex(0);
        setIsModuleOver(false);
    }, 5000);
  
    return () => clearTimeout(timer);
  }, []);

  if (isModuleOver) {
    return <ModuleOver />;
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={highlightMode ? "hide-cursor" : ""}
    >
      {highlightMode && (
        <RiPencilLine
          style={{
            position: "fixed",
            left: cursorPosition.x,
            top: cursorPosition.y,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        />
      )}
      <div className="w-full h-[10vh] bg-[#E7F9FF] p-2 px-10 flex items-center justify-between border-dashed  border-b-2 border-black">
        <div className="w-[30%] h-full  flex flex-col items-start justify-evenly ">
          <p className="font-medium">
            Section 1 , Module 1 : Reading and Writing
          </p>
          <div className="flex h-full items-center">
            <p>Direction</p>
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="h-full w-[30%]  flex items-center justify-center text-3xl text-red-500 font-semibold">
          <p>{formatTime(timeLeft)}</p>
        </div>
        <div className="h-full w-[30%]  items-center justify-end flex">
          <div
            className="flex flex-col h-full items-center cursor-pointer"
            onClick={handleHighlightText}
          >
            <RiMarkPenLine className="w-6" />
            <p className="text-sm font-medium">Highlight Text</p>
          </div>
        </div>
      </div>
      {isReviewPage ? (
        <div className="w-full h-[80vh]  bg-[#F5FAFE]">
          <div className="w-full h-[5%]  center">
            <div className="h-full w-[90%] bg-blue-900 center rounded-b-2xl uppercase font-semibold text-white">
              <p>This is a practice test</p>
            </div>
          </div>
          <div className="w-full h-[10vh] text-4xl center ">
            Check Your Work
          </div>
          <div className="w-full h-[5vh] text-xl center ">
            On test day , you wan't be able to move on to the next module until
            time expires
          </div>
          <div className="w-full h-[5vh] text-xl center ">
            For these practice questions , you can click{" "}
            <b className="px-2"> Next </b> when you're ready to move on
          </div>
          <div className="w-full h-[70%] center">
            <div className="w-[60%] h-[80%] bg-[#F5FAFE] drop-shadow-xl rounded-lg">
              <div className="w-full center">
                <div className="w-[90%] h-[10vh] border-b-2 flex items-center justify-between">
                  <p className="font-medium text-xl">
                    Section 1 , Module 1 : Reading and Writing
                  </p>
                  <div className="flex gap-5">
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-6 h-6 bg-green-600 rounded-sm"></div>
                      Answered
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-6 h-6 border-2 border-dashed border-[#000000b3]"></div>
                      Unanswered
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full center">
                <div className="w-[90%] grid  grid-cols-10">
                  {currentModule.map((_, index) => {
                    const isAnswered = userInputs.some(
                      (input) =>
                        input.question === currentModule[index].question
                    );

                    return (
                      <div
                        key={index}
                        className="w-fit flex h-14   flex-col items-center justify-end cursor-pointer"
                      >
                        <div
                          className={`w-10 h-10 text-xl ${
                            isAnswered
                              ? "bg-green-600 text-white"
                              : "border-2 border-dashed bor text-black border-[#000000b3]"
                          } rounded-sm center font-bold  `}
                        >
                          {index + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full h-24 center">
                {timeLeft > 0 && (
                  <div
                    onClick={handleGoToPreviousPage}
                    className="px-4 cursor-pointer h-12 rounded-full border-2 border-blue-700 text-blue-700 center"
                  >
                    Go to Previous Page
                  </div>
                )}

                <div
                  onClick={handleSubmitModule}
                  className="px-4 cursor-pointer h-12 rounded-full border-2 border-blue-700 text-blue-700 center"
                >
                  Submit Module
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[80vh] bg-[#F5FAFE]">
          <div className="w-full h-[5%]  center">
            <div className="h-full w-[90%] bg-blue-900 center rounded-b-2xl uppercase font-semibold text-white">
              <p>This is a practice test</p>
            </div>
          </div>
          <div className="w-full h-[95%] flex">
            <div
              onMouseUp={handleTextHighlight}
              className="w-[50%] h-full  border-r-2 border-[#555555] p-10  overflow-y-scroll scrollernone  "
            >
              <p>{currentQuestion.questioninfo}</p>
            </div>
            <div className="w-[50%] h-full border-l-2 border-[#555555] p-10 overflow-y-scroll scrollernone ">
              <div className="w-[95%] flex items-center justify-between h-8  mb-2 bg-slate-200">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-black center">
                    <p className="text-white">{currentQuestionIndex + 1}</p>
                  </div>
                  <p className="ml-2 font-medium">
                    Question {currentQuestionIndex + 1} of{" "}
                    {currentModule.length}{" "}
                  </p>
                </div>
                <div
                  onClick={handleRemoveSelection}
                  className="w-8 cursor-pointer h-8 border-2 center rounded-lg border-[#363636d7]"
                >
                  <RiEraserFill className="w-4" />
                </div>
              </div>
              <div onMouseUp={handleTextHighlight}>
                <p>{currentQuestion.question}</p>
              </div>
              <div className="pl-5 flex flex-col gap-2 w-[95%]">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = userInputs.some(
                    (input) =>
                      input.question === currentQuestion.question &&
                      input.answer === option
                  );

                  return (
                    <div
                      key={index}
                      className={`cursor-pointer p-2 border-2 rounded-lg ${
                        isSelected ? "border-green-500" : ""
                      }${
                        timeLeft <= 0 ? "pointer-events-none opacity-50" : ""
                      }`}
                      onClick={() => {
                        handleOptionSelect(currentQuestion.question, option);
                        setIsModalOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6  ${
                            isSelected
                              ? "bg-green-500 text-white"
                              : " text-black  bg-transparent border-2 border-black"
                          } center rounded-full shrink-0`}
                        >
                          <p className="">{index + 1}</p>
                        </div>
                        <div className="ml-2">{option} </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-[10vh] bg-[#E7F9FF] items-center flex justify-between">
        <div className="w-[20%]  h-full font-semibold text-2xl flex items-center  justify-center">
          <p>Sunny Kurmi</p>
        </div>
        {isReviewPage ? (
          ""
        ) : (
          <div className="  relative w-[60%] h-full  text-white center ">
            <div
              className="w-fit px-2 h-10 gap-2 font-medium cursor-pointer bg-slate-900 rounded-lg center "
              onClick={toggleModal}
            >
              <div className=" ">
                <p>
                  Question {currentQuestionIndex + 1} of{" "}
                  {currentModule.length}
                </p>
              </div>
              <RiArrowUpSLine />
            </div>
            {isModalOpen && (
              <div className=" cursor-default  w-[60%] h-[50vh] translate-y-[-55%] rounded-lg absolute text-black  bg-white drop-shadow-xl">
                <div className=" relative  w-full h-20 center text-center">
                  <p className="font-medium text-xl">
                    Section 1 , Module 1 : Reading and Writing
                  </p>
                  <RiCloseLine
                    onClick={toggleModal}
                    className="absolute scale-110 right-2 top-2 w-6 cursor-pointer"
                  />
                </div>
                <div className="w-full center">
                  <div className="w-[90%] h-10 border-y-2 flex justify-center gap-5">
                    <div className=" h-full flex items-center gap-2">
                      <RiMapPinLine className="text-[#000000ca]" />
                      Current
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-6 h-6 bg-green-600 rounded-sm"></div>
                      Answered
                    </div>
                    <div className=" h-full flex  items-center gap-2 ">
                      <div className="w-6 h-6 border-2 border-dashed border-[#000000b3]"></div>
                      Unanswered
                    </div>
                  </div>
                </div>
                <div className="w-full center">
                  <div className="w-[90%] grid  grid-cols-10">
                    {currentModule.map((_, index) => {
                      const isAnswered = userInputs.some(
                        (input) =>
                          input.question ===
                          currentModule[index].question
                      );

                      return (
                        <div
                          key={index}
                          className="w-fit flex h-14   flex-col items-center justify-end cursor-pointer"
                          onClick={() => handleQuestionClick(index)}
                        >
                          {index === currentQuestionIndex && (
                            <RiMapPinLine className=" scale-75  text-[#000000ca]" />
                          )}

                          <div
                            className={`w-7 h-7 text-sm ${
                              isAnswered
                                ? "bg-green-600 text-white"
                                : "border-2 border-dashed bor text-black border-[#000000b3]"
                            } rounded-sm center font-bold  `}
                          >
                            {index + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full center mt-5 ">
                  <div
                    onClick={() => {
                      handleGoToReviewPage();
                      toggleModal();
                    }}
                    className="px-4 cursor-pointer h-10 rounded-full border-2 border-blue-700 text-blue-700 center"
                  >
                    Go to Review Page
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="w-[20%] h-full flex items-center justify-center gap-5">
          {!isReviewPage && currentQuestionIndex != 0 ? (
            <div
              className="py-2 px-6 rounded-full bg-blue-700 text-white font-medium cursor-pointer"
              onClick={() => {
                handlePrevQuestion();
                setIsModalOpen(false);
              }}
            >
              Back
            </div>
          ) : (
            <div className="py-2 px-6 rounded-full  opacity-0 font-medium cursor-pointer">
              wdwd
            </div>
          )}
          <div
            className="py-2 px-6 rounded-full bg-blue-700 text-white font-medium cursor-pointer"
            onClick={() => {
              if (currentQuestionIndex === currentModule.length - 1) {
                setIsReviewPage(true);
              } else {
                handleNextQuestion();
              }
              setIsModalOpen(false);
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleOver() {
  return (
    <div>
      <div className="w-full h-screen center">
        <div className="text-center w-full h-[60%] text-xl text-black">
          <p className="text-3xl text-blue-700">This Module Is Over</p> <br />
          <p>All your work has been saved.</p>
          <p>You'll move on automatically in just a moment </p>
          <p>Do not refresh this page or quit the app</p>
          <div className="center">
            <img src="/Images/loader_gif.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
