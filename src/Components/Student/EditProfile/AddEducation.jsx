import React, { useState } from "react";

function AddEducation() {
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const classes = ["9th Class", "10th Class", "11th Class", "12th Class"];
  const boards = ["CBSE", "ICSE", "IGCSE", "IB", "State Board", "Other"];
  const streams = ["PCM", "PCB", "PCMB", "Arts", "Commerce", "Other"];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!dropdownOpen4);
  };

  const handleOptionClick = (value) => {
    setDropdownOpen(false);
    handleChange({ target: { name: "class", value } });
  };

  const handleOptionClick2 = (value) => {
    setDropdownOpen2(false);
    handleChange({ target: { name: "educationBoard", value } });
  };

  const handleOptionClick3 = (value) => {
    setDropdownOpen3(false);
    handleChange({ target: { name: "stream", value } });
  };

  const handleOptionClick4 = (value) => {
    setDropdownOpen4(false);
    handleChange({ target: { name: "class10educationBoard", value } });
  };

  const handleInputChange = (e) => {
    setDropdownOpen(true);
    handleChange(e);
  };

  const handleInputChange2 = (e) => {
    setDropdownOpen2(true);
    handleChange(e);
  };

  const handleInputChange3 = (e) => {
    setDropdownOpen3(true);
    handleChange(e);
  };

  const handleInputChange4 = (e) => {
    setDropdownOpen4(true);
    handleChange(e);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
      setDropdownOpen2(false);
      setDropdownOpen3(false);
      setDropdownOpen4(false);
    }, 1000);
    setHoverTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const [educationform, seteducationform] = useState({
    class: "",
    schoolname: "",
    percentage: "",
    educationBoard: "",
    stream: "",
    class10percentage: "",
    class10schoolname: "",
    class10educationBoard: "",
    class10passingyear: "",
    passingyear: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    seteducationform({
      ...educationform,
      [name]: value,
    });
  };
console.log(educationform);
  return (
    <div>
      <div className="z-10 flex items-center justify-center fixed h-screen w-full bg-black/30 overflow-hidden">
        <div className="w-[50%] h-[80%] bg-white pt-5 rounded-lg">
          <div className="w-full flex items-center justify-center">
            <p className="text-2xl font-medium">Add Education</p>
          </div>
          <div className="w-full mt-5 flex items-center justify-between px-16">
            <div className="flex w-[45%] flex-col">
              <p className="text-lg font-medium">Class</p>
              <div
                onClick={toggleDropdown}
                className="cursor-pointer relative w-full flex items-center justify-center"
              >
                <input
                  type="text"
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  value={educationform.class}
                  onChange={handleInputChange}
                  placeholder="Select Class"
                  className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                  name="class"
                  autoComplete="off"
                />
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
            <div className="w-[45%] h-full">
              <p className="text-lg font-medium">School Name</p>
              <input
                className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                type="text"
                placeholder="Enter School Name"
                value={educationform.schoolname}
                onChange={handleChange}
                name="schoolname"
              />
            </div>
          </div>
          <div className="w-full mt-5 flex items-center justify-between px-16">
            <div className="flex w-[45%] flex-col">
              <p className="text-lg font-medium">Education Board</p>
              <div
                onClick={toggleDropdown2}
                className="cursor-pointer relative w-full flex items-center justify-center"
              >
                <input
                  type="text"
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  value={educationform.educationBoard}
                  onChange={handleInputChange2}
                  placeholder="Select Board"
                  className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                  name="educationBoard"
                  autoComplete="off"
                />
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
            <div className="w-[45%] h-full">
              <p className="text-lg font-medium">Percentage/score</p>
              <input
                className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                type="text"
                name="percentage"
                placeholder="Enter Percentage"
                value={educationform.percentage}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full mt-5 flex items-center justify-between px-16">
            <div className="w-[45%] h-full">
              <p className="text-lg font-medium">Year of Passing</p>
              <input
                className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                type="text"
                name="passingyear"
                placeholder="Enter Year"
                value={educationform.passingyear}
                onChange={handleChange}
              />
            </div>
            {(educationform.class === "11th Class" ||
                educationform.class === "12th Class") && (
                <div className="flex w-[45%]  flex-col">
                  <p className="text-base font-medium">Stream</p>
                  <div
                    onClick={toggleDropdown3}
                    className="cursor-pointer relative flex items-center justify-center"
                  >
                    <input
                      type="text"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                      placeholder="PCM/PCB/Arts"
                      className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                      name="stream"
                      autoComplete="off"
                      readOnly
                      value={educationform.stream}
                      onChange={handleInputChange3}
                      id=""
                    />
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
          </div>
          {(educationform.class === "11th Class" ||
            educationform.class === "12th Class") && (
            <div className="w-full mt-5 flex items-center justify-between px-16">
              <div className="w-[45%] h-full">
                <p className="text-lg font-medium">
                  Class 10<sup className="font-medium">th</sup> Percentage
                </p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                  type="text"
                  name="class10percentage"
                  placeholder="Enter class 10th Percentage"
                  value={educationform.class10percentage}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[45%] h-full">
                <p className="text-lg font-medium">
                  Class 10<sup className="font-medium">th</sup> School Name
                </p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                  type="text"
                  name="class10schoolname"
                  placeholder="Enter class 10th School name"
                  value={educationform.class10schoolname}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          {(educationform.class === "11th Class" ||
            educationform.class === "12th Class") && (
            <div className="w-full mt-5 flex items-center justify-between px-16">
              <div className="flex w-[45%] flex-col">
                <p className="text-lg font-medium">
                  Class 10<sup className="font-medium">th</sup> Education Board
                </p>
                <div
                  onClick={toggleDropdown4}
                  className="cursor-pointer relative w-full flex items-center justify-center"
                >
                  <input
                    type="text"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    value={educationform.class10educationBoard}
                    onChange={handleInputChange4}
                    placeholder="Select Board"
                    className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                    name="class10educationBoard"
                    autoComplete="off"
                  />
                  {dropdownOpen4 && (
                    <div className="absolute shadow-lg top-[105%] z-[99] border-2 border-b-0 w-full bg-white h-fit">
                      {boards.map((cls) => (
                        <div
                          key={cls}
                          className="flex h-10 items-center justify-center font-semibold border-b-2 hover:bg-[#F58612] hover:text-white"
                          onClick={() => handleOptionClick4(cls)}
                        >
                          <p>{cls}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[45%] h-full">
                <p className="text-lg font-medium">
                  Class 10<sup className="font-medium">th</sup> Year of Passing
                </p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 rounded-lg"
                  type="text"
                  name="class10passingyear"
                  placeholder="Enter Year"
                  value={educationform.class10passingyear}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddEducation;