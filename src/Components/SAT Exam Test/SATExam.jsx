import React, { useState, useEffect } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Component8 from './Component8';
import Component9 from './Component9';
import Component10 from './Component10';
import Component11 from './Component11';

export default function SATExam() {
  const [Component, setComponent] = useState(localStorage.getItem('component') || 'component1');

  useEffect(() => {
    localStorage.setItem('component', Component);
  }, [Component]);

  console.log(Component);

  return (
    <div>
      {Component === 'component1' && <Component1 Component={Component} setComponent={setComponent} />}
      {Component === 'component2' && <Component2 Component={Component} setComponent={setComponent} />}
      {Component === 'component3' && <Component3 Component={Component} setComponent={setComponent} />}
      {Component === 'component4' && <Component4 Component={Component} setComponent={setComponent} />}
      {Component === 'component5' && <Component5 Component={Component} setComponent={setComponent} />}
      {Component === 'component6' && <Component6 Component={Component} setComponent={setComponent} />}
      {Component === 'component7' && <Component7 Component={Component} setComponent={setComponent} />}
      {Component === 'component8' && <Component8 Component={Component} setComponent={setComponent} />}
      {Component === 'component9' && <Component9 Component={Component} setComponent={setComponent} />}
      {Component === 'component10' && <Component10 Component={Component} setComponent={setComponent} />}
      {Component === 'component11' && <Component11 Component={Component} setComponent={setComponent} />}
    </div>
  );
}