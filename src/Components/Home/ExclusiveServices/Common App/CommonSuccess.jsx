import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { commonapppaymentsuccess } from "../../../../store/Actions/servicesAction";
import { asynccurrentUser } from "../../../../store/Actions/userActions";

function CommonSuccess() {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
      dispatch(asynccurrentUser());
    }, [dispatch]);


    useEffect(() => {
        if (user && id) {
          dispatch(commonapppaymentsuccess(id, user));
        }
      }, [user, id, dispatch]);
      

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);
  return (
    <div>
      <div className="center h-screen w-full flex-col text-center ">
        <div className="center p-5 flex-col gap-3 shadow-xl w-[30vw]">
          <div className="redirecting-container w-full h-fit  text-end">
          <p className="text-sm">Redirecting to Home in {countdown} </p>
          </div>
          <p className="text-3xl font-semibold">Payment Success</p>
          <img
            className="w-[50%]"
            src="/Images/green tick payment success.gif"
            alt=""
          />
          <p className="text-2xl font-medium">
            {" "}
            🎉 Your Payment is Successful 🎉
          </p>
          <p className=" text-xl ">Thank you for your payment </p>
          <a
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="center"
          >
            <button className="px-4 py-2 w-[40%] border-2 shadow-lg rounded-lg font-semibold text-black center gap-3">
              {" "}
              <img
                className="w-[15%]"
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                alt=""
              />{" "}
              Open Gmail
            </button>
          </a>
          <a href="/" className="font-medium text-orange-500 underline">
            Home Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default CommonSuccess
