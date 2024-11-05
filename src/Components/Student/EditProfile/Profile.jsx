import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiPencilLine } from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../../store/Actions/userActions";
import EditAvatar from "./EditAvatar";
import EditProfileForm from "./EditProfileForm";
import Loader from "../../Loader/Loader";
import AddEducation from "./AddEducation";
import AddSocial from "./AddSocial";

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [ShowAvatar, setShowAvatar] = useState(false);
  const [ShowForm, setShowForm] = useState(false);
  const [ShowEducation, setShowEducation] = useState(false);
  const [ShowSocialMedia, setShowSocialMedia] = useState(false);

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  const openaddavatar = () => {
    setShowAvatar(true);
  };
  const closeaddavatar = () => {
    setShowAvatar(false);
  };
  const openeditform = () => {
    setShowForm(true);
  };
  const closeeditform = () => {
    setShowForm(false);
  };

  const openEducation = () => {
    setShowEducation(true);
  };
  const closeEducation = () => {
    setShowEducation(false);
  };

  const openSocialMedia = () => {
    setShowSocialMedia(true);
  };
  const closeSocialMedia = () => {
    setShowSocialMedia(false);
  };

  if (!user) {
    return <Loader />;
  }
  return (
    <>
      {ShowAvatar && <EditAvatar onClose={closeaddavatar} />}
      {ShowForm && <EditProfileForm onClose={closeeditform} />}
      {ShowEducation && <AddEducation onClose={closeEducation} />}
      {ShowSocialMedia && <AddSocial onClose={closeSocialMedia} />}
      <Nav />
      <div className="w-full pt-10">
        <div className="w-44 max-[600px]:hidden  left-0 h-full flex items-center justify-center">
          <Link
            className=" h-12 gap-3 rounded-full  bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={-1}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className=" text-[#0000009b]" />{" "}
            </div>
            <button className="mr-2">Go Back </button>
          </Link>
        </div>
      </div>
      <div className=" uppercase flex justify-center items-center text-[black] text-3xl  font-semibold w-full  ">
        Profile
      </div>
      <div className="w-full">
        <div className="w-[60%] max-[600px]:hidden max-[600px]:w-full m-auto flex items-center justify-end max-[600px]:justify-center">
          <div
            onClick={openeditform}
            className="flex gap-2 cursor-pointer  mb-2 max-[600px]:mb-0 max-[600px]:py-3 max-[600px]:border-2 px-5"
          >
            <RiPencilLine />
            Edit Profile
          </div>
        </div>
      </div>
      <div className=" flex mb-[15vh] justify-center items-center  w-full  ">
        <div className=" w-[60%] max-[600px]:w-full h-full max-[600px]:border-0 border-2 rounded-xl  border-[#0000000c] px-10 max-[600px]:px-5 py-5 ">
          <div className=" w-full flex justify-between flex-col-reverse pb-5">
            <div className="max-[600px]:mt-10">
              <h1 className=" capitalize flex gap-[2vh] text-4xl font-medium   text-[black]  ">
                {user.name}
              </h1>
              <h1 className="text-lg mt-3  text-[#070707b9]  font-medium ">
                {user.email}
              </h1>
              <h1 className="text-lg   text-[#070707b9]  font-medium ">
                {user.contact ? (
                  user.contact
                ) : (
                  <div
                    onClick={openeditform}
                    className="text-[#008BDC] cursor-pointer"
                  >
                    +add contact
                  </div>
                )}
              </h1>
              <h1 className="text-lg  text-[#070707b9] font-medium capitalize">
                {user.city
                  ? `${user.city}, ${user.state} ${user.country}`.toLowerCase()
                  : "India"}
              </h1>

              <div
                onClick={openeditform}
                className="flex gap-2 min-[600px]:hidden max-[400px]:w-[60%] shrink-0 w-1/2 cursor-pointer mb-2 max-[600px]:mb-0 max-[600px]:py-3 max-[600px]:border-2 px-5"
              >
                <RiPencilLine />
                Edit Profile
              </div>
            </div>
            <div className="h-full flex flex-col items-center justify-between">
              <div className=" w-[15vh] h-[15vh] border-2 overflow-hidden rounded-full shrink-0   ">
                <img
                  className="w-full h-full object-cover "
                  src={user.avatar.url}
                  alt=""
                />
              </div>
              <div
                className=" cursor-pointer mt-1 text-[#008BDC]  text-base font-medium"
                onClick={openaddavatar}
              >
                Edit profile picture
              </div>
            </div>
          </div>
          <div className="flex border-t-2 border-[#0000000c] py-[4vh] w-full  ">
            <div className="w-[30%] text-[#1515159d] text-base font-medium ">
              BIO
            </div>
            <div className="w-[60%] ">
              <div className="text-[#151515d0] w-[90%] text-base font-medium capitalize max-[600px]:ml-5">
                {user.bio ? (
                  user.bio
                ) : (
                  <div
                    onClick={openeditform}
                    className="text-[#008BDC] cursor-pointer "
                  >
                    +add bio
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%] text-[#1515159d] text-base font-medium ">
              SUMMARY
            </div>
            <div className="w-[60%] ">
              <div className="text-[#151515d0] w-[90%] text-base font-medium capitalize max-[600px]:ml-5">
                {user.summary ? (
                  user.summary
                ) : (
                  <div
                    onClick={openeditform}
                    className="text-[#008BDC] cursor-pointer max-[600px]:ml-5"
                  >
                    +add summary
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              Date Of Birth
            </div>
            <div className="w-[60%]">
              <p className="text-[#151515d0] w-[90%] text-base font-medium capitalize max-[600px]:ml-5">
                {user.dateofbirth ? (
                  new Date(user.dateofbirth).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                ) : (
                  <div
                    onClick={openeditform}
                    className="text-[#008BDC] cursor-pointer max-[600px]:ml-5"
                  >
                    +add DOB
                  </div>
                )}
              </p>
            </div>
          </div>
          <div className=" flex max-[600px]:flex-col max-[600px]:gap-5 border-t-2 border-[#0000000c] py-[4vh]  w-full">
            <div className="w-[30%] text-[#1515159d] text-base font-medium ">
              EDUCATION
            </div>
            <div className="w-[60%] max-[600px]:w-full">
              <div className="flex flex-col">
                {user.education && user.education.currentclass !== "" ? (
                  <>
                    <div className="flex max-[600px]:block w-full">
                      <div className="w-[80%] max-[600px]:w-full capitalize mb-5">
                        <div className="text-[#151515d0] text-xl font-semibold">
                          {user?.education?.schoolname}
                        </div>
                        <div className="w-[40vh] justify-between flex max-[600px]:w-full">
                          <div className="text-[#151515d0] text-base font-medium">
                            <b> class : </b>
                            {user?.education?.currentclass?.replace(
                              " Class",
                              ""
                            )}
                          </div>
                          <div className="text-[#151515d0] w-[50%] text-base font-medium">
                            <b> score : </b>
                            {user?.education?.percentage}%
                          </div>
                        </div>
                        <div className="w-[40vh] justify-between max-[600px]:w-full flex gap-5">
                          <div className="text-[#151515d0] text-base font-medium">
                            <b> Board : </b>
                            {user?.education?.educationBoard}
                          </div>
                          <div className="text-[#151515d0] w-[50%] text-base font-medium">
                            <b> year : </b>
                            {user?.education?.passingyear}
                          </div>
                        </div>
                      </div>
                    </div>

                    {user.education &&
                    user.education.class10schoolname !== "" ? (
                      <div className="flex max-[600px]:block w-full">
                        <div className="w-[80%] capitalize mb-5 max-[600px]:w-full">
                          <div className="text-[#151515d0] text-xl font-semibold max-[600px]:mb-1">
                            {user?.education?.class10schoolname}
                          </div>
                          <div className="w-[40vh] justify-between flex gap-5 max-[600px]:w-full">
                            <div className="text-[#151515d0] text-base font-medium">
                              <b> class : </b>
                              10th
                            </div>
                            <div className="text-[#151515d0] w-[50%] text-base font-medium">
                              <b> score : </b>
                              {user?.education?.class10percentage}%
                            </div>
                          </div>
                          <div className="w-[40vh] justify-between flex gap-5 max-[600px]:w-full">
                            <div className="text-[#151515d0] text-base font-medium">
                              <b> Board : </b>
                              {user?.education?.class10educationBoard}
                            </div>
                            <div className="text-[#151515d0] w-[50%] text-base font-medium">
                              <b> year : </b>
                              {user?.education?.class10passingyear}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div>
                      <button
                        onClick={openEducation}
                        className="text-sm center py-1 px-4 border-2 rounded-full"
                      >
                        {" "}
                        <RiPencilLine className="scale-75" /> Edit
                      </button>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={openEducation}
                    className="text-[#008BDC]  w-fit font-medium"
                  >
                    + Add Education
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              SOCIAL MEDIA
            </div>
            <div className="w-[60%]">
              <div className="flex">
                <div className="w-[80%] capitalize mb-5">
                  {user.socialmedia &&
                  Object.values(user.socialmedia).some(
                    (link) => link !== ""
                  ) ? (
                    <div>
                      <div className="flex gap-4 items-center text-xl font-semibold">
                        {user.socialmedia.gmail && (
                          <div className="w-8 h-8">
                            <a
                              href={`mailto:${user.socialmedia.gmail}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://cdn.iconscout.com/icon/free/png-256/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--mail-email-logos-icons-2416660.png?f=webp"
                                alt="Gmail"
                              />
                            </a>
                          </div>
                        )}
                        {user.socialmedia.youtube && (
                          <div className="w-8 h-8">
                            <a
                              href={user.socialmedia.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
                                alt="YouTube"
                              />
                            </a>
                          </div>
                        )}
                        {user.socialmedia.linkedin && (
                          <div className="w-8 h-8">
                            <a
                              href={user.socialmedia.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png"
                                alt="LinkedIn"
                              />
                            </a>
                          </div>
                        )}
                        {user.socialmedia.instagram && (
                          <div className="w-7 h-7">
                            <a
                              href={user.socialmedia.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                alt="Instagram"
                              />
                            </a>
                          </div>
                        )}
                        {user.socialmedia.facebook && (
                          <div className="w-7 h-7">
                            <a
                              href={user.socialmedia.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                alt="Facebook"
                              />
                            </a>
                          </div>
                        )}
                        {user.socialmedia.twitter && (
                          <div className="w-7 h-7">
                            <a
                              href={user.socialmedia.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                                alt="Twitter"
                              />
                            </a>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={openSocialMedia}
                          className="text-sm center mt-3 py-1 px-4 border-2 rounded-full"
                        >
                          <RiPencilLine className="scale-75" /> Edit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={openSocialMedia}
                      className="text-[#008BDC] cursor-pointer w-fit font-medium"
                    >
                      +add social media
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
