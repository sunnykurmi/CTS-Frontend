import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../store/Actions/googleAction";

export default function Googlelogin() {
  const dispatch = useDispatch();
  const googleresponse = async (response) => {
    try {
      if (response["code"]) {
        const result = dispatch(googleAuth(response["code"]));
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleresponse,
    onError: googleresponse,
    flow: "auth-code",
  });
  return (
    <div onClick={googleLogin} className="flex items-center justify-center">
      <img
        className="w-[12%]"
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt=""
      />
      <p className="font-semibold text-lg">Login with Google</p>
    </div>
  );
}
