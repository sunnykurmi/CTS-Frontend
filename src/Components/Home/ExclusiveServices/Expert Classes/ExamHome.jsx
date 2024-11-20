import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeNav from "../../HomeNav";
import HomeFooter from "../../HomeFooter";
import { getallexams } from "../../../../store/Actions/adminAction";
import { useDispatch } from "react-redux";

const ExamHome = () => {
  const [exams, setExams] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "SAT",
      description:
        "Prepare thoroughly for the SAT with in-depth guidance across math, reading, and writing sections. Our expert-led program equips students with effective strategies and skills to boost scores and maximize college admission opportunities.",
      image: "/Images/SAT.png",
      link: "/services/exam-prepration/sat-prepration",
      button: "Book Now",
    },
    {
      title: "IELTS",
      description:
        "Achieve a high IELTS score by strengthening your English listening, reading, writing, and speaking skills. Our structured training and expert tips provide the confidence and proficiency needed to meet international standards for study or immigration.",
      image: "/Images/ielts.JPG",
      link: "/services/exam-prepration/ielts-prepration",
      button: "Book Now",
    },
    // {
    //   title: "ECS booster",
    //   description: "loren",
    //   image: "./Images/ecs-booster.webp",
    //   button:"Comming Soon"
    // },
    {
      title: "TOEFL",
      description:
        "Master the TOEFL exam through targeted training in English language skills essential for academic and professional success. Our program emphasizes fluency, comprehension, and test-specific strategies for excelling in English-speaking environments.",
      image: "/Images/toelf.JPG",
      link: "/services/exam-prepration/toefl-prepration",
      button: "Book Now",
    },
    {
      title: "DET",
      description:
        "Prepare effectively for the Duolingo English Test (DET) with tailored language exercises. Our focused approach ensures proficiency in reading, listening, speaking, and writing, helping you achieve your desired score in a flexible, convenient test format.",
      image: "/Images/det.JPG",
      link: "/services/exam-prepration/det-prepration",
      button: "Book Now",
    },
  ];

  exams.forEach((exam) => {
    const service = services.find((service) => service.title === exam.examname);
    if (service) {
      service.amount = exam.amount;
      service.from = exam.from;
      service.to = exam.to;
      service.total_enrolled = exam.total_enrolled.length;
    }
  });

  const NavigateHandler = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const fetchExams = async () => {
      const result = await dispatch(getallexams());
      setExams(result);
    };

    fetchExams();
  }, [dispatch]);

  return (
    <div id="services" className="bg-[#F5FAFE]">
      <HomeNav />
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center max-[600px]:mt-5">
          Exam Prepration
        </h1>
      </div>
      <div className="w-full h-fit p-10 pl-36 pr-36 grid grid-cols-3 gap-10 place-items-center max-[600px]:grid max-[600px]:grid-cols-1 max-[1180px]:pl-10 max-[1180px]:pr-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-[45vh] h-[65vh]  max-[600px]:h-fit max-[600px]:w-[90vw] shadow-lg rounded-md border-2 max-[600px]:p-5 p-1 flex flex-col justify-between"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-1/2 object-contain rounded-t-md"
            />
            <div className="p-4 flex h-1/2 flex-col">
              <div className="">
                <h2 className="text-xl max-[600px]:text-2xl font-bold">
                  {service.title} Exam Preparation
                </h2>
              </div>
              <div className="h-[50%] overflow-auto scrollernone mt-2">
                <p className="text-sm leading-4 text-zinc-500">
                  {service.description}
                </p>
              </div>
              <button
                onClick={() => NavigateHandler(service.link)}
                className="bg-[#008BDC] w-1/2 text-white max-[600px]:text-xl px-4 py-2 rounded-md mt-4"
              >
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <HomeFooter />
    </div>
  );
};

export default ExamHome;
