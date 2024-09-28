import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallinternships } from "../../store/Actions/adminAction";
import { RiCloseFill } from "@remixicon/react";

export default function InternProfile({ id, onClose }) {
  const dispatch = useDispatch();
  const [allinternships, setallinternships] = useState([]);

  useEffect(() => {
    const fetchintern = async () => {
      try {
        const response = await dispatch(getallinternships());
        setallinternships(response.internship);
      } catch (error) {
        console.error("Failed to fetch internship:", error);
      }
    };
    fetchintern();
  }, [dispatch]);

  const intern = allinternships.find((intern) => intern._id === id);

  return (
    <div>
      {intern && (
        <div className="fixed top-0 z-[99] flex items-center justify-center left-0 w-full h-[100vh] bg-[#00000069]">
          <div className="w-[70%] h-[70vh] overflow-y-scroll relative bg-white p-5 font-semibold">
            <RiCloseFill
              onClick={onClose}
              className="absolute right-5 cursor-pointer top-5"
            />
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="border px-4 py-2">User Name</td>
                  <td className="border px-4 py-2">{intern.name}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Contact</td>
                  <td className="border px-4 py-2">{intern.contact}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Email</td>
                  <td className="border px-4 py-2">{intern.email}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User DOB</td>
                  <td className="border px-4 py-2">{intern.dateofbirth}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Class</td>
                  <td className="border px-4 py-2">
                    {intern.classGrade ? intern.classGrade : "Not a student"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User City</td>
                  <td className="border px-4 py-2">{intern.city}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Family Income</td>
                  <td className="border px-4 py-2">{intern.income}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Educational Board</td>
                  <td className="border px-4 py-2">{intern.board}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Dream University</td>
                  <td className="border px-4 py-2">{intern.dreamuniversity}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Reason</td>
                  <td className="border px-4 py-2">{intern.reason}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User Skills</td>
                  <td className="border px-4 py-2">
                    {intern.skills && intern.skills.length > 0 ? (
                      <ul>
                        {intern.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      "No skills listed"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">User ECS</td>
                  <td className="border px-4 py-2">{intern.ecs}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}