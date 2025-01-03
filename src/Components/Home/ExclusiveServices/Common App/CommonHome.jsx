import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine, RiCloseFill } from "@remixicon/react";
import { commonapppayment } from "../../../../store/Actions/servicesAction";

const CommonHome = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const [userInput, setUserInput] = useState({
    commonappid: "",
    password: "",
    meeting: "",
    userid: "",
    amount: "2999",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleMeetingChange = (meeting) => () => {
    setUserInput((prevInput) => ({
      ...prevInput,
      meeting,
    }));
  };

  useEffect(() => {
    if (user) {
      setUserInput((prevInput) => ({
        ...prevInput,
        userid: user._id,
      }));
    }
  }, [user]);

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/services/essay-editing` } });
      return;
    }
  };

  const submitHandler = async () => {
    const { commonappid, password, meeting } = userInput;
    if (!commonappid || !password || !meeting) {
      alert("Please fill in your Common App ID, password, and select Yes or No for the meeting.");
      return;
    }

    const formData = new FormData();
    formData.append("commonappid", commonappid);
    formData.append("password", password);
    formData.append("amount", userInput.amount);
    formData.append("meeting", meeting);
    formData.append("userid", userInput.userid);
    setIsLoading(true);
    try {
      const order = await dispatch(commonapppayment(formData));
      const options = {
        key: key,
        amount: userInput.amount * 100,
        currency: "INR",
        name: "Cross The Skylimits",
        description: "Payment for Common App Review",
        image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png",
        order_id: order.id,
        callback_url: `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/services/commonapp-verify-payment`,
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
    <div className="w-full flex flex-col ">
      <div className="w-full h-fit p-5">
        <div className="w-44 absolute left-0 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={`/services`}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className="text-[#0000009b]" />
            </div>
            <button className="mr-2">Go Back</button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center">Exclusive Services</h1>
      </div>

      <div className="w-[70vw] h-fit m-auto mt-10 shadow-lg rounded-xl p-5 border-2 max-[456px]:w-full max-[456px]:border-none max-[456px]:rounded-none max-[456px]:shadow-none max-[456px]:mt-1 sm:p-5">
        <h1 className="text-4xl mt-7 ml-10 max-[600px]:ml-2 text-center max-[600px]:text-3xl">
          Common App Review
        </h1>
        <p className="w-[60%] shadow-lg max-[600px]:w-full overflow-hidden mt-5 m-auto text-zinc-500 ">
          <iframe
            className="w-full h-[50vh] max-[600px]:h-[30vh] rounded-lg"
            src="https://www.youtube.com/embed/j0akw0Jc6RM"
            title="Review your common ￼App"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </p>
        <ul className="list-disc list-inside text-md text-gray-800 mt-10 ml-15 px-20 text-xl text-center max-[600px]:px-5 max-[600px]:text-lg max-[600px]:text-start max-[600px]:leading-6">
          “Make Your Common App Error-Free and Stand Out! According to the
          survey, 80% of students making mistakes—some small, some serious—don’t
          let yours hold you back. Enroll in our Common App Review Service to
          have your profile thoroughly analyzed by experts. We’ll help you
          polish your activities, perfect each section, and boost your chances
          of admission. Ready to submit your strongest application? Let’s get
          started today!”
        </ul>
        <div className="w-full center">
          {isAuth ? (
            <button
              onClick={() => setOpenPopup(true)}
              className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
            >
              Review Your App Now
            </button>
       ) : ( 
            <button
              onClick={checkLoginHandler}
              className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
            >
              Review Your App Now
            </button>
        )} 
        </div>
      </div>

      {openPopup && (
        <div className="fixed top-0 w-full h-screen flex items-center justify-center bg-[#74747443]">
          <div className="w-[60%] py-5 bg-white drop-shadow-2xl">
            <div
              onClick={() => setOpenPopup(false)}
              className="cursor-pointer absolute right-5 top-5"
            >
              <RiCloseFill />
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="center">
                  <p className="font-medium text-2xl mt-5">
                    Fill your Common App Details
                  </p>
                </div>
                <div className="center mt-5">
                  <div className="flex flex-col gap-5 w-80">
                    <div className="">
                      <h2 className="font-medium">Username/ID</h2>
                      <input
                        onChange={handleChange("commonappid")}
                        placeholder="Enter your Common App ID"
                        type="text"
                        name="commonappid"
                        className="field rounded-md"
                        value={userInput.commonappid}
                      />
                    </div>

                    <div className="">
                      <h2 className="font-medium">Password</h2>
                      <input
                        className="field rounded-md"
                        placeholder="Enter your password"
                        onChange={handleChange("password")}
                        type="text"
                        name="password"
                        value={userInput.password}
                      />
                    </div>
                  </div>
                </div>

                <h1 className="text-xl font-medium mt-3 text-center">Or</h1>

                <div className="flex justify-center flex-col gap-3 w-[50%] max-[600px]:w-full max-[600px]:mt-10">
                  <p className="text-lg font-normal leading-6 text-justify">
                    Would you prefer to schedule a meeting with us to discuss
                    your application details instead of sharing your password?
                    Please select Yes or No.
                  </p>
                  <div className="flex justify-center gap-5">
                    <button
                      className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.meeting === "YES"
                          ? "bg-[#008BDC] text-white"
                          : "border-[#008BDC]"
                      }`}
                      onClick={handleMeetingChange("YES")}
                    >
                      YES
                    </button>
                    <button
                      className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${
                        userInput.meeting === "NO"
                          ? "bg-[#008BDC] text-white"
                          : "border-[#008BDC]"
                      }`}
                      onClick={handleMeetingChange("NO")}
                    >
                      NO
                    </button>
                  </div>
                </div>

                <div className="step3-wrapper mt-10">
                  <p className="ml-2  text-center">
                    Complete your payment of ₹2999 to access premium services
                    and unlock exclusive features. Click the button to proceed.
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
  );
};

export default CommonHome;