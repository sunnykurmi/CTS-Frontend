import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiCloseFill,
  RiFileAddFill,
} from "@remixicon/react";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { essaypayment } from "../../../../store/Actions/servicesAction";
import { asynccurrentUser } from "../../../../store/Actions/userActions";
import Loader from "../../../Loader/Loader";

const EssayHome = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);
  const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [openpopup, setopenpopup] = useState(false);
  const fileInputRef = useRef(null);

  const [userInput, setUserInput] = useState({
    essaytype: "",
    instructions: "no instructions",
    essaytext: "",
    price: "",
    essayfile: null,
    id: "", // Use logged-in user's ID
  });
  useEffect(() => {
    if (user) {
      setUserInput((prevInput) => ({
        ...prevInput,
        id: user._id, // Update with user ID once user data is available
      }));
    }
  }, [user]);

  const classes = [
    { essaytype: "Commmon App Personal Esssay", price: 989 },
    { essaytype: "Supplymentary Essay", price: 899 },
    { essaytype: "Why This University Essay", price: 899 },
    { essaytype: "Financial Aid Essay", price: 599 },
    { essaytype: "Other Essay", price: 899 },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (selectedOption) => {
    setUserInput({
      ...userInput,
      essaytype: selectedOption.essaytype,
      price: selectedOption.price,
    });
    setDropdownOpen(false);
  };

  const handleTextareaChange = (e) => {
    setUserInput({ ...userInput, essaytext: e.target.value });
  };

  const handleInstructionsChange = (e) => {
    setUserInput({ ...userInput, instructions: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1048576) {
      // 1MB file size limit
      alert("File size exceeds 1MB");
    } else {
      setUserInput((prevState) => ({
        ...prevState,
        essayfile: file,
        essaytext: "", // Clear textarea if file is selected
      }));
      setSelectedFileName(file ? file.name : "");
      setIsTextareaDisabled(!!file); // Disable textarea if file is selected, enable if not
    }
  };

  const handleFileCancel = () => {
    setUserInput({ ...userInput, essayfile: null });
    setSelectedFileName("");
    setIsTextareaDisabled(false); // Enable textarea when file is canceled
  };

  // Convert essaytext text into a file
  const convertTextToFile = (text) => {
    const blob = new Blob([text], { type: "text/plain" });
    return new File([blob], "essaytext.txt", { type: "text/plain" });
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000);
    setHoverTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/services/essay-editing` } });
      return;
    }
  };

  const submithandler = async () => {
    if (
      !userInput.essaytype ||
      !userInput.price ||
      !userInput.id
    ) {
      alert("Please fill in all required fields. or login again");
      console.log(userInput);
      return;
    }

    // Check for either essayfile or essaytext, but not both
    if (
      (userInput.essayfile && userInput.essaytext) ||
      (!userInput.essayfile && !userInput.essaytext)
    ) {
      alert("Please provide either an essay file or essay text, but not both.");
      return;
    }

    // console.log(userInput);
    const formData = new FormData();
    formData.append("essaytype", userInput.essaytype);
    formData.append("instructions", userInput.instructions);
    formData.append("price", userInput.price);
    formData.append("id", userInput.id);

    // Check if a file has been uploaded; if not, convert essaytext text to file
    if (userInput.essayfile) {
      formData.append("essayfile", userInput.essayfile);
    } else if (userInput.essaytext) {
      const essaytextFile = convertTextToFile(userInput.essaytext);
      formData.append("essayfile", essaytextFile);
      // console.log("Converted File:", essaytextFile.name);
    } else {
      alert("Please provide essaytext or upload a file.");
      return;
    }

    // console.log("Form Data:", formData);
    setIsLoading(true);

    try {
      const order = await dispatch(essaypayment(formData));
      const options = {
        key: key,
        amount: userInput.price * 100,
        currency: "INR",
        name: "Cross The Skylimits",
        description: "Payment for Essay Editing",
        image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png", //loggedinuser img
        order_id: order.id,
        callback_url: `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/services/essay-verify-payment`,
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
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full p-5 flex flex-col items-center bg-white">
      <div className="w-full h-fit">
        <div className="w-44 absolute left-0 flex items-center justify-center text-base">
          <Link
            className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={`/services`}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className="text-[#0000009b]" />
            </div>
            <button className="mr-2 ">Go Back</button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mt-16">
          Exclusive Services
        </h1>
      </div>

      <div className="w-[70vw] h-fit mt-10 shadow-lg rounded-xl p-0 border-2 max-[456px]:w-full max-[456px]:border-none max-[456px]:rounded-none max-[456px]:shadow-none max-[456px]:mt-1 sm:p-5">
        <h1 className="text-4xl mt-7 max-[456px]:mt-1 max-[456px]:ml-5 ml-10 text-center">
          Essay Editing
        </h1>
        <p className="w-[60%] max-[456px]:w-full text-center mt-5 m-auto text-zinc-500">
          Essays Aren’t Just Essays. They’re Your Story—Let’s Make It
          Unforgettable. We’re the Experts in Crafting Standout Applications,
          Trusted by Ivy League Students and Top Achievers. Upload Your Essay,
          Meet Our Professional Editors, and Transform Your Story into Something
          Truly Exceptional.
        </p>
        <ul className="list-disc list-inside text-md text-gray-500 mt-10 ml-15">
          <li className="text-xl">
            <span className="font-semibold">Thesis Clarity 🎯</span>: Ensure the
            main argument is clearly stated and remains consistent throughout
            the essay.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Logical Flow 🔗</span>: Check for
            smooth transitions between paragraphs to maintain logical coherence
            and readability.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Structure 🏗️</span>: Confirm that
            the essay has a clear introduction, body, and conclusion with
            well-organized ideas.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Clarity and Coherence 📝</span>:
            Improve clarity and coherence of your essay.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Grammar and Punctuation ✔️</span>:
            Ensure proper grammar and punctuation.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Structure and Flow 🌊</span>:
            Enhance the overall structure and flow.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Constructive Feedback 🗣️</span>:
            Provide constructive feedback for better content.
          </li>
          <li className="text-xl">
            <span className="font-semibold">Voice and Style 🎨</span>: Help in
            refining your unique voice and style.
          </li>
        </ul>
        <div className="w-full center">
          {isAuth ? (
            <button
              onClick={() => setopenpopup(true)}
              className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
            >
              Submit Essay Details
            </button>
          ) : (
            <button
              onClick={checkLoginHandler}
              className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
            >
              Edit Your Essay Now
            </button>
          )}
        </div>
      </div>

      {openpopup && (
        <div className="  fixed top-0  w-full h-screen flex wrapper-div  items-center justify-center bg-[#74747443]">
          
          <div className="w-[60%] py-5 bg-white drop-shadow-2xl">
            <div 
            onClick={()=>setopenpopup(false)}
             className=" cursor-pointer absolute right-5 top-5 ">
              <RiCloseFill/>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-full ">
                <div className="center">
                  <p className="font-medium text-2xl mt-5">
                    Fill your Essay Details
                  </p>
                </div>
                <div className="center">
                  <div className="relative inline-block w-[40%] text-left mt-4">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-2 text-xl font-semibold text-white bg-[#008BDC] rounded-md"
                      onClick={toggleDropdown}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {userInput.essaytype
                        ? userInput.essaytype
                        : "Select Essay Editing Type"}
                      <RiArrowDownSLine className="ml-2" />
                    </button>
                    {dropdownOpen && (
                      <div
                        className="z-10 absolute mt-2 w-full rounded-md bg-white shadow-lg"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {classes.map((option, index) => (
                            <div
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="cursor-pointer px-4 py-2 hover:bg-gray-200 text-xl"
                            >
                              {option.essaytype}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="center mt-5">
                  <div
                    className={`choose-file w-[40%] bg-[#008BDC] px-4 py-2 mt-3 center rounded-md cursor-pointer text-xl text-white font-medium gap-2 ${
                      isFileInputDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleChooseFileClick}
                  >
                    <RiFileAddFill className="inline-block" />
                    <h1>Select File</h1>
                  </div>
                </div>

                <div className="w-full mt-4 center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    disabled={isFileInputDisabled}
                    className="hidden"
                  />
                  {selectedFileName && (
                    <div className="center gap-3">
                      <p className="mt-2 text-lg text-gray-700">
                        {selectedFileName}
                      </p>
                      <RiCloseFill
                        className="cursor-pointer mt-1"
                        onClick={handleFileCancel}
                      />
                    </div>
                  )}
                </div>
              </div>

              <h1 className="text-xl font-medium mt-3 ">OR</h1>

              <div className="">
                <div className="w-fit">
                  <h1 className="text-2xl font-medium ">
                    Write Your Essay Here
                  </h1>
                  <p className="text-sm mb-2 text-zinc-500">
                    Use this space to write a clear, structured essay that
                    effectively communicates your ideas with proper grammar and
                    flow.
                  </p>
                  <textarea
                    placeholder="Enter Essay Text Here..."
                    value={userInput.essaytext}
                    // maxLength={5000}
                    onChange={handleTextareaChange}
                    disabled={isTextareaDisabled}
                    className={`w-full h-44 p-4 border-2 rounded-md focus:outline-none focus:ring-orange-400 focus:border-[#008BDC] ${
                      isTextareaDisabled ? "opacity-50" : ""
                    }`}
                  ></textarea>
                </div>
              </div>
            <div className="mt-4">
              <button
                disabled={isLoading}
                onClick={submithandler}
                className="bg-[#008BDC] text-xl font-medium p-5 text-white py-2 rounded-md"
              >
                {isLoading ? (
                  <div className="center gap-3">
                    <div className="loader"></div>
                    Please Wait...
                  </div>
                ) : (
                  `Fees ${userInput.price ? `₹${userInput.price}` : ""}`
                )}
              </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EssayHome;
