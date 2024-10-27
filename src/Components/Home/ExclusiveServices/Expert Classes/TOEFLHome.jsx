import { RiArrowLeftSLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getallexams } from "../../../../store/Actions/adminAction";
import { ExamPayment } from "../../../../store/Actions/servicesAction";

const TOEFLHome = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const examname = "TOEFL";
  const [exams, setExams] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [hasTakenTOEFL, setHasTakenTOEFL] = useState(false);

  const filterexam = exams.filter((exam) => exam.examname === examname);

  const [userInput, setUserInput] = useState({
    name: "",
    contact: "",
    score: "",
    email: "",
    exam_type: "",
    userid: "",
    amount: "",
  });

  useEffect(() => {
    if (filterexam[0]) {
      setUserInput((prevInput) => ({
        ...prevInput,
        exam_type: filterexam[0].examname,
        amount: filterexam[0].amount,
      }));
    }
  }, [exams]);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleTOEFLChange = (value) => {
    setHasTakenTOEFL(value === "yes");
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
    const { name, contact, score, email } = userInput;
    if (
      name &&
      contact &&
      email &&
      (!hasTakenTOEFL || (hasTakenTOEFL && score))
    ) {
      setIsCheckboxEnabled(true);
    } else {
      setIsCheckboxEnabled(false);
      setIsCheckboxChecked(false);
    }
  }, [userInput, hasTakenTOEFL]);

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/services/TOEFL-prepration` } });
      return;
    }
  };

  const handleCheckboxClick = (event) => {
    const { name, contact, score, email } = userInput;
    if (!isCheckboxEnabled || (hasTakenTOEFL && !score)) {
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
      formData.append("score", userInput.score || null);
      formData.append("email", userInput.email || null);
      formData.append("exam_type", userInput.exam_type || null);
      formData.append("amount", userInput.amount);
      formData.append("userid", userInput.userid);
      setIsLoading(true);
      try {
        const order = await dispatch(ExamPayment(formData));
        const options = {
          key: key,
          amount: userInput.amount * 100,
          currency: "INR",
          name: "Cross The Skylimits",
          description: "Payment for TOEFL Expert Classes",
          image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png",
          order_id: order.id,
          callback_url: `${
            import.meta.env.VITE_BACKEND_URL
          }/api/v1/services/examprep-verify-payment`,
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

  useEffect(() => {
    const fetchExams = async () => {
      const result = await dispatch(getallexams());
      setExams(result);
    };

    fetchExams();
  }, [dispatch]);

  return (
    <div className="w-full p-5 flex flex-col ">
      <div className="w-full h-fit">
        <div className="w-44 absolute left-0 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={-1}
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
          TOEFL Expert Classes
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
          “The TOEFL (Test of English as a Foreign Language) is a critical
          assessment for students planning to study in English-speaking
          institutions. Our TOEFL preparation program is designed to enhance
          your abilities in Reading, Listening, Speaking, and Writing, focusing
          on the academic English skills tested in the exam. With structured
          lessons, interactive exercises, and expert feedback, we provide a
          supportive environment to help you build confidence and fluency. By
          simulating real exam conditions, our program aims to improve your
          accuracy and timing, ensuring that you achieve a competitive score for
          entry into top institutions worldwide.”
        </ul>
      </div>

      <div className="w-[70vw] m-auto h-fit p-5 flex flex-col justify-center mt-10 ">
        <h1 className="text-4xl font-bold text-center">Get Started</h1>
        <p className="text-xl text-center mt-5 max-[600px]:text-lg max-[600px]:w-full max-[600px]:px-5">
          Enroll in TOEFL Expert Classes and get started with your TOEFL exam
          preparation.
        </p>
        <h2 className="text-3xl font-bold mt-5">
          New Batch Starting from <span>-</span>
          {filterexam[0]
            ? new Date(filterexam[0].from).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "TBD"}
        </h2>
      </div>
      <div className="w-full center">
        <button
          onClick={checkLoginHandler}
          className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
        >
          Book
        </button>
      </div>
      {/* {isAuth ? ( */}
      <div className="steps-mom w-full overflow-hidden h-fit p-20 px-48 max-[600px]:p-0">
        <div className="step1-wrapper max-[600px]:w-full ">
          <h1 className="text-2xl font-semibold">STEP-1:</h1>
          <p className="ml-2">
            Fill the form below to enroll in TOEFL Expert Classes and get
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

              <div className="">
                <h2 className="font-medium">
                  Have you taken the TOEFL exam before?
                </h2>
                <div className="flex gap-5">
                  <button
                    className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${
                      hasTakenTOEFL
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
                    }`}
                    onClick={() => handleTOEFLChange("yes")}
                  >
                    YES
                  </button>
                  <button
                    className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${
                      !hasTakenTOEFL
                        ? "bg-[#008BDC] text-white"
                        : "border-[#008BDC]"
                    }`}
                    onClick={() => handleTOEFLChange("no")}
                  >
                    NO
                  </button>
                </div>
              </div>

              {hasTakenTOEFL && (
                <div className="mt-5">
                  <h2 className="font-medium">Enter your TOEFL exam marks</h2>
                  <input
                    className="field rounded-md"
                    placeholder="Enter your TOEFL marks"
                    onChange={handleChange("score")}
                    type="number"
                    name="score"
                    id=""
                    value={userInput.score}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="step2-wrapper max-[600px]:w-[95%]">
          <h1 className="text-2xl font-semibold">STEP-2:</h1>
          <p className="w-1/2 max-[1180px]:w-full ml-2">
            By checking this box, you agree to share your details securely. We
            prioritize your privacy and use advanced encryption to protect your
            data at all times.
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
            I confirm that the information provided is accurate, and I agree to
            the terms and conditions.
          </p>
        </div>

        <div className="step3-wrapper mt-10">
          <h1 className="text-2xl font-semibold">STEP-3:</h1>
          <p className="ml-2">
            Complete your payment of ₹5999 to access premium services and unlock
            exclusive features. Click the button to proceed.
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
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default TOEFLHome;
