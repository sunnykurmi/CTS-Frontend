import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllPortfolio } from "../../store/Actions/portfolioAction";
import Loader from "../Loader/Loader";
import { sendpayment } from "../../store/Actions/paymentAction";
import {
  RiArrowLeftCircleFill,
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightUpFill,
  RiStarFill,
} from "@remixicon/react";
import { asynccurrentUser } from "../../store/Actions/userActions";

export default function ViewPortfolio() {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [Portfolios, setPortfolios] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(AllPortfolio()).then((data) => setPortfolios(data));
      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      }
    };
    fetchData();
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const portfolio = Portfolios.find((portfolio) => portfolio._id === id);

  if (!portfolio) {
    return <Loader />;
  }
  
  console.log(user);

  const checkoutHandler = async () => {
    if (!isAuth) {
      window.alert("Please login first to do payment");
      navigate("/login", { state: { from: `/portfolio/${id}` } });
      return;
    }

    setIsLoading(true); 
    try {
      const order = await dispatch(sendpayment(id , user._id));
      const options = {
        key: key,
        amount: portfolio.price,
        currency: "INR",
        name: "Cross The Skylimits",
        description: "Payment for Portfolio",
        image: "https://crosstheskylimits.online/Images/CTS%20%20%20Logo.png", //loggedinuser img

        order_id: order.id,
        callback_url:
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/verify-payment`,
        prefill: {
          name: user.name, //loggedinuser name
          email: user.email, //loggedinuser email
        },
        notes: {
          address: "CTS Bhopal",
        },
        theme: {
          color: "#121212",
        },
        method: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: false,
          paylater: false,
          banktransfer: true,
          qr: false,
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
      <div className="relative center ">
        <div className="w-44 absolute left-0 h-full flex items-center justify-center text-base top-14    ">
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
      </div>
      <div className="center  text-7xl uppercase font-semibold pt-10  max-[600px]:pt-32 max-[600px]:text-4xl  ">
        <p>{portfolio.name}</p>
      </div>
      <div className="w-full  h-fit  p-5 lg:pl-28 lg:flex  lg:justify-center lg:items-center lg:gap-20   ">
        <div className="video-container w-full h-[40vh] lg:h-[50vh] rounded-lg overflow-hidden sm:w-2/3">
          <video
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            src={portfolio.video.url}
          ></video>
        </div>
        <div className="text-container w-full h-fit mt-5 lg:w-[50%] lg:h-fit lg:p-10 ">
          <h3 className="text-lg font-semibold">CTS Portfolio</h3>
          <h1 className="text-4xl font-bold mt-5 capitalize">
            {portfolio.name}
          </h1>
          <p className="mt-3 leading-5 lg:w-10/12">{portfolio.description}</p>
          <h2 className="font-bold text-xl text-red-400 mt-5 inline-flex items-center gap-2 cursor-pointer  ">
            <a
              className=" font-semibold center"
              href={
                portfolio.livelink.startsWith("http")
                  ? portfolio.livelink
                  : `http://${portfolio.livelink}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              DemoLink <RiArrowRightUpFill />
            </a>
          </h2>
          <div className="rating-div mt-5 flex items-center gap-2 text-xl">
            <RiStarFill />
            <p className="font-bold">4.5/5</p>
          </div>
          <button
            onClick={checkoutHandler}
            disabled={isLoading}
            className="bg-[#F58612] rounded-md text-white p-5 px-10 font-semibold mt-5 text-xl"
          >
            {isLoading ? (
              <div className="center gap-3">
                <div className="loader"></div>
                Please Wait...
              </div>
            ) : (
              ` Buy Now Rs. ${portfolio.price}`
            )}
          </button>
          <p className="mt-3">Inclusive of all taxes</p>
        </div>
      </div>
    </div>
  );
}
