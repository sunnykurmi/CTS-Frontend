import React from "react";
import { Route, Routes } from "react-router";

import Login from "./Components/LoginPage/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/SignupPage/Signup";
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
import PortfolioHome from "./Components/Portfolios/PortfolioHome";
import ViewPortfolio from "./Components/Portfolios/ViewPortfolio";
import PaymentSuccess from "./Components/Portfolios/PaymentSuccess";
import ServicesHome from "./Components/Home/ExclusiveServices/ServicesHome";
import EssayHome from "./Components/Home/ExclusiveServices/Essay Editing/EssayHome";
import EssaySuccess from "./Components/Home/ExclusiveServices/Essay Editing/EssaySuccess";
import CommonHome from "./Components/Home/ExclusiveServices/Common App/CommonHome";
import CommonSuccess from "./Components/Home/ExclusiveServices/Common App/CommonSuccess";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import CssHome from "./Components/Home/ExclusiveServices/CSS Profile/CssHome";
import CssSuccess from "./Components/Home/ExclusiveServices/CSS Profile/CssSuccess";
import ExamHome from "./Components/Home/ExclusiveServices/Expert Classes/ExamHome";
import SATHome from "./Components/Home/ExclusiveServices/Expert Classes/SATHome";
import ExamSuccess from "./Components/Home/ExclusiveServices/Expert Classes/ExamSuccess";
import IELTSHome from "./Components/Home/ExclusiveServices/Expert Classes/IELTSHome";
import TOEFLHome from "./Components/Home/ExclusiveServices/Expert Classes/TOEFLHome";
import DETHome from "./Components/Home/ExclusiveServices/Expert Classes/DETHome";
import IvyForm from "./Components/Home/IvyForm";
import Policy from "./Components/Home/Policy";
import About from "./Components/Home/About";
import SATExam from "./Components/SAT Exam Test/SATExam";
import SATForm from "./Components/SAT Exam Test/SATForm";
import SatPaymentSuccess from "./Components/SAT Exam Test/SatPaymentSuccess";
import SatPractice from "./Components/SAT Exam Test/SatPractice";
import CtsScholarship from './Components/Home/CtsScholarship';

export default function App() {
  const GoogleAuthWrapper = ({ isLogin }) => {
    return (
      <GoogleOAuthProvider clientId="128624458006-kv7k54pmc6bie3h2ngr6q1v5ikjvcf7a.apps.googleusercontent.com">
        {isLogin ? <Login /> : <Signup />}
      </GoogleOAuthProvider>
    );
  };
  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<StudentHome />} />
        <Route path="/ivy" element={<IVYHome />} />
        <Route path="/ivy-form" element={<IvyForm />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/Signup" element={<GoogleAuthWrapper isLogin={false} />} />
        <Route path="/login" element={<GoogleAuthWrapper isLogin={true} />} />

        <Route path="/apply-internship-form" element={<InternshipForm />} />

        <Route path="/abroadstudy" element={<AbroadHome />} />

        <Route path="/create-roadmap" element={<GenerateRoadmap />} />

        <Route path="/edit-profile" element={<Profile />} />

        <Route path="/sendmail" element={<Sendmail />} />

        <Route path="/forget-link/:id" element={<ForgotPassword />} />

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminHome />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/intern/:id"
          element={
            <AdminProtectedRoute>
              <InternProfile />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/student/:id"
          element={
            <AdminProtectedRoute>
              <StudentProfile />
            </AdminProtectedRoute>
          }
        />

        <Route path="/portfolio" element={<PortfolioHome />} />
        <Route path="/portfolio/:id" element={<ViewPortfolio />} />
        <Route
          path="/portfolio/paymentsuccess/:id"
          element={<PaymentSuccess />}
        />

        <Route path="/services" element={<ServicesHome />} />
        <Route path="/services/essay-editing" element={<EssayHome />} />
        <Route
          path="/services/essay-editing/paymentsuccess/:id"
          element={<EssaySuccess />}
        />

        <Route path="/services/common-app-review" element={<CommonHome />} />
        <Route
          path="/services/common-app-review/paymentsuccess/:id"
          element={<CommonSuccess />}
        />

        <Route path="/services/css-profile" element={<CssHome />} />
        <Route
          path="/services/css-profile-review/paymentsuccess/:id"
          element={<CssSuccess />}
        />

        <Route path="/services/exam-prepration" element={<ExamHome />} />

        <Route path="/services/exam-prepration/sat-prepration" element={<SATHome />} />
        <Route
          path="/services/exam-prep/paymentsuccess/:id"
          element={<ExamSuccess />}
        />

        <Route path="/services/exam-prepration/ielts-prepration" element={<IELTSHome />} />

        <Route path="/services/exam-prepration/toefl-prepration" element={<TOEFLHome />} />
        <Route path="/services/exam-prepration/det-prepration" element={<DETHome />} />


        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/about-us" element={<About />} />

{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}
{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}

        <Route path="/satpractice/sat-verification-form" element={<SatPractice />} />
        <Route path="/satpractice" element={<SATForm />} />
        <Route path="/satpractice/paymentsuccess/:id"element={<SatPaymentSuccess />}/>
        <Route path="/satexam" element={<SATExam />} />
        
{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}
{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}{/* SAT Exam Routes */}

          <Route path="/cts-scholarship" element={<AdminProtectedRoute>
          <CtsScholarship />
        </AdminProtectedRoute>
        } />
      </Routes>
    </div>
  );
}