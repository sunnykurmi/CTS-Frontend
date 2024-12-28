import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getallinternships,
  markcomplete,
} from "../../store/Actions/adminAction";
import { Link } from "react-router-dom";
import InternProfile from "./InternProfile"; // Adjust the import path as needed
import Loader from "./../Loader/Loader";

function AllInternships() {
  const dispatch = useDispatch();
  const [internpopup, setinternpopup] = useState(false);
  const [selectedInternId, setSelectedInternId] = useState(null);
  const [allinternships, setallinternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] =  useState({}); // Add button loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dispatch(getallinternships());
        setallinternships(response.internship);
      } catch (error) {
        console.error("Failed to fetch internship:", error);
      } finally {
        setLoading(false);
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

  const HandleApprove = async (id) => {
    setButtonLoading((prev) => ({ ...prev, [id]: true }));
    try {
       await dispatch(markcomplete(id));
      
      const response = await dispatch(getallinternships());
      setallinternships(response.internship);

    } catch (error) {
      console.error("Failed to approve internship:", error);
    } finally {
      setButtonLoading((prev) => ({ ...prev, [id]: false }));
    }
  };



  if (loading) {
    return (
      <div>
        <Loader />{" "}
      </div>
    );
  }

  return (
    <div className="overflow-hidden font-medium">
      <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
        <p>All Internships Details</p>
      </div>{" "}
      <br />
      <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden ">
        {allinternships.length === 0 ? (
          <p>No Internships present</p>
        ) : (
          <div className="overflow-y-auto h-full pb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S.No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Internship Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allinternships
                  .slice()
                  .reverse()
                  .map((intern, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {formatDateToIST(intern.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {intern.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {intern.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {intern.contact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {intern.internshiptype}
                      </td>
                      <td>
                        <button
                          className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
                          onClick={() => handleMoreDetailsClick(intern._id)}
                        >
                          More Details
                        </button>
                      </td>
                      <td>
                        {intern.status === "completed" ? (
                          <button className="py-2 px-4 bg-green-400 text-white font-bold rounded-lg flex items-center justify-center">
                            Completed
                          </button>
                        ) : (
                          <button
                          key={intern._id}
                          className="py-2 px-4 bg-gray-400 text-white font-bold rounded-lg flex items-center justify-center"
                          onClick={() => HandleApprove(intern._id)}
                          disabled={buttonLoading[intern._id]}
                        >
                          {buttonLoading[intern._id] ? "Loading..." : "Working"}
                        </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {internpopup && (
        <InternProfile id={selectedInternId} onClose={handleClose} />
      )}
    </div>
  );
}

export default AllInternships;
