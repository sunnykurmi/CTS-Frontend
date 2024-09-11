import React from "react";

export default function Loader() {
  return (
    <div>
      <div className=" fixed top-0 z-[999] w-full h-[100vh] bg-[#b1b1b1d6] flex flex-col items-center justify-center ">
        <img className="w-[5%]" src="/Images/loading.webp" alt="" />
        <p className="text-2xl mt-5 font-medium">Loading...</p>
      </div>
    </div>
  );
}
