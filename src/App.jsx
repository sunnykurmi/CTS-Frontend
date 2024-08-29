import React from "react";
import { Route, Routes } from "react-router";

import Login from './Components/LoginPage/Login';
import Home from './Components/Home/Home';
import Signup from './Components/SignupPage/Signup';
import StudentHome from "./Components/Student/StudentHome";
import CreateRoadmap from './Components/Student/Roadmap/CreateRoadmap';

export default function App() {

  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<StudentHome/>} />
        <Route path="/createroadmap" element={<CreateRoadmap/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}
