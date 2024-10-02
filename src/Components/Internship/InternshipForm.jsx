import { RiArrowDownSLine } from "@remixicon/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitInternship } from "../../store/Actions/internshipAction";
import { useDispatch } from "react-redux";

export default function InternshipForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    contact: "",
    dateofbirth: "",
    classGrade: "",
    city: "",
    income: "",
    mode: "",
    board: "",
    dreamuniversity: "",
    reason: "",
    skills: [],
    ecs: "",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleModeChange = (mode) => (event) => {
    event.preventDefault();
    handleChange("mode")({ target: { value: mode } });
  };

  const handleArrayChange = (name, value) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(userInput).every(
      (value) => value !== "" && value.length !== 0
    );
    if (!allFieldsFilled) {
      alert("All fields are required");
      return;
    }
    setLoading(true);
    const success = await dispatch(SubmitInternship(userInput));
    setLoading(false);
    if (success) {
      alert("Form Submitted Successfully");
      navigate("/");
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const classes = [
    "9th Class",
    "10th Class",
    "11th Class",
    "12th Class",
    "12th Pass",
  ];
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (value) => {
    setDropdownOpen(false);
    handleChange("classGrade")({ target: { value } });
  };

  const handleInputChange = (e) => {
    setDropdownOpen(true);
    handleChange("classGrade")(e);
  };

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const boards = ["CBSE", "ICSE", "IGCSE", "IB", "State Board", "Other"];
  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const handleOptionClick2 = (value) => {
    setDropdownOpen2(false);
    handleChange("board")({ target: { value } });
  };

  const handleInputChange2 = (e) => {
    setDropdownOpen2(true);
    handleChange("board")(e);
  };

  const [dropdownOpenInterest, setDropdownOpenInterest] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [inputValueInterest, setInputValueInterest] = useState("");

  const interestsArray = [
    "Leadership",
    "Video Editing",
    "Tutor",
    "Web Development",
    "Designing",
    "Marketing",
    "Management",
    "Finance",
    "Entrepreneurship",
    "Public Speaking",
    "Dance",
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
    handleArrayChange("skills", newSelectedInterests);
  };

  const handleInputChangeInterest = (e) => {
    setInputValueInterest(e.target.value);
    setDropdownOpenInterest(true);
    handleChange("skills")(e);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
      setDropdownOpen2(false);
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
    <div>
      <div className="w-full center p-5 overflow-x-hidden flex-col max-[600px]:p-0 ">
        <div className="flex max-[600px]:flex-col">

        <div className="w-[50%] p-10 h-screen flex items-start justify-center max-[600px]:h-fit max-[600px]:items-center max-[600px]:w-full">
          <img className="w-full shadow-lg" src="/Images/intern2.jpg" alt="" />
        </div>
        <div className="w-[50%]   p-5 max-[600px]:w-full ">
          <div className="w-full center mb-10">
            <p className="text-2xl font-medium">Apply for Internship In CTS</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex items-center justify-between">
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">Name</p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  onChange={handleChange("name")}
                  value={userInput.name}
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
            <div className="w-full flex items-center justify-between mt-3">
              <div className="input-field w-[45%] ">
                <p className="font-medium text-lg">Email</p>
                <input
                  type="text"
                  placeholder="Enter Email address"
                  name="email"
                  onChange={handleChange("email")}
                  value={userInput.email}
                  className="field rounded-xl"
                />
              </div>
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">Contact</p>
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  name="contact"
                  onChange={handleChange("contact")}
                  value={userInput.contact}
                  className="field rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between mt-3">
              <div className="input-field w-[45%] mt-2">
                <p className="font-medium text-lg">City</p>
                <input
                  type="text"
                  placeholder="Enter City name"
                  name="city"
                  onChange={handleChange("city")}
                  value={userInput.city}
                  className="field rounded-xl"
                />
              </div>
              <div className="input-field w-[45%]">
                <p className="font-medium text-lg">
                  FamilyAnnual Income{" "}
                  <span className="text-xs font-medium">(inRs)</span>{" "}
                </p>
                <input
                  type="text"
                  placeholder="Enter your family income"
                  name="income"
                  onChange={handleChange("income")}
                  value={userInput.income}
                  className="field rounded-xl"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between mt-3">
              <div className="flex w-[45%] flex-col ">
                <p className="text-lg font-medium">Class</p>
                <div
                  onClick={toggleDropdown}
                  className="cursor-pointer relative w-full field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
                >
                  <input
                    type="text"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    value={userInput.classGrade}
                    onChange={handleInputChange}
                    readOnly
                    placeholder="Select Class"
                    className="w-full h-full outline-none"
                    name="class"
                    autoComplete="off"
                  />
                  <RiArrowDownSLine className="text-[#F58612]" />
                  {dropdownOpen && (
                    <div className="absolute w-full shadow-lg border-2 border-b-0 top-[105%] z-[99] bg-white">
                      {classes.map((cls) => (
                        <div
                          key={cls}
                          className="w-full h-10 flex border-r-2 border-b-2 text-center items-center justify-center font-semibold hover:bg-[#F58612] hover:text-white"
                          onClick={() => handleOptionClick(cls)}
                        >
                          <p>{cls}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-[45%] flex-col ">
                <p className="text-lg font-medium">Education Board</p>
                <div
                  onClick={toggleDropdown2}
                  className="cursor-pointer relative field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
                >
                  <input
                    type="text"
                    readOnly
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    value={userInput.board}
                    onChange={handleInputChange2}
                    placeholder="Select Board"
                    className="w-full h-full outline-none"
                    name="board"
                    autoComplete="off"
                  />
                  <RiArrowDownSLine className="text-[#F58612]" />
                  {dropdownOpen2 && (
                    <div className="absolute shadow-lg top-[105%] z-[99] border-2 border-b-0 w-full bg-white h-fit">
                      {boards.map((cls) => (
                        <div
                          key={cls}
                          className="flex h-10 items-center justify-center font-semibold border-b-2 hover:bg-[#F58612] hover:text-white"
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
            <div className="w-full flex items-center justify-between mt-3">
              <div className="input-field w-[45%] ">
                <p className="font-medium text-lg">Dream University</p>
                <input
                  type="text"
                  placeholder="MIT, Harvard, etc."
                  name="dreamuniversity"
                  onChange={handleChange("dreamuniversity")}
                  value={userInput.dreamuniversity}
                  className="field rounded-xl"
                />
              </div>
              <div className="w-[45%] flex flex-wrap justify-end">
                <div className="w-full h-fit">
                  <p className="font-medium text-lg">Skills</p>
                </div>
                <div className="w-full relative flex items-center justify-center">
                  <textarea
                    placeholder="Select Field Of Interest"
                    value={inputValueInterest}
                    onChange={handleInputChangeInterest}
                    onFocus={toggleDropdownInterest}
                    className="field min-h-12 outline-none resize-none h-fit scroller rounded-xl"
                    rows={inputValueInterest ? 3 : 1} // Increase height when filled
                  />
                  <RiArrowDownSLine className="absolute right-2 cursor-pointer text-[#F58612]" />
                  {dropdownOpenInterest && (
                    <div
                      className="absolute right-0 p-5 shadow-lg top-[103%] z-[9] w-[50vw] gap-2 flex flex-wrap bg-white h-fit max-[600px]:w-[100vw] max-[600px]:right-0 max-[600px]:p-0 max-[600px]:scale-75"
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
            <div className="w-full flex justify-between items-center mt-3">
              <p className="font-medium text-lg">Mode Of Internship</p>
              <div className="relative w-[45%] font-semibold gap-6 h-12 flex items-center ">
                <button
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    userInput.mode === "Online"
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
                  }`}
                  onClick={handleModeChange("Online")}
                >
                  Online
                </button>
                <button
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    userInput.mode === "Offline"
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
                  }`}
                  onClick={handleModeChange("Offline")}
                >
                  Offline
                </button>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-3">
              <div className="h-full w-[45%] pt-3">
                <p className="font-medium text-lg">
                  Reason for joining Internship
                </p>
              </div>
              <div className="w-[45%] flex flex-wrap justify-end gap-2">
                <div className="w-full relative flex items-center justify-center">
                  <textarea
                    placeholder="Start Writing here"
                    name="reason"
                    onChange={handleChange("reason")}
                    value={userInput.reason}
                    className="field min-h-12 outline-none resize-none h-fit scroller rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-3">
              <div className="h-full w-[45%] pt-3">
                <p className="font-medium text-lg">
                  Your Extra Curricular Activities
                </p>
              </div>
              <div className="w-[45%] flex flex-wrap justify-end gap-2">
                <div className="w-full relative flex items-center justify-center">
                  <textarea
                    placeholder="Start Writing here"
                    name="ecs"
                    onChange={handleChange("ecs")}
                    value={userInput.ecs}
                    className="field min-h-12 outline-none resize-none h-fit scroller rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full center mt-5">
              <button
            type="submit" disabled={loading}
                className="bg-[#F58612] text-white font-semibold py-2 px-4 rounded-lg"
              >
         {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        </div>
        <div className="flex w-full items-center justify-evenly">
          <img className="w-[30%] max-[600px]:w-[40%]" src="/Images/intern1.jpg" alt="" />
          <img className="w-[30%] max-[600px]:w-[40%]" src="/Images/intern3.jpg" alt="" />
        </div>
    
     
        <div className="w-full center flex-col p-20 px-44 max-[600px]:p-4">
          <p className="text-2xl font-medium mb-10">About Internship</p>

          <p>
            <b>What You’ll Gain from This Internship:</b>
            <br />- Hands-on Experience: Work on cutting-edge projects like
            Project Future Kalam, BoostEd Asia, and other international
            initiatives. <br />
            - Collaboration with Top Institutes: Collaborate with brilliant
            students from NIT and VIT, Ivy League. <br />
            - International Connections: Gain exposure and networking
            opportunities with professionals from international companies that
            we are partnered with. <br />- Global Exposure: Cross The Skylimits
            has the existence in 109 countries, giving you an opportunity to
            work in a global environment. <br />
            - Certification: Upon successful completion, you’ll receive a
            prestigious certification from FWC and Cross The Skylimits. <br />
            - Stipend Opportunities: The top three performers will receive a
            stipend ranging from ₹3,000 to ₹10,000. <br />
            - All-Inclusive Experience: We will cover your accommodation, food,
            and all local expenses during your stay in Bhopal. <br />
            <br />
            <b>Who Should Apply?</b>
            <br />
            We are looking for highly motivated high school students or young
            talents with a serious interest in entrepreneurship, computer
            science, economics, or business. This Program is highly competitive,
            with an acceptance rate of only 5-8%. So if you're passionate,
            hardworking, and ready to dive into real-world challenges, this is
            for you! <br />
            <br />
            <b>How Does It Work?</b>
            <br />
            1. Fill out the application form carefully and submit it. <br />
            2. Applications will be reviewed thoroughly. <br />
            3. Shortlisted candidates will go through a quick interview. <br />
            4. Final selections will be made based on your passion, dedication,
            and qualifications. <br />
            <br />
            <b>Important Details:</b>
            <br />- The internship will be held in Bhopal, one of our key
            offices. <br />- While we cover most of your expenses
            (accommodation, food, etc.), there is a small program fee involved.
            This is necessary as we operate as a non-profit, and the fee will be
            communicated during the process. <br />
            - You’ll have the chance to work on real-world projects, network
            with industry leaders, and gain invaluable experience—all while
            being part of a fast-growing global startup. <br />
            <br />
            <b>Apply Now!</b>
            <br />
            If you want to work with a global community, take your first steps
            towards entrepreneurship, and gain real-world experience, apply now!
            Remember to fill out the application form below carefully and make
            sure all your details are correct. <br />
          </p>
        </div>
       
      </div>
    </div>
  );
}
