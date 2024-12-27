import { RiArrowLeftSLine, RiCloseFill } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getallexams } from "../../store/Actions/adminAction";
import { ExamPayment } from "../../store/Actions/servicesAction";
import { SatPracticePayment } from "../../store/Actions/satpracticeAction";
import { asynccurrentUser } from "../../store/Actions/userActions";

const SATForm = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const [userInput, setUserInput] = useState({
    name: "",
    contact: "",
    email: "",
    userid: "",
    amount: "9",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, []);

  useEffect(() => {
    if (user) {
      setUserInput((prevInput) => ({
        ...prevInput,
        userid: user._id,
      }));
    }
  }, [user]);

  useEffect(() => {
    const { name, contact, email } = userInput;
    if (name && contact && email) {
      setIsCheckboxEnabled(true);
    } else {
      setIsCheckboxEnabled(false);
      setIsCheckboxChecked(false);
    }
  }, [userInput]);

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", {
        state: { from: `/satpractice` },
      });
      return;
    }
  };

  const handleCheckboxClick = (event) => {
    const { name, contact, email } = userInput;
    if (!isCheckboxEnabled) {
      event.preventDefault();
      alert("Please fill in all required fields before checking the box.");
    } else {
      setIsCheckboxChecked(event.target.checked);
    }
  };

  const submitHandler = async () => {
    const { name, contact, email, userid } = userInput;
    if (!name || !contact || !email || !userid) {
      alert("Please fill all Form Details.");
      return;
    }

    const formData = new FormData();
    formData.append("name", userInput.name || null);
    formData.append("contact", userInput.contact || null);
    formData.append("email", userInput.email || null);
    formData.append("amount", userInput.amount);
    formData.append("userid", userInput.userid);
    setIsLoading(true);
    try {
      const order = await dispatch(SatPracticePayment(formData));
      const options = {
        key: key,
        amount: userInput.amount * 100,
        currency: "INR",
        name: "Cross The Skylimits",
        description: "Payment for SAT Practice Test",
        image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png",
        order_id: order.id,
        callback_url: `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/satpractice/sat-practice-verify-payment`,
        prefill: {
          name: user.name,
          email: user.email,
        },
        notes: {
          address: "CTS Bhopal",
        },
        theme: {
          color: "#121212",
        },
        method: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: false,
          paylater: false,
          banktransfer: true,
          qr: false,
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex max-[600px]:flex-col-reverse max-[600px]:h-auto ">
        <div className=" min-[600px]:hidden   absolute left-0 z-[99] top-2 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full  text-white flex items-center justify-center p-2 font-bold"
            to={"/services/exam-prepration"}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-[#008BDC]">
              <RiArrowLeftSLine className="text-[#ffffff]" />
            </div>
          </Link>
        </div>
        <div className=" max-[600px]:hidden  w-44  absolute left-0 z-[99] top-5 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full bg-white text-white flex items-center justify-center p-2 font-bold"
            to={"/services/exam-prepration"}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-[#008BDC]">
              <RiArrowLeftSLine className="text-[#ffffff]" />
            </div>
            <button className="mr-2 text-[#008BDC]">Go Back</button>
          </Link>
        </div>
        <div className="w-[35%]  center relative h-full bg-[#008BDC] max-[600px]:w-full max-[600px]:h-[30%] ">
          <img
            className="absolute w-[10%] opacity-60 right-14 top-14"
            src="/Images/SAT Test/airplane.png"
            alt=""
          />
          <img
            className="absolute w-[10%] opacity-60 right-44 top-32"
            src="/Images/SAT Test/airplane.png"
            alt=""
          />
          <img
            className="absolute w-[10%] opacity-60 right-14 top-44"
            src="/Images/SAT Test/airplane.png"
            alt=""
          />
          <div className="w-full h-[40vh] flex justify-center flex-col  px-10">
            <p className="text-2xl text-white mb-10">
              "Prepare for the SAT with confidence!"
            </p>
            <p className="text-white">
              Prepare effectively with realistic practice tests, detailed
              feedback, and proven strategies to improve your performance and
              boost your confidence for SAT success.
            </p>
          </div>
          <img
            className="absolute w-[10%] opacity-50 left-14  grayscale-[1]   bottom-14"
            src="/Images/SAT Test/star.png"
            alt=""
          />
          <img
            className="absolute w-[10%] opacity-50 left-44  grayscale-[1]   bottom-32"
            src="/Images/SAT Test/star.png"
            alt=""
          />
          <img
            className="absolute w-[10%] opacity-50 left-14  grayscale-[1]   bottom-44"
            src="/Images/SAT Test/star.png"
            alt=""
          />
        </div>
        <div className="w-[65%] h-full flex flex-col items-center justify-evenly max-[600px]:w-full max-[600px]:gap-3">
          <div className="center max-[600px]:w-full max-[600px]:mt-3 ">
            <p className="text-3xl font-bold">
              SAT Practice Test <sub className="text-xs">(Beta)</sub>
            </p>
          </div>
          <div className="center">
            <div className="max-[600px]:scale-[.7]">
              <img src="/Images/SAT Test/Sat1600.png" alt="" />
            </div>
          </div>
          <div className="center">
            <p className="w-[70%] text-xl text-justify max-[600px]:w-[90%] max-[600px]:text-base">
              "Unlock your potential with our comprehensive SAT Practice Test
              Module. Choose from various practice tests that mirror the real
              SAT experience, covering sections Math, Evidence -Based Reading,
              and Writing Each test is designed to assess your understanding,
              pinpoint areas for improvement, and boost your confidence Receive
              detailed feedback on scores, insights on question patterns, and
              step-by-step solutions to strengthen your problem-solving skills.
              With targeted practice and a clear track of your progress, our
              module supports your journey toward mastering the SAT and
              achieving your desired score."
            </p>
          </div>
          <div className="center">
            <p className="text-2xl font-semibold text-[#008BDC]">Get Started</p>
          </div>
          <div className="center">
            <p className="text-xl text-center font-medium max-[600px]:text-base">
              Fill the form details to get access to the <br /> SAT Practice
              Test Module
            </p>
          </div>
          <div className="w-full center max-[600px]:mb-5">
            {user && user.satpracticetestcode ? (
              <Link to="/satpractice/sat-verification-form">
                <button className="bg-[#008BDC] text-white font-medium text-xl  px-8 py-2 rounded-md shadow-lg">
                  Start Test
                </button>
              </Link>
            ) : isAuth ? (
              <button
                onClick={() => setOpenPopup(true)}
                className="bg-[#008BDC] text-white font-medium text-xl  px-8 py-2 rounded-md shadow-lg"
              >
                Get now
              </button>
            ) : (
              <button
                onClick={checkLoginHandler}
                className="bg-[#008BDC] text-white font-medium text-xl  px-8 py-2 rounded-md shadow-lg"
              >
                Login now to get started
              </button>
            )}
          </div>
        </div>
        {openPopup && (
          <div className="fixed top-0 w-full h-screen flex items-center justify-center bg-[#74747443]">
            <div className="w-[60%] py-5 bg-white drop-shadow-2xl max-[600px]:w-full">
              <div
                onClick={() => setOpenPopup(false)}
                className="cursor-pointer absolute right-5 top-5"
              >
                <RiCloseFill />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="center">
                    <p className="font-medium text-2xl p-5">
                      Fill the form below to enroll in SAT Practice Test and get
                      started
                    </p>
                  </div>
                  <div className="center mt-5">
                    <div className="flex flex-col gap-5 w-80">
                      <div className="">
                        <h2 className="font-medium">Your Full Name</h2>
                        <input
                          onChange={handleChange("name")}
                          placeholder="Enter your Name"
                          type="text"
                          name="name"
                          id=""
                          className="field rounded-md"
                          value={userInput.name}
                        />
                      </div>
                      <div className="">
                        <h2 className="font-medium">Your Email Address</h2>
                        <input
                          onChange={handleChange("email")}
                          placeholder="Enter your Email"
                          type="text"
                          name="email"
                          id=""
                          className="field rounded-md"
                          value={userInput.email}
                        />
                      </div>

                      <div className="">
                        <h2 className="font-medium">WhatsApp No.</h2>
                        <input
                          className="field rounded-md"
                          placeholder="Enter your Number"
                          onChange={handleChange("contact")}
                          type="number"
                          name="contact"
                          id=""
                          value={userInput.contact}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="step3-wrapper mt-10">
                    <p className="ml-2  text-center">
                      Complete your payment of ₹{userInput.amount} to access
                      premium services and unlock exclusive features. Click the
                      button to proceed.
                    </p>
                    <div className="center">
                      <button
                        onClick={submitHandler}
                        className="bg-[#008BDC] text-xl font-medium p-5 text-white py-2 rounded-md mt-5 shadow-lg"
                      >
                        {isLoading ? (
                          <div className="center gap-3">
                            <div className="loader"></div>
                            Please Wait...
                          </div>
                        ) : (
                          ` Pay ₹${userInput.amount}`
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SATForm;
