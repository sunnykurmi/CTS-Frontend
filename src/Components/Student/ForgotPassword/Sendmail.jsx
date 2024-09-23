import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendmail } from "./../../../store/Actions/userActions";

function Sendmail() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendmail({ email }, navigate));
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[30%] p-14 h-fit shadow-xl flex flex-col items-center justify-center text-center max-[600px]:w-full max-[600px]:p-5 max-[600px]:shadow-none">
          <p className="font-medium text-3xl">Reset Password 🔐</p> <br />
          <p className="text-base font-medium text-gray-500">
            Please enter the email address that you used to register, and we
            will send you a link to reset your password via Email
          </p>
          <form onSubmit={handleSubmit} className="w-full" action="">
            {error && error === "User not found with this email address" ? (
              <p className="text-red-600 text-sm font-medium">
                User not found with this email address
              </p>
            ) : null}
            <input
              className="w-full  border-b-2 h-10 outline-none pl-2 mt-5 "
              placeholder="Enter Email Address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id=""
            />
            <button className="rounded-full px-6 py-2 text-white bg-[#F58612] mt-5">
              {loading ? (
                <div className="flex items-center">
                  <div className="loader mr-2"></div>
                  <p className="">Sending...</p>
                </div>
              ) : (
                <p className="">Send Mail</p>
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

export default Sendmail;
