import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallivyforms, getpendingroadmap, sendivymail, uploadroadmap } from "../../store/Actions/adminAction";
import { RiCloseLine } from "@remixicon/react";
import { ToastContainer } from "react-toastify";

function AllIVYForms() {
  const dispatch = useDispatch();
  const [allforms, setallforms] = useState([])
  const [loading, setLoading] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState({});

  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
  const [selectedUser, setselectedUser] = useState(null);

  useEffect(() => {
    dispatch(getallivyforms()).then((data) => {
      setallforms(data);
      setLoading(false);
    });
  }, [dispatch]);

  const handleOpenPopup = (payment) => {
    setselectedUser(payment);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setselectedUser(null);
  };


  const handleApprove = async (user) => {
    setLoadingUsers((prev) => ({ ...prev, [user._id]: true }));
    try {
      await dispatch(sendivymail(user));
      alert('Action completed successfully!');
      window.location.reload();
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoadingUsers((prev) => ({ ...prev, [user._id]: false }));
    }
  };
  
  return (
    <div className="overflow-y-auto h-full">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <table className="min-w-full divide-y divide-gray-200 font-medium">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  More Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Functionality
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allforms.reverse().map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.fullname}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            <button
                              className="w-20 h-10 bg-purple-300 rounded-lg font-bold whitespace-nowrap text-sm text-gray-800"
                              onClick={() => handleOpenPopup(user)}
                            >
                              Open
                            </button>
                          </td>
                          
                          <td>
                       {user.response === "pending" ? (
        <button
          key={user._id}
          onClick={() => handleApprove(user)}
          className="w-20 h-10 rounded-lg font-bold whitespace-nowrap text-sm bg-blue-400"
          disabled={loadingUsers[user._id]}
        >
          {loadingUsers[user._id] ? 'Loading...' : 'Approve'}
        </button>

                       ):(
                        <button
       
          className="w-20 h-10 rounded-lg font-bold whitespace-nowrap text-sm bg-green-400"
     
        >
          Approved
        </button>
                       )}

                          </td>
                  
                  
                </tr>
              ))}
          </tbody>
       
          </table>

          {isPopupOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white relative w-[80vw] h-[80vh] overflow-y-scroll p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        User Details
      </h2>
      <div className="w-full flex items-center justify-end">
        <button
          className="mt-4 px-4 py-2 absolute right-0 top-0 bg-red-500 text-white rounded-lg"
          onClick={handleClosePopup}
        >
          Close
        </button>
      </div>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Full Name</td>
            <td className="border px-4 py-2">{selectedUser.fullname}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Contact</td>
            <td className="border px-4 py-2">{selectedUser.contact}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Email</td>
            <td className="border px-4 py-2">{selectedUser.email}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Gender</td>
            <td className="border px-4 py-2">{selectedUser.gender}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">City</td>
            <td className="border px-4 py-2">{selectedUser.city}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Class</td>
            <td className="border px-4 py-2">{selectedUser.class}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Education Board</td>
            <td className="border px-4 py-2">{selectedUser.educationBoard}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">About SAT Exam</td>
            <td className="border px-4 py-2">{selectedUser.aboutsatexam}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">SAT Score</td>
            <td className="border px-4 py-2">{selectedUser.satScore}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Dream University</td>
            <td className="border px-4 py-2">{selectedUser.dreamuniversity}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">English Test</td>
            <td className="border px-4 py-2">{selectedUser.englishtest}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Extracurriculars</td>
            <td className="border px-4 py-2">{selectedUser.ecs}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Family Income</td>
            <td className="border px-4 py-2">{selectedUser.familyincome}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Physical Disabilities</td>
            <td className="border px-4 py-2">{selectedUser.physicaldisabilities}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Disability Type</td>
            <td className="border px-4 py-2">{selectedUser.physicaldisabilitiestype}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">How You Know Us</td>
            <td className="border px-4 py-2">{selectedUser.howuknow.join(', ')}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
)}
        </div>
      )}
    </div>
  );
}

export default AllIVYForms;