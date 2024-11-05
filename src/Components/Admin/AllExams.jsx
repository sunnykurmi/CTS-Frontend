import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addexam,
  editexam,
  deleteexam,
  getallexams,
} from "../../store/Actions/adminAction";
import { RiCloseLine } from "@remixicon/react";
import Loader from "./../Loader/Loader";

export default function AllExams() {
  const dispatch = useDispatch();
  const [openaddexams, setOpenAddexams] = useState(false);
  const [openeditexams, setOpenEditexams] = useState(false);
  const [exams, setExams] = useState([]);

  const [formData, setFormData] = useState({
    examname: "",
    from: "",
    to: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [editExamId, setEditExamId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    setLoading(true);
    try {
      if (editExamId) {
        await dispatch(editexam(editExamId, data));
        alert("Exam updated successfully!");
        setOpenEditexams(false);
      } else {
        await dispatch(addexam(data));
        alert("Exam created successfully!");
        setOpenAddexams(false);
      }
      const response = await dispatch(getallexams());
      setExams(response);
    } catch (error) {
      alert("Failed to save exam.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (exam) => {
    setFormData({
      examname: exam.examname,
      from: exam.from,
      to: exam.to,
      amount: exam.amount,
    });
    setEditExamId(exam._id);
    setOpenEditexams(true);
  };

  const handleDeleteClick = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this exam?"
    );
    if (confirmed) {
      try {
        await dispatch(deleteexam(id));
        alert("Exam deleted successfully!");
        const response = await dispatch(getallexams());
        setExams(response);
      } catch (error) {
        alert("Failed to delete exam.");
      }
    }
  };

  useEffect(() => {
    const fetchExams = async () => {
      const result = await dispatch(getallexams());
      setExams(result);
    };

    fetchExams();
  }, [dispatch]);

  return (
    <div>
      {/* {openaddexams && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[40%] py-5 bg-white border-2 z-[99] flex flex-col items-center text-center justify-center">
            <div
              onClick={() => setOpenAddexams(false)}
              className="cursor-pointer w-full flex items-center justify-end mr-10"
            >
              <RiCloseLine />
            </div>
            <div className="center mb-5">
              <h1 className="text-2xl font-semibold">Create Exam</h1>
            </div>
            <form className="w-full px-10" onSubmit={handleSubmit}>
              <h1 className="text-start font-semibold">Name of Exam</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="examname"
                value={formData.examname}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Starting From</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="date"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">To</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="date"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
              <button
                className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )} */}
      {openeditexams && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[40%] py-5 bg-white border-2 z-[99] flex flex-col items-center text-center justify-center">
            <div
              onClick={() => setOpenEditexams(false)}
              className="cursor-pointer w-full flex items-center justify-end mr-10"
            >
              <RiCloseLine />
            </div>
            <div className="center mb-5">
              <h1 className="text-2xl font-semibold">Edit Exam</h1>
            </div>
            <form className="w-full px-10" onSubmit={handleSubmit}>
              <h1 className="text-start font-semibold">price of exam</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Starting From</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="date"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">To</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="date"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
              <button
                className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-between p-10">
        <p className="text-2xl font-medium">All Exams</p>
        {/* <button
          onClick={() => {
            setFormData({
              examname: "",
              from: "",
              to: "",
              total_enrolled: "",
            });
            setEditExamId(null);
            setOpenAddexams(true);
          }}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold"
        >
          +Add Exams
        </button> */}
      </div>
      <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize font-medium">
        {exams.length === 0 ? (
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
                    Exam Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start From
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Up To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Enrolled
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Functionality
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {exams.slice().reverse().map((exam, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.examname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.from}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {exam.to}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                   
                      <span className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg" >    {exam.total_enrolled.length} View More</span>
                      
                    </td>
                    <td className="px-6 py-4 flex text-sm font-medium">
                      <button
                        className="py-2 px-6 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
                        onClick={() => handleEditClick(exam)}
                      >
                        Edit
                      </button>
                      <button
                        className="py-2 px-4 bg-red-500 text-white font-bold rounded-lg flex items-center justify-center ml-4"
                        onClick={() => handleDeleteClick(exam._id)}
                      >
                        Delete
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