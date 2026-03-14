import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/website/Home"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import DashboardLayoutAdmin from "../layout/DashboardLayoutAdmin"

import Admin from "../pages/dashboardAdmin/Admin"

import AdminSetting from "../pages/dashboardAdmin/AdminSetting"

import DashboardLayoutStudent from "../layout/DashboardLayoutStudent"
import Profile from "../pages/Student/Profile"
import DashboardStudent from "../pages/Student/DashboardStudent"
import Teachers from "../pages/Student/Teachers"
import CoursesStudent from "../pages/Student/CoursesStudent"
import ResultsManagement from "../pages/Student/ResultsManagement"
import InsightAnalysis from "../pages/Student/InsightAnalysis"

import DashboardLayoutInstructer from "../layout/DashboardLayoutInstructer"
import CoursesInstructer from "../pages/dashboardInstructer/CoursesInstructer"
import CreateCourseInstructer from "../pages/dashboardInstructer/CreateCourseInstructer"
import LiveSessionsInstructer from "../pages/dashboardInstructer/LiveSessionsInstructer"
import CreateLiveSessionInStructer from "../pages/dashboardInstructer/CreateLiveSessionInStructer"
import ExamsInstructer from "../pages/dashboardInstructer/ExamsInstructer"
import QuizzesInstructer from "../pages/dashboardInstructer/QuizzesInstructer"
import ResultsInstructer from "../pages/dashboardInstructer/ResultsInstructer"
import StudentsInstructer from "../pages/dashboardInstructer/StudentsInstructer"
import Instructer from "../pages/dashboardInStructer/Instructer"
import InstructerSetting from "../pages/dashboardInstructer/InstructerSetting"
import FirstExamPage from "../pages/dashboardInStructer/Exam/FirstExamPage"
import SecondExamPage from "../pages/dashboardInStructer/Exam/SecondExamPage"
import ThirdExamPage from "../pages/dashboardInStructer/Exam/ThirdExamPage"
import NotFound from "../components/NotFound"
import CoursesViewAnalytics from "../pages/dashboardInstructer/CoursesViewAnalytics"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // Dashboard Layout Admin
  {
    path: "/admin",
    element: <DashboardLayoutAdmin />,
    children: [
      { index: true, element: <Admin /> },
      { path: "settings", element: <AdminSetting /> },
    ],
  },

  // Dashboard Layout Student
  {
    path: "/student",
    element: <DashboardLayoutStudent />,
    children: [
      { index: true, element: <Profile /> },
      { path: "DashboardStudent", element: <DashboardStudent /> },
      { path: "Teachers", element: <Teachers /> },
      { path: "CoursesStudent", element: <CoursesStudent /> },
      { path: "ResultsManagement", element: <ResultsManagement /> },
      { path: "InsightAnalysis", element: <InsightAnalysis /> },
    ],
  },

  // Admin Layout Instructer
  {
    path: "/instructer",
    element: <DashboardLayoutInstructer />,
    children: [
      { index: true, element: <Instructer /> },
        { path: "exam", element: <FirstExamPage /> },
  
      { path: "exam/second", element: <SecondExamPage /> },
      { path: "exam/third", element: <ThirdExamPage /> },
      { path: "Courses", element: <CoursesInstructer /> },
      {
        path: "Courses/:courseId/CoursesInstructer",
        element: <CoursesViewAnalytics />,
      },
      { path: "courses/new", element: <CreateCourseInstructer /> },
      { path: "liveSessions", element: <LiveSessionsInstructer /> },
      { path: "liveSessions/new", element: <CreateLiveSessionInStructer /> },
      { path: "exams", element: <ExamsInstructer /> },
      { path: "quizzes", element: <QuizzesInstructer /> },
      { path: "results", element: <ResultsInstructer /> },
      { path: "students", element: <StudentsInstructer /> },
      { path: "settings", element: <InstructerSetting /> },
    ],
  },

  // Not Found Route
  { path: "*", element: <NotFound /> },
])
