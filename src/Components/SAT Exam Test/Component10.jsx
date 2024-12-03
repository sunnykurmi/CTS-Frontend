import React from "react";
export default function Component10({ Component, setComponent }) {
  return (
    <div>
      <div className="w-full h-screen center bg-[#F7F7F7]">
        <div className="text-center center flex-col w-full h-[60%] text-xl text-black">
          <p className="text-4xl ">You're All Finished</p> <br />
          <div className="center flex-col w-[40vw] h-[50vh] ">
            <img src="/Images/SAT Test/complete.jpg" alt="" />
            <p className="text-lg">
              Congratulation on completing SAT practice <br /> test see your
              results below
            </p>
            <button
              onClick={() => setComponent("component11")}
              className="px-4 py-2 rounded-full bg-yellow-300 font-semibold mt-5 text-base border-2 border-black"
            >
              View Your Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
