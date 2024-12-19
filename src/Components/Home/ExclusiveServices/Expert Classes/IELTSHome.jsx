import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ExamPayment } from "../../../../store/Actions/servicesAction";
import { getallexams } from "../../../../store/Actions/adminAction";
import { RiArrowLeftSLine, RiCloseFill } from "@remixicon/react";
import { asynccurrentUser } from "../../../../store/Actions/userActions";

const IELTSHome = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const examname = "IELTS";
  const [exams, setExams] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [hasTakenIELTS, setHasTakenIELTS] = useState(false);

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

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleIELTSChange = (value) => {
    setHasTakenIELTS(value === "yes");
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
      navigate("/login", { state: { from: `/services/exam-prepration/IELTS-prepration` } });
      return;
    }
  };

  const submitHandler = async () => {
    const { name, contact, score, email } = userInput;
    if (!name || !contact || !email || (hasTakenIELTS && !score)) {
      alert("Please fill in all required fields.");
      return;
    }

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
        description: "Payment for IELTS Expert Classes",
        image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png",
        order_id: order.id,
        callback_url: `${import.meta.env.VITE_BACKEND_URL
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
  };

  useEffect(() => {
    const fetchExams = async () => {
      const result = await dispatch(getallexams());
      setExams(result);
    };

    fetchExams();
  }, [dispatch]);

  return (
    <div className="w-full  flex flex-col ">
      <div className="w-full p-5 h-fit">
        <div className="w-44 absolute left-0 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={`/services/exam-prepration`}
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
          IELTS Expert Classes
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
          “The IELTS (International English Language Testing System) is a
          globally recognized exam for English proficiency, often required for
          studying, working, or migrating abroad. Our preparation program
          provides comprehensive support in the exam’s four key areas:
          Listening, Reading, Writing, and Speaking. With tailored instruction,
          timed practice tests, and feedback on spoken and written English, we
          help students and professionals boost their language proficiency.
          Whether aiming for academic or general IELTS, our program equips you
          with the tools and confidence to achieve your desired score, ensuring
          you're ready for global opportunities.”
        </ul>
        <div className="w-full center">
          {isAuth ? (
          <button
            onClick={() => setOpenPopup(true)}
            className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
          >
            Enroll Now
          </button>
        ) : (
          <button
            onClick={checkLoginHandler}
            className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
          >
            Please Login and Enroll Now
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
                    Fill your IELTS Details
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
                        value={userInput.contact}
                      />
                    </div>

                    <div className="">
                      <h2 className="font-medium">
                        Have you taken the IELTS exam before?
                      </h2>
                      <div className="flex gap-5">
                        <button
                          className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${hasTakenIELTS
                              ? "bg-[#008BDC] text-white"
                              : "border-[#008BDC]"
                            }`}
                          onClick={() => handleIELTSChange("yes")}
                        >
                          YES
                        </button>
                        <button
                          className={`w-20 h-10 border-2 rounded-lg px-2 flex items-center justify-center ${!hasTakenIELTS
                              ? "bg-[#008BDC] text-white"
                              : "border-[#008BDC]"
                            }`}
                          onClick={() => handleIELTSChange("no")}
                        >
                          NO
                        </button>
                      </div>
                    </div>

                    {hasTakenIELTS && (
                      <div className="mt-5">
                        <h2 className="font-medium">Enter your IELTS exam marks</h2>
                        <input
                          className="field rounded-md"
                          placeholder="Enter your IELTS marks"
                          onChange={handleChange("score")}
                          type="number"
                          name="score"
                          value={userInput.score}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="step3-wrapper mt-10">
                  <p className="ml-2 text-center">
                    Complete your payment of ₹{userInput.amount} to access premium services
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

export default IELTSHome;