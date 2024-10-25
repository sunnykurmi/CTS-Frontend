import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asynccurrentUser } from "./../../store/Actions/userActions";
import Headroom from "react-headroom";

const HomeNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  return (
    <>
      <Headroom>
        <div className="w-full h-fit py-5 flex items-center justify-center max-[600px]:h-16 bg-white z-[99999] max-[600px]:bg-[#FCEEC5]">
          <div className="w-fit bg-[#FCEEC5]  h-24 rounded-full flex items-center justify-evenly max-[600px]:w-full max-[600px]:rounded-none max-[600px]:pr-2 max-[600px]:h-fit max-[600px]:justify-between max-[600px]:px-5">
            <Link className=" w-[15%] center" to="/">
              <img
                className="w-full max-[600px]:w-[30%]"
                src="/Images/CTS   Logo.png"
                alt=""
              />
            </Link>
            <div className="w-fit gap-5 whitespace-nowrap h-full flex items-center justify-evenly font-bold text-[#393E46] max-[600px]:text-xs max-[600px]:w-fit max-[600px]:gap-2 max-[600px]:hidden">
              <a className="hover-link" href="/">
                HOME
              </a>
              <Link className="hover-link" to="/portfolio">
                PORTFOLIO
              </Link>
              <Link className="hover-link" to="/apply-internship-form">
                INTERNSHIP
              </Link>
              <Link className="hover-link" to="/services">
                SERVICES
              </Link>
              <Link className="hover-link" to="/abroadstudy">
                CTS ABROAD
              </Link>
              <a className="hover-link" href="#footer">
                ABOUT
              </a>
            </div>
            {isAuth ? (
              <div className="w-fit h-full flex items-center justify-evenly max-[600px]:hidden">
                <Link to="/home">
                  <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
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
                  <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
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

        <div
          className={`w-full h-fit pb-10 bg-white fixed top-0 left-0 z-[99] min-[600px]:hidden transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full flex items-center justify-end p-5">
            <RiCloseLine className="scale-150" onClick={toggleMenu} />
          </div>
          <div className="pr-5 flex-col uppercase text-2xl font-semibold center gap-3">
            <a href="/">Home</a>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/apply-internship-form">Internship</Link>
            <Link to="/abroadstudy">CTS Abroad</Link>
            <Link to="/services">Services</Link>
            <Link to="/login" className="">
              Login
            </Link>
            <Link to="/signup" className="">
              Register
            </Link>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default HomeNav;