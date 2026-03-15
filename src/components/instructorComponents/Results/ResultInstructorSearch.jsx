import { VscSearch } from "react-icons/vsc"
import { MdOutlinePictureAsPdf } from "react-icons/md"
import { LuSheet } from "react-icons/lu"
import { useState } from "react"
import { Courses } from "../../../data/resultData"
import FormInput from "../../Ui/FormInput"
import FormSelect from "../../Ui/FormSelect"

const ResultInstructorSearch = ({
  toPDF,
  search,
  setSearch,
  setFilter,
  clearFilters,
}) => {
  const [selectedCourse, setSelectedCourse] = useState("")

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

      <FormSelect
        options={[
          { value: "", label: "All Courses" },
          ...Courses.map((course) => ({
            value: course.name.toLowerCase(),
            label: course.name,
          })),
        ]}
        value={selectedCourse}
        onChange={(value) => {
          setSelectedCourse(value)

          if (!value) {
            clearFilters()
          } else {
            setFilter("course", value)
          }
        }}
        className="bg-slate-50"
      />

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
  )
}

export default ResultInstructorSearch
