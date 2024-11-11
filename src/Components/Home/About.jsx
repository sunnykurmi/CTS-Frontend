import React, { useEffect } from "react";
import HomeNav from "./HomeNav";
import HomeFooter from "./HomeFooter";
import { RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const progressData = [
    {
      id: 1,
      img: "/Images/aboutus/student.jpeg",
      title: "45,000+",
      subtitle: "Students",
      description: "impacted 45000 + students through our free community.",
    },
    {
      id: 2,
      img: "/Images/aboutus/country.jpeg",
      title: "120+",
      subtitle: "Country",
      description: "we have a global reach in 120+ countries.",
    },
    {
      id: 3,
      img: "/Images/aboutus/success.jpeg",
      title: "96%",
      subtitle: "Success Ratio",
      description:
        "96% students of paid program got accepted in top universities.",
    },
    {
      id: 4,
      img: "/Images/aboutus/partner.jpeg",
      title: "37+",
      subtitle: "Partners",
      description:
        "we are against with tie up system so we are partnered with organisations not universities",
    },
  ];

  const ImgData = [
    {
      id: 1,
      img: "/Images/aboutus/student.jpeg",
    },
    {
      id: 2,
      img: "/Images/aboutus/country.jpeg",
    },
    {
      id: 3,
      img: "/Images/aboutus/success.jpeg",
    },
    {
      id: 4,
      img: "/Images/aboutus/partner.jpeg",
    },
  ];

  return (
    <>
      <div className="papa-container w-full h-fit bg-[#F5FAFE]">
        <HomeNav />
        <div className="about-hero w-full h-[70vh] px-36 max-[600px]:px-5 max-[600px]:h-fit max-[600px]:pb-10 flex items-center justify-between">
          <div className="about-hero-lft w-[60%] max-[600px]:w-full h-full pt-10">
            <h1 className="text-4xl font-medium text-[#36C2F3]">Our Mission</h1>
            <h1 className="text-5xl max-[600px]:text-4xl font-medium mt-5">
              We are building <br />
              the <span className="text-[#36C2F3]">global legends</span> of
              tomorrow
            </h1>
            <div className="flags-container flex items-center justify-start py-5 gap-5">
              <div className="flag-img-container w-24 h-16 max-[600px]:w-20 rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/Images/aboutus/UK.png"
                  alt=""
                />
              </div>
              <div className="flag-img-container w-24 h-16 max-[600px]:w-20 rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/Images/aboutus/US.png"
                  alt=""
                />
              </div>
              <div className="flag-img-container w-24 h-16 max-[600px]:w-20 rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/Images/aboutus/Australia.png"
                  alt=""
                />
              </div>
              <div className="flag-img-container w-24 h-16 max-[600px]:w-20 rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/Images/aboutus/Canada.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="about-hero-rgt w-[40%] h-full max-[600px]:hidden">
            <img
              className="w-full h-full object-contain scale-110"
              src="/Images/aboutus/superman.PNG"
              alt=""
            />
          </div>
        </div>
        <div className="our-story w-full h-fit py-20 max-[600px]:py-10 px-36 max-[600px]:px-5 max-[600px]:flex-col bg-[#ECF6FF] flex">
          <div className="our-story-lft w-[60%] max-[600px]:w-full">
            <h1 className="text-4xl font-medium text-[#36C2F3]">Our Story</h1>
            <h1 className="text-5xl font-medium mt-5">This is us</h1>
            <p className="font-medium text-lg mt-5 text-justify">
              Cross The Skylimits is a dynamic profile-building firm committed
              to revolutionizing the college application journey for ambitious
              international students. We believe in making this
              often-challenging process not only attainable but enjoyable. With
              a foundation rooted in personalized mentorship, comprehensive
              resources, and community support, we empower students from around
              the world to shape compelling profiles that resonate with top
              universities globally. Our goal? To make studying abroad
              accessible, affordable, and transformative by providing hands-on
              guidance, from extracurricular planning to essay crafting. At
              Cross The Skylimits, we're not just building applications; we’re
              building futures.
            </p>
            <button className="text-xl rounded-full font-medium border-2 border-[#36C2F3] text-[#36C2F3] px-7 mt-5 hover:bg-[#36C2F3] hover:text-white  transition-all">
              Know more
            </button>
          </div>
          <div className="our-story-rgt w-[40%] max-[600px]:w-full p-10 center rounded-md">
            <div className="w-full h-[35vh] bg-[#36C2F3] overflow-hidden rounded-md">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
          </div>
        </div>
        <div className="our-progress w-full h-fit py-20 max-[600px]:py-10 px-36 max-[600px]:px-5 max-[600px]:mb-20">
          <h1 className="text-4xl font-medium text-[#36C2F3]">Our Progress</h1>
          <h1 className="text-4xl font-medium mt-5">So far</h1>
          <div className="grid grid-cols-4 max-[600px]:grid-cols-2 max-[600px]:place-items-center w-full">
            {progressData.map((data) => (
              <div
                key={data.id}
                className="progress-card w-[80%] h-[50vh] mt-5 max-[600px]:h-[35vh]"
              >
                <div className="w-full h-[50%] flex justify-start">
                  <img
                    className="w-full h-full object-contain object-left"
                    src={data.img}
                    alt=""
                  />
                </div>
                <h1 className="text-3xl font-medium mt-2">{data.title}</h1>
                <h1 className="text-2xl font-medium mt-2">{data.subtitle}</h1>
                <p className="font-medium text-base mt-2 leading-tight">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="our-offerings w-full h-fit py-20 max-[600px]:py-10 px-36 max-[600px]:px-5 max-[600px]:flex-col bg-[#ECF6FF] flex">
          <div className="our-offerings-lft w-[65%] max-[600px]:w-full">
            <h1 className="text-4xl font-medium text-[#36C2F3]">
              Our Offerings
            </h1>
            <h1 className="text-5xl max-[600px]:text-2xl font-medium mt-5 text-zinc-700">
              We are innovating{" "}
              <span className="text-[#36C2F3]">legendary profile</span> helping
              to get into top universities
            </h1>
            <div className="offerings-circle-wrapper w-full mt-5 grid grid-cols-3 gap-y-8 place-items-start max-[600px]:place-items-center pr-36 max-[600px]:pr-0">
              <div className="offerings-circle size-28 max-[600px]:size-20 shadow-inner border-2 rounded-full border-[#36C2F3] cursor-pointer"></div>
              <div className="offerings-circle size-28 max-[600px]:size-20 shadow-inner border-2 rounded-full border-[#36C2F3] cursor-pointer"></div>
              <div className="offerings-circle size-28 max-[600px]:size-20 shadow-inner border-2 rounded-full border-[#36C2F3] cursor-pointer"></div>
              <div className="offerings-circle size-28 max-[600px]:size-20 shadow-inner border-2 rounded-full border-[#36C2F3] cursor-pointer"></div>
              <div className="offerings-circle size-28 max-[600px]:size-20 shadow-inner border-2 rounded-full border-[#36C2F3] cursor-pointer"></div>
              <div className="offerings-circle size-28 max-[600px]:size-20 shadow-inner border-2 rounded-full border-[#36C2F3] cursor-pointer"></div>
            </div>
          </div>
          <div className="our-offerings-rgt w-[35%] max-[600px]:w-full center max-[600px]:pt-10">
            <div className="offerings-details center flex-col">
              <div className="offering-img-container w-[80%] h-[50vh] max-[600px]:w-[70%] max-[600px]:h-[30vh]">
                <img
                  className="w-full h-full object-cover"
                  src="/Images/aboutus/student.jpeg"
                  alt=""
                />
              </div>
              <p className="font-medium text-lg mt-5 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                accusamus eum vero fugiat facilis molestias quisquam iusto est
                libero tenetur debitis eos dolore sapiente numquam quidem dicta
                ut quos placeat! Lorem ipsum dolor sit amet consectetur
              </p>
              <button className="text-2xl rounded-full font-medium border-2 border-[#36C2F3] text-[#36C2F3] p-1 px-8 mt-5 hover:bg-[#36C2F3] hover:text-white  transition-all">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div className="our-invester w-full h-fit py-20 max-[600px]:py-10 px-36 max-[600px]:px-5">
          <h1 className="text-4xl font-medium text-[#36C2F3]">Our invester</h1>
          <h1 className="text-4xl max-[600px]:text-2xl font-medium mt-5">
            Waiting to Fuelling the Rocketship
          </h1>
          <h1 className="text-4xl max-[600px]:text-2xl font-medium text-zinc-500">
            Feel free to invest
          </h1>
          <div className="investor-cards-wrapper w-full py-5 flex items-center justify-between max-[600px]:flex-col">
            <div className="w-[60%] max-[600px]:w-full flex items-center justify-start gap-20 max-[600px]:gap-10">
              <div className="invester-card w-[30%] h-[40vh] max-[600px]:w-[50%] max-[600px]:h-[30vh]">
                <img
                  className="w-full h-full object-contain"
                  src="/Images/aboutus/investor1.png"
                  alt=""
                />
              </div>
              <div className="invester-card w-[30%] h-[40vh] max-[600px]:w-[50%] max-[600px]:h-[30vh]">
                <img
                  className="w-full h-full object-contain"
                  src="/Images/aboutus/investor2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[40%] center">
              <Link to="https://ssqx4yzf7do.typeform.com/to/h6cjLeHE">
                <button className="text-xl rounded-full whitespace-nowrap font-medium border-2 border-[#36C2F3] text-[#36C2F3] p-2 px-8 mt-5 flex items-center hover:bg-[#36C2F3] hover:text-white  transition-all">
                  Only for investors{" "}
                  <span className="ml-2">
                    <RiArrowRightLine />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="motivators w-full h-fit py-10 px-36 max-[600px]:px-5 bg-[#ECF6FF]">
          <h1 className="text-4xl font-medium text-[#36C2F3]">
            Individual motivators
          </h1>
          <div className="motivators-cards-container w-full h-fit grid grid-cols-4 max-[600px]:place-items-center max-[600px]:grid-cols-2 max-[600px]:gap-y-5 gap-y-10">
            {Array(8)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="motivator-card w-[80%] h-[40vh] max-[600px]:h-[25vh] mt-10 bg-green-300 rounded-md overflow-hidden"
                >
                  <img className="w-full h-full object-cover" src="" alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="our-team w-full h-[100vh] max-[600px]:h-fit py-20 max-[600px]:py-10 px-36 max-[600px]:px-5 flex max-[600px]:flex-col-reverse gap-10 max-[600px]:gap-0">
          <div className="our-team-lft w-[40%] max-[600px]:w-full max-[600px]:p-20">
            <div className="slides w-full h-full">
              <Swiper
                className="w-full h-full object-cover"
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                allowTouchMove={false}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
              >
                {ImgData &&
                  ImgData.map((data, index) => (
                    <SwiperSlide className="center" key={`slide-${index}`}>
                      <div
                        key={index}
                        className="w-full h-full shadow-lg rounded-md overflow-hidden"
                      >
                        <div className="w-full h-full">
                          <img
                            className="w-full h-full object-contain"
                            src={data.img}
                            alt="img"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="our-team-rgt w-[60%] max-[600px]:w-full center flex-col">
            <div className="team-headings w-full h-[70%] flex items-center justify-center">
              <div className="space-y-3">
                <h1 className="text-5xl font-light">MEET</h1>
                <h1 className="text-7xl font-medium uppercase">our team</h1>
                <p className="text-2xl font-normal text-zinc-600">
                  Meet our team of professionals to serve you
                </p>
              </div>
            </div>
            <div className="slides w-full h-[40%]">
              <Swiper
                className="w-full h-full object-cover"
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                allowTouchMove={false}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                  },
                  600: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                initialSlide={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
              >
                {ImgData &&
                  ImgData.map((data, index) => (
                    <SwiperSlide
                      className="center max-[600px]:mt-5"
                      key={`slide-${index}`}
                    >
                      <div
                        key={index}
                        className="w-[20vh] h-[20vh] max-[600px]:h-[15vh] shadow-lg rounded-md overflow-hidden"
                      >
                        <div className="w-full h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={data.img}
                            alt="img"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  );
};

export default About;
