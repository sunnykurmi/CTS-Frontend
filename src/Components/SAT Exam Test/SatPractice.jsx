import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asynccurrentUser } from "../../store/Actions/userActions";

function SatPractice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    if (
      formData.email === user.email &&
      formData.code === user.satpracticetestcode
    ) {
      setTimeout(() => {
        setloading(true);
        localStorage.removeItem("LunchBreakStartTime");
        localStorage.removeItem("component");
        localStorage.removeItem("component1startTime");
        localStorage.removeItem("component3startTime");
        localStorage.removeItem("component6startTime");
        localStorage.removeItem("component8startTime");
        localStorage.removeItem("section1");
        localStorage.removeItem("section2");
        localStorage.removeItem("section3");
        localStorage.removeItem("section4");
        navigate("/satexam");
      }, 2000);
    } else {
      window.alert("Invalid Email or Code");
      setloading(false);
    }
  };
  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", {
        state: { from: `/satpractice/sat-verification-form` },
      });
      return;
    }
  };

  useEffect(() => {
    localStorage.removeItem("LunchBreakStartTime");
    localStorage.removeItem("component");
    localStorage.removeItem("component1startTime");
    localStorage.removeItem("component3startTime");
    localStorage.removeItem("component6startTime");
    localStorage.removeItem("component8startTime");
    localStorage.removeItem("section1");
    localStorage.removeItem("section2");
    localStorage.removeItem("section3");
    localStorage.removeItem("section4");
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    checkLoginHandler();
    dispatch(asynccurrentUser());
  }, []);

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center max-[600px]:hidden">
        <div className="w-[30%] p-14 h-fit shadow-xl flex flex-col items-center justify-center text-center max-[600px]:w-full max-[600px]:p-5 max-[600px]:shadow-none">
          <p className="font-medium text-3xl">Start SAT Exam 📖</p> <br />
          <p className="text-base font-medium text-gray-500">
            Please enter the email address and verification code that you
            recieved in your email
          </p>
          <form onSubmit={handleSubmit} className="w-full" action="">
            <input
              className="w-full  border-b-2 h-10 outline-none pl-2 mt-5 "
              placeholder="Enter Email Address"
              type="text"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              name="email"
              id=""
            />
            <input
              className="w-full  border-b-2 h-10 outline-none pl-2 mt-5 "
              placeholder="Enter SAT exam code"
              type="text"
              value={formData.code}
              onChange={(e) => handleChange(e)}
              name="code"
              id=""
            />
            <button className="rounded-full px-6 py-2 text-white bg-[#008BDC] mt-5">
              {loading ? (
                <div className="flex items-center">
                  <div className="loader mr-2"></div>
                  <p className="">Verifying...</p>
                </div>
              ) : (
                <p className="">Verify Code</p>
              )}
            </button>
          </form>
          <p className="mt-5 font-medium">
            Return to{" "}
            <u>
              {" "}
              <Link className="text-blue-500" to="/">
                {" "}
                Home{" "}
              </Link>{" "}
            </u>{" "}
            Page
          </p>
        </div>
      </div>
      <div className="w-full h-screen center gap-10 flex-col min-[600px]:hidden">
        <p className=" text-3xl font-semibold text-center">
          Site Not Support Mobile Devices Try to give exam from Laptop or PC{" "}
        </p>
        <Link to="/" className="text-blue-500 text-center">
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold">
          Home Page
        </button>
        </Link>
      </div>
    </div>
  );
}

export default SatPractice;
