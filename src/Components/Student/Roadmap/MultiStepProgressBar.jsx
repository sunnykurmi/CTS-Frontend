import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={props.step}
      filledBackground="#F58612"
      height="2px"
      style={{ margin: "auto" }}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              backgroundColor: `${accomplished ? "#F58612" : "white"}`
            }}
            className={`h-6 w-6 rounded-full flex items-center justify-center font-semibold text-black step ${accomplished ? "completed" : null}`}
          >
            1
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              backgroundColor: `${accomplished ? "#F58612" : "white"}`
            }}
            className={`h-6 w-6 rounded-full flex items-center justify-center font-semibold text-black step ${accomplished ? "completed" : null}`}
          >
            2
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              backgroundColor: `${accomplished ? "#F58612" : "white"}`
            }}
            className={`h-6 w-6 rounded-full flex items-center justify-center font-semibold text-black step ${accomplished ? "completed" : null}`}
          >
            3
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              backgroundColor: `${accomplished ? "#F58612" : "white"}`
            }}
            className={`h-6 w-6 rounded-full flex items-center justify-center font-semibold text-black step ${accomplished ? "completed" : null}`}
          >
            4
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;