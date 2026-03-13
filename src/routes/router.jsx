import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/website/Home"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import DashboardLayoutAdmin from "../layout/DashboardLayoutAdmin"

import Admin from "../pages/dashboardAdmin/Admin"
import Users from "../pages/dashboardAdmin/Users"
import Stages from "../pages/dashboardAdmin/Stages"
import Payment from "../pages/dashboardAdmin/Payment"
import Results from "../pages/dashboardAdmin/Results"
import Settings from "../pages/dashboardAdmin/Settings"
import Courses from "../pages/dashboardInStructer/Courses"
import ContactUs from "../pages/dashboardAdmin/ContactUs"
import CreateCourse from "../pages/dashboardAdmin/CreateCourse"

import AdminSetting from "../pages/dashboardAdmin/AdminSetting"

import DashboardLayoutStudent from "../layout/DashboardLayoutStudent"
import Profile from "../pages/Student/Profile"
import DashboardStudent from "../pages/Student/DashboardStudent"
import Teachers from "../pages/Student/Teachers"
import CoursesStudent from "../pages/Student/CoursesStudent"
import ResultsManagement from "../pages/Student/ResultsManagement"
import InsightAnalysis from "../pages/Student/InsightAnalysis"

import DashboardLayoutInstructer from "../layout/DashboardLayoutInstructer"
import CoursesInstructer from "../pages/dashboardInStructer/CoursesInstructer"
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

import NotFound from "../components/NotFound"
import Instructer from "../pages/dashboardInStructer/Instructer"
import CoursesAdmin from "../pages/dashboardAdmin/CoursesAdmin"

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
      { path: "users", element: <Users /> },
      { path: "courses", element: <CoursesAdmin /> },
      { path: "courses/new", element: <CreateCourse /> },
      { path: "stages", element: <Stages /> },
      { path: "courses", element: <Courses /> },
      { path: "payment", element: <Payment /> },
      { path: "results", element: <Results /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "settings", element: <Settings /> },
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
      // { path: "Courses", element: <CoursesInstructer /> },
      { path: "Courses", element: <Courses /> },
      { path: "Courses/:courseId/CoursesInstructer", element: <CoursesInstructer /> },
      { path: "LiveSessions", element: <LiveSessionsInstructer /> },
      { path: "Exams", element: <ExamsInstructer /> },
      { path: "Quizzes", element: <QuizzesInstructer /> },
      { path: "Results", element: <ResultsInstructer /> },
      { path: "Students", element: <StudentsInstructer /> },
      { path: "settings", element: <Settings /> },
      { path: "Courses", element: <CoursesInstructer /> },
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
