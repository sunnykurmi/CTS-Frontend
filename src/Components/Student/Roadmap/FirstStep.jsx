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
        <p className="font-medium text-lg">Gender</p>
        <input
          type="text"
          placeholder="Enter Male / Female"
          name="gender"
          onChange={props.handleChange("gender")}
          value={props.userInput.gender}
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
        <p className="font-medium text-lg">Country</p>
        <input
          type="text"
          placeholder="India/Singapore/USA"
          name="country"
          onChange={props.handleChange("country")}
          value={props.userInput.country}
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
    </div>
  );
};

export default FirstStep;