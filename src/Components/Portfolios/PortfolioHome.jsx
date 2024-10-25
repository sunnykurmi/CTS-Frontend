import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllPortfolio } from "../../store/Actions/portfolioAction";
import Nav from "../Student/Nav";
import { asynccurrentUser } from "../../store/Actions/userActions";
import Loader from "../Loader/Loader";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import HomeNav from "../Home/HomeNav";

export default function PortfolioHome() {
  const [Portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();
  const isAuth = useSelector ((state) => state.user.isAuth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index, e) => {
    setHoveredIndex(index);
    e.currentTarget.querySelector('video').play();
  };

  const handleMouseLeave = (index, e) => {
    setHoveredIndex(null);
    e.currentTarget.querySelector('video').pause();
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
        dispatch(AllPortfolio()).then((data) => setPortfolios(shuffleArray(data)));
      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      }
    };
    fetchData();
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if(Portfolios.length === 0) return <div><Loader></Loader></div>


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
    {!isAuth ? (
      <HomeNav />
    ) : (
      <Nav />
    )}
      <div className="w-full center uppercase text-4xl mt-5 font-semibold">
        <p>Top Portfolios</p>
      </div>
      <div className="w-full grid grid-cols-2 pl-24 gap-5 mt-10 py-10 max-[600px]:mt-0 max-[600px]:grid-cols-1 max-[600px]:gap-5 max-[600px]:pl-0">
        {Portfolios.map((portfolio, i) => (
          <div
            key={i}
            onMouseEnter={(e) => handleMouseEnter(i, e)}
            onMouseLeave={(e) => handleMouseLeave(i, e)}
            className="relative w-[40vw] h-[20vw] overflow-hidden border-2 rounded-xl  max-[600px]:w-[90%] max-[600px]:ml-[5%] max-[600px]:h-[60vw]"
          >
             <Link to={`/portfolio/${portfolio._id}`} >
            <video
               loop
               muted
              className="w-full h-full object-cover"
              src={portfolio.video.url}
            ></video>
             </Link>


             <div className="absolute w-full flex items-center justify-end p-2 bg-gradient-to-b from-transparent to-black h-14 z-[99] bottom-0 gap-2  min-[600px]:hidden ">
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
              {hoveredIndex === i  && (
            <div className="absolute w-full flex items-center justify-end p-2 bg-gradient-to-b from-transparent to-black h-14 z-[99] bottom-0 gap-2 max-[600px]:hidden  ">
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
