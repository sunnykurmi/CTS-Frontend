import React from "react";
export default function Component4({ Component, setComponent }) {

  setTimeout(() => {
    setComponent('component5')
  }, 5000);
  return (
    <div>
      <div className="w-full h-screen center">
        <div className="text-center w-full h-[60%] text-xl text-black">
          <p className="text-3xl text-blue-700">This Module Is Over</p> <br />
          <p>All your work has been saved.</p>
          <p>You'll move on automatically in just a moment </p>
          <p>Do not refresh this page or quit the app</p>
          <div className="center">
            <img src="/Images/loader_gif.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
