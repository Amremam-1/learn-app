import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { RouterProvider } from "react-router"
import { router } from "./routes/router.jsx"
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
)
