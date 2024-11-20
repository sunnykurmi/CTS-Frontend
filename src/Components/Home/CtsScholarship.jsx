import { RiArrowLeftSLine } from '@remixicon/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asynccurrentUser } from '../../store/Actions/userActions';

const CtsScholarship = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
  
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        mobile: "",
    }); 

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (name) => (event) => {
        const value = event.target.value;
        setUserInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };
    useEffect(() => {
        dispatch(asynccurrentUser());
      }, [dispatch]);
    
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    const handleProceed = () => {
        if (isChecked) {
            window.location.href = "https://www.buddy4study.com/application/CBISP6/instruction";
        } else {
            alert("Please agree to the terms and conditions.");
        }
    };



    return (
        <div className="w-full p-5 flex flex-col">
            <div className="w-full h-fit">
                <div className="w-44 absolute left-0 flex items-center justify-center text-base">
                    <Link
                        className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
                        to={`/`}
                    >
                        <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
                            <RiArrowLeftSLine className="text-[#0000009b]" />
                        </div>
                        <button className="mr-2">Go Back</button>
                    </Link>
                </div>
                <h1 className="text-4xl font-bold text-center">Scholarship for Students!</h1>
            </div>

            <div className="w-[70vw] h-fit m-auto mt-10 shadow-lg rounded-xl p-5 border-2 max-[456px]:w-full max-[456px]:border-none max-[456px]:rounded-none max-[456px]:shadow-none max-[456px]:mt-1 sm:p-5">
                <h1 className="text-4xl mt-7 ml-10 max-[600px]:ml-2 text-center max-[600px]:text-3xl">
                    Apply for CTS Scholarship
                </h1>
                <div className="w-full my-10 h-48 mt-4 overflow-hidden">
                    <img className='w-full h-full object-contain' src="/Images/home/scholarship.PNG" alt="" />
                </div>
                <div className="mt-5 text-lg text-gray-700">
                    <h1 className='text-center'><b>Cross The Skylimits Scholarship</b> for 11th & 12th  Students</h1>
                    <p className='text-center mt-'>
                        We provide a ₹1000 scholarship to help students excel in their academic journey. Fill out the form below to apply.
                    </p>
                    <div className="p-5">
                        <ol className='list-decimal list-inside text-lg text-gray-800'>
                            <li><b>One-Time Scholarship:</b> Receive a one-time scholarship of ₹1000 to support your academic needs.</li>
                            <li><b>Easy Application Process:</b> A simple form to fill in basic details like name, mobile number, and email.</li>
                            <li><b>Student-Centric:</b> Designed exclusively for students to help with academic expenses.</li>
                            <li><b>No Hidden Costs:</b> Clear and straightforward scholarship offering without any hidden conditions.</li>
                            <li><b>Quick Disbursement:</b> Scholarship amount is processed swiftly after successful application.</li>
                            <li><b>For All Students:</b> Open to students from all educational backgrounds.</li>
                            <li><b>Direct Benefit:</b> Immediate financial aid to ease educational expenses.</li>
                            <li><b>Inclusive Opportunity:</b> Encourages participation from students across diverse fields and streams.</li>
                            <li><b>Transparency Guaranteed:</b> Clear terms and conditions with no ambiguity in the process.</li>
                            <li><b>Build Confidence:</b> Recognizes your efforts as a student and motivates you to achieve more.</li>
                            <li><b>Supportive Gesture:</b> A small yet meaningful step toward empowering students.</li>
                            <li><b>One-Time Reward:</b> No recurring commitments; enjoy this scholarship as a one-time benefit.</li>
                        </ol>
                        <h1 className='font-semibold text-xl mt-4'>Mandatory Documents:</h1>
                        <ul className='list-disc list-inside text-lg text-gray-800'>
                            <li>Class 10th Marksheet</li>
                            <li>Income proof/Income Certificate ( आय प्रमाण पत्र )</li>
                            <li>School Fees Card</li>
                            <li>Aadhar Card (we will verify)</li>
                            <li>One Passport Size Photo</li>
                        </ul>
                        <p className='mt-4'><b>Note:</b> Bring the Original Document, we will click the picture and return it to you,
                            Dont bring photocopies or duplicate documents <b>Its only for GB Convent current students, not applicable to other schools</b></p>
                    </div>
                </div>
            </div>
            <div className="steps-mom w-full overflow-hidden h-fit px-48 max-[600px]:p-0">
                <div className="flex flex-col gap-5 mt-8">
                    <div className="flex flex-col gap-2 w-56">
                        <h2 className="font-medium">Name</h2>
                        <input
                            onChange={handleChange("name")}
                            placeholder="Enter your full name"
                            type="text"
                            className="field rounded-md"
                            value={userInput.name}
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-56">
                        <h2 className="font-medium">Email</h2>
                        <input
                            onChange={handleChange("email")}
                            placeholder="Enter your email address"
                            type="email"
                            className="field rounded-md"
                            value={userInput.email}
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-56">
                        <h2 className="font-medium">Mobile Number</h2>
                        <input
                            onChange={handleChange("mobile")}
                            placeholder="Enter your mobile number"
                            type="tel"
                            className="field rounded-md"
                            value={userInput.mobile}
                        />
                    </div>
                </div>

                <div className="mt-8 ">
                    <p className="text-lg flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2 size-5"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        I agree to the terms and conditions of this scholarship program.
                    </p>
                </div>

                <div className="w-full text-center">
                    <button
                        className="bg-[#008BDC] text-xl font-medium p-5 text-white py-2 rounded-md mt-5 shadow-lg"
                        onClick={handleProceed}
                    >
                        Proceed for Scholarship
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CtsScholarship;
