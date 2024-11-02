import { RiCloseLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import { asynccurrentUser, updateSocialMedia } from "../../../store/Actions/userActions";

function AddSocial(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  console.log(user);

  const [socialLinks, setSocialLinks] = useState(user?.socialmedia || {});

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(updateSocialMedia(socialLinks, user._id));
    setLoading(false);
    props.onClose();
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <div className="z-10 flex items-center justify-center fixed h-screen w-full bg-black/30 overflow-hidden">
        <div className="w-[50%] max-[600px]:w-[100%] py-10 bg-white pt-5 rounded-lg">
          <RiCloseLine
            size={30}
            className="ml-auto mr-5 cursor-pointer"
            onClick={props.onClose}
            color="#1c1c1c9d"
          />
          <div className="w-full flex items-center justify-center">
            <p className="text-2xl font-medium">Add Social Media Links</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-5 flex items-center justify-between px-16 max-[600px]:px-5">
              <div className="flex w-[45%] flex-col">
                <p className="text-lg font-medium">Instagram</p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 border=[#008BDC] rounded-lg"
                  type="text"
                  placeholder="Enter Instagram Link"
                  value={socialLinks.instagram}
                  onChange={handleChange}
                  name="instagram"
                />
              </div>
              <div className="w-[45%] h-full">
                <p className="text-lg font-medium">Facebook</p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 border=[#008BDC] rounded-lg"
                  type="text"
                  placeholder="Enter Facebook Link"
                  value={socialLinks.facebook}
                  onChange={handleChange}
                  name="facebook"
                />
              </div>
            </div>
            <div className="w-full mt-5 flex items-center justify-between px-16 max-[600px]:px-5">
              <div className="flex w-[45%] flex-col">
                <p className="text-lg font-medium">Gmail</p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 border=[#008BDC] rounded-lg"
                  type="text"
                  placeholder="Enter Gmail Link"
                  value={socialLinks.gmail}
                  onChange={handleChange}
                  name="gmail"
                />
              </div>
              <div className="w-[45%] h-full">
                <p className="text-lg font-medium">Twitter</p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 border=[#008BDC] rounded-lg"
                  type="text"
                  placeholder="Enter Twitter Link"
                  value={socialLinks.twitter}
                  onChange={handleChange}
                  name="twitter"
                />
              </div>
            </div>
            <div className="w-full mt-5 flex items-center justify-between px-16 max-[600px]:px-5">
              <div className="flex w-[45%] flex-col">
                <p className="text-lg font-medium">YouTube</p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 border=[#008BDC] rounded-lg"
                  type="text"
                  placeholder="Enter YouTube Link"
                  value={socialLinks.youtube}
                  onChange={handleChange}
                  name="youtube"
                />
              </div>
              <div className="w-[45%] h-full">
                <p className="text-lg font-medium">LinkedIn</p>
                <input
                  className="w-full h-10 pl-3 outline-none border-2 border=[#008BDC] rounded-lg"
                  type="text"
                  placeholder="Enter LinkedIn Link"
                  value={socialLinks.linkedin}
                  onChange={handleChange}
                  name="linkedin"
                />
              </div>
            </div>
            <div className="w-full center mt-5">
              <button
                type="submit"
                className="py-2 px-4 rounded-lg bg-[#008BDC] text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSocial;