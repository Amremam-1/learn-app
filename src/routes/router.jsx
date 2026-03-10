import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/website/Home"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import DashboardLayout from "../layout/DashboardLayout"

import Users from "../pages/dashboard/Users"
import Stages from "../pages/dashboard/Stages"
import Payment from "../pages/dashboard/Payment"
import Results from "../pages/dashboard/Results"
import Settings from "../pages/dashboard/Settings"
import Courses from "./../pages/dashboard/Courses"
import Dashboard from "../pages/dashboard/dashboard"
import Profile from "../pages/Student/Profile"
import DashboardStudent from "../pages/Student/DashboardStudent"
import Teachers from "../pages/Student/Teachers"
import CoursesStudent from "../pages/Student/CoursesStudent"
import ResultsManagement from "../pages/Student/ResultsManagement"
import InsightAnalysis from "../pages/Student/InsightAnalysis"
import DashboardLayoutStudent from "../layout/DashboardLayoutStudent"
import ContactUs from "../pages/dashboard/ContactUs"
import NotFound from "../components/NotFound"

import CreateCourse from "../pages/dashboard/CreateCourse"



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
  // admin routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
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

  // Not Found Route
  { path: "*", element: <NotFound /> },
])
