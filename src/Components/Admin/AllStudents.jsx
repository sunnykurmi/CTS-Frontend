import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallusers } from "../../store/Actions/adminAction";
import { Link } from "react-router-dom";

function AllStudents() {
  const dispatch = useDispatch();
  const [allstudents, setallstudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getallusers());
        setallstudents(response);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStudents = allstudents.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (student.contact && student.contact.includes(searchQuery))
  );

  return (
    <div className="overflow-hidden">
      <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
        <p>All students Details</p>
      </div>{" "}
      <br />
      <div className="w-full flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search by name, email, or contact"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border rounded-lg w-1/2"
        />
      </div>
      <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
        {filteredStudents.length === 0 ? (
          <p>No User found</p>
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
                    Roadmaps Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.slice().reverse().map((student, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {student.contact ? student.contact : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {student.roadmaps.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/student/${student._id}`}>
                        <button className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg">
                          More Details
                        </button>
                      </Link>
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

export default AllStudents;