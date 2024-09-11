import { RiCloseLine, RiPencilLine, RiUploadCloudLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser, avatar } from "../../../store/Actions/userActions";

export default function EditAvatar(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState(user);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576) { // 1MB
      setError("Image file size exceeded 1MB");
      setImagePreview(null);
    } else {
      setFormData({ ...formData, avatar: file });
      setImagePreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("avatar", formData.avatar);
      await dispatch(avatar(formDataToSend, user._id));
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

  return (
    <>
      <div className=" z-10 flex items-center justify-center fixed h-full w-full bg-black/30 ">
        <div className=" py-5 px-10 rounded-3xl w-[30%] max-[600px]:w-[80%] bg-white ">
          <RiCloseLine
            size={30}
            className="ml-auto cursor-pointer   "
            onClick={props.onClose}
            color="#1c1c1c9d" // set custom `width` and `height`
          />
          <div className=" flex items-center justify-center mb-5 text-[#272727e4]  w-full h-5 text-xl font-bold">
            <h1>Edit Profile Picture</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="">
              <div className="w-[100%]  ">
              {!imagePreview && (
                <h1 className=" mt-16 text-xl font-bold mb-2 text-[#272727c1]">
                  Profile picture
                </h1>
                )}


                {imagePreview && (
                  <div className="w-full flex items-center justify-center">

                    <img
                      src={imagePreview}
                      alt="Preview"
                      className=" w-[20vh]  h-[20vh] object-cover  border-2 rounded-full"
                    />
                  </div>
                )}
                {!imagePreview && (
                  <div className="relative flex gap-4 items-center justify-center bg-[#EAFCFF] w-[100%] border-[1px] border-[#008BDC] p-2 rounded-lg border-dashed h-[7vh]">
                    <RiUploadCloudLine size={30} className="" color="#008BDC" />
                    <h1 className="text-2xl font-bold text-[#008BDC]">
                      Upload Picture
                    </h1>
                    <input
                      className="w-full pl-[2vh] absolute h-full text-5xl opacity-0 outline-sky-300 text-black border-[1px] border-[#27272748] p-2 rounded-lg"
                      type="file"
                      onChange={handleChange}
                      name="avatar"
                      id=""
                    />
                  </div>
                )}
              </div>
              {!imagePreview && (
              <h1 className="mt-2 text-base font-semibold text-[#2727279a] ">
                Upload a professional picture of yourself (Max file size: 1Mb
                and max resolution: 500px x 500px. File type - jpeg, jpg, png,
                gif)
              </h1>
                )}
                  {error && (
                <p className="mt-2 text-base font-semibold text-red-600">
                  {error}
                </p>
              )}

            </div>
            <div className="w-full flex mt-5 items-center justify-center">
              <button
                type="submit"
                className=" text-xl py-2 px-4 font-semibold rounded-2xl text-white bg-[#008BDC] "
                disabled={loading}
              >
                {loading ? "Loading..." : "Update"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
