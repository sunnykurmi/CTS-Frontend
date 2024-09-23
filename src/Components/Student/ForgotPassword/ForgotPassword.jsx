import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { forgotpassword } from "./../../../store/Actions/userActions";
import { RiEyeCloseLine, RiEyeLine } from "@remixicon/react";

function ForgotPassword() {
  const [password, setPassword] = useState("");
  const {id}= useParams();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error2, setError2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading,error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError2("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError2("Passwords does not match");
      return;
    }
    setError2("");
    dispatch(forgotpassword({ id, password }, navigate));
  };

  const togglePasswordVisibility = (setter) => {
    setter((prev) => !prev);
    setTimeout(() => {
      setter(false);
    }, 2000);
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[30%] p-14 h-fit shadow-xl flex flex-col items-center justify-center text-center max-[600px]:w-full max-[600px]:p-5 max-[600px]:shadow-none">
          <p className="font-medium text-3xl">Change Password 🔐</p> <br />
          <p className="text-base font-medium text-gray-500">
            Please Enter Your New Password
          </p>
          <form onSubmit={handleSubmit} className="w-full" action="">
            {error2 && <p className="text-red-500">{error2}</p>}
            {error && error === "Invalid Reset Password Link! Please try again" ? (
              <p className="text-red-600 text-sm font-medium">
                Link Expired or Invalid <span className="text-blue-500"> <Link to="/sendmail" >  Send Again </Link> </span>
              </p>
            ) : null}
            <div className="relative w-full">
              <input
                className="w-full border-b-2 h-10 outline-none pl-2 mt-5"
                placeholder="Enter New Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              <span
                className="absolute right-2 top-7 cursor-pointer"
                onClick={() => togglePasswordVisibility(setShowPassword)}
              >
                {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
              </span>
            </div>
            <div className="relative w-full">
              <input
                className="w-full border-b-2 h-10 outline-none pl-2 mt-5"
                placeholder="Confirm New Password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
              />
              <span
                className="absolute right-2 top-7 cursor-pointer"
                onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
              >
                {showConfirmPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
              </span>
            </div>
            <button className="rounded-full px-6 py-2 text-white bg-[#F58612] mt-5">
              {loading ? (
                <div className="flex items-center">
                  <div className="loader mr-2"></div>
                  <p className="">loading...</p>
                </div>
              ) : (
                <p className="">Change Password</p>
              )}
            </button>
          </form>
          <p className="mt-5 font-medium">
            Return to{" "}
            <u>
              {" "}
              <Link className="text-blue-500" to="/login">
                {" "}
                Login{" "}
              </Link>{" "}
            </u>{" "}
            Page
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;