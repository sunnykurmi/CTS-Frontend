import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  uploadportfolio,
  editportfolio,
  deleteportfolio,
} from "../../store/Actions/adminAction";
import { RiCloseLine } from "@remixicon/react";
import { AllPortfolio } from "./../../store/Actions/portfolioAction";
import Loader from "./../Loader/Loader";

export default function AllPortfolios() {
  const dispatch = useDispatch();
  const [openaddportfolio, setOpenAddPortfolio] = useState(false);
  const [openeditportfolio, setOpenEditPortfolio] = useState(false);
  const [Portfolios, setPortfolios] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    livelink: "",
    price: "",
    purchased: "",
    description: "",
    video: null,
    videoUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [editPortfolioId, setEditPortfolioId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (key !== "video" && key !== "videoUrl" && !formData[key]) {
        alert("All fields except video are required.");
        return;
      }
    }

    const data = new FormData();
    for (const key in formData) {
      if (key !== "videoUrl") {
        data.append(key, formData[key]);
      }
    }

    if (!formData.video) {
      data.append("videoUrl", formData.videoUrl);
    }

    setLoading(true);
    try {
      if (editPortfolioId) {
        await dispatch(editportfolio(editPortfolioId, data));
        alert("Portfolio updated successfully!");
        setOpenEditPortfolio(false);
      } else {
        await dispatch(uploadportfolio(data));
        alert("Portfolio created successfully!");
        setOpenAddPortfolio(false);
      }
      const response = await dispatch(AllPortfolio());
      setPortfolios(response);
    } catch (error) {
      alert("Failed to save portfolio.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (portfolio) => {
    setFormData({
      name: portfolio.name,
      livelink: portfolio.livelink,
      price: portfolio.price,
      purchased: portfolio.purchased,
      description: portfolio.description,
      video: null,
      videoUrl: portfolio.video.url,
    });
    setEditPortfolioId(portfolio._id);
    setOpenEditPortfolio(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(AllPortfolio());
        setPortfolios(response);
      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleDeleteClick = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this portfolio?"
    );
    if (confirmed) {
      try {
        await dispatch(deleteportfolio(id));
        alert("Portfolio deleted successfully!");
        window.location.reload();
        const response = await dispatch(AllPortfolio());
        setPortfolios(response);
      } catch (error) {
        alert("Failed to delete portfolio.");
      }
    }
  };

  if (!Portfolios) {
    return <Loader />;
  }

  return (
    <div>
      {openaddportfolio && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[40%] py-5 bg-white border-2 z-[99] flex flex-col items-center text-center justify-center">
            <div
              onClick={() => setOpenAddPortfolio(false)}
              className=" cursor-pointer w-full flex items-center justify-end mr-10"
            >
              <RiCloseLine />
            </div>
            <div className="center mb-5">
              <h1 className="text-2xl font-semibold">Create Portfolio</h1>
            </div>
            <form className="w-full px-10" onSubmit={handleSubmit}>
              <h1 className="text-start font-semibold">Name of Portfolio</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Live/Demo Link</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="livelink"
                value={formData.livelink}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Upload Video</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="file"
                name="video"
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Price</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Description</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Purchased</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="number"
                name="purchased"
                value={formData.purchased}
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
      {openeditportfolio && (
        <div className="w-full h-screen bg-[#64646476] fixed top-0 left-0 z-[9] flex items-center justify-center">
          <div className="w-[40%] py-5 bg-white border-2 z-[99] flex flex-col items-center text-center justify-center">
            <div
              onClick={() => setOpenEditPortfolio(false)}
              className=" cursor-pointer w-full flex items-center justify-end mr-10"
            >
              <RiCloseLine />
            </div>
            <div className="center mb-5">
              <h1 className="text-2xl font-semibold">Edit Portfolio</h1>
            </div>
            <form className="w-full px-10" onSubmit={handleSubmit}>
              <h1 className="text-start font-semibold">Name of Portfolio</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Live/Demo Link</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="livelink"
                value={formData.livelink}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Upload Video</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="file"
                name="video"
                onChange={handleChange}
              />
              {formData.videoUrl && (
                <p className="text-sm text-gray-600">
                  Current Video: {formData.videoUrl}
                </p>
              )}
              <h1 className="text-start font-semibold">Price</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Description</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <h1 className="text-start font-semibold">Purchased</h1>
              <input
                className="border-2 outline-none w-full h-10 rounded-lg pl-5 mb-2"
                type="number"
                name="purchased"
                value={formData.purchased}
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
        <p className="text-2xl font-medium">All Portfolios </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              livelink: "",
              price: "",
              purchased: "",
              description: "",
              video: null,
              videoUrl: "",
            });
            setEditPortfolioId(null);
            setOpenAddPortfolio(true);
          }}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold"
        >
          +Add Portfolio
        </button>
      </div>
      <div className="w-full h-[80vh] px-5 pb-10 overflow-hidden capitalize">
        {Portfolios.length === 0 ? (
          <p>No portfolio present</p>
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
                    Purchased
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Video Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Demo Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Portfolios.slice().reverse().map((portfolio, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {portfolio.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {portfolio.purchased}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {portfolio.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <a
                        className="text-blue-600 font-semibold"
                        href={`${portfolio.video.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <a
                        className="text-blue-600 font-semibold"
                        href={
                          portfolio.livelink.startsWith("http")
                            ? portfolio.livelink
                            : `http://${portfolio.livelink}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </td>
                    <td className="px-6 py-4 flex text-sm font-medium">
                      <button
                        className="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg flex items-center justify-center"
                        onClick={() => handleEditClick(portfolio)}
                      >
                        Edit
                      </button>
                      <button
                        className="py-2 px-4 bg-red-500 text-white font-bold rounded-lg flex items-center justify-center ml-4"
                        onClick={() => handleDeleteClick(portfolio._id)}
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