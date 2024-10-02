import {
  RiBookLine,
  RiHome2Line,
  RiPhoneLine,
  RiRoadMapLine,
  RiSettings5Line,
  RiTeamLine,
  RiWindow2Line,
} from "@remixicon/react";
import React from "react";

export default function AdminLeftSlide({
  selectedComponent,
  setSelectedComponent,
}) {
  const getButtonClass = (component) => {
    return selectedComponent === component
      ? " center font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg bg-[black] text-white"
      : " center font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg";
  };

  return (
    <div>
      <div className="w-full h-full flex gap-3 flex-col justify-center px-5 py-[8vh]">
        <div className="flex flex-col gap-2">
          
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllStudents")}
              onClick={() => setSelectedComponent("AllStudents")}
            >

              <p>AllStudents</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllRoadmaps")}
              onClick={() => setSelectedComponent("AllRoadmaps")}
            >
      
              <p>AllRoadmaps</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllInternships")}
              onClick={() => setSelectedComponent("AllInternships")}
            >
      
              <p>All Internships</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("PendingRoadmaps")}
              onClick={() => setSelectedComponent("PendingRoadmaps")}
            >
      
              <p>Pending Roadmaps</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllPortfolios")}
              onClick={() => setSelectedComponent("AllPortfolios")}
            >
      
              <p>All Portfolios</p>
            </button>
          </div>

        </div>
     
      </div>
    </div>
  );
}
