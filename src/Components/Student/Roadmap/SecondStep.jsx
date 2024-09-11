import {
  RiAddLine,
  RiArrowDownLine,
  RiArrowDownSLine,
  RiCloseLine,
} from "@remixicon/react";
import React, { useState } from "react";

const SecondStep = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [inputValue, setInputValue] = useState(props.userInput.class);

  const classes = ["9th", "10th", "11th", "12th"];
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedClass(value);
    setInputValue(value);
    setDropdownOpen(false);
    props.handleChange("class")({ target: { value } });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setDropdownOpen(true);
    props.handleChange("class")(e);
  };

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [inputValue2, setInputValue2] = useState(
    props.userInput.educationBoard
  );

  const boards = ["CBSE", "ICSE", "IGCSE", "IB", "State Board", "Other"];
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const handleOptionClick2 = (value) => {
    setSelectedBoard(value);
    setInputValue2(value);
    setDropdownOpen2(false);
    props.handleChange("educationBoard")({ target: { value } });
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
    setDropdownOpen2(true);
    props.handleChange("educationBoard")(e);
  };

  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [selectedStream, setSelectedStream] = useState("");
  const [inputValue3, setInputValue3] = useState(
    props.userInput.educationBoard
  );

  const streams = ["PCM", "PCB", "PCMB", "Arts", "Commerce", "Other"];
  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };

  const handleOptionClick3 = (value) => {
    setSelectedStream(value);
    setInputValue3(value);
    setDropdownOpen3(false);
    props.handleChange("stream")({ target: { value } });
  };

  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
    setDropdownOpen3(true);
    props.handleChange("stream")(e);
  };


  
  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);
  const [inputValueCity, setInputValueCity] = useState(
    props.userInput.countrypreferance
  );
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const citiesarray = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Singapore",
    "New Zealand",
    "Ireland",
    "Netherlands",
    "Sweden",
    "Italy",
    "Switzerland",
    "Spain",
    "South Korea",
    "Japan",
    "China",
  ];
  const toggleDropdownCity = () => {
    setDropdownOpenCity(!dropdownOpenCity);
  };

  const handleOptionClickCity = (value) => {
    setInputValueCity(value);
    setDropdownOpenCity(false);
    props.handleChange("countrypreferance")({ target: { value } });
  };

  const handleInputChangeCity = (e) => {
    setInputValueCity(e.target.value);
    setDropdownOpenCity(true);
    props.handleChange("countrypreferance")(e);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpenCity(false);
      setDropdownOpen(false);
      setDropdownOpen2(false);
      setDropdownOpen3(false);

    }, 1000);
    setHoverTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };


  return (
    <div className="w-full py-10 h-full flex gap-5 flex-col items-center shadow-lg">
      <p className="upper text-2xl font-semibold">Academics</p>
      <div className="flex gap-5 items-center  w-[70%]">
        <div className="flex flex-col ">
          <p className="text-base font-medium">Class</p>
          <div
            onClick={toggleDropdown}
            className=" cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
          >
            <input
              type="text"
              onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
              readOnly
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Select Class"
              className=" w-full h-full  outline-none"
              name="class"
              autoComplete="off"
              id=""
            />
            <RiArrowDownSLine className=" text-[#F58612]" />
            {dropdownOpen && (
              <div 
              
               className="absolute  shadow-lg flex gap-1 top-[105%] z-[9] w-fit bg-white   h-12">
                {classes.map((cls) => (
                  <div
                    key={cls}
                    className="w-12 h-12 flex border-r-2 items-center justify-center font-semibold border-[#F58612] border-2 hover:bg-[#F58612] hover:text-white"
                    onClick={() => handleOptionClick(cls)}
                  >
                    <p>{cls}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-base font-medium">Education Board</p>
          <div
            onClick={toggleDropdown2}
            className=" cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
          >
            <input
              type="text"
              readOnly
              onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
              value={inputValue2}
              onChange={handleInputChange2}
              placeholder="Select Board"
              className=" w-full h-full  outline-none"
              name="educationBoard"
              autoComplete="off"
              id=""
            />
            <RiArrowDownSLine className=" text-[#F58612]" />
            {dropdownOpen2 && (
              <div  className="absolute shadow-lg top-[105%] z-[9] grid grid-cols-2 w-52  bg-white gap-1 h-fit">
                {boards.map((cls) => (
                  <div
                    key={cls}
                    className="w-24 h-12 flex items-center border-2 justify-center font-semibold border-[#F58612] hover:bg-[#F58612] hover:text-white"
                    onClick={() => handleOptionClick2(cls)}
                  >
                    <p>{cls}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {(selectedClass === "11th" || selectedClass === "12th") && (
          <div className="flex flex-col">
            <p className="text-base font-medium">
              10<sup>th</sup> percentage/Marks
            </p>
            <div className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
              <input
                type="text"
                placeholder="Enter Marks"
                className="w-full h-full outline-none"
                name="tenthMarks"
                autoComplete="off"
                value={props.userInput.tenthMarks}
                onChange={(e) => {
                  const value = e.target.value;
                  if (
                    value === "" ||
                    (/^\d*\.?\d*$/.test(value) &&
                      parseFloat(value) <= 100 &&
                      parseFloat(value) >= 1)
                  ) {
                    props.handleChange("tenthMarks")(e);
                  }
                }}
                onKeyPress={(e) => {
                  const pattern = /[0-9.]/;
                  const isValidInput = pattern.test(e.key);
                  const input = e.target;

                  if (
                    !isValidInput ||
                    (input.value.includes(".") && e.key === ".") ||
                    (input.value.length >= 6 && !input.value.includes(".")) ||
                    (input.value.length >= 7 && input.value.includes(".")) ||
                    parseFloat(input.value + e.key) > 100
                  ) {
                    e.preventDefault();
                  }
                }}
                onPaste={(e) => {
                  const paste = e.clipboardData.getData("text");
                  if (
                    !/^\d*\.?\d*$/.test(paste) ||
                    parseFloat(paste) > 100 ||
                    parseFloat(paste) < 1
                  ) {
                    e.preventDefault();
                  }
                }}
              />
              {props.userInput.tenthMarks === "" && (
                <p className="absolute -bottom-5 whitespace-nowrap z-[99] text-xs font-semibold text-red-400">
                  Please enter 10th percentage
                </p>
              )}
            </div>
          </div>
        )}
        {selectedClass === "12th" && (
          <div className="flex flex-col">
            <p className="text-base font-medium">
              11<sup>th</sup> Percentage/Marks
            </p>
            <div className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
              <input
                type="text"
                placeholder="Enter Marks"
                className="w-full h-full outline-none"
                name="eleventhMarks"
                autoComplete="off"
                value={props.userInput.eleventhMarks}
                onChange={(e) => {
                  const value = e.target.value;
                  if (
                    value === "" ||
                    (/^\d*\.?\d*$/.test(value) &&
                      parseFloat(value) <= 100 &&
                      parseFloat(value) >= 1)
                  ) {
                    props.handleChange("eleventhMarks")(e);
                  }
                }}
                onKeyPress={(e) => {
                  const pattern = /[0-9.]/;
                  const isValidInput = pattern.test(e.key);
                  const input = e.target;

                  if (
                    !isValidInput ||
                    (input.value.includes(".") && e.key === ".") ||
                    (input.value.length >= 6 && !input.value.includes(".")) ||
                    (input.value.length >= 7 && input.value.includes(".")) ||
                    parseFloat(input.value + e.key) > 100
                  ) {
                    e.preventDefault();
                  }
                }}
                onPaste={(e) => {
                  const paste = e.clipboardData.getData("text");
                  if (
                    !/^\d*\.?\d*$/.test(paste) ||
                    parseFloat(paste) > 100 ||
                    parseFloat(paste) < 1
                  ) {
                    e.preventDefault();
                  }
                }}
              />
              {props.userInput.eleventhMarks === "" && (
                <p className="absolute -bottom-5 whitespace-nowrap z-[99] text-xs font-semibold text-red-400">
                  Please enter 11th percentage
                </p>
              )}
            </div>
          </div>
        )}
        {(selectedClass === "11th" || selectedClass === "12th") && (
          <div className="flex flex-col">
            <p className="text-base font-medium">Stream</p>
            <div
              onClick={toggleDropdown3}
              onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
              className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
            >
              <input
                type="text"
                placeholder="PCM/PCB/Arts"
                className="w-full h-full outline-none"
                name="stream"
                autoComplete="off"
                readOnly
                value={inputValue3}
                onChange={handleInputChange3}
                id=""
              />
              <RiArrowDownSLine className=" text-[#F58612]" />
              {dropdownOpen3 && (
                <div className="absolute shadow-lg top-[105%] z-[90] grid grid-cols-2 w-52  bg-white gap-1 h-fit">
                  {streams.map((cls) => (
                    <div
                      key={cls}
                      className="w-24 h-12 flex items-center border-2 justify-center bg-white font-semibold border-[#F58612] hover:bg-[#F58612] hover:text-white"
                      onClick={() => handleOptionClick3(cls)}
                    >
                      <p>{cls}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="w-[80%] flex justify-between items-center">
        <p className="font-medium">Do You Want To Study Abroad?</p>
        <div className="relative  w-96 font-semibold gap-10 h-12 flex items-center ">
          <button
            className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
              props.userInput.abroadStudy === "YES"
                ? "bg-[#F58612] text-white"
                : "border-[#F58612]"
            }`}
            onClick={() =>
              props.handleChange("abroadStudy")({ target: { value: "YES" } })
            }
          >
            YES
          </button>
          <button
            className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
              props.userInput.abroadStudy === "NO"
                ? "bg-[#F58612] text-white"
                : "border-[#F58612]"
            }`}
            onClick={() => {
              props.handleChange("abroadStudy")({ target: { value: "NO" } });
              props.handleChange("aboutsatexam")({ target: { value: "" } });
              props.handleChange("satScore")({ target: { value: "" } });
              props.handleChange("englishtest")({ target: { value: "" } });
              props.handleChange("countrypreferance")({ target: { value: "" } });
              props.handleChange("dreamuniversity")({ target: { value: "" } });
            }}
          >
            NO
          </button>
        </div>
      </div>
      {props.userInput.abroadStudy === "YES" && (
        <div className="w-[80%] flex justify-between items-center">
          <p className="font-medium">What About SAT Exam?</p>
          <div className="relative  w-96 font-semibold gap-10 h-12 flex items-center ">
            <button
              className={`w-52 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.aboutsatexam === "Already Taken"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("aboutsatexam")({
                  target: { value: "Already Taken" },
                })
              }
            >
              Already Taken
            </button>
            <button
              className={`w-36 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.aboutsatexam === "Will Take"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("aboutsatexam")({
                  target: { value: "Will Take" },
                })
              }
            >
              Will Take
            </button>
            <button
              className={`w-36 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.aboutsatexam === "Optional"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("aboutsatexam")({
                  target: { value: "Optional" },
                })
              }
            >
              Optional
            </button>
          </div>
        </div>
      )}
      {props.userInput.aboutsatexam === "Already Taken" && (
        <div className="w-[80%] flex justify-between items-center">
          <p className="font-medium">Enter Your SAT Score .</p>
          <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
            <input
              type="text"
              placeholder="Enter your SAT Score"
              className="w-full h-full outline-none"
              name="satScore"
              value={props.userInput.satScore}
              id=""
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value === "" ||
                  (/^\d+$/.test(value) &&
                    parseInt(value, 10) <= 1600 &&
                    parseInt(value, 10) >= 1)
                ) {
                  props.handleChange("satScore")(e);
                }
              }}
              onKeyPress={(e) => {
                const pattern = /[0-9]/;
                const isValidInput = pattern.test(e.key);
                const input = e.target;

                if (
                  !isValidInput ||
                  (input.value.length >= 4 &&
                    parseInt(input.value + e.key, 10) > 1600)
                ) {
                  e.preventDefault();
                }
              }}
              onPaste={(e) => {
                const paste = e.clipboardData.getData("text");
                if (
                  !/^\d+$/.test(paste) ||
                  parseInt(paste, 10) > 1600 ||
                  parseInt(paste, 10) < 1
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>
      )}
      {props.userInput.abroadStudy === "YES" && (
        <div className="w-[80%] flex justify-between items-center">
          <p className="font-medium">
            English Proficiency test you will choose
          </p>
          <div className="relative  w-96 font-semibold gap-2 h-12 flex items-center ">
            <button
              className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.englishtest === "DET"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("englishtest")({ target: { value: "DET" } })
              }
            >
              DET
            </button>
            <button
              className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.englishtest === "IELTS"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("englishtest")({
                  target: { value: "IELTS" },
                })
              }
            >
              IELTS
            </button>
            <button
              className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.englishtest === "TOEFL"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("englishtest")({
                  target: { value: "TOEFL" },
                })
              }
            >
              TOEFL
            </button>
            <button
              className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.englishtest === "Not Sure"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("englishtest")({
                  target: { value: "Not Sure" },
                })
              }
            >
              Not Sure
            </button>
          </div>
        </div>
      )}
      {props.userInput.abroadStudy === "YES" && (
        <div className="w-[80%] flex justify-between items-center">
        <p className="font-medium">Country Preferance ?</p>
        <div className=" cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
            readOnly
            placeholder="Choose country"
            className="w-full h-full outline-none"
            name="countrypreferance"
            value={inputValueCity}
            onChange={handleInputChangeCity}
            onClick={toggleDropdownCity}
            id=""
          />
          {dropdownOpenCity && (
                <div
                  className="absolute top-[103%] z-[9] p-5 w-[30vw] gap-2 flex flex-wrap shadow-lg bg-white  h-fit"
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                >
                  {citiesarray.map((activity) => (
                    <div
                      key={activity}
                      className="w-fit py-1 min-w-20 flex items-center justify-center font-semibold border-[#F58612] rounded-full px-2 border-2 hover:bg-[#F58612] hover:text-white cursor-pointer"
                      onClick={() => handleOptionClickCity(activity)}
                    >
                      <p>{activity}</p>
                    </div>
                  ))}
                </div>
              )}
        </div>
      </div>
      )}
      {props.userInput.abroadStudy === "YES" && (
        <div className="w-[80%] flex justify-between items-center">
        <p className="font-medium">Enter Dream University . </p>
        <div className=" cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"


            placeholder="MIT , Harvard , etc."
            className="w-full h-full outline-none"
            name="dreamuniversity"
            value={props.userInput.dreamuniversity}
            onChange={props.handleChange("dreamuniversity")}
            id=""
          />
        </div>
      </div>
      )}
      
      <div className="w-[80%] flex justify-between items-center ">
        <p className="font-medium">Are You Preparing For Any Entrance Exam ?</p>
        <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
            placeholder="If yes then name of the exam"
            className="w-full h-full outline-none"
            name="entranceExam"
            value={props.userInput.entranceExam}
            onChange={props.handleChange("entranceExam")}
            id=""
          />
        </div>
      </div>
      <div className="w-[80%] flex justify-between items-center ">
        <p className="font-medium">
          Which Is The Most Challenging Subject For You ?
        </p>
        <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
            placeholder="Maths/Science/English"
            className="w-full h-full outline-none"
            name="challengingSubject"
            value={props.userInput.challengingSubject}
            onChange={props.handleChange("challengingSubject")}
            id=""
          />
        </div>
      </div>
      <div className="w-[80%] flex justify-between items-center ">
        <p className="font-medium">What Is Your Short-term Academic Goal ?</p>
        <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
            placeholder="e.g. Score 90% in 10th Board Exam "
            className="w-full h-full outline-none"
            name="shortTermGoal"
            value={props.userInput.shortTermGoal}
            onChange={props.handleChange("shortTermGoal")}
            id=""
          />
        </div>
      </div>
      <div className="w-[80%] flex justify-between items-center ">
        <p className="font-medium">What Is Your Long-term Goal ?</p>
        <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
            placeholder="e.g Study in IIT , Study in USA , etc."
            className="w-full h-full outline-none"
            name="longTermGoal"
            value={props.userInput.longTermGoal}
            onChange={props.handleChange("longTermGoal")}
            id=""
          />
        </div>
      </div>
    </div>
  );
};
export default SecondStep;
