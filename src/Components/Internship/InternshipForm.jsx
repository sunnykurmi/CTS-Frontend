import React from "react";
import { RiArrowLeftSLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const InternshipForm = () => {
  const internshipCards = [
    {
      title: "Digital Marketing",
      description:
        "Dive into the world of digital marketing! Help us expand our reach through outreach, collaborations, creativity and social media management.",
      img: "/Images/internship/DM.png",
      link: "/apply-internship/digital-marketing",
    },
    {
      title: "Content Creation",
      description:
        "Unleash your creativity! Create engaging content, from blogs to videos, and shape the narrative of Cross the Sky Limits.",
      img: "/Images/internship/cc.png",
      link: "/apply-internship/content-creation",
    },
    {
      title: "Research & Development",
      description:
        "Dive into research! Create valuable resources like university lists and selected essays to support students",
      img: "/Images/internship/r&d.png",
      link: "/apply-internship/research&development",
    },
    {
      title: "SAT Tutor (Paid)",
      description:
        "Share your expertise! Teach SAT aspirants and help them achieve their dream scores.",
      img: "/Images/internship/stt.png",
      link: "/apply-internship/SAT-tutor",
    },
    {
      title: " SAT1600 - SAT Practice test",
      description:
        "Be a part of innovation! Help us perfect our SAT practice tests through question creation and review",
      img: "/Images/internship/sat1600.png",
      link: "/apply-internship/SAT-1600",
    },
    {
      title: "UI/UX",
      description:
        "Redesign with flair! Reimagine pages of our website to make them more user-friendly and innovative.",
      img: "/Images/internship/uiux.png",
      link: "/apply-internship/UI-UX",
    },
    {
      title: "Video Editing",
      description:
        "Bring stories to life! Edit videos, interviews, and shorts to captivate our audience.",
      img: "/Images/internship/ve.png",
      link: "/apply-internship/video-editing",
    },
    {
      title: "Web-Development",
      description:
        "Build the future! Use your coding skills to develop and enhance our web platforms.",
      img: "/Images/internship/wd.png",
      link: "/apply-internship/web-development",
    },
  ];
  return (
    <>
      <div className="w-full">
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
          <h1 className="text-4xl font-bold text-center mt-2">
            CTS Internship
          </h1>
          <p className="mt-3 w-full px-48 text-center text-lg max-[600px]:px-5 max-[600px]:text-justify">
            We are offering a dynamic internship program tailored to individuals
            passionate about diverse fields such as Digital Marketing, Content
            Creation, SAT Tutoring (requiring a 1500+ SAT score), Research &
            Development, UI/UX Design, Video Editing, and Web Development. Join
            us to gain hands-on experience, contribute to innovative projects
            like SAT1600 practice tests, and hone your skills in a collaborative
            and growth-oriented environment.
          </p>
          <div
            className="intern-cards max-[600px]:flex max-[600px]:gap-7 max-[600px]:overflow-x-auto max-[600px]:snap-x max-[600px]:snap-mandatory max-[600px]:items-center max-[1337px]:grid-cols-3 grid grid-cols-4 gap-y-12 px-24 py-12 max-[600px]:px-5"
            style={{ scrollBehavior: "smooth" }}
          >
            {internshipCards.map((card, index) => (
              <div
                key={index}
                className="card w-64 h-[50vh] flex-shrink-0 rounded-md p-4 py-5 flex flex-col justify-between card-shadow max-[600px]:snap-center"
              >
                <div className="img-container w-full h-44 overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover"
                    src={card.img}
                    alt=""
                  />
                </div>
                <h1 className="heading font-bold text-lg mt-2 leading-5 bg-blue-100 p-2 w-full rounded-md text-center">
                  {card.title}
                </h1>
                <p className="text-sm mt-2 mb-4 w-full h-32 overflow-hidden leading-tight text-justify">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="bg-[#008BDC] font-medium p-5 text-white py-2 w-full rounded-md center"
                >
                  View More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipForm;
