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
           <div
             onClick={onClose} className="cursor-pointer  rounded-full px-2 py-1 mb-2 bg-white flex items-center">
            <RiCloseFill
            
              className="  "
            />
            Close
           </div>
          </div>
          <div className="w-[70%] h-[70vh] overflow-y-scroll relative bg-white p-5 font-semibold">
            <table className="table-auto w-full">
            <tbody>
                {Object.entries(intern)
                  .filter(([key]) => !["updatedAt", "userid", "_id" , "__v" ,"createdAt"].includes(key)) // Exclude specific keys
                  .map(([key, value]) => (
                    <tr key={key}>
                    <td className="border px-4 py-2 capitalize">
                      {key.replace(/_/g, " ")}
                    </td>
                    <td className="border px-4 py-2">
                      {key === "whatsapp_group_link" ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600"
                        >
                          {value}
                        </a>
                      ) : typeof value === "object" ? (
                        JSON.stringify(value)
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}