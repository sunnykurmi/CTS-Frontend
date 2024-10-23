import React from 'react';

export default function AdminLeftSlide({ selectedComponent, setSelectedComponent, closeSidebar }) {
  const getButtonClass = (component) => {
    return selectedComponent === component
      ? "center font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg bg-[black] text-white"
      : "center font-semibold h-[90%] w-[80%] border-2 border-[#2a2a2ab6] rounded-lg";
  };

  return (
    <div>
      <div className="w-full h-full flex gap-3 flex-col justify-center px-5 py-[8vh]">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllStudents")}
              onClick={() => {
                setSelectedComponent("AllStudents");
                closeSidebar();
              }}
            >
              <p>All Students</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllRoadmaps")}
              onClick={() => {
                setSelectedComponent("AllRoadmaps");
                closeSidebar();
              }}
            >
              <p>All Roadmaps</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllInternships")}
              onClick={() => {
                setSelectedComponent("AllInternships");
                closeSidebar();
              }}
            >
              <p>All Internships</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("PendingRoadmaps")}
              onClick={() => {
                setSelectedComponent("PendingRoadmaps");
                closeSidebar();
              }}
            >
              <p>Pending Roadmaps</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllPortfolios")}
              onClick={() => {
                setSelectedComponent("AllPortfolios");
                closeSidebar();
              }}
            >
              <p>All Portfolios</p>
            </button>
          </div>
          <div className="w-full h-[8vh] flex items-center justify-center">
            <button
              className={getButtonClass("AllExams")}
              onClick={() => {
                setSelectedComponent("AllExams");
                closeSidebar();
              }}
            >
              <p>All Exams</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}