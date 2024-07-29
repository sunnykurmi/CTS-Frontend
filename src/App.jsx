import React from "react";
import { Route, Routes } from "react-router";
import LocomotiveScroll from 'locomotive-scroll';

import Login from './Components/LoginPage/Login';
import Home from './Components/Home/Home';
import Signup from './Components/SignupPage/Signup';

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}
