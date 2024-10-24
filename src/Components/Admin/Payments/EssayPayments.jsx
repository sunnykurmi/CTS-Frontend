import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getallessaypayments,
  getallusers,
} from "../../../store/Actions/adminAction";

export default function EssayPayments() {
  const dispatch = useDispatch();
  const [AllPayments, setAllPayments] = useState([]);
  const [AllUsers, setAllUsers] = useState([]);

  useEffect(() => {
    dispatch(getallusers()).then((data) => {
      setAllUsers(data);
    });
    dispatch(getallessaypayments()).then((data) => {
      setAllPayments(data);
    });
  }, [dispatch]);

  console.log(AllPayments);
  console.log(AllUsers);

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
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
              Portfolio Purchased
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          { AllPayments&& AllPayments.slice()
            .reverse()
            .map((payment, index) => (
              <tr key={index}>
                {AllUsers &&
                  AllUsers.filter((user) => user._id === payment.userid).map(
                    (user) => (
                      <React.Fragment key={user._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {user.contact ? user.contact : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {user.contact ? user.contact : "N/A"}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm text-gray-800 ${
                            payment.status === "paid"
                              ? "bg-green-400"
                              : payment.status === "created"
                              ? "bg-blue-300"
                              : ""
                          }`}
                        >
                          {payment.status}
                        </td>
                      </React.Fragment>
                    )
                  )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
