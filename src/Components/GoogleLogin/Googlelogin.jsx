import { useGoogleLogin } from "@react-oauth/google";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../store/Actions/googleAction";

export default function Googlelogin() {
    const dispatch = useDispatch();
    
    const googlehandler = async () => {      
      window.open('http://localhost:3030/api/v1/auth/google/callback',"_self");
    };
  return (
    <div onClick={googlehandler} className="flex items-center justify-center">
      <img
        className="w-[12%]"
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt=""
      />
      <p className="font-semibold text-lg">Login with Google</p>
    </div>
  );
}
