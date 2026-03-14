import { IoMdInformationCircleOutline } from "react-icons/io"
import FormInput from "../../Ui/FormInput"
import FormSelect from "../../Ui/FormSelect"
import TextEditor from "../../Ui/TextEditor"

import { courseStages, courseSubjects } from "../../../data/mockData"

export default function BasicInformation({ courseData, handleChange, errors }) {
  return (
    <section className="rounded-[12px] border border-borderCard flex flex-col mb-8 bg-white">
      <div className="flex p-6 items-center gap-2">
        <IoMdInformationCircleOutline className="size-5 text-primary" />
        <h2 className="font-bold text-[20px] text-grayDark">
          Basic Information
        </h2>
      </div>

      <div className="flex flex-col p-6 pt-0">
        {/* Title */}
        <div className="flex flex-col gap-2 w-full pb-[24px]">
          <p className="font-semibold text-grayLabel text-[14px]">
            Course Title
          </p>
          <FormInput
            type="text"
            value={courseData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="e.g. Advanced Mathematics"
            error={errors.title}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Stage */}
          <div className="flex flex-col gap-2 w-full pb-[24px]">
            <p className="font-semibold text-grayLabel text-[14px]">
              Educational Stage
            </p>
            <FormSelect
              options={courseStages}
              value={courseData.stage}
              onChange={(val) => handleChange("stage", val)}
              placeholder="Select Stage"
              error={errors.stage}
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2 w-full pb-[24px]">
            <p className="font-semibold text-grayLabel text-[14px]">Subject</p>
            <FormSelect
              options={courseSubjects}
              value={courseData.subject}
              onChange={(val) => handleChange("subject", val)}
              placeholder="Select Subject"
              error={errors.subject}
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold text-grayLabel text-[14px]">
            Course Description
          </p>
          <div className="border-slate-300">
            <TextEditor
              value={courseData.description}
              onChange={(content) => handleChange("description", content)}
            />
          </div>
          {errors.description && (
            <span className="text-danger text-xs mt-1">
              {errors.description}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
