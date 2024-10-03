import {
  RiEyeCloseLine,
  RiEyeLine,
  RiKeyLine,
  RiMailLine,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { asyncsignin } from "../../store/Actions/userActions";
import Googlelogin from "../GoogleLogin/Googlelogin";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [studentFormData, setStudentFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleStudentChange = (e) => {
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value });
  };

  const signinStudent = async (event) => {
    event.preventDefault();
    const updatedFormData = {
      ...studentFormData,
      email: studentFormData.email.toLowerCase(),
    };
    dispatch(asyncsignin(updatedFormData));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
    setTimeout(() => {
      setShowPassword(false);
    }, 2000);
  };

  useEffect(() => {
    if (isAuth) {
      const from = location.state?.from || "/home";
      navigate(from);
    }
  }, [isAuth, navigate, location.state]);

  return (
    <>
      <div className="w-full h-[100vh] p-10 flex max-[600px]:flex-col max-[600px]:p-2">
        <div className="w-[70%] h-full flex flex-col items-center border-r-2 border-r-[#00000033] max-[600px]:w-full max-[600px]:border-0 max-[600px]:h-fit">
          <div className="w-full h-[20%] max-[600px]:h-fit ">
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
          <div className="w-full flex items-center justify-center h-[18vh]  max-[600px]:h-[15vh]">
            <img className="w-[20%] max-[600px]:hidden" src="/Images/logo gray.PNG" alt="" />
            <h1 className="font-semibold text-3xl max-[600px]:hidden  ">
              Login To Cross The <br /> Skylimits
            </h1>
            <h1 className="font-semibold text-3xl lg:hidden ">
              Login To CTS
            </h1>
          </div>
          <div className="w-full flex flex-col gap-5 items-center justify-center  ">
            <div className="flex flex-col w-full items-center">
              <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
                <input
                  value={studentFormData.email}
                  onChange={handleStudentChange}
                  className="h-full text-xl w-[85%] pr-6 lowercase outline-none flex items-center justify-center "
                  type="text"
                  autoComplete="off"
                  autoCapitalize="off"
                  placeholder="Enter Email Address"
                  name="email"
                  id=""
                />
                <RiMailLine className="text-[#0000006f]" />
              </div>
              <div className="w-[80%] ">
                {error && error === "User not found with this email address" ? (
                  <p className="text-red-600 text-sm">
                    User not found with this email address
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col w-full items-center">
              <div className="w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2 ">
                <input
                  className="h-full text-xl w-[85%] pr-6 outline-none flex items-center justify-center "
                  type={showPassword ? "text" : "password"}
                  autoCapitalize="off"
                  autoComplete="off"
                  value={studentFormData.password}
                  onChange={handleStudentChange}
                  placeholder="enter Password"
                  name="password"
                  id=""
                />
                <span
                  className="cursor-pointer text-[#0000006f]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                </span>
              </div>
              <div className="w-[80%] ">
                {error && error === "Incorrect password" ? (
                  <p className="text-red-600 text-sm">Incorrect password</p>
                ) : null}
                {error && error === "Illegal arguments: string, undefined" ? (
                  <p className="text-red-600 text-sm">Try Login with google</p>
                ) : null}
              </div>
              <div className="w-[90%] flex items-end justify-end">
                <Link
                  to="/sendmail"
                  className="text-[#ff0000] text-lg font-medium max-[600px]:text-sm max-[600px]:mt-2"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div
              onClick={signinStudent}
              className=" cursor-pointer w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[#ffae00]"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="loader mr-2"></div>
                  <p className="font-semibold text-lg">Loading...</p>
                </div>
              ) : (
                <p className="font-semibold text-lg"> Login with Email</p>
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
            <div className=" cursor-pointer  w-[90%] h-14 flex items-center justify-center overflow-hidden p-2  rounded-full border-2   bg-[white]">
              {/* <img
                className="w-[12%]"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              /> */}
              <p className="font-semibold text-lg">
                <Link to="/signup">Create new Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
