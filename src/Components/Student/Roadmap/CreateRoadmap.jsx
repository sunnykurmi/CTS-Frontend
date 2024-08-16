import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
const CreateRoadmap = () => {
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    fullName: "",
    displayname: "",
    workspaceName: "",
    workspaceUrl: "",
    checkboxValue: "",
  });

  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <ThirdStep nextStep={nextStep} handleChange={handleChange} />;
    else return <LastStep nextStep={nextStep} handleChange={handleChange} />;
  };

  const handleChange = (input) => (e) => {
    setUserInput({ ...userInput, [input]: e.target.value });
  };

  return (
    <div>
      <Nav />
      <div className="w-full h-20  relative  flex items-center justify-center ">
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
        <div className="w-[20%] ">
          <MultiStepProgressBar step={page} />
        </div>
      </div>

      <div className="w-full h-[75vh] flex flex-col gap-5 items-center justify-center]">
        <div className="w-[50%] h-full ">{PageDisplay()}</div>
        <div 
        onClick={() => {setPage((currPage) => currPage + 1);}} className=" h-12 cursor-pointer gap-3 rounded-full  bg-[#F58612] text-white flex items-center justify-center p-2 font-bold">
          <button
            
            className="ml-2"
          >
        
            {page === 3 ? "Finish" : "Next"}
          </button>
          <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
            <RiArrowRightSLine className=" text-[#0000009b]" />{" "}
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default CreateRoadmap;
