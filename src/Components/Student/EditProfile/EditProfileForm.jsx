import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser, editprofile } from "../../../store/Actions/userActions";
import { RiCloseLine } from "@remixicon/react";
import Loader from "../../Loader/Loader";

export default function EditProfileForm(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(editprofile(formData, user._id));
      props.onClose();
      window.location.reload(); 
    } catch (error) {
      //(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <div className=" overflow-hidden z-10 flex items-center justify-center fixed h-full w-full bg-black/30">
        <div className="w-[60%] h-screen py-20 px-20 bg-white overflow-y-scroll scroller ">
            <div className="w-full flex items-center justify-end">
          <RiCloseLine
            size={30}
            className="ml-auto cursor-pointer   "
            onClick={props.onClose}
            color="#1c1c1c9d" // set custom `width` and `height`
          />
            </div>
          <div 
           className="w-full text-2xl flex items-center justify-center font-medium uppercase">
            Edit Profile
          </div>
            <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-between pt-10 items-center ">
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Name</p>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Email</p>
              <input
                type="text"
                placeholder="Enter Valid Email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="field rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-between pt-4  items-center ">
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Contact</p>
              <input
                type="text"
                placeholder="+91 987654XXX"
                name="contact"
                onChange={handleChange}
                value={formData.contact}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">City</p>
              <input
                type="text"
                placeholder="Bangalore/Mumbai/Delhi"
                name="city"
                onChange={handleChange}
                value={formData.city}
                className="field rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-between pt-4  items-center ">
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">State</p>
              <input
                type="text"
                placeholder="Karnataka/Maharashtra"
                name="state"
                onChange={handleChange}
                value={formData.state}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Country</p>
              <input
                type="text"
                placeholder="India"
                name="country"
                onChange={handleChange}
                value={formData.country}
                className="field rounded-xl"
              />
            </div>
          </div>
          <div className="flex justify-between pt-4  items-center ">
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Date Of Birth</p>
              <input
                type="date"
                name="dateofbirth"
                onChange={handleChange}
                value={formData.dateofbirth}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Gender</p>
              <div className="relative w-96 font-semibold gap-10 h-12 flex items-center">
                <button
                  type="button"
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    formData.gender === "Male"
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
                  }`}
                  onClick={() => setFormData({ ...formData, gender: "Male" })}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    formData.gender === "Female"
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
                  }`}
                  onClick={() => setFormData({ ...formData, gender: "Female" })}
                >
                  Female
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4  items-center ">
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">BIO</p>
              <input
                type="text"
                placeholder="Enter your bio"
                name="bio"
                onChange={handleChange}
                value={formData.bio}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-[45%]">
              <p className="font-medium text-lg">Summary</p>
              <input
                type="text"
                placeholder="Enter your summary"
                name="summary"
                onChange={handleChange}
                value={formData.summary}
                className="field rounded-xl"
              />
            </div>
          </div>

          
            <div className="w-full flex mt-10 items-center justify-center">
              <button
                type="submit"
                className=" text-xl py-2 px-4 font-semibold rounded-2xl text-white bg-[#F58612] "
                disabled={loading}
              >
                {loading ? "Loading..." : "Update Profile"}{" "}
              </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}
