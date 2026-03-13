import React from "react"
import { HiOutlineMail } from "react-icons/hi"

const EmailInput = ({ label, name, register, error, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-1 text-textMuted">
        {label}
      </label>

      <div className="flex items-center gap-2 border-b-2 border-gray-300 py-2 focus-within:border-blue-600">
        <HiOutlineMail className="text-gray-500" size={18} />

        <input
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className="w-full bg-transparent focus:outline-none"
        />
      </div>

      {error && <p className="text-danger mt-1.5">{error.message}</p>}
    </div>
  )
}

export default EmailInput
