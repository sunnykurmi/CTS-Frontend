import { RiArrowLeftSLine } from "@remixicon/react";
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
    dispatch( asynccurrentUser());
  }, [])
  
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
    if (name && contact && email ) {
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
    if (!isCheckboxChecked) {
      alert("Please check the box to confirm your information.");
      return;
    }

    if (isCheckboxEnabled) {
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
    }
  };


  return (
    <div className="w-full p-5 flex flex-col ">
      <div className="w-full h-fit">
        <div className="w-44 absolute left-0 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={"/services/exam-prepration"}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className="text-[#0000009b]" />
            </div>
            <button className="mr-2">Go Back</button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center">SAT Practice Test <sub className="text-xs text-gray-700">(Beta version)</sub></h1>
      </div>

      <div className="w-[70vw] h-fit m-auto   rounded-xl p-5  max-[456px]:w-full max-[456px]:border-none max-[456px]:rounded-none max-[456px]:shadow-none max-[456px]:mt-1 sm:p-5">
        <ul className="list-disc list-inside text-md text-justify text-gray-800 mt-10 ml-15 px-20 text-xl text-center max-[600px]:px-5 max-[600px]:text-lg max-[600px]:text-start max-[600px]:leading-6">
          "Unlock your potential with our comprehensive SAT Practice Test
          Module. Choose from various practice tests that mirror the real SAT
          experience, covering sections like Math, Evidence-Based Reading, and
          Writing. Each test is designed to assess your understanding, pinpoint
          areas for improvement, and boost your confidence. Receive detailed
          feedback on scores, insights on question patterns, and step-by-step
          solutions to strengthen your problem-solving skills. With targeted
          practice and a clear track of your progress, our module supports your
          journey toward mastering the SAT and achieving your desired score."
        </ul>
      </div>

      <div className="w-[70vw] m-auto h-fit p-5 flex flex-col justify-center mt-10 ">
        <h1 className="text-4xl font-bold text-center">Get Started</h1>
        <p className="text-xl text-center mt-5 max-[600px]:text-lg max-[600px]:w-full max-[600px]:px-5">
          Fill the form details to get access to the SAT Practice Test Module
        </p>
       
      </div>
      <div className="w-full center">
        <button
          onClick={checkLoginHandler}
          className="bg-[#008BDC] text-white font-medium text-xl  px-8 py-2 rounded-md shadow-lg"
        >
          Get now
        </button>
      </div>
      {isAuth ? (
        <div className="steps-mom w-full overflow-hidden h-fit p-20 px-48 max-[600px]:p-0">
          <div className="step1-wrapper max-[600px]:w-full ">
            <h1 className="text-2xl font-semibold">STEP-1:</h1>
            <p className="ml-2">
              Fill the form below to enroll in SAT Practice Test and get
              started
            </p>

            <div className="flex items-center justify-between w-full p-10 px-20 max-[600px]:px-10 max-[600px]:flex-col max-[1180px]:px-10">
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
          </div>

          <div className="step2-wrapper max-[600px]:w-[95%]">
            <h1 className="text-2xl font-semibold">STEP-2:</h1>
            <p className="w-1/2 max-[1180px]:w-full ml-2">
              By checking this box, you agree to share your details securely. We
              prioritize your privacy and use advanced encryption to protect
              your data at all times.
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
              Complete your payment of ₹{userInput.amount} to access premium services and
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
      ) : (
        ""
      )}
    </div>
  );
};

export default SATForm;
