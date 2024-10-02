import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallinternships } from "../../store/Actions/adminAction";
import { Link } from "react-router-dom";
import InternProfile from "./InternProfile"; // Adjust the import path as needed

function AllInternships() {
  const dispatch = useDispatch();
  const [internpopup, setinternpopup] = useState(false);
  const [selectedInternId, setSelectedInternId] = useState(null);
  const [allinternships, setallinternships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getallinternships());
        setallinternships(response.internship);
      } catch (error) {
        console.error("Failed to fetch internship:", error);
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

  const handleMoreDetailsClick = (internId) => {
    setSelectedInternId(internId);
    setinternpopup(true);
  };

  const handleClose = () => {
    setinternpopup(false);
    setSelectedInternId(null);
  };

  const handleSendMailClick = (email) => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };

  return (
    <div className="overflow-hidden">
      <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
        <p>All Internships Details</p>
      </div>{" "}
      <br />
      <div className="w-full h-[80vh] flex flex-col gap-2 px-5 py-10 overflow-y-scroll capitalize">
        {allinternships.length === 0 ? (
          <p>No Internships present</p>
        ) : (
          allinternships
            .slice()
            .reverse()
            .map((intern, index) => (
              <div
                key={index}
                className="w-full border-2 shrink-0 h-[10vh] flex items-center justify-evenly "
              >
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <p className="text-xs font-semibold text-gray-500">S.No</p>
                  <p className="font-medium text-sm">{index + 1}</p>
                </div>
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <p className="text-xs font-semibold text-gray-500">Name</p>
                  <p className="font-medium text-sm">{intern.name}</p>
                </div>
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <p className="text-xs font-semibold text-gray-500">Email</p>
                  <p className="font-medium text-sm">{intern.email}</p>
                </div>
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <p className="text-xs font-semibold text-gray-500">Mode</p>
                  <p className="font-medium text-sm">{intern.mode}</p>
                </div>
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <p className="text-xs font-semibold text-gray-500">Applied at</p>
                  <p className="font-medium text-sm">
                    {" "}
                    {formatDateToIST(intern.createdAt)}
                  </p>
                </div>
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <button
                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
                    onClick={() => handleMoreDetailsClick(intern._id)}
                  >
                    More Details
                  </button>
                </div>
                <div className="h-full w-[20%] flex flex-col items-center justify-center">
                  <button
                    className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
                    onClick={() => handleSendMailClick(intern.email)}
                  >
                    Send Mail
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
      {internpopup && (
        <InternProfile id={selectedInternId} onClose={handleClose} />
      )}
    </div>
  );
}

export default AllInternships;