import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallroadmaps, getallusers } from "../../store/Actions/adminAction";
import { Link } from "react-router-dom";

function AllRoadmaps() {
  const dispatch = useDispatch();
  const [allroadmaps, setallroadmaps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getallroadmaps());
        setallroadmaps(response.roadmaps);
      } catch (error) {
        console.error("Failed to fetch roadmaps:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const formatDateToIST = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <div className="overflow-hidden">
      <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
        <p>All Roadmaps Details</p>
      </div>{" "}
      <br />
      <div className="w-full h-[80vh] flex flex-col gap-2 px-5 py-10 overflow-y-scroll capitalize">
      {allroadmaps.length === 0 ? (
          <p>No roadmaps present</p>
        ) : (
        allroadmaps.slice()
        .reverse().map((roadmap, index) => (
          <div
            key={index}
            className="w-full border-2 shrink-0 h-[10vh] flex items-center justify-evenly "
          >
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">S.No</p>
              <p className="font-medium text-sm">{index + 1}</p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">Name</p>
              <p className="font-medium text-sm">{roadmap.name}</p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">Created at</p>
              <p className="font-medium text-sm">
                {" "}
                {formatDateToIST(roadmap.createdAt)}
              </p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">
                Total Roadmaps created
              </p>
              <p className="font-medium text-sm capitalize">
                {roadmap.email}
              </p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <Link to={`/student/${roadmap.roadmapuser._id}`}>
                <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center">
                  Student Details
                </button>
              </Link>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <a href={roadmap.path} target="_blank" rel="noopener noreferrer">
                <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center">
                  View Roadmap
                </button>
              </a>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}

export default AllRoadmaps;
