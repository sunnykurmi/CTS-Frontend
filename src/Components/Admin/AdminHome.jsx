import React, { useEffect, useState } from "react";
import AdminLeftSlide from "./AdminLeftSlide";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../store/Actions/userActions";
import AllStudents from "./AllStudents";
import Nav from "../Student/Nav";
import Loader from "../Loader/Loader";
import AllRoadmaps from "./AllRoadmaps";
import PendingRoadmaps from "./PendingRoadmaps";
import AllInternships from "./AllInternships";
import AllPortfolios from "./AllPortfolios";
import { RiArrowRightLine, RiCloseLine } from "@remixicon/react";
import AllExams from './AllExams';
import AllPaymentsHome from "./Payments/AllPaymentsHome";

export default function AdminHome() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [selectedComponent, setSelectedComponent] = useState(() => {
    return localStorage.getItem("selectedComponent") || "AllStudents";
  });

  useEffect(() => {
    localStorage.setItem("selectedComponent", selectedComponent);
  }, [selectedComponent]);

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if (!user) {
    return <Loader />;
  }

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      <div className="h-[100vh] w-full overflow-hidden relative max-[600px]:hidden">
        <Nav />
        <div className="flex w-full h-[88vh] items-center justify-between">
          <div className="w-[18%] h-full border-r-2">
            <AdminLeftSlide
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
              closeSidebar={closeSidebar} // Passing closeSidebar prop
            />
          </div>
          <div className="w-[82%] h-[89vh]">
            {selectedComponent === "AllStudents" && <AllStudents />}
            {selectedComponent === "AllRoadmaps" && <AllRoadmaps />}
            {selectedComponent === "PendingRoadmaps" && <PendingRoadmaps />}
            {selectedComponent === "AllInternships" && <AllInternships />}
            {selectedComponent === "AllPortfolios" && <AllPortfolios />}
            {selectedComponent === "AllExams" && <AllExams />}
            {selectedComponent === "AllPayments" && <AllPaymentsHome />}
          </div>
        </div>
      </div>

      <div className="h-[100vh] z-[99999] w-full overflow-hidden relative min-[600px]:hidden">
        <div className="w-full top-0 fixed z-40">
          <Nav />
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isSidebarVisible ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar}
        ></div>
        <div className="flex pt-20 w-full h-[100vh] items-center justify-between relative">
          <div
            className={`w-[18%] max-[600px]:w-[60%] bg-white z-50 max-[600px]:absolute relative max-[600px]:top-0 max-[600px]:left-0 max-[600px]:z-[99] h-full border-r-2 transition-transform duration-300 ${
              isSidebarVisible
                ? "max-[600px]:translate-x-0"
                : "max-[600px]:-translate-x-full"
            }`}
          >
            <RiCloseLine
              size={40}
              onClick={toggleSidebar}
              className="mr-5 mt-5 hidden max-[600px]:block absolute right-0 cursor-pointer"
            />
            <AdminLeftSlide
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
              closeSidebar={closeSidebar}
            />
          </div>
          <div className="w-[82%] max-[600px]:w-full h-[89vh] relative">
            <RiArrowRightLine
              onClick={toggleSidebar}
              className="mt-3 ml-5 hidden max-[600px]:block cursor-pointer"
            />
            {selectedComponent === "AllStudents" && <AllStudents />}
            {selectedComponent === "AllRoadmaps" && <AllRoadmaps />}
            {selectedComponent === "PendingRoadmaps" && <PendingRoadmaps />}
            {selectedComponent === "AllInternships" && <AllInternships />}
            {selectedComponent === "AllPortfolios" && <AllPortfolios />}
            {selectedComponent === "AllExams" && <AllExams />}
            {selectedComponent === "AllPayments" && <AllPaymentsHome />}

          </div>
        </div>
      </div>
    </>
  );
}
