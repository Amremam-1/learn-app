import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/website/Home"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import DashboardLayoutAdmin from "../layout/DashboardLayoutAdmin"

import Users from "../pages/dashboardAdmin/Users"
import Stages from "../pages/dashboardAdmin/Stages"
import Payment from "../pages/dashboardAdmin/Payment"
import Results from "../pages/dashboardAdmin/Results"
import Settings from "../pages/dashboardAdmin/Settings"
import Courses from "../pages/dashboardAdmin/Courses"
import Dashboard from "../pages/dashboardAdmin/Dashboard"
import Profile from "../pages/Student/Profile"
import DashboardStudent from "../pages/Student/DashboardStudent"
import Teachers from "../pages/Student/Teachers"
import CoursesStudent from "../pages/Student/CoursesStudent"
import ResultsManagement from "../pages/Student/ResultsManagement"
import InsightAnalysis from "../pages/Student/InsightAnalysis"
import DashboardLayoutStudent from "../layout/DashboardLayoutStudent"
import ContactUs from "../pages/dashboardAdmin/ContactUs"
import NotFound from "../components/NotFound"

import CreateCourse from "../pages/dashboardAdmin/CreateCourse"
import DashboardLayoutInstructer from "../layout/DashboardLayoutInstructer"
import DashboardInstructer from "../components/DashboardInstructer/DashboardInstructer/DashboardInstructer"
import CoursesInstructer from "../components/DashboardInstructer/CoursesInstructer"
import LiveSessionsInstructer from "../components/DashboardInstructer/LiveSessionsInstructer"
import ExamsInstructer from "../components/DashboardInstructer/ExamsInstructer"
import QuizzesInstructer from "../components/DashboardInstructer/QuizzesInstructer"
import ResultsInstructer from "../components/DashboardInstructer/ResultsInstructer"
import StudentsInstructer from "../components/DashboardInstructer/StudentsInstructer"

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
      { index: true, element: <DashboardInstructer /> },
      { path: "users", element: <Users /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/new", element: <CreateCourse /> },
      { path: "stages", element: <Stages /> },
      { path: "courses", element: <Courses /> },
      { path: "payment", element: <Payment /> },
      { path: "results", element: <Results /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  // Dashboard Layout Student
  {
    path: "/student",
    element: <DashboardLayoutStudent />,
    children: [
      { path: "Profile", element: <Profile /> },
      { path: "DashboardStudent", element: <DashboardStudent /> },
      { path: "Teachers", element: <Teachers /> },
      { path: "CoursesStudent", element: <CoursesStudent /> },
      { path: "ResultsManagement", element: <ResultsManagement /> },
      { path: "InsightAnalysis", element: <InsightAnalysis /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  // Admin Layout Instructer
  {
    path: "/instructer",
    element: <DashboardLayoutInstructer />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "Courses", element: <CoursesInstructer /> },
      { path: "LiveSessions", element: <LiveSessionsInstructer /> },
      { path: "Exams", element: <ExamsInstructer /> },
      { path: "Quizzes", element: <QuizzesInstructer /> },
      { path: "Results", element: <ResultsInstructer /> },
      { path: "Students", element: <StudentsInstructer /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  // Not Found Route
  { path: "*", element: <NotFound /> },
])
