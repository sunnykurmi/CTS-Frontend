import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav";
import { Link, useNavigate } from "react-router-dom";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiCloseLine,
} from "@remixicon/react";
import { useDispatch } from "react-redux";
import { CreateRoadmap } from "../../../store/Actions/roadmapAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GenerateRoadmap() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // Add state for form submission
  const [showConfirmation, setShowConfirmation] = useState(false);
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
    activities: [
      {
        activityType: "",
        workingProfile: "",
        organizationName: "",
        taskDescription: "",
      },
    ],
    // last step
    familyincome: "",
    caste: "",
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

  const [dropdownOpenFuture, setDropdownOpenFuture] = useState(false);

  const Futurearray = [
    "Software Engineer",
    "Data Scientist",
    "Doctor",
    "Civil Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Nurse",
    "Dentist",
    "Pharmacist",
    "Architect",
    "Interior Designer",
    "Fashion Designer",
    "Graphic Designer",
    "Designer",
    "Teacher",
    "Scientist",
    "Entrepreneur",
    "Artist",
    "Journalist",
    "Lawyer",
    "Psychologist",
    "Chef",
    "Athlete",
    "Musician",
    "Actor",
    "Politician",
    "Police Officer",
    "Firefighter",
    "Military",
    "Other",
  ];
  const toggleDropdownFuture = () => {
    setDropdownOpenFuture(!dropdownOpenFuture);
  };

  const handleOptionClickFuture = (value) => {
    setDropdownOpenFuture(false);
    handleChange("BecomeInFuture")({ target: { value } });
  };

  const handleInputChangeFuture = (e) => {
    setDropdownOpenFuture(true);
    handleChange("BecomeInFuture")(e);
  };

  const [dropdownOpenInterest, setDropdownOpenInterest] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [inputValueInterest, setInputValueInterest] = useState("");

  const interestsArray = [
    "Computer Science",
    "Coding",
    "Designing",
    "Dancing",
    "Music",
    "Sports",
    "Reading",
    "Writing",
    "Photography",
    "Cooking",
    "Travelling",
    "Volunteering",
    "Art",
    "Craft",
    "Fashion",
    "Robotics",
    "Travel",
    "Adventure",
    "Fitness",
  ];

  const toggleDropdownInterest = () => {
    setDropdownOpenInterest(!dropdownOpenInterest);
  };

  const handleOptionClickInterest = (value) => {
    const newSelectedInterests = selectedInterests.includes(value)
      ? selectedInterests.filter((interest) => interest !== value)
      : [...selectedInterests, value];
    setSelectedInterests(newSelectedInterests);
    setInputValueInterest(newSelectedInterests.join(" | "));
    setDropdownOpenInterest(false);
    handleChange("interestField")({
      target: { value: newSelectedInterests.join(" | ") },
    });
  };

  const handleInputChangeInterest = (e) => {
    setInputValueInterest(e.target.value);
    setDropdownOpenInterest(true);
    handleChange("interestField")(e);
  };

  const [inputValue4, setInputValue4] = useState("");
  const [submittedValues2, setSubmittedValues2] = useState(
    userInput.skills ? userInput.skills.split(",") : []
  );

  const handleInputChange4 = (e) => {
    setInputValue4(e.target.value);
  };

  const handleSubmit4 = () => {
    if (inputValue4.trim() !== "") {
      const newValues = [...submittedValues2, inputValue4];
      setSubmittedValues2(newValues);
      setInputValue4(""); // Clear the input field
      handleChange("skills")({ target: { value: newValues.join(",") } });
    }
  };

  const handleRemove2 = (index) => {
    const newValues = submittedValues2.filter((_, i) => i !== index);
    setSubmittedValues2(newValues);
    handleChange("skills")({ target: { value: newValues.join(",") } });
  };

  const [dropdownOpenActivity, setDropdownOpenActivity] = useState(false);
  const [activityType, setActivityType] = useState("");
  const [workingProfile, setWorkingProfile] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const activitiesarray = [
    "Acedmic",
    "Art",
    "Cultural",
    "Dance",
    "Music",
    "Carrier Oriented",
    "Computer/Technology",
    "Debate/Speech",
    "Environmental",
    "Internship",
    "Research",
    "Robotics",
    "Social Justice",
    "Athletics",
    "Work(Paid)",
    "Other Club/Activity",
    "Community Service (Volunteer) ",
  ];

  const toggleDropdownActivity = () => {
    setDropdownOpenActivity(!dropdownOpenActivity);
  };

  const handleOptionClickActivity = (activity) => {
    setActivityType(activity);
    setDropdownOpenActivity(false);
  };

  const handleAddActivity = () => {
    if (
      !activityType ||
      !workingProfile ||
      !organizationName ||
      !taskDescription
    ) {
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
      return;
    }

    const newActivity = {
      activityType,
      workingProfile,
      organizationName,
      taskDescription,
    };
    setShowForm(false);

    setUserInput((prevState) => ({
      ...prevState,
      activities: [...prevState.activities, newActivity],
    }));

    // Clear input fields
    setActivityType("");
    setWorkingProfile("");
    setOrganizationName("");
    setTaskDescription("");
  };

  const HandleEditActivity = (index, field, value) => {
    const newActivities = [...userInput.activities];
    newActivities[index][field] = value;
    setUserInput({ ...userInput, activities: newActivities });
  };

  const handleDeleteActivity = (index) => {
    setUserInput((prevState) => ({
      ...prevState,
      activities: prevState.activities.filter((_, i) => i !== index),
    }));
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
      setDropdownOpenActivity(false);
      setDropdownOpenInterest(false);
      setDropdownOpenFuture(false);
      dropdownOpenCity(false);
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
      "activities",
      "skills",
    ];
    return Object.entries(userInput)
      .filter(([key]) => !excludedFields.includes(key))
      .every(([, value]) => value.trim() !== "");
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
    }
  };

  useEffect(() => {
    if (formSubmitted === true) {
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

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleCloseAlert = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClose = () => {
    setFormSubmitted(false);
    setShowConfirmation(false);
    navigate("/home");
  };

  const handleCancelClose = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="h-screen overflow-hidden">
      <Nav />
      {formSubmitted === true && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[30%] h-[40vh] bg-white border-2 z-[99] flex flex-col gap-5 items-center text-center justify-center">
            <div className="w-full flex items-end justify-end p-1 px-2">
              <button onClick={handleCloseAlert}>
                <RiCloseLine className="text-red-600" />
              </button>
            </div>
            <p className="text-xl font-semibold">
              Book 1-1 Live Session with Krishna MIT
            </p>
            <p>Click the below button to Book Appointment</p>
            <div ref={buttonRef}></div>
            <p className="text-red-600 text-sm font-semibold">
              Note: It is compulsary to attend the session otherwise your
              roadmap creation process will be neglected{" "}
            </p>
          </div>
        </div>
      )}
      {showForm === true && (
        <div className="w-full flex h-screen z-[9999] fixed top-0 items-center justify-center bg-[#dedede89]">
          <div className="w-fit h-fit mt-5 flex flex-col items-center justify-center">
            <div className="relative w-[80%] h-fit p-6 bg-white ">
              <RiCloseLine
                onClick={handleHideForm}
                className="absolute right-5 cursor-pointer"
              />

              <p className=" text-center text-xl font-semibold mb-5">
                Enter Activity Details
              </p>
              <p className="font-medium">Type of Activity</p>
              <div className="relative w-full ">
                <input
                  placeholder="Work With NGO, Hackathon, Competition"
                  className="w-full h-10 rounded-lg outline-none px-5 border-2"
                  type="text"
                  readOnly
                  name="activityType"
                  value={activityType}
                  onClick={toggleDropdownActivity}
                  id=""
                />

                {dropdownOpenActivity && (
                  <div
                    className="absolute top-[103%] z-[9] w-full gap-2 flex flex-wrap bg-white  h-fit"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    {activitiesarray.map((activity) => (
                      <div
                        key={activity}
                        className="w-fit py-1 min-w-20 flex items-center justify-center font-semibold border-[#F58612] rounded-full px-2 border-2 hover:bg-[#F58612] hover:text-white cursor-pointer"
                        onClick={() => handleOptionClickActivity(activity)}
                      >
                        <p>{activity}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="font-medium mt-5">Position / Role</p>
              <input
                placeholder="Founder ,  Leader , Volunteer , Participant, etc."
                className="w-full mt-2 h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                name="workingProfile"
                id=""
                value={workingProfile}
                onChange={(e) => setWorkingProfile(e.target.value)}
              />
              <p className="font-medium mt-5">Organization/Company Name</p>
              <input
                placeholder=" Bal Utsav , eVidyaloka , Care india ,  IIT Delhi  "
                className="w-full mt-2 h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                name="organizationName"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                id=""
              />
              <p className="font-medium mt-5">
                Please describe this activity, including what you accomplished
                and any recognition you received, etc.
              </p>
              <textarea
                placeholder="Provide Foods To Needy People"
                className="min-w-full  break-words mt-2 pt-2 scrollernone  resize-none rounded-lg outline-none px-5 border-2"
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                name="taskDescription"
              />
              <div className="w-full flex items-center justify-center">
                <button
                  className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleAddActivity}
                >
                  Submit Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[10] flex items-center justify-center">
          <div className="w-[30%] h-[20vh] bg-white border-2 z-[100] flex flex-col gap-5 items-center text-center justify-center">
            <p className="text-xl font-semibold">
              Are you sure you want to close?
            </p>
            <div className="flex gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmClose}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancelClose}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
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
            <p className="upper text-3xl font-semibold">Roadmap Form</p>
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
            <div className="w-full flex justify-between items-center ">
              <div className="w-[45%]">
                <p className="font-medium">
                  What Do You Want To Become In Future ?
                </p>
              </div>
              <div className="w-[45%]">
                <div
                  onClick={toggleDropdownFuture}
                  className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
                >
                  <input
                    type="text"
                    readOnly
                    placeholder="e.g Software engineer, Data scientist, Doctor , etc."
                    className="w-full h-full outline-none"
                    name="BecomeInFuture"
                    value={userInput.BecomeInFuture}
                    onChange={handleInputChangeFuture}
                    id=""
                  />
                  <RiArrowDownSLine className=" text-[#F58612]" />
                  {dropdownOpenFuture && (
                    <div
                      className="absolute right-3 p-5 shadow-lg top-[103%] z-[9] w-[50vw] gap-2 flex flex-wrap bg-white  h-fit"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                    >
                      {Futurearray.map((Future) => (
                        <div
                          key={Future}
                          className="w-fit py-1 min-w-20 flex items-center justify-center font-semibold border-[#F58612] rounded-full px-2 border-2 hover:bg-[#F58612] hover:text-white cursor-pointer"
                          onClick={() => handleOptionClickFuture(Future)}
                        >
                          <p>{Future}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="h-full w-[45%] pt-3">
                <p className="font-medium">Field Of Interest</p>
              </div>

              <div className="w-[45%] flex flex-wrap justify-end gap-2">
                <div className="w-full relative flex items-center justify-center ">
                  <textarea
                    placeholder="Select Field Of Interest"
                    value={inputValueInterest}
                    onChange={handleInputChangeInterest}
                    onFocus={toggleDropdownInterest}
                    className=" field min-h-12 outline-none resize-none h-fit scroller  rounded-xl"
                    rows={inputValueInterest ? 3 : 1} // Increase height when filled
                  />
                  <RiArrowDownSLine className=" absolute right-2 cursor-pointer text-[#F58612]" />

                  {dropdownOpenInterest && (
                    <div
                      className="absolute right-3 p-5 shadow-lg top-[103%] z-[9] w-[50vw] gap-2 flex flex-wrap bg-white h-fit"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                    >
                      {interestsArray
                        .filter(
                          (interest) => !selectedInterests.includes(interest)
                        )
                        .map((interest) => (
                          <div
                            key={interest}
                            className="w-fit py-1 min-w-20 flex items-center justify-center font-semibold border-[#F58612] rounded-full px-2 border-2 hover:bg-[#F58612] hover:text-white cursor-pointer"
                            onClick={() => handleOptionClickInterest(interest)}
                          >
                            <p>{interest}</p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center ">
              <div className=" h-full w-[45%]   pt-3 ">
                <p className="font-medium">List All The Skills You Have</p>
              </div>
              <div className="flex h-full flex-col w-[45%]  justify-end items-end  ">
                <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                  <input
                    type="text"
                    placeholder="e.g Designing, coding,languages ,etc."
                    className="w-full h-full outline-none"
                    name="skills"
                    value={inputValue4}
                    onChange={handleInputChange4}
                    id=""
                  />
                  <div
                    onClick={handleSubmit4}
                    className=" bg-[#F58612] h-10 shrink-0 rounded-lg flex items-center font-bold text-white justify-center px-4"
                  >
                    Submit
                  </div>
                </div>
                <div className="w-[80%] mt-2 h-fit  flex flex-wrap justify-end ">
                  {submittedValues2.map((value, index) => (
                    <div
                      key={index}
                      className="rounded-full scale-90 w-fit pl-4 min-w-20 px-1 py-1 text-white bg-[#F58612] flex items-center justify-between gap-2 mt-1"
                    >
                      <p>{value}</p>
                      <div
                        onClick={() => handleRemove2(index)}
                        className="p-1 cursor-pointer bg-white text-black flex items-center justify-center rounded-full"
                      >
                        <RiCloseLine />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center ">
              <div className=" h-full w-[45%]   pt-3 ">
                <p className="font-medium"> Activities You Have Done </p>
              </div>
              <div className="w-[45%]   flex items-center justify-between">
                <p className="text-lg font-medium">
                  {userInput.activities.length - 1} Activities added
                </p>
                <div
                  onClick={handleShowForm}
                  className="  pr-5 rounded-full w-fit  min-w-20 px-1 py-1 text-white bg-[#F58612] flex items-center justify-between gap-2 "
                >
                  <div className="p-1 cursor-pointer bg-white text-black flex items-center justify-center rounded-full">
                    <RiAddLine />
                  </div>
                  <p className="cursor-pointer">Add </p>
                </div>
              </div>
            </div>
            {userInput.activities.map((activity, index) => {
              const {
                activityType,
                workingProfile,
                organizationName,
                taskDescription,
              } = activity;
              const isEmpty =
                !activityType &&
                !workingProfile &&
                !organizationName &&
                !taskDescription;

              if (isEmpty) return null;

              return (
                <div
                  key={index}
                  className="relative w-full p-5 flex flex-col border-2 field rounded-lg justify-between items-center"
                >
                  <button
                    className="absolute bg-[#f54e12] px-4 py-2 font-medium rounded-lg text-xs text-white top-2 right-2"
                    onClick={() => handleDeleteActivity(index)}
                  >
                    Delete
                  </button>
                  <p className="font-medium text-2xl mb-2">Activity {index}</p>
                  <div className="w-full flex mb-5 h-12 items-center justify-between">
                    <div className="text-lg w-[45%] font-medium">
                      <p>Type of Activity</p>
                    </div>
                    <div className="text-lg w-[45%]">
                      <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                        <input
                          type="text"
                          placeholder="Work With NGO, Hackathon, Competition"
                          className="w-full h-full outline-none"
                          value={activityType}
                          onChange={(e) =>
                            HandleEditActivity(
                              index,
                              "activityType",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-5 h-12 flex items-center justify-between">
                    <div className="text-lg w-[45%] font-medium">
                      <p>Position / Role</p>
                    </div>
                    <div className="text-lg w-[45%]">
                      <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                        <input
                          type="text"
                          placeholder="Founder, Leader, Volunteer, Participant, etc."
                          className="w-full h-full outline-none"
                          value={workingProfile}
                          onChange={(e) =>
                            HandleEditActivity(
                              index,
                              "workingProfile",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-5 h-12 flex items-center justify-between">
                    <div className="text-lg w-[45%] font-medium">
                      <p>Organization/Company Name</p>
                    </div>
                    <div className="text-lg w-[45%]">
                      <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                        <input
                          type="text"
                          placeholder="Bal Utsav, eVidyaloka, Care India, IIT Delhi"
                          className="w-full h-full outline-none"
                          value={organizationName}
                          onChange={(e) =>
                            HandleEditActivity(
                              index,
                              "organizationName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-5 h-12 flex items-center justify-between">
                    <div className="text-lg w-[45%] font-medium">
                      <p>Activity Description</p>
                    </div>
                    <div className="text-lg w-[45%] ">
                      <div className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
                        <input
                          type="text"
                          placeholder="Activity Description"
                          className="w-full h-full outline-none break-words"
                          value={activity.taskDescription}
                          id=""
                          onChange={(e) =>
                            HandleEditActivity(
                              index,
                              "taskDescription",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="w-full flex justify-between items-center">
              <p className="font-medium">Family Income</p>
              <div className=" relative w-auto font-semibold gap-2 h-12 flex items-center justify-center">
                {[
                  "Less than 1 Lac",
                  "1-5 Lac",
                  "5-10 Lac",
                  "more than 10 Lac",
                ].map((option) => (
                  <button
                    key={option}
                    className={`w-24 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.familyincome === option
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
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
              <p className="font-medium">Caste Category</p>
              <div className="   relative w-[45%] font-semibold gap-2 h-12 flex items-center ">
                {["OBC", "SC", "ST", "GEN", "OTHER"].map((option) => (
                  <button
                    key={option}
                    className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.caste === option
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
                    }`}
                    onClick={() =>
                      handleChange("caste")({ target: { value: option } })
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
              <div className="relative w-[45%] font-semibold gap-6 h-12 flex items-center ">
                <button
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    userInput.physicaldisabilities === "YES"
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
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
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    userInput.physicaldisabilities === "NO"
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
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
                <div className="cursor-pointer relative w-[45%] h-14 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
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
              className="px-4 py-2 bg-[#F58612] rounded-lg text-white font-medium"
              onClick={handlesubmit}
            >
              Submit Details
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
