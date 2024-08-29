import {
  RiAddLine,
  RiArrowDownLine,
  RiArrowDownSLine,
  RiCloseLine,
} from "@remixicon/react";
import React, { useState } from "react";

const ThirdStep = (props) => {
  const [inputValue3, setInputValue3] = useState("");
  const [submittedValues, setSubmittedValues] = useState(
    props.userInput.interestField
      ? props.userInput.interestField.split(",")
      : []
  );

  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const handleSubmit3 = () => {
    if (inputValue3.trim() !== "") {
      const newValues = [...submittedValues, inputValue3];
      setSubmittedValues(newValues);
      setInputValue3(""); // Clear the input field
      props.handleChange("interestField")({
        target: { value: newValues.join(",") },
      });
    }
  };

  const handleRemove = (index) => {
    const newValues = submittedValues.filter((_, i) => i !== index);
    setSubmittedValues(newValues);
    props.handleChange("interestField")({
      target: { value: newValues.join(",") },
    });
  };

  const [inputValue4, setInputValue4] = useState("");
  const [submittedValues2, setSubmittedValues2] = useState(
    props.userInput.skills ? props.userInput.skills.split(",") : []
  );

  const handleInputChange4 = (e) => {
    setInputValue4(e.target.value);
  };

  const handleSubmit4 = () => {
    if (inputValue4.trim() !== "") {
      const newValues = [...submittedValues2, inputValue4];
      setSubmittedValues2(newValues);
      setInputValue4(""); // Clear the input field
      props.handleChange("skills")({ target: { value: newValues.join(",") } });
    }
  };

  const handleRemove2 = (index) => {
    const newValues = submittedValues2.filter((_, i) => i !== index);
    setSubmittedValues2(newValues);
    props.handleChange("skills")({ target: { value: newValues.join(",") } });
  };

  const [activities, setActivities] = useState([{}]);

  const handleAddActivity = () => {
    setActivities([...activities, {}]);
  };

  const handleRemoveActivity = (index) => {
    const newActivities = activities.filter((_, i) => i !== index);
    setActivities(newActivities);
    const updatedUserInput = newActivities.map((_, i) => ({
      [`activityType${i + 1}`]: userInput[`activityType${i + 1}`],
      [`workingProfile${i + 1}`]: userInput[`workingProfile${i + 1}`],
      [`organizationName${i + 1}`]: userInput[`organizationName${i + 1}`],
      [`taskDescription${i + 1}`]: userInput[`taskDescription${i + 1}`],
    }));
    setUserInput({ ...userInput, activities: updatedUserInput });
  };

  const [dropdownOpenActivity, setDropdownOpenActivity] = useState(false);
  const [inputValueActivity, setInputValueActivity] = useState(
    props.userInput.activityType1
  );
  const [hoverTimeout, setHoverTimeout] = useState(null);

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

  const handleOptionClickActivity = (value) => {
    setInputValueActivity(value);
    setDropdownOpenActivity(false);
    props.handleChange("activityType1")({ target: { value } });
  };

  const handleInputChangeActivity = (e) => {
    setInputValueActivity(e.target.value);
    setDropdownOpenActivity(true);
    props.handleChange("activityType1")(e);
  };

  const [dropdownOpenFuture, setDropdownOpenFuture] = useState(false);
  const [inputValueFuture, setInputValueFuture] = useState(
    props.userInput.BecomeInFuture
  );
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
    setInputValueFuture(value);
    setDropdownOpenFuture(false);
    props.handleChange("BecomeInFuture")({ target: { value } });
  };

  const handleInputChangeFuture = (e) => {
    setInputValueFuture(e.target.value);
    setDropdownOpenFuture(true);
    props.handleChange("BecomeInFuture")(e);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpenFuture(false);
    }, 1000);
    setHoverTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleInterestClick = (interest) => {
    setSubmittedValues((prev) => {
      let updatedValues;
      if (prev.includes(interest)) {
        updatedValues = prev.filter((item) => item !== interest);
      } else {
        updatedValues = [...prev, interest];
      }
      props.handleChange("interestField")({
        target: { value: updatedValues.join(",") },
      });
      return updatedValues;
    });
  };

  return (
    <div className="w-full pb-20 flex gap-5 flex-col items-center shadow-lg">
      <p className="upper text-2xl font-semibold">
        ACTIVITIES / EXTRACURRICULARS
      </p>
      <div className="w-[80%] flex justify-between items-center ">
        <p className="font-medium">What Do You Want To Become In Future ?</p>
        <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
            readOnly
            placeholder="e.g Software engineer, Data scientist, Doctor , etc."
            className="w-full h-full outline-none"
            name="BecomeInFuture"
            onClick={toggleDropdownFuture}
            value={inputValueFuture}
            onChange={handleInputChangeFuture}
            id=""
          />
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
      <div className="w-[80%] flex justify-between items-center ">
        <div className=" h-full w-fit  pt-3 ">
          <p className="font-medium">Field Of Interest</p>
        </div>

        <div className="  w-[70%] flex flex-wrap justify-end gap-2 ">
          {[
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
          ].map((interest) => (
            <div
              key={interest}
              className={` px-4 w-fit flex items-center justify-center h-fit py-1 border-2 border-[#F58612] rounded-full cursor-pointer ${
                submittedValues.includes(interest)
                  ? "bg-[#F58612] text-white"
                  : ""
              }`}
              onClick={() => handleInterestClick(interest)}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] flex justify-between items-center ">
        <div className=" h-full w-fit  pt-3 ">
          <p className="font-medium">List All The Skills You Have</p>
        </div>
        <div className="flex flex-col w-[80%]  justify-end items-end  ">
          <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
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
              className=" bg-[#F58612] h-[80%] rounded-lg flex items-center font-bold text-white justify-center px-4"
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
      <div className="w-[80%] h-fit pb-10 border-2 border-[#ffb567d6] ">
        <div className="w-full h-10 flex items-center pl-5 text-xl text-white upper font-semibold bg-[#ff9625]">
          Activities
        </div>
        <div className="w-full h-16 flex items-center pl-7  text-xl text-black">
          “Sharing Details Of Your Activities Enables Us To Better Grasp Your
          Life Experiences”
        </div>
        {/* <div
          onClick={handleAddActivity}
          className=" ml-7 pr-5 rounded-full w-fit  min-w-20 px-1 py-1 text-white bg-[#F58612] flex items-center justify-between gap-2 mt-4"
        >
          <div className="p-1 cursor-pointer bg-white text-black flex items-center justify-center rounded-full">
            <RiAddLine />
          </div>
          <p className="cursor-pointer">Add Activity</p>
        </div> */}
        <div className="w-full h-fit mt-5 flex flex-col items-center justify-center">
          <div className="w-[80%] h-fit p-6 bg-gray-100">
            <p className="text-xl font-semibold mb-5">Activity 1</p>
            <p className="font-medium">Type of Activity</p>
            <div className="relative w-[30vw] ">
              <input
                placeholder="Work With NGO, Hackathon, Competition"
                className="w-full h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                readOnly
                name="activityType1"
                onClick={toggleDropdownActivity}
                value={inputValueActivity}
                onChange={handleInputChangeActivity}
                id=""
              />

              {dropdownOpenActivity && (
                <div
                  className="absolute top-[103%] z-[9] w-[30vw] gap-2 flex flex-wrap bg-white  h-fit"
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
              className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
              type="text"
              name="workingProfile1"
              value={props.userInput.workingProfile1}
              onChange={props.handleChange("workingProfile1")}
              id=""
            />
            <p className="font-medium mt-5">Organization/Company Name</p>
            <input
              placeholder=" Bal Utsav , eVidyaloka , Care india ,  IIT Delhi  "
              className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
              type="text"
              name="organizationName1"
              value={props.userInput.organizationName1}
              onChange={props.handleChange("organizationName1")}
              id=""
            />
            <p className="font-medium mt-5">
              Please describe this activity, including what you accomplished and
              any recognition you received, etc.
            </p>
            <input
              placeholder="Provide Foods To Needy People "
              className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
              type="text"
              name="taskDescription1"
              value={props.userInput.taskDescription1}
              onChange={props.handleChange("taskDescription1")}
              id=""
            />
          </div>
          {activities.slice(1).map((_, index) => (
            <div
              key={index + 1}
              className="mt-10 w-[80%] h-fit p-6 bg-gray-100 mb-4 relative"
            >
              <div className="flex w-full justify-between">
                <p className="text-xl font-semibold mb-5">
                  Activity {index + 2}
                </p>
                <RiCloseLine
                  onClick={() => handleRemoveActivity(index + 1)}
                  className="cursor-pointer"
                />
              </div>
              <p className="font-medium">Type of Activity</p>
              <input
                placeholder="Work With NGO , Hackathon , Competiton"
                className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                name={`activityType${index + 2}`}
                value={props.userInput[`activityType${index + 2}`]}
                onChange={props.handleChange(`activityType${index + 2}`)}
                id=""
              />
              <p className="font-medium mt-5">Describe Your Working Profile</p>
              <input
                placeholder="Team Leader , Mentor "
                className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                name={`workingProfile${index + 2}`}
                value={props.userInput[`workingProfile${index + 2}`]}
                onChange={props.handleChange(`workingProfile${index + 2}`)}
                id=""
              />
              <p className="font-medium mt-5">Name Of The Organization</p>
              <input
                placeholder="Akshaya Patra Foundation , Bal Utsav , eVidyaloka "
                className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                name={`organizationName${index + 2}`}
                value={props.userInput[`organizationName${index + 2}`]}
                onChange={props.handleChange(`organizationName${index + 2}`)}
                id=""
              />
              <p className="font-medium mt-5">
                Kindly Explain This Task, Detailing What You Achieved And Any
                Awards You Obtained, Etc.
              </p>
              <input
                placeholder="Provide Foods To Needy People "
                className="w-[30vw] mt-2 h-10 rounded-lg outline-none px-5 border-2"
                type="text"
                name={`taskDescription${index + 2}`}
                value={props.userInput[`taskDescription${index + 2}`]}
                onChange={props.handleChange(`taskDescription${index + 2}`)}
                id=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
