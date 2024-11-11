

import React from 'react'


export default function Component4({ Component, setComponent }) {
  return (
    <div>
      <p>Current Component: {Component}</p>
      <button onClick={() => setComponent("component1")}>
        Switch to Component 1
      </button>
    </div>
  );
}
