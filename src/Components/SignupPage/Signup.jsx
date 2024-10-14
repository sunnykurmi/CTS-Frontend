import {
  RiKeyLine,
  RiMailLine,
  RiPhoneLine,
  RiUserLine,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignup } from "../../store/Actions/userActions";
import Googlelogin from "../GoogleLogin/Googlelogin";

export default function Signup() {
  const navigate = useNavigate();
  const { isAuth, error , loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const signupuser = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email  || !formData.password) {
      alert("All fields are required");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Enter a proper email address");
      return;
    }
    if (formData.name.length < 2) {
      alert("Name should be at least 2 characters long");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password should be at least 6 characters long");
      return;
    }
    const updatedFormData = {
      ...formData,
      email: formData.email.toLowerCase(),
    };
    dispatch(asyncsignup(updatedFormData));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);
  return (
    <>
      <div className="w-full h-[100vh] p-10 flex max-[600px]:flex-col max-[600px]:p-2">
        <div className="w-[70%] h-full flex flex-col items-center border-r-2 border-r-[#00000033] max-[600px]:w-full max-[600px]:border-0 max-[600px]:h-fit ">
          <div className="w-full h-[20%] max-[600px]:h-fit  ">
            <img className="w-[30%] max-[600px]:w-[40%]" src="/Images/CTS   Logo.png" alt="" />
          </div>
          <div className="w-full flex items-center justify-center h-[80%] max-[600px]:hidden ">
            <img
              src="/Images/illustration.gif"
              alt=""
            />
          </div>
        </div>
        <div className="w-[30%] h-full max-[600px]:w-full">
          <div className="w-full flex items-center justify-center h-[16vh] max-[600px]:h-[15vh]">
            <img className="w-[20%] max-[600px]:hidden" src="/Images/logo gray.PNG" alt="" />
            <h1 className="font-semibold text-3xl max-[600px]:hidden ">
              Signup To Cross The <br /> Skylimits
            </h1>
            <h1 className=" font-semibold text-3xl lg:hidden  ">
              Signup To Join CTS
            </h1>
          </div>
          <div className="w-full  flex flex-col gap-5 items-center justify-center  ">
            <div className="w-full flex flex-col items-center">
              <div className="w-[80%] ">
                {error && error === "User details required" ? (
                  <p className="text-red-600 text-sm">User details required</p>
                ) : null}
                {error &&
                error === "User with this email or contact already exists" ? (
                  <p className="text-red-600 text-sm">
                    User with this email or contact already exists
                  </p>
                ) : null}
              </div>
              <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  className="h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center "
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Email Address"
                  name="email"
                  id=""
                />
                <RiMailLine className="text-[#0000006f]" />
              </div>
            </div>
            <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
              <input
                className="h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center "
                type="text"
                value={formData.name}
                autoComplete="off"

                onChange={handleChange}
                placeholder="Enter Name"
                name="name"
                id=""
              />
              <RiUserLine className="text-[#0000006f]" />
            </div>
            {/* <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
              <input
                className="h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center "
                type="number"
                value={formData.contact}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Enter contact"
                name="contact"
                id=""
              />
              <RiPhoneLine className="text-[#0000006f]" />
            </div> */}
            <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
              <input
                className="h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center "
                type="text"
                placeholder="Enter Password"
                autoComplete="off"

                value={formData.password}
                onChange={handleChange}
                name="password"
                id=""
              />
              <RiKeyLine className="text-[#0000006f]" />
            </div>
            <div
              onClick={signupuser}
              className=" cursor-pointer  w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[#ffae00]"
            >
               {loading ? (
        <div className="flex items-center">
          <div className="loader mr-2"></div>
          <p className="font-semibold text-lg">Loading...</p>
        </div>
      ) : (
        <p className="font-semibold text-lg">Create Account</p>
      )}
             
            </div>
            <div className="cursor-pointer w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[white]">
              <Googlelogin />
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[90%] flex items-center justify-between">
                <div className="w-[42%] h-[2px] bg-[#0000008b]"></div>
                <p className="font-semibold">OR</p>
                <div className="w-[42%] h-[2px] bg-[#0000008b]"></div>
              </div>
            </div>
            <div className="cursor-pointer w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[white]">
              {/* <img
                className="w-[12%]"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              /> */}{" "}
              <p className="font-semibold text-lg">
                <Link to="/login">Login with Email</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
