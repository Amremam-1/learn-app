import { useForm } from "react-hook-form"
import Button from "../../Ui/Button"
import { zodResolver } from "@hookform/resolvers/zod"
import { IoPerson } from "react-icons/io5"
import PasswordInput from "../PasswordInput"
import EmailInput from "../EmailInput"
import { schameSignup } from "../../../utils/validation/AuthValidation"
import toast from "react-hot-toast"

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schameSignup),
  })

  const onSubmit = (data) => {
    console.log(data)
    toast.success("Register successful")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-12">
        <EmailInput
          label="Email"
          name="email"
          placeholder="Enter your Email"
          register={register}
          error={errors.email}
        />
        <div>
          <label htmlFor="name" className="mb-1 text-textMuted">
            Username
          </label>

          <div className="flex items-center gap-2 border-b-2 border-gray-300 py-2 focus-within:border-blue-600">
            <IoPerson className="text-gray-500" size={18} />

            <input
              id="name"
              type="text"
              placeholder="Enter your User Name"
              {...register("name")}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          {errors.name && (
            <p className="text-danger mt-1.5">{errors.name.message}</p>
          )}
        </div>

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
        />
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Enter your confirm password"
          register={register}
          error={errors.confirmPassword}
        />

        {/* Submit btn */}

        <Button type="submit" className="rounded-full shadow-lg">
          Login
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
