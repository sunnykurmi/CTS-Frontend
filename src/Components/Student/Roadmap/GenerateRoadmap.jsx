import React, { useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiArrowLeftSLine } from "@remixicon/react";

export default function GenerateRoadmap() {
  const [userInput, setUserInput] = useState({
    // first step
    fullname: "",
    gender: "",
    dateofbirth: "",
    state: "",
    city: "",
    // second step
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
    // third step
    interestField: "",
    skills: "",
    BecomeInFuture: "",
    // last step
    familyincome: "",
    caste: "",
    physicaldisabilities: "",
    physicaldisabilitiestype: "",
  });
  const [hoverTimeout, setHoverTimeout] = useState(null);

  console.log(userInput);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleGenderChange = (gender) => () => {
    setUserInput((prevInput) => ({
      ...prevInput,
      gender: gender,
    }));
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const classes = ["9th Class", "10th Class", "11th Class", "12th Class"];
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (value) => {
    setDropdownOpen(false);
    handleChange("class")({ target: { value } });
  };

  const handleInputChange = (e) => {
    setDropdownOpen(true);
    handleChange("class")(e);
  };

  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const boards = ["CBSE", "ICSE", "IGCSE", "IB", "State Board", "Other"];
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const handleOptionClick2 = (value) => {
    setDropdownOpen2(false);
    handleChange("educationBoard")({ target: { value } });
  };

  const handleInputChange2 = (e) => {
    setDropdownOpen2(true);
    handleChange("educationBoard")(e);
  };

  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const streams = ["PCM", "PCB", "PCMB", "Arts", "Commerce", "Other"];
  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };

  const handleOptionClick3 = (value) => {
    setDropdownOpen3(false);
    handleChange("stream")({ target: { value } });
  };

  const handleInputChange3 = (e) => {
    setDropdownOpen3(true);
    handleChange("stream")(e);
  };

  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);

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
    setDropdownOpenCity(false);
    handleChange("countrypreferance")({ target: { value } });
  };

  const handleInputChangeCity = (e) => {
    setDropdownOpenCity(true);
    handleChange("countrypreferance")(e);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      // setDropdownOpenCity(false);
      setDropdownOpen(false);
      // setDropdownOpen2(false);
      // setDropdownOpen3(false);
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
    <div className="h-screen overflow-hidden">
      <Nav />
      <div className="overflow-y-scroll h-screen pb-32">
        <div className="w-full h-20  relative  flex items-center justify-center  ">
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
        </div>
        <div className="w-full flex flex-col items-center justify-start ">
          <div className="w-[60%] pb-10 h-full flex gap-5 flex-col items-center ">
            <p className="upper text-3xl font-semibold">Basic Info</p>
            <div className="w-full flex items-center justify-between">
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">Name</p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullname"
                  onChange={handleChange("fullname")}
                  value={userInput.fullname}
                  className="field rounded-xl"
                />
              </div>
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">Date Of Birth</p>
                <input
                  type="date"
                  name="dateofbirth"
                  onChange={handleChange("dateofbirth")}
                  value={userInput.dateofbirth}
                  className="field rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">State</p>
                <input
                  type="text"
                  placeholder="Maharashtra/Karnataka/Gujrat"
                  name="state"
                  onChange={handleChange("state")}
                  value={userInput.state}
                  className="field rounded-xl"
                />
              </div>
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">City</p>
                <input
                  type="text"
                  placeholder="Bangalore/Mumbai/Delhi"
                  name="city"
                  onChange={handleChange("city")}
                  value={userInput.city}
                  className="field rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className=" flex items-center justify-between input-field w-[45%]">
                <p className="font-medium text-lg">Gender</p>
                <div className="relative w-fit font-semibold gap-10 h-12 flex items-center justify-end">
                  <button
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.gender === "Male"
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
                    }`}
                    onClick={handleGenderChange("Male")}
                  >
                    Male
                  </button>
                  <button
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.gender === "Female"
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
                    }`}
                    onClick={handleGenderChange("Female")}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex w-[45%]  flex-col ">
                <p className="text-lg font-medium">Class</p>
                <div
                  onClick={toggleDropdown}
                  className=" cursor-pointer relative w-full field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
                >
                  <input
                    type="text"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    value={userInput.class}
                    onChange={handleInputChange}
                    readOnly
                    placeholder="Select Class"
                    className=" w-full h-full  outline-none"
                    name="class"
                    autoComplete="off"
                    id=""
                  />
                  <RiArrowDownSLine className=" text-[#F58612]" />
                  {dropdownOpen && (
                    <div className="absolute w-full  shadow-lg border-2 border-b-0 top-[105%] z-[99] bg-white ">
                      {classes.map((cls) => (
                        <div
                          key={cls}
                          className="w-full  h-10 flex border-r-2 border-b-2 text-center items-center justify-center font-semibold  hover:bg-[#F58612] hover:text-white"
                          onClick={() => handleOptionClick(cls)}
                        >
                          <p>{cls}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-[45%]   flex-col ">
                <p className="text-lg font-medium">Education Board</p>
                <div
                  onClick={toggleDropdown2}
                  className=" cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
                >
                  <input
                    type="text"
                    readOnly
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    value={userInput.educationBoard}
                    onChange={handleInputChange2}
                    placeholder="Select Board"
                    className=" w-full h-full  outline-none"
                    name="educationBoard"
                    autoComplete="off"
                    id=""
                  />
                  <RiArrowDownSLine className=" text-[#F58612]" />
                  {dropdownOpen2 && (
                    <div className="absolute shadow-lg top-[105%] z-[99] border-2 border-b-0  w-full   bg-white  h-fit">
                      {boards.map((cls) => (
                        <div
                          key={cls}
                          className=" flex h-10 items-center  justify-center font-semibold border-b-2  hover:bg-[#F58612] hover:text-white"
                          onClick={() => handleOptionClick2(cls)}
                        >
                          <p>{cls}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              {(userInput.class === "11th Class" ||
                userInput.class === "12th Class") && (
                <div className="flex w-[45%] flex-col">
                  <p className="text-base font-medium">
                    10<sup>th</sup> percentage/Marks
                  </p>
                  <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                    <input
                      type="text"
                      placeholder="Enter Marks"
                      className="w-full h-full outline-none"
                      name="tenthMarks"
                      autoComplete="off"
                      value={userInput.tenthMarks}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (
                          value === "" ||
                          (/^\d*\.?\d*$/.test(value) &&
                            parseFloat(value) <= 100 &&
                            parseFloat(value) >= 1)
                        ) {
                          handleChange("tenthMarks")(e);
                        }
                      }}
                      onKeyPress={(e) => {
                        const pattern = /[0-9.]/;
                        const isValidInput = pattern.test(e.key);
                        const input = e.target;

                        if (
                          !isValidInput ||
                          (input.value.includes(".") && e.key === ".") ||
                          (input.value.length >= 6 &&
                            !input.value.includes(".")) ||
                          (input.value.length >= 7 &&
                            input.value.includes(".")) ||
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
                    {userInput.tenthMarks === "" && (
                      <p className="absolute -bottom-5 whitespace-nowrap z-[9] text-xs font-semibold text-red-400">
                        Please enter 10th percentage
                      </p>
                    )}
                  </div>
                </div>
              )}
              {userInput.class === "12th Class" && (
                <div className="flex w-[45%] flex-col">
                  <p className="text-base font-medium">
                    11<sup>th</sup> Percentage/Marks
                  </p>
                  <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                    <input
                      type="text"
                      placeholder="Enter Marks"
                      className="w-full h-full outline-none"
                      name="eleventhMarks"
                      autoComplete="off"
                      value={userInput.eleventhMarks}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (
                          value === "" ||
                          (/^\d*\.?\d*$/.test(value) &&
                            parseFloat(value) <= 100 &&
                            parseFloat(value) >= 1)
                        ) {
                          handleChange("eleventhMarks")(e);
                        }
                      }}
                      onKeyPress={(e) => {
                        const pattern = /[0-9.]/;
                        const isValidInput = pattern.test(e.key);
                        const input = e.target;

                        if (
                          !isValidInput ||
                          (input.value.includes(".") && e.key === ".") ||
                          (input.value.length >= 6 &&
                            !input.value.includes(".")) ||
                          (input.value.length >= 7 &&
                            input.value.includes(".")) ||
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
                    {userInput.eleventhMarks === "" && (
                      <p className="absolute -bottom-5 whitespace-nowrap z-[9] text-xs font-semibold text-red-400">
                        Please enter 11th percentage
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-between">
              {(userInput.class === "11th Class" ||
                userInput.class === "12th Class") && (
                <div className="flex w-[45%]  flex-col">
                  <p className="text-base font-medium">Stream</p>
                  <div
                    onClick={toggleDropdown3}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
                  >
                    <input
                      type="text"
                      placeholder="PCM/PCB/Arts"
                      className="w-full h-full outline-none"
                      name="stream"
                      autoComplete="off"
                      readOnly
                      value={userInput.stream}
                      onChange={handleInputChange3}
                      id=""
                    />
                    <RiArrowDownSLine className=" text-[#F58612]" />
                    {dropdownOpen3 && (
                      <div className="absolute w-full border-2 border-b-0 shadow-lg top-[105%] z-[90]  bg-white ">
                        {streams.map((cls) => (
                          <div
                            key={cls}
                            className="w-full h-10 flex  items-center border-b-2 justify-center bg-white font-semibold  hover:bg-[#F58612] hover:text-white"
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
              <div className="w-[45%] flex  justify-start items-start">
                <p className="text-lg font-medium">
                  Do You Want To Study Abroad?
                </p>
                <div className="relative  w-fit font-semibold gap-10 h-12 flex items-center justify-end ">
                  <button
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.abroadStudy === "YES"
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
                    }`}
                    onClick={() =>
                      handleChange("abroadStudy")({ target: { value: "YES" } })
                    }
                  >
                    YES
                  </button>
                  <button
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.abroadStudy === "NO"
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
                    }`}
                    onClick={() => {
                      handleChange("abroadStudy")({ target: { value: "NO" } });
                      handleChange("aboutsatexam")({ target: { value: "" } });
                      handleChange("satScore")({ target: { value: "" } });
                      handleChange("englishtest")({ target: { value: "" } });
                      handleChange("countrypreferance")({
                        target: { value: "" },
                      });
                      handleChange("dreamuniversity")({
                        target: { value: "" },
                      });
                    }}
                  >
                    NO
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              {userInput.abroadStudy === "YES" && (
                <div className="w-[45%] flex flex-col justify-between items-start">
                  <p className="text-lg font-medium">What About SAT Exam?</p>
                  <div className="relative w-full  font-semibold  h-12 flex items-center  justify-start gap-10 ">
                    <button
                      className={`w-fit h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.aboutsatexam === "Already Taken"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("aboutsatexam")({
                          target: { value: "Already Taken" },
                        })
                      }
                    >
                      Already Taken
                    </button>
                    <button
                      className={`w-fit h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.aboutsatexam === "Will Take"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("aboutsatexam")({
                          target: { value: "Will Take" },
                        })
                      }
                    >
                      Will Take
                    </button>
                    <button
                      className={`w-fit h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.aboutsatexam === "Optional"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("aboutsatexam")({
                          target: { value: "Optional" },
                        })
                      }
                    >
                      Optional
                    </button>
                  </div>
                </div>
              )}
              {userInput.aboutsatexam === "Already Taken" && (
                <div className="w-[45%] flex flex-col justify-between items-start">
                  <p className="text-lg font-medium">Enter Your SAT Score</p>
                  <div className="cursor-pointer field relative field  border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                    <input
                      type="text"
                      placeholder="Enter your SAT Score"
                      className="w-full h-full outline-none"
                      name="satScore"
                      value={userInput.satScore}
                      id=""
                      onChange={(e) => {
                        const value = e.target.value;
                        if (
                          value === "" ||
                          (/^\d+$/.test(value) &&
                            parseInt(value, 10) <= 1600 &&
                            parseInt(value, 10) >= 1)
                        ) {
                          handleChange("satScore")(e);
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
            </div>
            <div className="w-full flex items-center justify-between">
              {userInput.abroadStudy === "YES" && (
                <div className="w-[45%] flex flex-col justify-between items-start">
                  <p className="text-lg font-medium">
                    English Proficiency test you will choose
                  </p>
                  <div className="relative   font-semibold gap-2 w-full h-12 flex items-center ">
                    <button
                      className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.englishtest === "DET"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("englishtest")({
                          target: { value: "DET" },
                        })
                      }
                    >
                      DET
                    </button>
                    <button
                      className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.englishtest === "IELTS"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("englishtest")({
                          target: { value: "IELTS" },
                        })
                      }
                    >
                      IELTS
                    </button>
                    <button
                      className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.englishtest === "TOEFL"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("englishtest")({
                          target: { value: "TOEFL" },
                        })
                      }
                    >
                      TOEFL
                    </button>
                    <button
                      className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.englishtest === "Not Sure"
                          ? "bg-[#F58612] text-white"
                          : "border-[#F58612]"
                      }`}
                      onClick={() =>
                        handleChange("englishtest")({
                          target: { value: "Not Sure" },
                        })
                      }
                    >
                      Not Sure
                    </button>
                  </div>
                </div>
              )}
              {userInput.abroadStudy === "YES" && (
                <div className="w-[45%] flex flex-col justify-between items-start">
                  <p className="text-lg font-medium">Country Preferance ?</p>
                  <div className=" cursor-pointer relative field  border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                    <input
                      type="text"
                      readOnly
                      placeholder="Choose country"
                      className="w-full cursor-pointer h-full outline-none"
                      name="countrypreferance"
                      value={userInput.countrypreferance}
                      onChange={handleInputChangeCity}
                      onClick={toggleDropdownCity}
                      id=""
                    />
                    <RiArrowDownSLine className=" text-[#F58612]" />
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
            </div>
            <div className="w-full flex items-center justify-between">
              {userInput.abroadStudy === "YES" && (
                <div className="w-[45%] flex flex-col justify-between items-start">
                  <p className="text-lg font-medium">
                    Enter Dream University .{" "}
                  </p>
                  <div className=" cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                    <input
                      type="text"
                      placeholder="MIT , Harvard , etc."
                      className="w-full h-full outline-none"
                      name="dreamuniversity"
                      value={userInput.dreamuniversity}
                      onChange={handleChange("dreamuniversity")}
                      id=""
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-[45%] flex flex-col justify-between items-start ">
                <p className="font-medium">
                  Are You Preparing For Any Entrance Exam ?
                </p>
                <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                  <input
                    type="text"
                    placeholder="If yes then name of the exam"
                    className="w-full h-full outline-none"
                    name="entranceExam"
                    value={userInput.entranceExam}
                    onChange={handleChange("entranceExam")}
                    id=""
                  />
                </div>
              </div>
              <div className="w-[45%] flex flex-col justify-between items-start ">
                <p className="font-medium">
                  Which Is The Most Challenging Subject For You ?
                </p>
                <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                  <input
                    type="text"
                    placeholder="Maths/Science/English"
                    className="w-full h-full outline-none"
                    name="challengingSubject"
                    value={userInput.challengingSubject}
                    onChange={handleChange("challengingSubject")}
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-[45%] flex flex-col justify-between items-start ">
                <p className="font-medium">
                  What Is Your Short-term Academic Goal ?
                </p>
                <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                  <input
                    type="text"
                    placeholder="e.g. Score 90% in 10th Board Exam "
                    className="w-full h-full outline-none"
                    name="shortTermGoal"
                    value={userInput.shortTermGoal}
                    onChange={handleChange("shortTermGoal")}
                    id=""
                  />
                </div>
              </div>
              <div className="w-[45%] flex flex-col justify-between items-start ">
                <p className="font-medium">What Is Your Long-term Goal ?</p>
                <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                  <input
                    type="text"
                    placeholder="e.g Study in IIT , Study in USA , etc."
                    className="w-full h-full outline-none"
                    name="longTermGoal"
                    value={userInput.longTermGoal}
                    onChange={handleChange("longTermGoal")}
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between"></div>
            <div className="w-full flex items-center justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
