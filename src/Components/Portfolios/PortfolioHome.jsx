import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AllPortfolio } from "../../store/Actions/portfolioAction";

export default function PortfolioHome() {
  const [Portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index, e) => {
    setHoveredIndex(index);
    e.currentTarget.querySelector('video').play();
  };

  const handleMouseLeave = (index, e) => {
    setHoveredIndex(null);
    e.currentTarget.querySelector('video').pause();
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(AllPortfolio()).then((data) => setPortfolios(data));
      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div className="w-full flex items-center justify-between p-5 scroller ">
        <img className="w-[10%]" src="/Images/CTS   Logo.png" alt="" />
        <div className="w-[25%] h-full flex items-center justify-evenly ">
          <Link to="/login" className="max-[600px]:hidden">
            <button className="w-28 h-10 rounded-full border-2 border-[#F58612]  font-medium">
              LOGIN
            </button>
          </Link>
          <Link to="/signup" className="max-[600px]:scale-50">
            <button className="w-28 h-10 rounded-full bg-[#F58612] text-white font-medium">
              REGISTER
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full center uppercase text-4xl font-semibold">
        <p>Top Portfolios</p>
      </div>
      <div className="w-full grid grid-cols-4 pl-10 gap-5 mt-10 py-10 max-[600px]:grid-cols-2 max-[600px]:gap-2 max-[600px]:pl-6">
        {Portfolios.map((portfolio, i) => (
          <div
            key={i}
            onMouseEnter={(e) => handleMouseEnter(i, e)}
            onMouseLeave={(e) => handleMouseLeave(i, e)}
            className="relative w-[20vw] h-[20vw] overflow-hidden border-2 rounded-xl  max-[600px]:w-[40vw] max-[600px]:h-[30vw]"
          >
            <video
               loop
               muted
              className="w-full h-full object-cover"
              src={portfolio.video.url}
            ></video>
              {hoveredIndex === i  && (
            <div className="absolute w-full flex items-center justify-end p-2 bg-gradient-to-b from-transparent to-black h-14 z-[99] bottom-0 gap-2  ">
              <Link to={`/portfolio/${portfolio._id}`} >
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
