import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllPortfolio } from "../../store/Actions/portfolioAction";
import Loader from "../Loader/Loader";
import { sendpayment, verifypayment } from "../../store/Actions/paymentAction";
import {
  RiArrowLeftCircleFill,
  RiArrowLeftLine,
  RiArrowLeftSLine,
} from "@remixicon/react";

export default function ViewPortfolio() {
  const key = "rzp_live_S2B5SbkYZAHF0J";
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [Portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector ((state) => state.user.isAuth);

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

  const checkoutHandler = async () => {

    if (!isAuth) {
        window.alert("Please login first to do payment");
        navigate("/login", { state: { from: `/portfolio/${id}` } });
        return;
      }

    setIsLoading(true);
    try {
      const order = await dispatch(sendpayment(id));
      const options = {
        key: key,
        amount: portfolio.price,
        currency: "INR",
        name: portfolio.name,
        description: portfolio.description,
        image: "https://avatars.githubusercontent.com/u/25058652?v=4", //loggedinuser img
        order_id: order.id,
        callback_url: dispatch(verifypayment()),
        prefill: {
          name: "Gaurav Kumar", //loggedinuser name
          email: "gaurav.kumar@example.com", //loggedinuser email
        },
        notes: {
          address: "CTS Bhopal",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="relative center text-7xl uppercase font-semibold mt-10 ">
        <div className="w-44 absolute left-0 h-full flex items-center justify-center text-base ">
          <Link
            className=" h-12 gap-3 rounded-full  bg-[#F58612] text-white flex items-center justify-center p-2 font-bold"
            to={`/portfolio`}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className=" text-[#0000009b]" />{" "}
            </div>
            <button className="mr-2">Go Back </button>
          </Link>
        </div>

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
            <button
              onClick={checkoutHandler}
              className="px-4 py-2 bg-blue-500 font-semibold text-white rounded-lg mt-5"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="center gap-3">
                  <div className="loader"></div>
                  Please Wait...
                </div>
              ) : (
                `Pay ${portfolio.price}`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
