import { RiArrowDownSLine, RiArrowLeftSLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { essaypayment } from "../../../../store/Actions/servicesAction";

const EssayHome = () => {
  const key = "rzp_test_PjRJHVEk8wvOyg";
  const dispatch = useDispatch();
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInput, setUserInput] = useState({
    essaytype: "",
    instructions: "loda benchod",
    price: "",
    essayfile: null,
    id: "66fa97dfc22e25e1a080f5bf",
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

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576) { // 1MB
      alert("File size exceeds 1MB");
    } else {
      setUserInput({ ...userInput, essayfile: file });
    }
  };

  const submithandler = async () => {
    const formData = new FormData();
    formData.append("essaytype", userInput.essaytype);
    formData.append("instructions", userInput.instructions);
    formData.append("price", userInput.price);
    formData.append("essayfile", userInput.essayfile);
    formData.append("id", userInput.id);

    try {
      const order = await dispatch(essaypayment(formData));
      const options = {
        key: key,
        amount: userInput.price*100,
        currency: "INR",
        name: userInput.essaytype,
        description: userInput.instructions,
        image: "https://images.unsplash.com/photo-1726491703560-87cc8a3624b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", //loggedinuser img
        order_id: order.id,
        callback_url:
          "http://localhost:3030/api/v1/services/essay-verify-payment",
        prefill: {
          name: "laurea", //loggedinuser name
          email: "laura@co.com", //loggedinuser email
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
    <div className="w-full p-5">
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

      <div className="w-[70vw] h-fit m-auto mt-10 shadow-lg rounded-xl p-5">
        <h1 className="text-4xl mt-7 ml-10 text-center">Essay Editing</h1>
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
      </div>

      <div className="w-full h-[30vh]">
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
              onChange={handleChange}
              name="essayfile"
              id=""
            />

            <button onClick={submithandler}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssayHome;