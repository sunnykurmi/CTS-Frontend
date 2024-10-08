import React from "react";

export default function Loader() {
  return (
    <div>
      <div className=" fixed top-0 z-[999] w-full h-[100vh] bg-[#ffffff] flex flex-col items-center justify-center ">
        <img className="w-[50%] max-[600px]:w-full"  src="/Images/loader_gif.gif" alt="" />
        <p className=" absolute text-2xl mt-32 text-blue-600 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
