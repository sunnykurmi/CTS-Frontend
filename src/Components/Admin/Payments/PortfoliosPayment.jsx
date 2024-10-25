import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getallportfoliopayments,
  getallusers,
} from "../../../store/Actions/adminAction";
import { AllPortfolio } from "./../../../store/Actions/portfolioAction";
import { Link } from "react-router-dom";

export default function PortfoliosPayments() {
  const dispatch = useDispatch();
  const [AllPayments, setAllPayments] = useState([]);
  const [AllUsers, setAllUsers] = useState([]);
  const [AllPortfolios, setAllPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(AllPortfolio()).then((data) => {
      setAllPortfolios(data);
    });
    dispatch(getallusers()).then((data) => {
      setAllUsers(data);
    });
    dispatch(getallportfoliopayments()).then((data) => {
      setAllPayments(data);
      setLoading(false);
      //   console.log(data);
    });
  }, [dispatch]);

  return (
    <div className="overflow-y-auto h-full">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 font-medium ">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
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
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Portfolio Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 ">
            {AllPayments &&
              AllPayments.slice()
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
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {payment
                              ? new Date(payment.createdAt).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )
                              : "TBD"}
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
                            {AllPortfolios &&
                              AllPortfolios.filter(
                                (portfolio) =>
                                  portfolio._id ===
                                  (payment && payment.portfolioId)
                              ).map((portfoliodata) => (
                                <span key={portfoliodata._id}>
                                  <Link
                                    to={`/portfolio/${portfoliodata._id}`}
                                    className="text-blue-700"
                                  >
                                    <button>
                                      {portfoliodata.name
                                        ? portfoliodata.name
                                        : "N/A"}
                                    </button>
                                  </Link>
                                </span>
                              ))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {payment.amount / 100}
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
      )}
    </div>
  );
}
