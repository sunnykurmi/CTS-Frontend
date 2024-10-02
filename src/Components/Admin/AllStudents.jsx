import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallusers } from "../../store/Actions/adminAction";
import { Link } from "react-router-dom";

function AllStudents() {
  const dispatch = useDispatch();
  const [allstudents, setallstudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getallusers());
        setallstudents(response.users);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="overflow-hidden">
      <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
        <p>All students Details</p>
      </div>{" "}
      <br />
      <div className="w-full h-[80vh] flex flex-col gap-2 px-5 py-10 overflow-y-scroll capitalize">
      {allstudents.length === 0 ? (
          <p>No User found</p>
        ) : (
        allstudents.slice()
        .reverse().map((student, index) => (
          <div
            key={index}
            className="w-full border-2 h-[10vh] shrink-0 flex items-center justify-evenly "
          >
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">S.No</p>
              <p className="font-medium text-sm">{index + 1}</p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">Name</p>
              <p className="font-medium text-sm">{student.name}</p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">Email</p>
              <p className="font-medium text-sm">{student.email}</p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">Contact</p>
              <p className="font-medium text-sm">{student.contact ? student.contact : "-"}</p>            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-gray-600">
                Roadmaps created
              </p>
              <p className="font-medium text-sm capitalize">
                {student.roadmaps.length}
              </p>
            </div>
            <div className="h-full w-[20%] flex flex-col items-center justify-center">
              <Link to={`/student/${student._id}`}>
                <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}

export default AllStudents;
