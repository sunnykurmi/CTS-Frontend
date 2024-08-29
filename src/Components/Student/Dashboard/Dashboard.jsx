import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../../store/Actions/userActions";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "@remixicon/react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  console.log(user);

  const formatDateToIST = (timestamp) => {
    const date = new Date(timestamp);
    const options = { timeZone: 'Asia/Kolkata', day: '2-digit', month: 'short', year: '2-digit' };
    return date.toLocaleDateString('en-GB', options);
  };
  if (!user) {
    return (
      <div>
        <div className=" fixed top-0 z-[999] w-full h-[100vh] bg-[#b1b1b1d6] flex flex-col items-center justify-center ">
          <img className="w-[5%]" src="/Images/loading.webp" alt="" />
          <p className="text-2xl mt-5 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-[89vh] p-5 overflow-y-scroll">
        <p className="text-3xl ">Hey {user.name} 👋</p>
        <p className="text-xl mt-5">Welcome to your dashboard</p>
        {user.roadmaps.length === 0 ? (
          <div className="">
            <p className="text-xl mt-5">
              You have not created any roadmap yet start creating now{" "}
            </p>
            <div className="w-full flex items-center justify-center">
              <Link
                className=" h-12 gap-5 rounded-full pl-5 bg-[#F58612] text-white flex items-center justify-between p-2 font-bold"
                to="/createroadmap"
              >
                <button className=""> Create Your Roadmap </button>
                <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
                  {" "}
                  <RiArrowRightSLine className=" text-[#0000009b]" />{" "}
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-xl mt-5">
            You have created {user.roadmaps.length} Roadmaps
            <div className="flex w-full flex-col gap-2 items-center justify-center mt-5">
            {user.roadmaps.map((roadmap, i) => (
              <div
                className="w-[70%] flex  h-20   rounded-lg border-2 items-center justify-between px-5"
                key={roadmap._id}
              >
                <p>{i + 1}✔️</p>
               <p>{formatDateToIST(roadmap.createdAt)}🗓️</p>
                <p>Vardaan Roadmap by CTS❤️</p>
                <a
                className="text-blue-500"
                  href={roadmap.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>View online 🌐</p>
                </a>
              </div>
            ))}
            </div>
          </p>
        )}
      </div>
    </div>
  );
}
