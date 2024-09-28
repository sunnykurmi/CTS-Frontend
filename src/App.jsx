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

export default function App() {
    const GoogleAuthWrapper=()=>{
      return(
        <GoogleOAuthProvider clientId="128624458006-kv7k54pmc6bie3h2ngr6q1v5ikjvcf7a.apps.googleusercontent.com">
          <Login/>
        </GoogleOAuthProvider>
      )
    }   
  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<StudentHome/>} />
        <Route path="/apply-internship-form" element={<InternshipForm/>} />
        <Route path="/abroadstudy" element={<AbroadHome/>} />
        <Route path="/create-roadmap" element={<GenerateRoadmap/>} />
        <Route path="/edit-profile" element={<Profile/>} />
        <Route path="/login" element={<GoogleAuthWrapper/>} />
        <Route path="/sendmail" element={<Sendmail/>} />
        <Route path="/forget-link/:id" element={<ForgotPassword/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/admin" element={<AdminHome/>} />
        <Route path="/intern/:id" element={<InternProfile/>} />
        <Route path="/student/:id" element={<StudentProfile/>} />
        <Route path="/ivy" element={<IVYHome/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}









// import React from "react";
// import { Route, Routes } from "react-router";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Login from "./Components/LoginPage/Login";
// import Home from "./Components/Home/Home";
// import Signup from "./Components/SignupPage/Signup";
// import StudentHome from "./Components/Student/StudentHome";
// import Profile from "./Components/Student/EditProfile/Profile";
// import AdminHome from "./Components/Admin/AdminHome";
// import StudentProfile from "./Components/Admin/StudentProfile";
// import GenerateRoadmap from "./Components/Student/Roadmap/GenerateRoadmap";
// import ProtectedRoute from "./utils/ProtectedRoute";

// export default function App() {
//   return (
//     <div className="overflow-x-hidden font-body">
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/home"
//           element={<ProtectedRoute element={StudentHome} />}
//         />
//         <Route
//           path="/create-roadmap"
//           element={<ProtectedRoute element={GenerateRoadmap} />}
//         />
//         <Route
//           path="/edit-profile"
//           element={<ProtectedRoute element={Profile} />}
//         />
//         <Route path="/admin" element={<ProtectedRoute element={AdminHome} />} />
//         <Route
//           path="/student/:id"
//           element={<ProtectedRoute element={StudentProfile} />}
//         />
//       </Routes>
//     </div>
//   );
// }
