import React from "react";

const FirstStep = (props) => {
  return (
    <div className="w-full h-full flex gap-5 flex-col items-center shadow-lg">
      <p className="upper text-2xl font-semibold">Basic Info</p>
     
      <div className="input-field w-[70%] ">
        <input 
         type="text"
         name="fullname"
         onChange={props.handleChange("fullName")}
          id="_name" className="field rounded-xl" />
        <label for="_name">Full Name</label>
        <div className="field-focus" />
      </div>
      <div className="input-field w-[70%] ">
        <input 
         type="text"
         name="gender"
         onChange={props.handleChange("gender")}
          id="_name" className="field rounded-xl" />
        <label for="_name">Gender</label>
        <div className="field-focus" />
      </div>
      <div className="input-field w-[70%] ">
        <input 
         type="text"
         name="dob"
         onChange={props.handleChange("dob")}
          id="_name" className="field rounded-xl" />
        <label for="_name">Date Of Birth</label>
        <div className="field-focus" />
      </div>
      <div className="input-field w-[70%] ">
        <input 
         type="text"
         name="country"
         onChange={props.handleChange("country")}
          id="_name" className="field rounded-xl" />
        <label for="_name">Country</label>
        <div className="field-focus" />
      </div>
      <div className="input-field w-[70%] ">
        <input 
         type="text"
         name="city"
         onChange={props.handleChange("city")}
          id="_name" className="field rounded-xl" />
        <label for="_name">City</label>
        <div className="field-focus" />
      </div>
     
    </div>
  );
};
export default FirstStep;
