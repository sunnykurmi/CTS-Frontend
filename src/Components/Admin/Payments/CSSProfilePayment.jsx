import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getallcsspayments,
  getallessaypayments,
  getallportfoliopayments,
  getallusers,
} from "../../../store/Actions/adminAction";
import { AllPortfolio } from "./../../../store/Actions/portfolioAction";
import { Link } from "react-router-dom";

export default function CSSProfilePayments() {
  const dispatch = useDispatch();
  const [AllPayments, setAllPayments] = useState([]);
  const [AllUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    dispatch(getallusers()).then((data) => {
      setAllUsers(data);
    });
    dispatch(getallcsspayments()).then((data) => {
      setAllPayments(data);
      setLoading(false);
    });
  }, [dispatch]);

  const handleOpenPopup = (payment) => {
    setSelectedPayment(payment);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPayment(null);
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
                  CSS Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {AllPayments.slice()
                .reverse()
                .map((payment, index) => (
                  <tr key={index}>
                    {AllUsers &&
                      AllUsers.filter(
                        (user) => user._id === payment.userid
                      ).map((user) => (
                        <React.Fragment key={user._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                          <Link to={`/student/${payment.userid}`}>
                              {user.name}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {user.contact ? user.contact : "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            <button
                              className="w-20 h-10 bg-purple-300 rounded-lg font-bold whitespace-nowrap text-sm text-gray-800"
                              onClick={() => handleOpenPopup(payment)}
                            >
                              Open
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 ">
                            {payment.amount}
                          </td>
                          <td>
                            <button
                              className={`w-20 h-10 rounded-lg font-bold whitespace-nowrap text-sm text-gray-800 ${
                                payment.status === "paid"
                                  ? "bg-green-400"
                                  : payment.status === "created"
                                  ? "bg-blue-300"
                                  : ""
                              }`}
                            >
                              {payment.status}
                            </button>
                          </td>
                        </React.Fragment>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>

          {isPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white w-[50vw] p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-center">
                  CSS Profile Details
                </h2>
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">CSS Profile Id
                      </td>
                      <td className="border px-4 py-2">
                        {selectedPayment.cssprofileid
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Password
                      </td>
                      <td className="border px-4 py-2">
                        {selectedPayment.password
                        }
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Meeting</td>
                      <td className="border px-4 py-2   ">
                      {selectedPayment.meeting
                        }
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
                <div className="w-full flex items-center justify-end">
                  <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={handleClosePopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
