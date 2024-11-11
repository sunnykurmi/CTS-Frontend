import React from 'react'


export default function Component3({ Component, setComponent }) {
  return (
    <div>
      <p>Current Component: {Component}</p>
      <button onClick={() => setComponent("component4")}>
        Switch to Component 4
      </button>
    </div>
  );
}
