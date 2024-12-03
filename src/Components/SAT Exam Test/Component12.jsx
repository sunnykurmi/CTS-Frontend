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
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../store/Actions/userActions";

export default function Component12({ Component, setComponent }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [section1Data, setSection1Data] = useState(() => {
    const saved = localStorage.getItem("section1");
    return saved ? JSON.parse(saved) : { userInputs: [], marks: 0 };
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [highlightMode, setHighlightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isReviewPage, setIsReviewPage] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleGoToReviewPage = () => {
    setIsReviewPage(true);
  };

  const handleGoToPreviousPage = () => {
    setIsReviewPage(false);
  };

  const handleOptionSelect = (questioninfo, realanswer, selectedOption) => {
    const updatedInputs = [...section1Data.userInputs];
    const existingInputIndex = updatedInputs.findIndex(
      (input) => input.questioninfo === questioninfo
    );

    let updatedMarks = section1Data.marks;

    if (existingInputIndex >= 0) {
      const previousAnswer = updatedInputs[existingInputIndex].useranswer;
      if (previousAnswer === realanswer && selectedOption !== realanswer) {
        updatedMarks -= 1;
      } else if (
        previousAnswer !== realanswer &&
        selectedOption === realanswer
      ) {
        updatedMarks += 1;
      }
      updatedInputs[existingInputIndex].useranswer = selectedOption;
    } else {
      if (selectedOption === realanswer) {
        updatedMarks += 1;
      }
      updatedInputs.push({
        questioninfo,
        realanswer,
        useranswer: selectedOption,
      });
    }

    const updatedSection1Data = {
      userInputs: updatedInputs,
      marks: updatedMarks,
    };
    setSection1Data(updatedSection1Data);
    localStorage.setItem("section1", JSON.stringify(updatedSection1Data));
  };

  const handleRemoveSelection = () => {
    const updatedInputs = section1Data.userInputs.filter(
      (input) => input.questioninfo !== currentQuestion.questioninfo
    );

    const existingInputIndex = section1Data.userInputs.findIndex(
      (input) => input.questioninfo === currentQuestion.questioninfo
    );

    let updatedMarks = section1Data.marks;

    if (existingInputIndex >= 0) {
      const previousAnswer =
        section1Data.userInputs[existingInputIndex].useranswer;
      if (previousAnswer === currentQuestion.answer) {
        updatedMarks -= 1;
      }
    }
    const updatedSection1Data = {
      userInputs: updatedInputs,
      marks: updatedMarks,
    };
    setSection1Data(updatedSection1Data);
    localStorage.setItem("section1", JSON.stringify(updatedSection1Data));
  };

  useEffect(() => {
    localStorage.setItem("section1", JSON.stringify(section1Data));
  }, [section1Data]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < SAT_Section1_Module1.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const currentQuestion = SAT_Section1_Module1[currentQuestionIndex];

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
        <div className="h-full w-[30%]  flex items-center justify-center text-3xl text-red-500 font-semibold"></div>
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
          <div className="w-full h-[4vh] text-xl center ">
            On test day , you wan't be able to move on to the next module until
            time expires
          </div>
          <div className="w-full h-[4vh] text-xl center ">
            For these practice questions , you can click{" "}
            <b className="px-2"> Next </b> when you're ready to move on
          </div>
          <div className="w-full  center">
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
                  {SAT_Section1_Module1.map((_, index) => {
                    const isAnswered = section1Data.userInputs.some(
                      (input) =>
                        input.questioninfo ===
                        SAT_Section1_Module1[index].questioninfo
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
              <div className="w-full h-24 flex items-center justify-evenly">
                {
                  <div
                    onClick={handleGoToPreviousPage}
                    className="px-4 cursor-pointer h-12 rounded-full border-2 border-blue-700 text-blue-700 center"
                  >
                    Go to Previous Page
                  </div>
                }

                <div
                  onClick={() => setComponent("component13")}
                  className="px-4 cursor-pointer h-12 rounded-full border-2 bg-blue-700 border-blue-700 text-white center"
                >
                  Next  Module
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
              <div
                dangerouslySetInnerHTML={{
                  __html: currentQuestion.questioninfo,
                }}
              />{" "}
            </div>
            <div className="w-[50%] h-full border-l-2 border-[#555555] p-10 overflow-y-scroll scrollernone ">
              <div className="w-[95%] flex items-center justify-between h-8  mb-2 bg-slate-200">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-black center">
                    <p className="text-white">{currentQuestionIndex + 1}</p>
                  </div>
                  <p className="ml-2 font-medium">
                    Question {currentQuestionIndex + 1} of{" "}
                    {SAT_Section1_Module1.length}{" "}
                  </p>
                </div>
              </div>
              <div onMouseUp={handleTextHighlight}>
                <p>{currentQuestion.question}</p>
              </div>
              <div className="pl-5 flex flex-col gap-2 w-[95%]">
                {currentQuestion.options.map((option, index) => {
                  const userInput = section1Data.userInputs.find(
                    (input) =>
                      input.questioninfo === currentQuestion.questioninfo
                  );
                  const isSelected =
                    userInput && userInput.useranswer === option;
                  const isCorrectAnswer = option === currentQuestion.answer;
                  const isIncorrectAnswer =
                    userInput &&
                    userInput.useranswer !== currentQuestion.answer &&
                    userInput.useranswer === option;

                  return (
                    <div
                      key={index}
                      className={`cursor-pointer p-2 border-2 rounded-lg ${
                        isSelected
                          ? isCorrectAnswer
                            ? "border-green-500"
                            : "border-red-500"
                          : isCorrectAnswer
                          ? "border-green-500"
                          : ""
                      }`}
                      onClick={() => {
                        // handleOptionSelect(currentQuestion.questioninfo, currentQuestion.answer, option);
                        setIsModalOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 ${
                            isSelected
                              ? isCorrectAnswer
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                              : isCorrectAnswer
                              ? "bg-green-500 text-white"
                              : "text-black bg-transparent border-2 border-black"
                          } center rounded-full shrink-0`}
                        >
                          <p className="">{index + 1}</p>
                        </div>
                        <div className="ml-2">{option}</div>
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
          <p className="capitalize">{user && user.name}</p>
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
                  {SAT_Section1_Module1.length}
                </p>
              </div>
              <RiArrowUpSLine />
            </div>
            {isModalOpen && (
              <div className=" cursor-default  w-[60%] h-[60vh] translate-y-[-55%] rounded-lg absolute text-black  bg-white drop-shadow-xl">
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
                    {SAT_Section1_Module1.map((_, index) => {
                      const isAnswered = section1Data.userInputs.some(
                        (input) =>
                          input.questioninfo ===
                          SAT_Section1_Module1[index].questioninfo
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
              if (currentQuestionIndex === SAT_Section1_Module1.length - 1) {
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
