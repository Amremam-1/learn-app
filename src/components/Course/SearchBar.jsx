import React from "react";
import Input from "../Ui/Input";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ setSearchTerm }) {
  return (
    <div className="w-full sm:w-auto p-4 sm:px-4 mb-4 sm:mb-0">
      <Input
        type="search"
        className="rounded-[8px] border border-borderCard w-full sm:w-[619px] bg-[#F4F6FB]"
        placeholder="Search by name or student ID..."
        icon={<IoSearch className="text-iconGray text-lg sm:text-xl" />}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
