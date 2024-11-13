import React, { useState, useEffect } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';

export default function SATExam() {
  const [Component, setComponent] = useState(localStorage.getItem('component') || 'component1');

  useEffect(() => {
    localStorage.setItem('component', Component);
  }, [Component]);

  return (
    <div>
      {Component === 'component1' && <Component1 Component={Component} setComponent={setComponent} />}
      {Component === 'component2' && <Component2 Component={Component} setComponent={setComponent} />}
      {Component === 'component3' && <Component3 Component={Component} setComponent={setComponent} />}
      {Component === 'component4' && <Component4 Component={Component} setComponent={setComponent} />}
      {Component === 'component5' && <Component5 Component={Component} setComponent={setComponent} />}
      {Component === 'component6' && <Component6 Component={Component} setComponent={setComponent} />}
    </div>
  );
}