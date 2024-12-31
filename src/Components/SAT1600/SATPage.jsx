import { RiArrowLeftSLine } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeFooter from './../Home/HomeFooter';

const SATPage = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = new Date("2025-03-08T00:00:00"); // January 1st of the next year
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const SatExam = [
        {
            date: 'March 8, 2025',
            regdate: 'February 21, 2025',
            latereg: 'February 25, 2025'
        },
        {
            date: 'May 3, 2025',
            regdate: 'April 18, 2025',
            latereg: 'April 23, 2025'
        },
        {
            date: 'july 7, 2025',
            regdate: 'May 22, 2025',
            latereg: 'May 27, 2025'
        },
    ]
    const info = [
        {
            icon: "/Images/SAT1600/Group.png",
            infor: "Late registration is subject to additional fees.",
        },
        {
            icon: "/Images/SAT1600/attention.png",
            infor: "Test center availability is on a first-come, first-served basis.",
        },
        {
            icon: "/Images/SAT1600/day.png",
            infor: "Please ensure to bring valid ID and admission ticket on test day.",
        },
        {
            icon: "/Images/SAT1600/SVG1.png",
            infor: "Registration fees may  vary, beccause we  we are providing scholarships, waivers, and discounts for the registration.        ",
        }
    ]
    const SATCards = [
        {
            title: 'Real SAT Practice Test',
            description: 'Access authentic SAT practice tests that mirror the actual exam format and difficulty level.',
            img: '/Images/internship/DM.png',
            img2: '/Images/SAT1600/book.png',
            link: '/satpractice',
        },
        {
            title: 'Free Resources',
            description: 'Get access to comprehensive study materials, practice questions, and test-taking strategies.',
            img: '/Images/internship/cc.png',
            img2: '/Images/SAT1600/free.png',
            link: 'https://nas.io/cross-the-skylimits/products',
        },
        {
            title: 'Expert Personalized Live Classes',
            description: 'Learn from experienced instructors in interactive live sessions tailored to your needs.',
            img: '/Images/internship/r&d.png',
            img2: '/Images/SAT1600/learn.png',
            link: '/services/exam-prepration/sat-prepration',
        },
        {
            title: 'SAT Prep WhatsApp Community',
            description: 'Join our supportive community to connect with fellow test-takers and get instant help.',
            img: '/Images/internship/stt.png',
            img2: '/Images/SAT1600/whatsapp.png',
            link: '/apply-internship/SAT-tutor',
        },
    ]
    return (
        <>
            <div className='w-full bg-[#F9FAFB]'>
                <div className="w-full h-fit p-5">
                    <div className="w-44 max-[600px]:w-20 absolute left-0 flex items-center justify-center text-base">
                        <Link
                            className="h-12 gap-3 rounded-full bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
                            to={`/`}
                        >
                            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white max-[600px]:bg-transparent">
                                <RiArrowLeftSLine className="text-[#0000009b] max-[600px]:text-white" />
                            </div>
                            <button className="mr-2 max-[600px]:hidden">Go Back</button>
                        </Link>
                    </div>
                    <h1 className="text-4xl font-bold text-center mt-2">Your all in one place to score<br />1600/1600</h1>
                    <p className='mt-3 w-full px-48 text-center text-lg max-[600px]:px-5 max-[600px]:text-justify text-zinc-500'>Our mission is to make world's best SAT preparation platform</p>
                    <div className="sat-img w-full h-[55vh] max-[600px]:h-[25vh] px-20 max-[600px]:px-0">
                        <img className='w-full h-full object-contain max-[600px]:object-cover' src="/Images/SAT1600/satpage.png" alt="" />
                    </div>
                    <div className="w-full max-[600px]: flex items-center justify-center mb-10">
                        <div className="sattimer w-[50vh] h-[40vh] flex flex-col items-center justify-center gap-2 bg-[#111827] text-white rounded-md">
                            <img className='size-16 object-contain' src="/Images/SAT1600/clock.png" alt="" />
                            <h1 className='text-xl font-bold text-white'>Next SAT Attempt</h1>
                            <p className='text-[#F59E0B] font-light text-lg '>March 8</p>
                            <div className="countdown flex items-center justify-center gap-4">
                                <div className="timer w-20 h-20 center gap-4 bg-[#111827] text-white rounded-md">
                                    <div className="days-wrapper center flex-col gap-2">
                                        <div className="days size-12 bg-[#1F2937] center border-2 border-zinc-500 rounded-md"><h1 className='text-xl text-zinc-200'>{timeLeft.days}</h1></div>
                                        <p className='text-[10px] text-[#F59E0B] uppercase'>Days</p>
                                    </div>
                                    <div className="days-wrapper center flex-col gap-2">
                                        <div className="days size-12 bg-[#1F2937] center border-2 border-zinc-500 rounded-md"><h1 className='text-xl text-zinc-200'>{timeLeft.hours}</h1></div>
                                        <p className='text-[10px] text-[#F59E0B] uppercase'>hours</p>
                                    </div>
                                    <div className="days-wrapper center flex-col gap-2">
                                        <div className="days size-12 bg-[#1F2937] center border-2 border-zinc-500 rounded-md"><h1 className='text-xl text-zinc-200'>{timeLeft.minutes}</h1></div>
                                        <p className='text-[10px] text-[#F59E0B] uppercase'>minutes</p>
                                    </div>
                                    <div className="days-wrapper center flex-col gap-2">
                                        <div className="days size-12 bg-[#1F2937] center border-2 border-zinc-500 rounded-md"><h1 className='text-xl text-zinc-200'>{timeLeft.seconds}</h1></div>
                                        <p className='text-[10px] text-[#F59E0B] uppercase'>seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="satexamtable">
                        <h1 className="text-3xl px-28 max-[600px]:px-5 font-bold mt-2 max-[600px]:">SAT 1600 Examination Schedule</h1>
                        <p className='mt-3 w-full px-28 text-lg max-[600px]:px-5 max-[600px]:text-justify text-zinc-600'>A complete list of upcoming SAT 1600 examination dates and registration deadlines.</p>
                        <div className="overflow-y-auto h-full py-5 px-28 max-[600px]:px-5 rounded-sm">
                            <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md ">
                                <thead className="bg-gray-100 sticky top-0">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            S.No
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Exam Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Registration Deadline
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Late Registration
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Available Batches
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        SatExam.map((exam, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {exam.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {exam.regdate}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    {exam.latereg}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                    <Link to={"/services/exam-prepration/sat-prepration"} className='text-zinc-100 bg-[#008BDC] px-4 py-1 rounded-md'>Click Here</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="info w-full h-fit">
                            <h1 className="text-xl px-28 max-[600px]:px-5 font-bold my-2">Important Information</h1>
                            {
                                info.map((inf, index) => (
                                    <div key={index} className="info-card w-full h-fit px-28 max-[600px]:px-5 flex items-center gap-5 mt-3">
                                        <img className='size-4 object-contain' src={inf.icon} alt="" />
                                        <p className='text-base text-zinc-600'>{inf.infor}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-center mt-16">Everything You Need To Succeed </h1>
                    <div className="intern-cards max-[600px]:flex max-[600px]:gap-7 max-[600px]:overflow-x-auto max-[600px]:snap-x max-[600px]:snap-mandatory max-[600px]:items-center max-[1337px]:grid-cols-3 grid grid-cols-4 gap-y-12 px-24 py-12 max-[600px]:px-5" style={{ scrollBehavior: 'smooth' }}>
                        {
                            SATCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="card w-64 h-[50vh] flex-shrink-0 rounded-md p-4 py-5 flex flex-col justify-between card-shadow max-[600px]:snap-center"
                                >
                                    <img className='icons size-5 object-contain' src={card.img2} alt="" />
                                    <h1 className="heading font-bold text-lg mt-2 leading-5 mb-2 w-full">
                                        {card.title}
                                    </h1>
                                    <div className="img-container w-full h-44 overflow-hidden rounded-md">
                                        <img className='w-full h-full object-cover' src={card.img} alt="" />
                                    </div>
                                    <p className="text-sm mt-2 mb-4 w-full h-32 overflow-hidden leading-tight text-justify">
                                        {card.description}
                                    </p>
                                    {
                                        card.link === 'https://nas.io/cross-the-skylimits/products' ? (
                                            <a href={card.link} target='#' className="bg-[#008BDC] font-normal p-5 text-white py-2 w-full rounded-md center">
                                                Explore More
                                            </a>
                                        ) : (
                                            <a href={card.link} className="bg-[#008BDC] font-normal p-5 text-white py-2 w-full rounded-md center">
                                                Explore More
                                            </a>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <HomeFooter />
            </div>
        </>
    )
}

export default SATPage