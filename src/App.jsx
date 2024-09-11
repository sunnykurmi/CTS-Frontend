import React from "react";
import { Route, Routes } from "react-router";

import Login from './Components/LoginPage/Login';
import Home from './Components/Home/Home';
import Signup from './Components/SignupPage/Signup';
import StudentHome from "./Components/Student/StudentHome";
import CreateRoadmap from './Components/Student/Roadmap/CreateRoadmap';
import Profile from "./Components/Student/EditProfile/Profile";
import AdminHome from "./Components/Admin/AdminHome";
import StudentProfile from "./Components/Admin/StudentProfile";

export default function App() {

  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<StudentHome/>} />
        <Route path="/create-roadmap" element={<CreateRoadmap/>} />
        <Route path="/edit-profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/student/:id" element={<StudentProfile/>} />
      </Routes>
    </div>
  );
}
