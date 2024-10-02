import React from "react";
import { Route, Routes } from "react-router";

import Login from './Components/LoginPage/Login';
import Home from './Components/Home/Home';
import Signup from './Components/SignupPage/Signup';
import StudentHome from "./Components/Student/StudentHome";
import Profile from "./Components/Student/EditProfile/Profile";
import AdminHome from "./Components/Admin/AdminHome";
import StudentProfile from "./Components/Admin/StudentProfile";
import GenerateRoadmap from "./Components/Student/Roadmap/GenerateRoadmap";
import AbroadHome from "./Components/Home/AbroadHome";
import ErrorPage from "./Components/Home/ErrorPage";
import IVYHome from "./Components/Home/IVYHome";
import Sendmail from "./Components/Student/ForgotPassword/Sendmail";
import ForgotPassword from "./Components/Student/ForgotPassword/ForgotPassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import InternshipForm from "./Components/Internship/InternshipForm";
import InternProfile from "./Components/Admin/InternProfile";
import PortfolioHome from './Components/Portfolios/PortfolioHome';
import ViewPortfolio from "./Components/Portfolios/ViewPortfolio";

export default function App() {
    const GoogleAuthWrapper=({isLogin})=>{
      return(
        <GoogleOAuthProvider clientId="128624458006-kv7k54pmc6bie3h2ngr6q1v5ikjvcf7a.apps.googleusercontent.com">
         {isLogin ? <Login /> : <Signup />}
        </GoogleOAuthProvider>
      )
    }   
  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<StudentHome/>} />
        <Route path="/portfolio" element={<PortfolioHome/>} />
        <Route path="/portfolio/:id" element={<ViewPortfolio/>} />
        <Route path="/apply-internship-form" element={<InternshipForm/>} />
        <Route path="/abroadstudy" element={<AbroadHome/>} />
        <Route path="/create-roadmap" element={<GenerateRoadmap/>} />
        <Route path="/edit-profile" element={<Profile/>} />
        <Route path="/login" element={<GoogleAuthWrapper isLogin={true} />} />
        <Route path="/sendmail" element={<Sendmail/>} />
        <Route path="/forget-link/:id" element={<ForgotPassword/>} />
        <Route path="/Signup" element={<GoogleAuthWrapper isLogin={false} />} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/intern/:id" element={<InternProfile/>} />
        <Route path="/student/:id" element={<StudentProfile/>} />
        <Route path="/ivy" element={<IVYHome/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}





