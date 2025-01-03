import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asynccurrentUser } from '../../store/Actions/userActions';
import { RiArrowLeftSLine, RiCloseFill } from '@remixicon/react';
import { SubmitInternship } from '../../store/Actions/internshipAction';
import { toast, ToastContainer } from 'react-toastify';

const SATTutor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setLoading] = useState(false);


  const [userInput, setUserInput] = useState({
    name: user?.name || "",
    email: user?.email || "",
    userid: "",
    class: "",
    contact: user?.contact || "",
    skills: "",
    city: user?.city || "",
    workinghours: "",
    whyinterest: "",
    satscore: "",
    teachingexperience: "",
    subjects: "",
    whatsapp_group_link: "https://chat.whatsapp.com/BrdU6s7umMF1GVEMgillJ9",
    internshiptype: "satTutor",
  });

  console.log(user);


  useEffect(() => {
    if (user) {
      setUserInput((prevInput) => ({
        ...prevInput,
        userid: user._id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        city: user.city,
      }));
    }
  }, [user]);

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);


  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first to apply for the internship");
      navigate("/login", { state: { from: `/apply-internship/SAT-tutor` } });
      return;
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(userInput).every(
      (value) => value !== "" && value.length !== 0
    );
    if (!allFieldsFilled) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    const success = await dispatch(SubmitInternship(userInput));
    setLoading(false);
    if (success) {
      toast.success("Form Submitted Successfully");
      setTimeout(() => {
        navigate("/apply-internship");
      }, 5000);
    }
  };

  const BenefitsCards = [
    {
      title: 'Verified Certificate',
      description1: 'Get certificates that you can verify online, adding credibility to your profile.- ',
    },
    {
      title: 'Prestigious Letter of Recommendation (LOR)',
      description1: 'Earn LoRs from the Founder and CEO of Cross the Sky Limits',
    },
    {
      title: 'College Application Support',
      description1: 'Work closely with Krishna MIT and the CTS team to receive personalized guidance and suggestions for your college applications.',
    },
    {
      title: 'Stipend Opportunities',
      description1: "Dedication and hard work can lead to stipends and additional perks.",
    },
    {
      title: 'Surprise Perks',
      description1: 'Expect exciting surprises along the way!',
    },
    // {
    //   title: 'Hands-On Learning Experience',
    //   description1: 'Gain practical experience in SAT strategies, resource creation, and collaboration.',
    //   description2: 'Enhance your skills and build expertise while contributing to impactful projects.',
    // },
  ];

  return (
    <>
      <ToastContainer />
      <div className='w-full'>
        <div className="w-full h-fit p-5 flex flex-col items-center">
          <div className="w-44 max-[600px]:w-20 absolute left-0 flex items-center justify-center text-base">
            <Link
              className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
              to={`/apply-internship`}
            >
              <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white max-[600px]:bg-transparent">
                <RiArrowLeftSLine className="text-[#0000009b] max-[600px]:text-white" />
              </div>
              <button className="mr-2 max-[600px]:hidden">Go Back</button>
            </Link>
          </div>
          <h1 className="text-4xl max-[600px]:text-2xl font-bold text-center mt-2">SAT Tutor</h1>
          <p className='mt-3 w-full text-zinc-400 px-48 text-center text-base max-[600px]:px-5'>Share your expertise! Teach SAT aspirants and help them achieve their dream scores.</p>
          <div className="sat-img w-full h-[40vh] max-[600px]:h-[25vh] mt-10 px-20 max-[600px]:px-0">
            <img className='w-full h-full object-contain max-[600px]:object-cover' src="/Images/internship/sttimg.png" alt="" />
          </div>
          <div className="w-full center">
            {isAuth ? (
              <button
                onClick={() => setOpenPopup(true)}
                className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
              >
                Apply Now
              </button>
            ) : (
              <button
                onClick={checkLoginHandler}
                className="bg-[#008BDC] text-white font-medium text-xl mt-10 px-8 py-2 rounded-md shadow-lg"
              >
                 Apply Now
              </button>
            )}
          </div> <br />
          <h1 className="text-4xl font-normal text-center mt-2 max-[600px]:mt-5 max-[600px]:text-2xl ">Benifits Of Internship</h1>
          <div className="intern-cards w-full max-[600px]:flex max-[600px]:gap-7 max-[600px]:overflow-x-auto max-[600px]:snap-x max-[600px]:scroll-snap-mandatory max-[600px]:items-center max-[1337px]:grid-cols-2 max-[1337px]:place-items-center grid grid-cols-3 gap-y-12 px-24 py-12 max-[600px]:py-4 max-[600px]:px-5" style={{ scrollBehavior: 'smooth' }}>
            {
              BenefitsCards.map((card, index) => (
                <div
                  key={index}
                  className="card w-96 h-[30vh] flex-shrink-0 rounded-md p-4 py-5 flex flex-col justify-between card-shadow max-[600px]:w-[35vh]  max-[600px]:snap-center"
                >
                  <div className="img-container w-fit h-16 overflow-hidden rounded-md">
                    <img className='w-full h-full object-cover' src="/Images/internship/benefitsicon.png" alt="" />
                  </div>
                  <h1 className="heading font-bold text-lg mt-2 leading-5 w-fit">
                    {card.title}
                  </h1>
                  <h2 className="text-sm mt-2 mb-4 w-full h-44 overflow-hidden leading-tight">
                    <ul className='list-disc list-inside'>
                      <li>{card.description1}</li>
                    </ul>
                  </h2>
                </div>
              ))
            }
          </div>

         
        </div>
      </div>

      {openPopup && (
        <div className="fixed top-0 w-full h-screen flex items-center justify-center bg-[#74747443]">
          <div className="w-[60%] py-5 bg-white drop-shadow-2xl max-[600px]:w-[80%] overflow-y-scroll h-[80vh]">
            <div
              onClick={() => setOpenPopup(false)}
              className="cursor-pointer absolute right-5 top-5 max-[600px]:right-2 max-[600px]:top-3"
            >
              <RiCloseFill />
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="center">
                  <p className="font-medium text-2xl mt-5">
                    Fill your Details
                  </p>
                </div>
                <div className="center mt-5 w-full px-20 max-[600px]:px-5">
                  <div className="w-full grid grid-cols-2 max-[800px]:grid-cols-1 gap-y-5 gap-x-10 max-[600px]:w-64">
                    <div className="">
                      <h2 className="font-normal text-sm">Your Full Name</h2>
                      <input
                        placeholder="Enter your Name"
                        onChange={handleChange("name")}
                        value={userInput.name}
                        type="text"
                        name="name"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Your Email Address</h2>
                      <input
                        placeholder="Enter your Email"
                        onChange={handleChange("email")}
                        value={userInput.email}
                        type="text"
                        name="email"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Phone Number(With Country Code)</h2>
                      <input
                        placeholder="Enter your Contact"
                        onChange={handleChange("contact")}
                        value={userInput.contact}
                        type="text"
                        name="contact"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Class/Grade</h2>
                      <input
                        placeholder="Enter your Class"
                        onChange={handleChange("class")}
                        value={userInput.class}
                        type="text"
                        name="class"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Your City</h2>
                      <input
                        placeholder="Enter your City"
                        onChange={handleChange("city")}
                        value={userInput.city}
                        type="text"
                        name="city"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Relevant Skills/Experience Yes/No (Describe if Yes)</h2>
                      <input
                        placeholder="Enter your Skills"
                        onChange={handleChange("skills")}
                        value={userInput.skills}
                        type="text"
                        name="skills"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">How many hours can you dedicate daily?</h2>
                      <input
                        placeholder="Enter your Working Hours"
                        onChange={handleChange("workinghours")}
                        value={userInput.workinghours}
                        type="text"
                        name="workinghours"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Why are you interested?</h2>
                      <input
                        placeholder="Enter your Interest"
                        onChange={handleChange("whyinterest")}
                        value={userInput.whyinterest}
                        type="text"
                        name="whyinterest"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">SAT Score: Proof required (Above 1500)</h2>
                      <input
                        placeholder="Enter your SAT Score"
                        onChange={handleChange("satscore")}
                        value={userInput.satscore}
                        type="text"
                        name="satscore"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Teaching Experience: Yes/No (Describe if Yes)</h2>
                      <input
                        placeholder="Enter your Teaching Experience"
                        onChange={handleChange("teachingexperience")}
                        value={userInput.teachingexperience}
                        type="text"
                        name="teachingexperience"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                    <div className="">
                      <h2 className="font-normal text-sm">Subjects Comfortable Teaching: (e.g., Math, Reading)</h2>
                      <input
                        placeholder="Enter your Subjects"
                        onChange={handleChange("subjects")}
                        value={userInput.subjects}
                        type="text"
                        name="subjects"
                        className="field rounded-md max-[600px]:h-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="step3-wrapper ">

                  <div className="center">
                    <button
                      onClick={handleSubmit}
                      className="bg-[#008BDC] text-xl font-medium p-5 text-white py-2 rounded-md mt-5 shadow-lg"
                    >
                      {isLoading ? (
                        <div className="center gap-3">
                          <div className="loader"></div>
                          Please Wait...
                        </div>
                      ) : (
                        "Apply Now"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SATTutor