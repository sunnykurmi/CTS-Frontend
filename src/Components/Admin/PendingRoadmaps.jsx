import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getpendingroadmap, uploadroadmap } from "../../store/Actions/adminAction";
import { RiCloseLine } from "@remixicon/react";

function PendingRoadmaps() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pendingroadmap, setpendingroadmap] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    file: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getpendingroadmap());
        setpendingroadmap(response.roadmaps);
      } catch (error) {
        console.error("Failed to fetch roadmaps:", error);
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

  const downloadFile = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "roadmap.txt"); // Set the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleUploadClick = (roadmap) => {
    setSelectedRoadmap(roadmap);
    setFormData({
      id: roadmap._id,
      name: roadmap.roadmapcreater,
      email: roadmap.email,
      file: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("id", formData.id);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("file", formData.file);
    setLoading(true);
    try {
      await dispatch(uploadroadmap(form));
      alert("Roadmap uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading the roadmap:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden font-medium">
      {selectedRoadmap && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[40%] py-10 bg-white border-2 z-[99] flex flex-col gap-5 items-center text-center justify-center">
            <div className="w-full flex items-end justify-end p-1 px-10 ">
              <RiCloseLine
                className="text-red-600 cursor-pointer"
                onClick={() => setSelectedRoadmap(null)}
              />
            </div>
            <p className="capitalize text-xl font-semibold">
              Select file and send the roadmap
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-10"
            >
              <div className="w-full flex justify-evenly items-center gap-5">
                <p>ID</p>
                <input
                  className="border-2 outline-none h-10 w-[20vw]"
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="w-full flex justify-evenly items-center gap-5">
                <p>Name</p>
                <input
                  className="border-2 outline-none h-10 w-[20vw]"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="w-full flex justify-evenly items-center gap-5">
                <p>Email</p>
                <input
                  className="border-2 outline-none h-10 w-[20vw]"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="w-full flex justify-evenly items-center gap-5">
                <p>Select PDF</p>
                <input
                  className=""
                  type="file"
                  name="file"
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex justify-evenly items-center gap-5">
                {loading ? (
                  <p className="px-4 py-2 rounded-lg bg-green-500">Loading...</p>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-green-500"
                  >
                    Send Roadmap
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="w-full text-2xl pt-5 font-medium uppercase flex items-center justify-center">
        <p>All Pending Roadmaps</p>
      </div>{" "}
      <br />
      <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
        {pendingroadmap.length === 0 ? (
          <p>No pending roadmaps present</p>
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
                    Created at
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingroadmap.slice().reverse().map((roadmap, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {roadmap.roadmapcreater}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {formatDateToIST(roadmap.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {roadmap.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                      <button
                        className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
                        onClick={() => downloadFile(roadmap.path)}
                      >
                        Download
                      </button>
                      <button
                        className="py-2 px-4 bg-green-500 text-white font-bold rounded-lg flex items-center justify-center ml-4"
                        onClick={() => handleUploadClick(roadmap)}
                      >
                        Upload
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

export default PendingRoadmaps;