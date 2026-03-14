import { RiArrowDropDownLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { LuSheet } from "react-icons/lu";
import { useState } from "react";
import { Courses } from "../../../data/resultData";
import FormInput from "../../Ui/FormInput";

const ResultInstructorSearch = ({
  toPDF,
  search,
  handleFilterByCourse,
  setSearch,
}) => {
  const [isCourseModel, setIsCourseModel] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <div className="rounded-xl border border-[#0000001A] p-3 grid lg:grid-cols-6 items-center gap-4">
      <div className="col-span-3">
        <FormInput
          type="text"
          icon={<VscSearch />}
          placeholder="Search students by name, ID or email..."
          className="w-full bg-transparent focus:outline-none bg-slate-50 placeholder:text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="relative w-full">
        <button
          onClick={() => setIsCourseModel(!isCourseModel)}
          className="rounded-xl border relative w-full border-[#0000001A] bg-slate-50 h-12 lg:px-4 px-2 flex items-center justify-between text-sm"
        >
          <span>{selectedCourse ? selectedCourse : "All Courses"}</span>
          <span>
            <RiArrowDropDownLine className="lg:text-2xl text-slate-600" />
          </span>
        </button>
        <div
          className={`absolute items-start bg-white flex flex-col rounded-xl p-3 w-[200px] top-14 ${isCourseModel ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 ease-in-out gap-3 border border-[#E2E8F0]`}
        >
          {Courses.map((course, idx) => (
            <button
              onClick={() => {
                handleFilterByCourse(course.name);
                setSelectedCourse(course.name);
                setIsCourseModel(false);
              }}
              className="hover:text-primary capitalize text-sm"
              key={idx}
            >
              {course.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-3 rounded-xl border col-span-2 font-bold border-[#0000001A] h-12 px-4 text-xs">
        <button
          onClick={() => toPDF()}
          className="text-[#5B4CE6] flex items-center gap-1 py-3"
        >
          <MdOutlinePictureAsPdf />
          <span className="hidden lg:flex">PDF Export</span>
          <span className="lg:hidden">PDF</span>
        </button>
        <div className="h-9 bg-[#f1f5f9] w-0.5" />
        <button className="text-[#475569] flex gap-1 items-center py-3 pl-1">
          <LuSheet />
          <span className="hidden lg:flex">Excel Sheet Export</span>
          <span className="lg:hidden">Excel</span>
        </button>
      </div>
    </div>
  );
};

export default ResultInstructorSearch;
