import React from 'react';

export default function Component1({ Component, setComponent }) {
  return (
    <div>
      <p>Current Component: {Component}</p>
      <button onClick={() => setComponent('component2')}>Switch to Component 2</button>
    </div>
  );
}