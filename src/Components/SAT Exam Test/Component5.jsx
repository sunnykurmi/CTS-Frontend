import React, { useEffect, useState } from "react";

export default function Component5({ Component, setComponent }) {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    const startTime = localStorage.getItem("LunchBreakStartTime");
    if (!startTime) {
      const now = Date.now();
      localStorage.setItem("LunchBreakStartTime", now);
    } else {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      setTimeLeft(10 * 60 - elapsedTime);
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    if (timeLeft <= 60) {
      setComponent("component6");
    }
  }, []);



  return (
    <div>

      <div className="w-full h-screen bg-[#1c1c1c]">
        <div className="w-full h-[90%] flex">
          <div className="w-[50%] h-full center flex-col gap-10">
            <div className="w-[40%] h-[20vh] rounded-xl border-2 center flex-col flex gap-5 border-white text-white">
              <p className="text-2xl font-medium">Remaining Break Time:</p>
              <p className="text-6xl font-bold ">{formatTime(timeLeft)}</p>
            </div>
            <div
              onClick={() => setComponent("component6")}
              className=" rounded-full px-4 py-2 bg-yellow-400 cursor-pointer font-semibold "
            >
              <p>Resume Test</p>
            </div>
          </div>
          <div className="w-[50%] h-full text-white py-10 ">
            <div className="w-[70%] h-full">
              <p className="font-semibold text-3xl">Practice Test Break</p>
              <br />
              <p>
                you can resume this practice test as soon as you're ready to
                move on . On test day , you'll wait until the clock counts down.
                Read below to see how breaks work on test day{" "}
              </p>
              <br />
              <div className="w-full h-[2px] bg-white"></div>
              <br />
              <p className="font-semibold text-3xl capitalize">
                Take a break : do not close your device
              </p>
              <br />
              <p>
                After te break , a <b>Resume Test Now</b> Button will appear and
                you'll start the next session.{" "}
              </p>

              <br />
              <b className="text-xl">Follow these rules during the break:</b>
              <br />
              <br />
              <p>1. Do not disturb students who are still testing.</p>
              <br />
              <p>2.Do not exit the app or close your laptop.</p>
              <br />
              <p>
                3.Do not access phones, smartwatches, textbooks, notes, or the
                internet.
              </p>
              <br />
              <p>4.Do not eat or drink near any testing device.</p>
              <br />
              <p>
                5.Do not speak in the test room; outside the test room, do not
                discuss the exam with anyone.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[10%] text-white font-semibold text-2xl pl-20 flex items-center">
          Sunny Kurmi
        </div>
      </div>
    </div>
  );
}
