import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { IoIosUnlock } from "react-icons/io"

const PasswordInput = ({ label, name, register, error, placeholder }) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <label htmlFor={name} className="mb-1 text-textMuted">
        {label}
      </label>

      <div className="flex items-center gap-2 border-b-2 border-gray-300 py-2 focus-within:border-blue-600">
        <IoIosUnlock className="text-gray-500" size={18} />

        <input
          id={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className="w-full bg-transparent focus:outline-none"
        />

        {show ? (
          <FaEye
            onClick={() => setShow(false)}
            className="text-primary text-xl cursor-pointer"
          />
        ) : (
          <FaEyeSlash
            onClick={() => setShow(true)}
            className="text-primary text-xl cursor-pointer"
          />
        )}
      </div>

      {error && <p className="text-danger mt-1.5">{error.message}</p>}
    </div>
  )
}

export default PasswordInput
