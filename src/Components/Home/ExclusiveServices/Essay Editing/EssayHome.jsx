import { RiArrowDownSLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { essaypayment } from "../../../../store/Actions/servicesAction";
import { asynccurrentUser } from "../../../../store/Actions/userActions";

const EssayHome = () => {
  const key = "rzp_test_PjRJHVEk8wvOyg";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);

  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);
  const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);

  const [userInput, setUserInput] = useState({
    essaytype: "",
    instructions: "xscscs",
    essaytext:" ",
    price: "",
    essayfile: null,
    id: "66fa97dfc22e25e1a080f5bf", // Example ID
  });

  const classes = [
    { essaytype: "normal", price: 200 },
    { essaytype: "premium", price: 500 },
    { essaytype: "exclusive", price: 1000 },
    { essaytype: "pro max", price: 2000 },
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
    if (e.target.value) {
      setIsFileInputDisabled(true);
    } else {
      setIsFileInputDisabled(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576) {
      // 1MB file size limit
      alert("File size exceeds 1MB");
    } else {
      setUserInput({ ...userInput, essayfile: file });
      if (file) {
        setIsTextareaDisabled(true);
      } else {
        setIsTextareaDisabled(false);
      }
    }
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
      console.log('Converted File:', essaytextFile.name);
    } else {
      alert("Please provide essaytext or upload a file.");
      return;
    }

    console.log('Form Data:', formData);

  
    try {
      const order = await dispatch(essaypayment(formData));
      const options = {
        key: key,
        amount: userInput.price * 100,
        currency: "INR",
        name: userInput.essaytype,
        description: userInput.essaytext,
        image:
          "https://images.unsplash.com/photo-1726491703560-87cc8a3624b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        order_id: order.id,
        callback_url:
          "http://localhost:3030/api/v1/services/essay-verify-payment",
        prefill: {
          name: "laurea", // logged-in user name
          email: "laura@co.com", // logged-in user email
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
      console.log(error);
    }
  };
  

  return (
    <div className="w-full p-5 flex flex-col items-center">
      {isAuth && (
        <div className="essay-info w-full h-fit p-10 bg-red-300">
          <div className="w-full flex items-center justify-between">
            <div className="flex w-[45%] flex-col">
              <p className="text-lg font-medium">Essay Type</p>
              <div
                onClick={toggleDropdown}
                className="cursor-pointer relative w-full field border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]"
              >
                <input
                  type="text"
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={handleMouseEnter}
                  value={`${userInput.essaytype} ${userInput.price}`}
                  readOnly
                  placeholder="Select Class"
                  className="w-full h-full outline-none"
                  name="class"
                  autoComplete="off"
                  id=""
                />
                <RiArrowDownSLine className="text-[#F58612]" />
                {dropdownOpen && (
                  <div className="absolute w-full shadow-lg border-2 border-b-0 top-[105%] z-[99] bg-white">
                    {classes.map((cls, index) => (
                      <div
                        key={index}
                        className="w-full h-10 flex border-r-2 border-b-2 text-center items-center justify-center font-semibold hover:bg-[#F58612] hover:text-white"
                        onClick={() => handleOptionClick(cls)}
                      >
                        <p>
                          {cls.essaytype} {cls.price}rs
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
              className=""
              type="file"
              placeholder="Upload File"
              onChange={handleFileChange}
              name="essayfile"
              id=""
            />
            <textarea
              className="w-full h-40 border-2 rounded-lg p-2 mt-2"
              placeholder="essaytext"
              onChange={handleTextareaChange}
              value={userInput.essaytext}
            ></textarea>

              <button
                className="w-24 text-xl p-2 mt-5 bg-[#F58612] text-white rounded-md"
                onClick={submithandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EssayHome;
