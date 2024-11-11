import React from "react";

export default function Component2({ Component, setComponent }) {
  return (
    <div>
      <p>Current Component: {Component}</p>
      <button onClick={() => setComponent("component3")}>
        Switch to Component 3
      </button>
    </div>
  );
}
