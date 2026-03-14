import { useForm } from "react-hook-form"
import Button from "../../Ui/Button"
import { zodResolver } from "@hookform/resolvers/zod"
import PasswordInput from "../PasswordInput"
import EmailInput from "../EmailInput"
import { schameLogin } from "../../../utils/validation/AuthValidation"
import toast from "react-hot-toast"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schameLogin),
  })

  const onSubmit = (data) => {
    console.log(data)
    toast.success("Login successful")

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
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
        />

        {/* Submit btn */}

        <Button type="submit" className="rounded-full shadow-lg">
          Login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
