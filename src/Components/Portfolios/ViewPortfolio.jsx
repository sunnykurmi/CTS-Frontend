import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AllPortfolio } from "../../store/Actions/portfolioAction";
import Loader from "../Loader/Loader";

export default function ViewPortfolio() {
  const { id } = useParams();
  const [Portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();

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

  const portfolio = Portfolios.find((portfolio) => portfolio._id === id);

  if (!portfolio) {
    return <Loader />;
  }

  return (
    <div>
      <div className="center text-7xl uppercase font-semibold mt-10 ">
        <p>{portfolio.name}</p>
      </div>
      <div className="center mt-10 gap-5">
        <div className="w-[60%] h-[70vh]  overflow-hidden    rounded-lg">
          <video
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            src={portfolio.video.url}
          ></video>
        </div>
        <div className="w-[30%] h-[70vh] font-medium ">
          <div className="center text-3xl mb-10  font-semibold">
            About Portfolio
          </div>
          <div className="flex text-xl gap-5">
            <p>Portfolio Name -</p>
            <p>{portfolio.name}</p>
          </div>
          <div className="flex text-xl gap-5">
            <p>Portfolio Demo Link -</p>

            <a
              className="text-blue-700 font-semibold"
              href={
                portfolio.livelink.startsWith("http")
                  ? portfolio.livelink
                  : `http://${portfolio.livelink}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
          </div>
          <div className="flex text-xl gap-5">
            <p>Portfolio Price -</p>
            <p>{portfolio.price}</p>
          </div>
          <div className="flex text-xl gap-5">
            <p>Portfolio Purchased Count -</p>
            <p>{portfolio.purchased}</p>
          </div>
          <div className="flex text-xl gap-5">
            <p>Portfolio Description -</p>
            <p>{portfolio.description}</p>
          </div>
          <div className="center ">
            <button className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-lg mt-5">

            Pay {portfolio.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
