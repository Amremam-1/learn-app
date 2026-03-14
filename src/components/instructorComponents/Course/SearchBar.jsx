import React from "react"
import FormInput from "../../Ui/FormInput"
import { IoSearch } from "react-icons/io5"

export default function SearchBar({ setSearchTerm }) {
  return (
    <div className="w-full min-w-0 p-4 sm:px-4 sm:mb-0">
      <FormInput
        type="search"
        className="rounded-[8px] border border-borderCard w-full bg-[#F4F6FB]"
        placeholder="Search by name or student ID..."
        icon={<IoSearch className="text-iconGray text-lg sm:text-xl" />}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
