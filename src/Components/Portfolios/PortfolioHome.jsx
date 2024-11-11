import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllPortfolio } from "../../store/Actions/portfolioAction";
import { asynccurrentUser } from "../../store/Actions/userActions";
import Loader from "../Loader/Loader";
import HomeNav from "../Home/HomeNav";

export default function PortfolioHome() {
  const [Portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index, e) => {
    setHoveredIndex(index);
    e.currentTarget.querySelector("video").play();
  };

  const handleMouseLeave = (index, e) => {
    setHoveredIndex(null);
    e.currentTarget.querySelector("video").pause();
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(AllPortfolio()).then((data) =>
          setPortfolios(shuffleArray(data))
        );
      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      }
    };
    fetchData();
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if (Portfolios.length === 0)
    return (
      <div>
        <Loader></Loader>
      </div>
    );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-[#F5FAFE]">
      <HomeNav />
      <div className="text-5xl font-medium uppercase text-center mt-3 min-[600px]:hidden">Portfolio</div>
      <div className="portfolio-hero w-full h-[60vh] max-[600px]:h-fit p-10 px-28 max-[600px]:pt-4 max-[600px]:px-0 flex justify-between max-[600px]:flex-col-reverse">
        <div className="portfolio-info w-1/2 h-full pt-16 max-[600px]:p-5 max-[600px]:w-full max-[600px]:h-1/2">
          <div className="text-5xl font-medium uppercase max-[600px]:hidden">Portfolio</div>
          <div className="text-md mt-3 font-medium leading-5">
            Personalized portfolio-building service designed exclusively to
            boost your college application success. With a customized domain and
            creative design, Ivy Portfolio showcases your achievements, skills,
            and passions in one visually stunning, professional website. Whether
            you’re an artist, musician, scientist, or future leader, this unique
            portfolio is your digital edge, crafted to make you stand out to the
            top Ivy Leagues, only we can offer. Get your portfolio now!!
          </div>
          <div className="mt-5">
            <button className="p-3 px-4 text-white bg-[#008BDC] rounded-lg font-medium uppercase">
              <a href="#portfolio-videos">explore portfolio</a>
            </button>
          </div>
        </div>
        <div className="video-container w-1/2 h-full flex items-center justify-center px-8 max-[600px]:w-full max-[600px]:h-[30vh]">
          <div className="size-full overflow-hidden border-2 rounded-lg">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/tLQLkc2BW9Q"
              title="Ivy portfolio | Only For CTS Students"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        id="portfolio-videos"
        className="w-full grid grid-cols-2 pl-24 gap-5 mt-10 py-10 max-[600px]:mt-0 max-[600px]:grid-cols-1 max-[600px]:gap-5 max-[600px]:pl-0"
      >
        {Portfolios.map((portfolio, i) => (
          <div
            key={i}
            onMouseEnter={(e) => handleMouseEnter(i, e)}
            onMouseLeave={(e) => handleMouseLeave(i, e)}
            className="relative w-[40vw] h-[20vw] overflow-hidden border-2 rounded-xl  max-[600px]:w-[90%] max-[600px]:ml-[5%] max-[600px]:h-[60vw]"
          >
            <Link to={`/portfolio/${portfolio._id}`}>
              <video
                loop
                muted
                className="w-full h-full object-cover"
                src={portfolio.video.url}
                playsInline
              ></video>
            </Link>

            <div className="absolute w-full flex items-center justify-end p-2 bg-gradient-to-b from-transparent to-black h-14 z-[99] bottom-0 gap-2  min-[600px]:hidden ">
              <Link to={`/portfolio/${portfolio._id}`}>
                <button className="px-4 py-1 border-2  text-white rounded-lg font-semibold">
                  View
                </button>
              </Link>
              <a
                className="text-blue-600 font-semibold"
                href={
                  portfolio.livelink.startsWith("http")
                    ? portfolio.livelink
                    : `http://${portfolio.livelink}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-1 border-2  bg text-white rounded-lg font-semibold">
                  Demo
                </button>
              </a>
            </div>
            {hoveredIndex === i && (
              <div className="absolute w-full flex items-center justify-end p-2 bg-gradient-to-b from-transparent to-black h-14 z-[99] bottom-0 gap-2 max-[600px]:hidden  ">
                <Link to={`/portfolio/${portfolio._id}`}>
                  <button className="px-4 py-1 border-2  text-white rounded-lg font-semibold">
                    View
                  </button>
                </Link>
                <a
                  className="text-blue-600 font-semibold"
                  href={
                    portfolio.livelink.startsWith("http")
                      ? portfolio.livelink
                      : `http://${portfolio.livelink}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-1 border-2  bg text-white rounded-lg font-semibold">
                    Demo
                  </button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}