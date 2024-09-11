import {
  RiAddLine,
  RiArrowDownLine,
  RiArrowDownSLine,
  RiCloseLine,
} from "@remixicon/react";
import React from "react";

const FirstStep = (props) => {

  return (
    <div className="w-[60%] pb-10 h-full flex gap-5 flex-col items-center shadow-lg"> 
      <p className="upper text-2xl font-semibold">Basic Info</p>
      <div className="input-field w-[70%] ">
        <p className="font-medium text-lg">Name</p>
        <input
          type="text"
          placeholder="Enter your full name"
          name="fullname"
          onChange={props.handleChange("fullname")}
          value={props.userInput.fullname}
          className="field rounded-xl"
        />
      </div>   
      <div className="input-field w-[70%] ">
        <p className="font-medium text-lg">Date Of Birth</p>
        <input
          type="date"
          name="dateofbirth"
          onChange={props.handleChange("dateofbirth")}
          value={props.userInput.dateofbirth}
          className="field rounded-xl"
        />
      </div>
      <div className="input-field w-[70%] ">
        <p className="font-medium text-lg">State</p>
        <input
          type="text"
          placeholder="Maharashtra/Karnataka/Gujrat"
          name="state"
          onChange={props.handleChange("state")}
          value={props.userInput.state}
          className="field rounded-xl"
        />
      </div>
      <div className="input-field w-[70%] ">
        <p className="font-medium text-lg">City</p>
        <input
          type="text"
          placeholder="Bangalore/Mumbai/Delhi"
          name="city"
          onChange={props.handleChange("city")}
          value={props.userInput.city}
          className="field rounded-xl"
        />
      </div>
      <div className="input-field w-[70%] ">
        <p className="font-medium text-lg">Gender</p>
        <div className="relative  w-96 font-semibold gap-10 h-12 flex items-center ">
    <button
      className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${props.userInput.gender === "Male" ? "bg-[#F58612] text-white" : "border-[#F58612]"}`}
      onClick={() => props.handleChange("gender")({ target: { value: "Male" } })}
    >
      Male
    </button>
    <button
      className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${props.userInput.gender === "Female" ? "bg-[#F58612] text-white" : "border-[#F58612]"}`}
      onClick={() => props.handleChange("gender")({ target: { value: "Female" } })}
    >
      Female
    </button>
  </div>
      </div>
    </div>
  );
};

export default FirstStep;