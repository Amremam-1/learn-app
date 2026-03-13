import React from "react"
import { Link } from "react-router-dom"
import RegisterForm from "../../components/Auth/register/RegisterForm"

const Register = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="max-[768px]:mx-auto w-[380px]">
        {/* Sign In */}
        <div className="mb-12">
          <h1 className="mb-3.5 text-2xl font-semibold">Sign Up</h1>
          <p>If you already have an account register</p>
          <div className="flex items-center flex-row gap-2 text-textMuted">
            <p>You Can </p>
            <Link to="/login" className="text-primary font-bold">
              Login here !
            </Link>
          </div>
        </div>
        {/* Form Sign up */}
        <RegisterForm />
      </div>

      {/* Image */}
      <div className="py-20 w-[50%] max-[768px]:hidden">
        <img src="/images/signImg.svg" alt="" />
      </div>
    </div>
  )
}

export default Register
