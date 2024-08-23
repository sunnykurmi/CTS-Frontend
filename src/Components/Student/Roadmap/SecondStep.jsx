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

  const classes = [
    "8th Class",
    "9th Class",
    "10th Class",
    "11th Class",
    "12th Class",
  ];
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


  const filteredClasses = classes.filter((cls) =>
    cls.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [inputValue2, setInputValue2] = useState(props.userInput.educationBoard);
  
  const boards = ["CBSE", "ICSE", "State Board", "IGCSE", "IB", "Other"];
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

  const filteredboards = boards.filter((cls) =>
    cls.toLowerCase().includes(inputValue2.toLowerCase())
  );

  return (
        <div className="w-full py-10 h-full flex gap-5 flex-col items-center shadow-lg">
      <p className="upper text-2xl font-semibold">Acedmics</p>
      <div className="flex gap-5 items-center  w-[70%]">
        <div className="flex flex-col ">
          <p className="text-base font-medium">Class</p>
          <div
            onClick={toggleDropdown}
            className=" cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
          >
            <input
              type="text"
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
              <div className="absolute top-[103%] z-[9] w-36 bg-white scroller border-[#F58612] border-x-2 overflow-y-scroll h-fit max-h-24">
                {filteredClasses.map((cls) => (
                  <div
                    key={cls}
                    className="w-full h-12 flex items-center justify-center font-semibold border-[#F58612] border-b-2"
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
              <div className="absolute top-[103%] z-[9] w-36 bg-white scroller border-[#F58612] border-x-2 overflow-y-scroll h-fit max-h-24">
                {filteredboards.map((cls) => (
                  <div
                    key={cls}
                    className="w-full h-12 flex items-center justify-center font-semibold border-[#F58612] border-b-2"
                    onClick={() => handleOptionClick2(cls)}
                  >
                    <p>{cls}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {selectedClass === "11th Class" && (
          <div className="flex flex-col">
            <p className="text-base font-medium">
              10<sup>th</sup> Marks
            </p>
            <div className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
              <input
                type="text"
                placeholder="Enter Marks"
                className="w-full h-full outline-none"
                name="tenthMarks"
              autoComplete="off"

                onChange={props.handleChange("tenthMarks")}
                id=""
                value={props.userInput.tenthMarks}
              />
            </div>
          </div>
        )}
        {selectedClass === "12th Class" && (
          <div className="flex flex-col">
            <p className="text-base font-medium">
              10<sup>th</sup> Marks
            </p>
            <div className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
              <input
                type="text"
                placeholder="Enter Marks"
                className="w-full h-full outline-none"
                name="tenthMarks"
              autoComplete="off"

                value={props.userInput.tenthMarks}
                onChange={props.handleChange("tenthMarks")}
                id=""
              />
            </div>
          </div>
        )}
        {selectedClass === "12th Class" && (
          <div className="flex flex-col">
            <p className="text-base font-medium">
              11<sup>th</sup> Marks
            </p>
            <div className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
              <input
                type="text"
                placeholder="Enter Marks"
                value={props.userInput.eleventhMarks}
                className="w-full h-full outline-none"
              autoComplete="off"

                name="eleventhMarks"
                onChange={props.handleChange("eleventhMarks")}
                id=""
              />
            </div>
          </div>
        )}
        {(selectedClass === "11th Class" || selectedClass === "12th Class") && (
          <div className="flex flex-col">
            <p className="text-base font-medium">Stream</p>
            <div className="cursor-pointer relative w-36 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
              <input
                type="text"
                placeholder="PCM/PCB/Arts"
                className="w-full h-full outline-none"
                name="stream"
              autoComplete="off"

                value={props.userInput.stream}
                onChange={props.handleChange("stream")}
                id=""
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-[80%] flex justify-between items-center">
  <p className="font-medium">Do You Want To Study Abroad?</p>
  <div className="relative  w-96 font-semibold gap-10 h-12 flex items-center ">
    <button
      className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${props.userInput.abroadStudy === "YES" ? "bg-[#F58612] text-white" : "border-[#F58612]"}`}
      onClick={() => props.handleChange("abroadStudy")({ target: { value: "YES" } })}
    >
      YES
    </button>
    <button
      className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${props.userInput.abroadStudy === "NO" ? "bg-[#F58612] text-white" : "border-[#F58612]"}`}
      onClick={() => props.handleChange("abroadStudy")({ target: { value: "NO" } })}
    >
      NO
    </button>
  </div>
</div>
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
        <p className="font-medium">What Is Your Short - Term Academic Goal ?</p>
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
        <p className="font-medium">What Is Your Long - Term Goal ?</p>
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
