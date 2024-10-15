import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asynccurrentUser } from "../../../../store/Actions/userActions";
import Loader from "../../../Loader/Loader";
import { RiArrowLeftSLine } from "@remixicon/react";
import { commonapppayment } from "../../../../store/Actions/servicesAction";

const CommonHome = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

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
      meeting:
        name === "commonappid" || name === "password"
          ? "NO"
          : prevInput.meeting,
    }));
  };

  const handleMeetingChange = (meeting) => () => {
    if (meeting === "YES") {
      setUserInput((prevInput) => ({
        ...prevInput,
        meeting,
        commonappid: "",
        password: "",
      }));
    } else {
      setUserInput((prevInput) => ({
        ...prevInput,
        meeting,
      }));
    }
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
    dispatch(asynccurrentUser());
  }, [dispatch]);

  useEffect(() => {
    const { commonappid, password, meeting } = userInput;
    if ((commonappid && password) || meeting === "YES") {
      setIsCheckboxEnabled(true);
    } else {
      setIsCheckboxEnabled(false);
      setIsCheckboxChecked(false); // Uncheck the checkbox if the fields are emptied
    }
  }, [userInput]);

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/services/essay-editing` } });
      return;
    }
  };

  const handleCheckboxClick = (event) => {
    const { commonappid, password, meeting } = userInput;
    if (
      !isCheckboxEnabled ||
      (meeting === "NO" && (!commonappid || !password))
    ) {
      event.preventDefault();
      alert(
        "Please provide your Common App ID and password or select Yes for the meeting."
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
      formData.append("commonappid", userInput.commonappid || null);
      formData.append("password", userInput.password || null);
      formData.append("amount", userInput.amount);
      formData.append("meeting", userInput.meeting);
      formData.append("userid", userInput.userid);
      setIsLoading(true);
      try {
        const order = await dispatch(commonapppayment(formData));
        const options = {
          key: key,
          amount: userInput.price * 100,
          currency: "INR",
          name: "Cross The Skylimits",
          description: "Payment for Common App Review",
          image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png", //loggedinuser img
          order_id: order.id,
          callback_url: `${
            import.meta.env.VITE_BACKEND_URL
          }/api/v1/services/commonapp-verify-payment`,
          prefill: {
            name: user.name, //loggedinuser name
            email: user.email, //loggedinuser email
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
            className="h-12 gap-3 rounded-full bg-[#F58612] text-white flex items-center justify-center p-2 font-bold"
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
          <button
            onClick={checkLoginHandler}
            className="bg-[#F58612] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
          >
            Review Your App Now
          </button>
        </div>
      </div>

      {isAuth && (
        <div className="steps-mom w-full overflow-hidden h-fit p-20 px-48 max-[600px]:p-0">
          <div className="step1-wrapper max-[600px]:w-full ">
            <h1 className="text-2xl font-semibold">STEP-1:</h1>
            <p className="ml-2">
              Fill the form below to get your Common App reviewed
            </p>

            <div className="flex items-center justify-between w-full p-10 px-20 max-[600px]:px-10 max-[600px]:flex-col max-[1180px]:px-10">
              <div className="flex flex-col gap-5 w-80">
                <div className="">
                  <h2 className="font-medium">Username/ID</h2>
                  <input
                    onChange={handleChange("commonappid")}
                    placeholder="Enter your Common App ID"
                    type="text"
                    name="commonappid"
                    id=""
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
                    id=""
                    value={userInput.password}
                  />
                </div>
              </div>

              <h1 className="text-xl font-medium mt-3 max-[600px]:mt-10 max-[600px]:text-3xl">
                OR
              </h1>

              <div className="flex flex-col gap-3 w-[40%] max-[600px]:w-full max-[600px]:mt-10">
                <p className="text-lg font-normal leading-6">
                  Would you prefer to schedule a meeting with us to discuss your
                  application details instead of sharing your password? Please
                  select Yes or No.
                </p>
                <div className="flex gap-5">
                  <button
                    className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.meeting === "YES"
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
                    }`}
                    onClick={handleMeetingChange("YES")}
                  >
                    YES
                  </button>
                  <button
                    className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${
                      userInput.meeting === "NO"
                        ? "bg-[#F58612] text-white"
                        : "border-[#F58612]"
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
                disabled={isLoading}
                onClick={submitHandler}
                className="bg-[#F58612] text-xl font-medium p-5 text-white py-2 rounded-md mt-5 shadow-lg"
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

export default CommonHome;