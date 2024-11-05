import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallexampreppayments } from "../../../store/Actions/adminAction";

export default function ExamPayments() {
  const dispatch = useDispatch();
  const [AllExamPayments, setAllExamPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getallexampreppayments()).then((data) => {
      setAllExamPayments(data);
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div>
      
      <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize font-medium">
        {AllExamPayments.length === 0 ? (
          <p>No Exams present</p>
        ) : (
          <div className="overflow-y-auto h-full pb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S.No
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
                    Exam Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
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
                {AllExamPayments.reverse().map((exam, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.name}
                    </td>
                    <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                      {exam.email}
                    </td>
                    <td className="px-6 py-4 lowercase whitespace-nowrap text-sm text-gray-700">
                      {exam.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.exam_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.score}
                    </td>
                  
                    <td>
                            <button
                              className={`w-20 h-10 rounded-lg font-bold whitespace-nowrap text-sm text-gray-800 ${
                                exam.status === "paid"
                                  ? "bg-green-400"
                                  : exam.status === "created"
                                  ? "bg-blue-300"
                                  : ""
                              }`}
                            >
                              {exam.status}
                            </button>
                          </td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
