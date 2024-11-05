import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "../../store/Actions/userActions";
import Userdropdown from "./dropdown/Userdropdown";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Nav() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [showDropdown, setShowDropdown] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 2000); 
    setHoverTimeout(timeout);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };
  useEffect(() => {
    dispatch(asynccurrentUser());
  }, [dispatch]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <div className="w-full h-20 border-b-2 flex items-center justify-between p-3 px-5 bg-[#F5FAFE]">
        <Link to="/">
        <img className="w-[40%] cursor-pointer" src="/Images/CTS   Logo.png" alt="" />
        </Link>
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full border-2 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user && user.avatar ? user.avatar.url : 'https://imgs.search.brave.com/sHfS5WDNtJlI9C_CT2YL2723HttEALNRtpekulPAD9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc'}
              alt=""
            />
          </div>
          <div onClick={handleClick} className="flex flex-col gap-2 cursor-pointer">
            <div className="w-10 h-1 bg-black"></div>
            <div className="w-10 h-1 bg-black"></div>
            <div className="w-10 h-1 bg-black"></div>
          </div>
        </div>
      </div>
      {showDropdown && (
        <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
          <Userdropdown />
        </div>
      )}
    </div>
  );
}
