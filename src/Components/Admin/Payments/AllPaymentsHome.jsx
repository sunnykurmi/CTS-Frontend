import React, { useState, useEffect } from "react";
import CommonAppPayment from "./CommonAppPayment";
import CSSProfilePayment from "./CSSProfilePayment";
import EssayPayments from "./EssayPayments";
import ExamPayments from "./ExamPayments";
import PortfoliosPayment from "./PortfoliosPayment";

const AllPaymentsHome = () => {
  const [visibleComponent, setVisibleComponent] = useState(() => {
    return localStorage.getItem("visibleComponent") || "EssayEditing";
  });

  useEffect(() => {
    localStorage.setItem("visibleComponent", visibleComponent);
  }, [visibleComponent]);

  const handleButtonClick = (componentName) => {
    setVisibleComponent(componentName);
  };

  const getButtonClass = (componentName) => {
    return visibleComponent === componentName
      ? "w-fit bg-black px-4 py-2 rounded-lg text-white font-bold flex items-center justify-center"
      : "w-fit bg-white border-black border px-4 py-2 rounded-lg text-black font-bold flex items-center justify-center";
  };

  return (
    <div>
            <div className="w-full h-16 border-b-2 flex items-center  px-4 gap-5">

      <div className={getButtonClass("EssayEditing")}>
        <button onClick={() => handleButtonClick("EssayEditing")}>
          <p>Essay Editing</p>
        </button>
      </div>
      <div className={getButtonClass("CSSProfile")}>
        <button onClick={() => handleButtonClick("CSSProfile")}>
          <p>CSS Profile</p>
        </button>
      </div>
      <div className={getButtonClass("ExamPrep")}>
        <button onClick={() => handleButtonClick("ExamPrep")}>
          <p>Exam Prep</p>
        </button>
      </div>
      <div className={getButtonClass("Portfolios")}>
        <button onClick={() => handleButtonClick("Portfolios")}>
          <p>Portfolios</p>
        </button>
      </div>
      </div>

      <div className="w-full h-[75vh]">
        {visibleComponent === "EssayEditing" && <EssayPayments />}
        {visibleComponent === "CommonApp" && <CommonAppPayment />}
        {visibleComponent === "CSSProfile" && <CSSProfilePayment />}
        {visibleComponent === "ExamPrep" && <ExamPayments />}
        {visibleComponent === "Portfolios" && <PortfoliosPayment />}
      </div>
    </div>
  );
};

export default AllPaymentsHome;
