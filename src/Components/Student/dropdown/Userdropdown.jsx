import {
  RiAdminLine,
  RiDashboardHorizontalLine,
  RiEditBoxLine,
  RiHome2Line,
  RiKeyLine,
  RiLoginBoxLine,
} from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  asynccurrentUser,
  asyncremoveUser,
} from "../../../store/Actions/userActions";
import { admins } from "../../../utils/Admins";
import Loader from "../../Loader/Loader";

export default function Userdropdown() {
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(asyncremoveUser());
      navigate("/");
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="text-xl fixed z-[999] right-2 py-2 px-2 border-2 flex items-start justify-center flex-col bg-white shadow-lg transition-all duration-300 ease-in-out transform translate-y-[-10px] opacity-0 animate-dropdown">
          {" "}
          <Link to="/" className="hover:bg-zinc-300 w-full p-2 rounded-md">
            <div className="flex cursor-pointer gap-2 items-center justify-start w-full">
              <RiHome2Line className="w-5 h-5" />
              Home Page
            </div>
          </Link>
          {currentPath !== "/home" && (
            <Link
              className="hover:bg-zinc-300 w-full p-2 rounded-md"
              to="/home"
            >
              <div className="flex cursor-pointer gap-2 items-center justify-start w-full">
                <RiDashboardHorizontalLine className="w-5 h-5" />
                Dashboard
              </div>
            </Link>
          )}
          <Link
            className="hover:bg-zinc-300 w-full p-2 rounded-md"
            to="/edit-profile"
          >
            <div className="flex cursor-pointer gap-2 items-center justify-start w-ful l">
              <RiEditBoxLine className="w-5 h-5" />
              Profile Page
            </div>
          </Link>
          {admins.map((admin, index) =>
            user.email === admin.email ? (
              <Link
                key={index}
                to="/admin"
                className="hover:bg-zinc-300 w-full p-2 rounded-md"
              >
                <div className="flex cursor-pointer gap-2 items-center justify-start w-ful l">
                  <RiAdminLine className="w-5 h-5" />
                  <p>Admin Panel</p>
                </div>
              </Link>
            ) : null
          )}
          {/* <div className="flex hover:bg-zinc-300 p-2 rounded-md w-full cursor-pointer gap-2 items-center justify-start w-ful l">
            <RiKeyLine className="w-5 h-5" />
            <p>Change Password</p>
          </div> */}
          <div
            onClick={handleLogout}
            className="flex p-2 rounded-md hover:bg-zinc-300 w-full cursor-pointer gap-2 items-center justify-start w-ful l"
          >
            <RiLoginBoxLine className="w-5 h-5" />
            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
}
