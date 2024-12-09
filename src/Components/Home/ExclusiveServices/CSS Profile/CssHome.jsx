import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asynccurrentUser } from "../../../../store/Actions/userActions";
import Loader from "../../../Loader/Loader";
import { RiArrowLeftSLine } from "@remixicon/react";
import { cssProfilePayment } from "../../../../store/Actions/servicesAction";

const CssHome = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [userInput, setUserInput] = useState({
    cssprofileid: "",
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

  useEffect(() => {
    const { cssprofileid, password, meeting } = userInput;
    if ((cssprofileid && password) || meeting === "YES") {
      setIsCheckboxEnabled(true);
    } else {
      setIsCheckboxEnabled(false);
      setIsCheckboxChecked(false); // Uncheck the checkbox if the fields are emptied
    }
  }, [userInput]);

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/services/CSS-Profile` } });
      return;
    }
  };

  const handleCheckboxClick = (event) => {
    const { cssprofileid, password, meeting } = userInput;
    if (
      !isCheckboxEnabled ||
      (meeting === "NO" && (!cssprofileid || !password))
    ) {
      event.preventDefault();
      alert(
        "Please provide your CSS Profile ID and password or select Yes for the meeting."
      );
    } else {
      setIsCheckboxChecked(event.target.checked);
    }
  };

  const submitHandler = async () => {
    if (!isCheckboxChecked) {
      alert("Please check the box to confirm your information.");
      return;
    }

    if (isCheckboxEnabled) {
      const formData = new FormData();
      formData.append("cssprofileid", userInput.cssprofileid || null);
      formData.append("password", userInput.password || null);
      formData.append("amount", userInput.amount);
      formData.append("meeting", userInput.meeting);
      formData.append("userid", userInput.userid);
      setIsLoading(true);
      try {
        const order = await dispatch(cssProfilePayment(formData));
        const options = {
          key: key,
          amount: userInput.amount * 100,
          currency: "INR",
          name: "Cross The Skylimits",
          description: "Payment for CSS Profile Review",
          image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png",
          order_id: order.id,
          callback_url: `${
            import.meta.env.VITE_BACKEND_URL
          }/api/v1/services/cssprofile-verify-payment`,
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
    }
  };

  return (
    <div className="w-full p-5 flex flex-col ">
      <div className="w-full h-fit">
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
          CSS Profile Review
        </h1>
        <p className="w-[60%] shadow-lg max-[600px]:w-full overflow-hidden mt-5 m-auto text-zinc-500 ">
          <iframe
            className="w-full h-[50vh] max-[600px]:h-[30vh] rounded-lg"
            src="https://www.youtube.com/embed/P5RyUoJ1joc"
            title="CSS Profile Support"
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
          <button
            onClick={checkLoginHandler}
            className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
          >
            Review CSS-Profile Now
          </button>
        </div>
      </div>

      {isAuth && (
        <div className="steps-mom w-full overflow-hidden h-fit p-20 px-48 max-[600px]:p-0">
          <div className="step1-wrapper max-[600px]:w-full ">
            <h1 className="text-2xl font-semibold">STEP-1:</h1>
            <p className="ml-2">
              Fill the form below to get your CSS Profile reviewed
            </p>

            <div className="flex flex-col justify-between w-full p-10 px-20 max-[600px]:px-10 max-[600px]:flex-col max-[1180px]:px-10">
              <div className="flex flex-col gap-5 w-80">
                <div className="">
                  <h2 className="font-medium">Username/ID</h2>
                  <input
                    onChange={handleChange("cssprofileid")}
                    placeholder="Enter your CSS Profile ID"
                    type="text"
                    name="cssprofileid"
                    id=""
                    className="field rounded-md"
                    value={userInput.cssprofileid}
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
                    id=""
                    value={userInput.password}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 w-[40%] max-[600px]:w-full mt-10">
                <p className="text-lg font-normal leading-6">
                  Would you prefer to schedule a meeting with us to discuss your
                  application details? Please select Yes or No.
                </p>
                <div className="flex gap-5">
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
            </div>
          </div>

          <div className="step2-wrapper max-[600px]:w-[95%]">
            <h1 className="text-2xl font-semibold">STEP-2:</h1>
            <p className="w-1/2 max-[1180px]:w-full ml-2">
              By checking this box, you agree to share your credentials
              securely. We prioritize your privacy and use advanced encryption
              to protect your data at all times.
            </p>
            <p className="px-20 pt-8 items-center flex text-xl max-[600px]:text-lg max-[600px]:px-0">
              <input
                type="checkbox"
                disabled={!isCheckboxEnabled}
                className="mr-2 custom-checkbox max-[600px]:w-20 max-[600px]:h-10"
                onClick={handleCheckboxClick}
                checked={isCheckboxChecked}
                onChange={() => {}}
              />
              I confirm that the information provided is accurate, and I agree
              to the terms and conditions.
            </p>
          </div>

          <div className="step3-wrapper mt-10">
            <h1 className="text-2xl font-semibold">STEP-3:</h1>
            <p className="ml-2">
              Complete your payment of ₹2999 to access premium services and
              unlock exclusive features. Click the button to proceed.
            </p>
            <div className="center">
              <button
                disabled={isLoading || !isCheckboxChecked}
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
      )}
    </div>
  );
};

export default CssHome;
