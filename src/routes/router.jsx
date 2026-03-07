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
import Courses from './../pages/dashboard/Courses';
import Dashboard from "../pages/dashboard/dashboard"

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

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "stages", element: <Stages /> },
      { path: "courses", element: <Courses /> },
      { path: "payment", element: <Payment /> },
      { path: "results", element: <Results /> },
      { path: "contact-us", element: <contact-us /> },
      { path: "settings", element: <Settings /> },
    ],
  },
])
