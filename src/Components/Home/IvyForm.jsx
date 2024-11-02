import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiCheckLine,
  RiCloseLine,
  RiSearch2Line,
} from "@remixicon/react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendivyform } from "../../store/Actions/userActions";

export default function IvyForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Add state for form submission
  const [userInput, setUserInput] = useState({
    // first step
    fullname: "",
    contact: "",
    gender: "",
    email: "",
    city: "",
    // second step
    class: "",
    educationBoard: "",
    aboutsatexam: "",
    satScore: "",
    dreamuniversity: "",
    englishtest: "",
    // third step
    ecs: "",
    // last step
    familyincome: "",
    physicaldisabilities: "",
    physicaldisabilitiestype: "",
  });
  const [hoverTimeout, setHoverTimeout] = useState(null);

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

  const classes = [
    "9th Class",
    "10th Class",
    "11th Class",
    "12th Class",
    "Gap / Drop Year",
    "College Student",
  ];
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

  const supportOptions = [
    {
      label: "Ivy League Students ",
     
    },
    {
      label: "Social Media",
     
    },
    {
      label: "Friends",
    },
    {
      label: "Your Counsellor",
    },
    {
      label: "Krishna MIT",
    },
    {
      label: "YouTube",
    },
    {
      label: "Our Website",
    },
    {
      label: "Other",
    },
  ];





  const [support, setsupport] = useState([]);

  
  const toggleSupportOption = (label) => {
    let updatedSupport;
    if (label === "Other") {
      if (support.includes(label)) {
        updatedSupport = [];
      } else {
        updatedSupport = [label];
      }
    } else {
      if (support.includes("Other")) {
        updatedSupport = [label];
      } else {
        if (support.includes(label)) {
          updatedSupport = support.filter((opt) => opt !== label);
        } else {
          updatedSupport = [...support, label];
        }
      }
    }
    setsupport(updatedSupport);
    setUserInput({ ...userInput, howuknow: updatedSupport });
  };


  const universities = [
    "MIT",
    "Harvard",
    "Stanford",
    "Yale",
    "Princeton",
    "Columbia",
    "UChicago",
    "UPenn",
    "Caltech",
    "Johns Hopkins",
    "Duke",
    "Northwestern",
    "Brown",
    "Cornell",
    "Vanderbilt",
    "Rice",
    "WashU",
    "Dartmouth",
    "UC Berkeley",
    "UCLA",
    "Michigan",
    "Virginia",
    "Georgia Tech",
    "UNC",
    "Notre Dame",
    "Boston College",
    "Emory",
    "USC",
    "NYU",
    "Tufts",
    "Wake Forest",
    "Georgetown",
    "UCSD",
    "UC Davis",
    "UC Irvine",
    "UCSB",
    "UCSC",
    "UCR",
    "UCM",
  ]
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    handleChange("dreamuniversity")(event);
    setDropdownVisible(true);
  };

  const handleUniClick = (value) => {
    handleChange("dreamuniversity")({ target: { value } });
    setDropdownVisible(false);
  };

  const filteredUniversities = universities.filter((uni) =>
    uni.toLowerCase().includes(searchQuery.toLowerCase())
  );







  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
      setDropdownVisible(false);
      setDropdownOpen2(false);
    }, 1500);
    setHoverTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const validateForm = () => {
    const excludedFields = ["physicaldisabilitiestype"];
    return Object.entries(userInput)
      .filter(([key]) => !excludedFields.includes(key))
      .every(([, value]) => typeof value === "string" ? value.trim() !== "" : value !== null && value !== undefined);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        await dispatch(sendivyform(userInput));
        setFormSubmitted(true);
      } catch (error) {
        console.error("Form submission failed:", error);
      } finally {
        setLoading(false);
      }
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
    }
  };

  useEffect(() => {
    console.log(userInput);
  })

  const handleConfirmClose = () => {
    setFormSubmitted(false);
    navigate("/");
  };

  return (
    <div className="h-screen overflow-hidden">
      {formSubmitted === true && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[30%]  bg-white border-2 z-[99] flex flex-col gap-5 items-center text-center justify-evenly max-[600px]:w-full">
            <div className="w-full flex items-end justify-end  p-1 px-2">
              <button onClick={handleConfirmClose}>
                <RiCloseLine className="text-[#008BDC] scale-150" />
              </button>
            </div>

            <h2 className="text-xl font-bold">Application Submitted!</h2>
            <p className="mt-2 w-[80%] text-justify ">
              Thank you for submitting your application. We will send you the
              results within 12 hours. It is a prestigious program with a 16%
              acceptance rate. <br /> Please be patient.
            </p>

            <a
              href="https://www.gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="center"
            >
              <button className="px-4 py-2 mb-5 w-full border-2 shadow-lg rounded-lg font-semibold text-black center gap-3">
                {" "}
                <img
                  className="w-[4vh]"
                  src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                  alt=""
                />{" "}
                Open Gmail
              </button>
            </a>
          </div>
        </div>
      )}

      <div className="overflow-y-scroll h-screen pb-32">
        <div className="w-full h-20  relative  flex items-center justify-center  ">
          <div className="w-44 absolute left-0 h-full flex items-center justify-center">
            <Link
              className=" h-10 gap-3 rounded-full  bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
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
          <div className="w-[60%] pb-10 h-full flex gap-5 flex-col items-center max-[600px]:w-[90%] ">
            <p className="upper text-3xl font-semibold capitalize">
              IVY Accelerator registration Form
            </p>
            <div className="w-full flex items-center justify-between max-[600px]:flex-col">
              <div className="input-field w-[45%]  max-[600px]:w-full">
                <p className="font-medium text-medium">Name</p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullname"
                  onChange={handleChange("fullname")}
                  value={userInput.fullname}
                  className="field rounded-xl"
                />
              </div>
              <div className="input-field w-[45%]  max-[600px]:w-full">
                <p className="font-medium text-medium">Contact</p>
                <input
                  type="text"
                  placeholder="Enter your contact number with country code"
                  name="contact"
                  onChange={handleChange("contact")}
                  value={userInput.contact}
                  className="field rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between max-[600px]:flex-col">
              <div className="input-field w-[45%]  max-[600px]:w-full">
                <p className="font-medium text-medium">City</p>
                <input
                  type="text"
                  placeholder="Bangalore/Mumbai/Delhi"
                  name="city"
                  onChange={handleChange("city")}
                  value={userInput.city}
                  className="field rounded-xl"
                />
              </div>

              <div className="input-field w-[45%]  max-[600px]:w-full">
                <p className="font-medium text-medium">Email</p>
                <input
                  type="email"
                  placeholder="Enter your full name"
                  name="email"
                  onChange={handleChange("email")}
                  value={userInput.email}
                  className="field rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between max-[600px]:flex-col">
              <div className=" flex items-center justify-between input-field w-[45%]  max-[600px]:w-full">
                <p className="font-medium text-medium">Gender:</p>
                <div className="relative w-fit font-semibold gap-10 h-10 flex items-center justify-end max-[600px]:ml-10">
                  <button
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.gender === "Male"
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
                    }`}
                    onClick={handleGenderChange("Male")}
                  >
                    Male
                  </button>
                  <button
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.gender === "Female"
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
                    }`}
                    onClick={handleGenderChange("Female")}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between max-[600px]:flex-col">
              <div className="flex w-[45%]  max-[600px]:w-full  flex-col ">
                <p className="text-medium font-medium">Class</p>
                <div
                  onClick={toggleDropdown}
                  className=" cursor-pointer relative w-full field border-2 rounded-lg px-2 flex items-center justify-center border-[#008BDC]"
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
                  <RiArrowDownSLine className=" text-[#008BDC]" />
                  {dropdownOpen && (
                    <div className="absolute w-full  shadow-lg border-2 border-b-0 top-[105%] z-[99] bg-white ">
                      {classes.map((cls) => (
                        <div
                          key={cls}
                          className="w-full  h-10 flex border-r-2 border-b-2 text-center items-center justify-center font-semibold  hover:bg-[#008BDC] hover:text-white"
                          onClick={() => handleOptionClick(cls)}
                        >
                          <p>{cls}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-[45%]  max-[600px]:w-full   flex-col ">
                <p className="text-medium font-medium">Education Board</p>
                <div
                  onClick={toggleDropdown2}
                  className=" cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#008BDC]"
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
                  <RiArrowDownSLine className=" text-[#008BDC]" />
                  {dropdownOpen2 && (
                    <div className="absolute shadow-lg top-[105%] z-[99] border-2 border-b-0  w-full   bg-white  h-fit">
                      {boards.map((cls) => (
                        <div
                          key={cls}
                          className=" flex h-10 items-center  justify-center font-semibold border-b-2  hover:bg-[#008BDC] hover:text-white"
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

            <div className="w-full flex items-center justify-between max-[600px]:flex-col ">
              <div className="w-[45%] flex flex-col justify-between items-start max-[600px]:w-full">
                <p className="text-medium font-medium ">What About SAT Exam?</p>
                <div className="relative w-full  font-semibold text-sm  h-10 flex items-center  justify-start gap-5  ">
                  <button
                    className={`w-fit h-full border-2 rounded-lg px-5 flex items-center justify-center ${
                      userInput.aboutsatexam === "Already Taken"
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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
                    className={`w-fit h-full border-2 rounded-lg px-2 flex items-center max-[600px]:whitespace-nowrap justify-center ${
                      userInput.aboutsatexam === "Will Take"
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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

              {userInput.aboutsatexam === "Already Taken" && (
                <div className="w-[45%] flex flex-col justify-between items-start max-[600px]:w-full">
                  <p className="text-medium font-medium ">
                    Enter Your SAT Score
                  </p>
                  <div className="cursor-pointer field relative field  border-2 rounded-lg px-2 flex items-center justify-center border-[#008BDC]">
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

            <div className="w-full flex items-center justify-between max-[600px]:flex-col">
              <div className="w-[45%] flex flex-col justify-between items-start max-[600px]:w-full">
                <p className="text-medium font-medium">
                  English Proficiency test you will choose
                </p>
                <div className="relative   font-semibold text-sm gap-2 w-full h-10 flex items-center ">
                  <button
                    className={`w-28 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.englishtest === "DET"
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
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
              <div className="w-[45%] flex flex-col justify-between items-start max-[600px]:w-full max-[600px]:mt-5">
                <p className="text-medium font-medium">
                  Enter Dream University .{" "}
                </p>
                <div 
                onMouseLeave={handleMouseLeave} className=" cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#008BDC]">
                  <input
                    type="text"
                    placeholder="MIT , Harvard , etc."
                    className="w-full h-full outline-none"
                    name="dreamuniversity"
                    autoComplete="off"
                    value={userInput.dreamuniversity}
                    onChange={handleSearchChange}
                    onFocus={() => setDropdownVisible(true)}
                    id=""
                  />
                  <RiSearch2Line className=" text-[#008BDC]" />
                  {dropdownVisible && (
                  <div className="w-[101%] h-[30vh] overflow-y-scroll absolute top-[105%] shadow-lg bg-white z-[9] ">
                    {filteredUniversities.map((uni) => (
                      <div
                        key={uni}
                        className="w-full h-10 flex items-center justify-start pl-5 hover:bg-[#008BDC] hover:text-white"
                        onClick={() => handleUniClick(uni)}
                      >
                        {uni}
                      </div>
                    ))}
                  </div>
                )}
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-between  max-[600px]:flex-col ">
              <p className="font-medium max-[600px]:text-start max-[600px]:w-full">
                Add List of Extracurriculars You Have !
              </p>

              <div className=" w-[45%]  max-[600px]:w-full   ">
                <textarea
                  className="w-full min-h-[20vh] border-2 border-[#008BDC] resize-none rounded-lg scroller font-medium text-medium outline-none p-5"
                  placeholder="start writing here"
                  name="ecs"
                  value={userInput.ecs}
                  onChange={handleChange("ecs")}
                  id=""
                ></textarea>
              </div>
            </div>

            <div className="w-full">
            <p className=" font-medium capitalize">How You get to know about this program !</p>
            <div className=" w-full  gap-2 grid grid-cols-4 max-[600px]:grid-cols-2">
              {supportOptions.map((option, index) => (
                <div  
                  key={index}
                  className="w-fit flex  items-center justify-center"
                >
                  <div
                    className="w-5 h-5 border-2 border-[#008BDC]  flex items-center justify-center rounded-sm cursor-pointer"
                    onClick={() => toggleSupportOption(option.label)}
                  >
                    {support.includes(option.label) && <RiCheckLine />}
                  </div>
                  <div
                    className="w-full flex items-center font-medium justify-start pl-5  rounded-lg px-2 py-2 cursor-pointer"
                    onClick={() => toggleSupportOption(option.label)}
                  >
                    {option.label}
                  
                  </div>
                </div>
              ))}
            </div>
            </div>



            <div className="w-full h-[13vh] flex justify-between min-[600px]:items-center max-[600px]:flex-col">
              <p className="font-medium">Family Income:</p>
              <div className=" relative w-[45%] font-semibold gap-2 h-10 grid grid-cols-4  max-[600px]:w-full  ">
                {[
                  ">$2k",
                  "$2k-$5k",
                  "$5k-$10k",
                  "$10k<",
                ].map((option) => (
                  <button
                    key={option}
                    className={`w-24 h-full border-2 rounded-lg px-2 flex items-center justify-center max-[600px]:scale-75 ${
                      userInput.familyincome === option
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
                    }`}
                    onClick={() =>
                      handleChange("familyincome")({
                        target: { value: option },
                      })
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="font-medium">
                Do you have any physical disabilities?
              </p>
              <div className="relative w-[45%]  max-[600px]:w-full font-semibold gap-6 h-10 flex items-center ">
                <button
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center max-[600px]:scale-75 justify-center ${
                    userInput.physicaldisabilities === "YES"
                      ? "bg-[#008BDC] text-white"
                      : "border-[#008BDC]"
                  }`}
                  onClick={() =>
                    handleChange("physicaldisabilities")({
                      target: { value: "YES" },
                    })
                  }
                >
                  YES
                </button>
                <button
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center max-[600px]:scale-75 justify-center ${
                    userInput.physicaldisabilities === "NO"
                      ? "bg-[#008BDC] text-white"
                      : "border-[#008BDC]"
                  }`}
                  onClick={() =>
                    handleChange("physicaldisabilities")({
                      target: { value: "NO" },
                    })
                  }
                >
                  NO
                </button>
              </div>
            </div>
            {userInput.physicaldisabilities === "YES" && (
              <div className="w-full flex justify-between items-center">
                <p className="font-medium">
                  Please Specify disabilities <sub>(optional)</sub>
                </p>
                <div className="cursor-pointer relative w-[45%]  max-[600px]:w-full h-14 border-2 rounded-lg px-2 flex items-center justify-center border-[#008BDC]">
                  <input
                    type="text"
                    placeholder="Specify like Blindness, Deafness, etc"
                    className="w-full h-full outline-none"
                    name="physicaldisabilitiestype"
                    onChange={handleChange("physicaldisabilitiestype")}
                    id=""
                  />
                </div>
              </div>
            )}

            <button
              onClick={handlesubmit}
              className="px-4 py-2 bg-[#008BDC] rounded-lg text-white font-medium"
            >
              {loading ? (
                <div className="center gap-3">
                  <div className="loader"></div>
                  Please Wait...
                </div>
              ) : (
                "   Submit Details"
              )}
            </button>
          </div>
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
  );
}
