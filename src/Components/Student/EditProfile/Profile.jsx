import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiEdit2Line, RiPencilLine } from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../../store/Actions/userActions";
import EditAvatar from "./EditAvatar";
import EditProfileForm from "./EditProfileForm";
import Loader from "../../Loader/Loader";
import AddEducation from "./AddEducation";

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [ShowAvatar, setShowAvatar] = useState(false);
  const [ShowForm, setShowForm] = useState(false);
  const [ShowEducation, setShowEducation] = useState(false);

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

  if (!user) {
    return <Loader />;
  }
  return (
    <>
      {ShowAvatar && <EditAvatar onClose={closeaddavatar} />}
      {ShowForm && <EditProfileForm onClose={closeeditform} />}
      {ShowEducation && <AddEducation onClose={closeEducation} />}
      <Nav />
      <div className="w-full pt-10">
        <div className="w-44  left-0 h-full flex items-center justify-center">
          <Link
            className=" h-12 gap-3 rounded-full  bg-[#F58612] text-white flex items-center justify-center p-2 font-bold"
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
      <div className="w-full flex items-center justify-center">
        <div className="w-[60%] flex items-center justify-end">
          <div
            onClick={openeditform}
            className="flex gap-2 cursor-pointer mb-2 px-5"
          >
            <RiPencilLine />
            Edit Profile
          </div>
        </div>
      </div>
      <div className=" flex mb-[15vh] justify-center items-center  w-full  ">
        <div className=" w-[60%] max-[600px]:w-full h-full   border-2 rounded-xl  border-[#0000000c] px-10 py-5 ">
          <div className=" w-full flex justify-between pb-5 ">
            <div className="">
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
            className="text-[#008BDC] cursor-pointer">+add contact</div>
                )}
              </h1>
              <h1 className="text-lg  text-[#070707b9] font-medium capitalize">
                {user.city
                  ? `${user.city}, ${user.state} ${user.country}`.toLowerCase()
                  : "India"}
              </h1>
            </div>
            <div className="  h-full flex flex-col items-center justify-between">
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
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              BIO
            </div>
            <div className="w-[60%] ">
              <div className="text-[#151515d0] w-[90%] text-base font-medium capitalize">
                {user.bio ? (
                  user.bio
                ) : (
                  <div 
            onClick={openeditform}
            className="text-[#008BDC] cursor-pointer">+add bio</div>
                )}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              SUMMARY
            </div>
            <div className="w-[60%] ">
              <div className="text-[#151515d0] w-[90%] text-base font-medium capitalize">
                {user.summary ? (
                  user.summary
                ) : (
                  <div 
            onClick={openeditform}
            className="text-[#008BDC] cursor-pointer">+add summary</div>
                )}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              Date Of Birth
            </div>
            <div className="w-[60%] ">
              <p className="text-[#151515d0] w-[90%] text-base font-medium capitalize">
                {user.dateofbirth ? (
                  new Date(user.dateofbirth).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                ) : (
                  <div 
            onClick={openeditform}
            className="text-[#008BDC] cursor-pointer">+add DOB</div>
                )}
              </p>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              EDUCATION
            </div>
            <div className="w-[60%] ">
            <div className="flex flex-col">
  {user.education && user.education.currentclass !== "" ? (
    <>
    <div className="flex w-full">
      <div className="w-[80%]  capitalize mb-5">
        <div className="text-[#151515d0] text-xl font-semibold">
          {user?.education?.schoolname}
        </div>
        <div className="w-[40vh] justify-between flex gap-5">
          <div className="text-[#151515d0] text-base font-medium">
            <b> class : </b>
            {user?.education?.currentclass?.replace(" Class", "")}
          </div>
          <div className="text-[#151515d0] w-[50%] text-base font-medium">
            <b> score : </b>
            {user?.education?.percentage}%
          </div>
        </div>
        <div className="w-[40vh] justify-between flex gap-5">
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
      <div className=" center   ">
        <button  onClick={openEducation} className="text-sm center py-1 px-4 border-2 rounded-full"> <RiPencilLine className="scale-75"/> Edit</button>
      </div>
    </div>
      {user.education && user.education.class10schoolname !== "" ? (
        <div className="w-[80%] capitalize mb-5">
          <div className="text-[#151515d0] text-xl font-semibold">
            {user?.education?.class10schoolname}
          </div>
          <div className="w-[40vh] justify-between flex gap-5">
            <div className="text-[#151515d0] text-base font-medium">
              <b> class : </b>
              10th
            </div>
            <div className="text-[#151515d0] w-[50%] text-base font-medium">
              <b> score : </b>
              {user?.education?.class10percentage}%
            </div>
          </div>
          <div className="w-[40vh] justify-between flex gap-5">
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
      ) : (
        ""
      )}
    </>
  ) : (
    <button onClick={openEducation} className="text-[#008BDC]  w-fit font-medium">
      + Add Education
    </button>
  )}
</div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              ACHIEVEMENTS
            </div>
            <div className="w-[60%] ">
              <div className="flex">
                -
                {/* <div className=" w-[80%] capitalize  mb-5">
                  <div className="text-[#151515d0] text-xl font-semibold ">
                    National level quiz competition
                  </div>
                  <div className="text-[#151515d0] text-base font-medium">
                    I have achieved Gold medal in national level quiz
                    competition
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              SOCIAL MEDIA
            </div>
            <div className="w-[60%] ">
              <div className="flex">
                -
                {/* <div className=" w-[80%] capitalize  mb-5">
                  <div className=" flex gap-2 items-center   text-xl font-semibold ">
                    <div className="w-8 h-8 ">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--mail-email-logos-icons-2416660.png?f=webp"
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 ">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 ">
                      <img
                        src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png"
                        alt=""
                      />
                    </div>
                    <div className="w-7 h-7 ">
                      <img
                        src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
