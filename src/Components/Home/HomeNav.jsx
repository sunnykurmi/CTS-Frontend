import { RiCloseLine, RiMenuLine, RiArrowDownSLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asynccurrentUser } from "./../../store/Actions/userActions";
import Headroom from "react-headroom";

const HomeNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Headroom>
        <div className="w-full h-fit py-5 flex items-center justify-center max-[600px]:hidden max-[600px]:h-16 z-[99999] max-[600px]:bg-[#e7f9ff]">
          <div className="w-fit bg-[#e7f9ff] h-24 rounded-full flex items-center justify-evenly max-[600px]:w-full max-[600px]:rounded-none max-[600px]:pr-2 max-[600px]:h-fit max-[600px]:justify-between max-[600px]:px-5">
            <Link className="w-[15%] max-[600px]:w-[30%] center" to="/">
              <img
                className="w-full"
                src="/Images/home/CTSLogo.png"
                alt=""
              />
            </Link>
            <div className="w-[50vw] uppercase whitespace-nowrap h-full flex items-center justify-center gap-8 font-bold text-[#20373f] max-[600px]:text-xs max-[600px]:w-fit max-[600px]:gap-2 max-[600px]:hidden">
              <a className="hover-link" href="/">
                HOME
              </a>
              <Link className="hover-link" to="/ivy">
                ivy acclerator
              </Link>
              <div className="relative dropdown">
                <div className="hover-link uppercase" onClick={toggleDropdown}>
                  <div className="flex items-center">
                    <p>exclusive</p> <RiArrowDownSLine className="ml-1" />
                  </div>
                </div>
                {dropdownOpen && (
                  <div className="absolute z-[99] -left-[200%] mt-2 w-fit p-5 bg-white border border-gray-200 rounded-md shadow-lg font-medium text-sm">
                    <div className="px-4 py-2 border-b-2">
                      <Link to={"/portfolio"}>
                        <h1 className="text-sm text-zinc-400">Services</h1>
                      </Link>
                      <div className="flex items-center gap-5">
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/portfolio"
                        >
                          Portfolio
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/apply-internship-form"
                        >
                          Internship
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/satpractice"
                        >
                          SAT Practice Test
                        </Link>
                      </div>
                    </div>
                    <div className="border-b-2 px-4 py-2">
                      <Link to={"/services"}>
                        <h1 className="text-sm text-zinc-400">
                          Exclusive Services
                        </h1>
                      </Link>
                      <div className="flex items-center gap-5">
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/essay-editing"
                        >
                          Essay Editing
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/common-app-review"
                        >
                          Common App Review
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/css-profile"
                        >
                          CSS Profile Help
                        </Link>
                      </div>
                    </div>
                    <div className="px-4 py-2">
                      <Link to={"/services/exam-prepration"}>
                        <h1 className="text-sm text-zinc-400">
                          Exam Preparation
                        </h1>
                      </Link>
                      <div className="flex items-center gap-5">
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/exam-prepration/sat-prepration"
                        >
                          SAT Exam
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/exam-prepration/ielts-prepration"
                        >
                          IELTS Exam
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/exam-prepration/toefl-prepration"
                        >
                          TOEFL Exam
                        </Link>
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          to="/services/exam-prepration/det-prepration"
                        >
                          DET Exam
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link className="hover-link" to={'/about-us'}>
                about us
              </Link>
            </div>
            {isAuth ? (
              <div className="w-fit h-full flex items-center justify-evenly max-[600px]:hidden">
                <Link to="/home">
                  <button className="w-32 h-14 rounded-full bg-[#008BDC] text-white font-bold">
                    DASHBOARD
                  </button>
                </Link>
              </div>
            ) : (
              <div className="w-[25%] h-full flex items-center justify-evenly max-[600px]:hidden">
                <Link to="/login" className="">
                  <button className="w-32 h-14 rounded-full border-2 border-[#0000000c] font-bold">
                    LOGIN
                  </button>
                </Link>
                <Link to="/signup" className="max-[600px]:scale-50">
                  <button className="w-32 h-14 rounded-full bg-[#008BDC] text-white font-bold">
                    REGISTER
                  </button>
                </Link>
              </div>
            )}
            <div className="center flex-col min-[600px]:hidden">
              <RiMenuLine onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </Headroom>


      <div className="w-full h-fit py-5 flex items-center justify-center min-[600px]:hidden max-[600px]:h-16 z-[999] max-[600px]:bg-[#e7f9ff]">
          <div className="w-fit bg-[#e7f9ff] h-24 rounded-full flex items-center justify-evenly max-[600px]:w-full max-[600px]:rounded-none max-[600px]:pr-2 max-[600px]:h-fit max-[600px]:justify-between max-[600px]:px-5">
            <Link className="w-[15%] max-[600px]:w-[30%] center" to="/">
              <img
                className="w-full"
                src="/Images/home/CTSLogo.png"
                alt=""
              />
            </Link>
           
          
            <div className="center flex-col min-[600px]:hidden">
              <RiMenuLine onClick={toggleMenu} />
            </div>
          </div>
        </div>

      <div
        className={`w-full h-fit pb-10 fixed top-0 left-0 z-[9999] min-[600px]:hidden transition-transform duration-500 bg-white shadow-md rounded-md ${menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="w-full flex items-center justify-between p-5">
          <Link className="w-[15%] max-[600px]:w-[30%] center" to="/">
            <img
              className="w-full"
              src="/Images/home/CTSLogo.png"
              alt=""
            />
          </Link>
          <RiCloseLine className="scale-150" onClick={toggleMenu} />
        </div>
        <div className="pl-10 flex-col uppercase text-xl font-semibold flex gap-4">
          <a className="hover-link w-fit" href="/">Home</a>
          <Link className="hover-link w-fit" to="/ivy">
            ivy acclerator
          </Link>
          <Link className="hover-link w-fit" to="/portfolio">
            Portfolio
          </Link>
          <Link className="hover-link w-fit" to="/portfolio">
            Internship
          </Link>
          <Link className="hover-link w-fit" to={"/services"}>Services</Link>
          <Link className="hover-link w-fit" to={"/about-us"}>
            about us
          </Link>
          <div className="login-sigup flex gap-4">
            <Link to="/login" className="text-[#008BDC] p-2 px-4 text-xl font-medium rounded-md border-[#008BDC] border-2">
              <button>
                LOG IN
              </button>
            </Link>
            <Link to="/signup" className="">
              <button className="bg-[#008BDC] text-white rounded-md p-2 px-4 font-medium uppercase border-[#008BDC] border-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;