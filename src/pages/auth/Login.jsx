import React from "react"
import { Link } from "react-router-dom"
import LoginForm from "../../components/Auth/login/LoginForm"

const Login = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="max-[768px]:mx-auto w-[380px]">
        {/* Sign In */}
        <div className="mb-12">
          <h1 className="mb-3.5 text-2xl font-semibold">Sign in</h1>
          <p>If you don’t have an account register</p>
          <div className="flex items-center flex-row gap-2 text-textMuted">
            <p>You Can </p>
            <Link to="/register" className="text-primary font-bold">
              Register here !
            </Link>
          </div>
        </div>
        {/* Form Sign In */}

        <LoginForm />
        {/* Another Login With socail */}
        <div className="text-center mt-3">
          <p className="text-textMuted">or continue with</p>

          <div className="flex items-center gap-2 justify-evenly mt-3">
            <img src="/images/Facebook.svg" alt="" />
            <img src="/images/apple.svg" alt="" />
            <img src="/images/google.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="py-20 w-[50%] max-[768px]:hidden">
        <img src="/images/loginImg.svg" alt="" />
      </div>
    </div>
  )
}

export default Login
