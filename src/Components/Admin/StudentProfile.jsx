import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "@remixicon/react";
import Nav from "../Student/Nav";
import { useDispatch } from "react-redux";
import { getallusers } from "../../store/Actions/adminAction";
import Loader from "../Loader/Loader";

export default function StudentProfile() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [allstudents, setallstudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getallusers());
        setallstudents(response);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  const user = allstudents.find((student) => student._id === id);

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      <Nav />
      <div className="w-full pt-10">
        <div className="w-44  left-0 h-full flex items-center justify-center">
          <Link
            className=" h-12 gap-3 rounded-full  bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={'/admin'}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className=" text-[#0000009b]" />{" "}
            </div>
            <button className="mr-2">Go Back </button>
          </Link>
        </div>
      </div>
      <div className=" uppercase flex justify-center items-center mb-5 text-[black] text-3xl  font-semibold w-full  ">
        Student Profile
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
                +91 {user.contact}
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
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              BIO
            </div>
            <div className="w-[60%] ">
              <div className="text-[#151515d0] w-[90%] text-base font-medium capitalize">
                {user.bio ? user.bio : "-"}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              SUMMARY
            </div>
            <div className="w-[60%] ">
              <div className="text-[#151515d0] w-[90%] text-base font-medium capitalize">
                {user.summary ? user.summary : "-"}
              </div>
            </div>
          </div>
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              Date Of Birth
            </div>
            <div className="w-[60%] ">
              <p className="text-[#151515d0] w-[90%] text-base font-medium capitalize">
                {user.dateofbirth
                  ? new Date(user.dateofbirth).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "-"}
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
                  </>
                ) : (
                  <div className="text-[#151515d0] text-base font-medium">
                    No Education provided
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              ACHIEVEMENTS
            </div>
            <div className="w-[60%] ">
              <div className="flex">
                <div className=" w-[80%] capitalize  mb-5">
                  <div className="text-[#151515d0] text-xl font-semibold ">
                    National level quiz competition
                  </div>
                  <div className="text-[#151515d0] text-base font-medium">
                    I have achieved Gold medal in national level quiz
                    competition
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" flex border-t-2 border-[#0000000c] py-[4vh]  w-full  ">
            <div className="w-[30%]    text-[#1515159d] text-base font-medium ">
              SOCIAL MEDIA
            </div>
            <div className="w-[60%] ">
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
                    </div>
                  ) : (
                    <div className="text-[#151515d0] text-base font-medium">
                      No social media links provided
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
