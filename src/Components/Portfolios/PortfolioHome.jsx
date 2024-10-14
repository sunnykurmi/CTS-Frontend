import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllPortfolio } from "../../store/Actions/portfolioAction";
import Nav from "../Student/Nav";
import { asynccurrentUser } from "../../store/Actions/userActions";
import Loader from "../Loader/Loader";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

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
      <div className="">

     <div className="w-full h-40 flex items-center justify-center max-[600px]:h-16 ">
     <div className="w-fit  bg-[#f8851127] h-24  rounded-full flex items-center justify-evenly max-[600px]:w-full max-[600px]:rounded-none max-[600px]:pr-2 max-[600px]:h-full max-[600px]:justify-between max-[600px]:px-5 ">
       <img
         className="w-[12%] max-[600px]:w-[30%]"
         src="/Images/CTS   Logo.png"
         alt=""
       />
       <div className="w-[50%] h-full flex items-center justify-evenly font-bold text-[#393E46] max-[600px]:text-xs max-[600px]:w-fit max-[600px]:gap-2 max-[600px]:hidden">
         <a className="hover-link" href="#home">
           HOME
         </a>
         <Link className="hover-link" to="/portfolio">
           PORTFOLIO
         </Link>
         <Link className="hover-link" to="/apply-internship-form">
           INTERNSHIP
         </Link>
         <Link className="hover-link" to="/services">
           SERVICES
         </Link>
         <Link className="hover-link" to="/abroadstudy">
           CTS ABROAD
         </Link>
         <a className="hover-link" href="#footer">
           ABOUT
         </a>
       </div>
       <div className="w-[25%] h-full flex items-center justify-evenly max-[600px]:hidden ">
         <Link to="/login" className="">
           <button className="w-32 h-14 rounded-full border-2 border-[#0000000c]  font-bold">
             LOGIN
           </button>
         </Link>
         <Link to="/signup" className="max-[600px]:scale-50">
           <button className="w-32 h-14 rounded-full bg-[#F58612] text-white font-bold">
             REGISTER
           </button>
         </Link>
       </div>
       <div className="center flex-col min-[600px]:hidden">
         <RiMenuLine onClick={toggleMenu} />
       </div>
     </div>
   </div>
   <div
     className={`w-full h-fit pb-10 bg-white fixed top-0 left-0 z-[99] min-[600px]:hidden transition-transform duration-500 ${
       menuOpen ? "translate-y-0" : "-translate-y-full"
     }`}
   >
     <div className="w-full flex items-center justify-end p-5">
       <RiCloseLine className="scale-150" onClick={toggleMenu} />
     </div>
     <div className=" pr-5 flex-col uppercase text-2xl font-semibold center gap-3">
       <a href="/">Home</a>
       <Link to="/portfolio">Portfolio</Link>
       <Link to="/apply-internship-form">Internship </Link>
       <Link to="/abroadstudy">CTS Abroad</Link>
       <Link to="/services">Services</Link>
       <Link to="/login" className="">
         Login{" "}
       </Link>
       <Link to="/signup" className="">
         Register
       </Link>
     </div>
   </div>
      </div>
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
