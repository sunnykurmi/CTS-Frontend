import React, { useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'

export default function Test() {
    const [Component, setComponent] = useState(localStorage.getItem('component') || 'component1');

  return (
    <div>
        {Component === 'component1' && <Component1  Component={Component} setComponent={setComponent}/>}
        {Component === 'component2' && <Component2  Component={Component} setComponent={setComponent}/>}
        {Component === 'component3' && <Component3  Component={Component} setComponent={setComponent}/>}
        {Component === 'component4' && <Component4  Component={Component} setComponent={setComponent}/>}

        
    </div>
  )
}
