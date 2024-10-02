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
        <div className="fixed top-0 z-[99] flex flex-col items-center justify-center left-0 w-full h-[100vh] bg-[#00000069]">
          <div className="w-[70%] h-10 flex items-end justify-end ">
           <div className="cursor-pointer  rounded-full px-2 py-1 mb-2 bg-white flex items-center">
            <RiCloseFill
              onClick={onClose}
              className="  "
            />
            Close
           </div>
          </div>
          <div className="w-[70%] h-[70vh] overflow-y-scroll relative bg-white p-5 font-semibold">
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="border px-4 py-2"> Name</td>
                  <td className="border px-4 py-2">{intern.name}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Contact</td>
                  <td className="border px-4 py-2">{intern.contact}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Email</td>
                  <td className="border px-4 py-2">{intern.email}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> DOB</td>
                  <td className="border px-4 py-2">{intern.dateofbirth}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Class</td>
                  <td className="border px-4 py-2">
                    {intern.classGrade ? intern.classGrade : "Not a student"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> City</td>
                  <td className="border px-4 py-2">{intern.city}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Family Income</td>
                  <td className="border px-4 py-2">{intern.income}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Educational Board</td>
                  <td className="border px-4 py-2">{intern.board}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Dream University</td>
                  <td className="border px-4 py-2">{intern.dreamuniversity}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Reason</td>
                  <td className="border px-4 py-2">{intern.reason}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Mode of Joining</td>
                  <td className="border px-4 py-2">{intern.mode}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"> Skills</td>
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
                  <td className="border px-4 py-2"> ECS</td>
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