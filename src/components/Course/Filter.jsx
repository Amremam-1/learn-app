import React from "react";
import FormSelect from "../Ui/FormSelect";
import { courseStages, courseSubjects } from "../../data/mockData";

export default function Filter({ courseData, setCourseData }) {
  const handleChange = (key, value) => {
    setCourseData({ ...courseData, [key]: value });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 w-full sm:w-auto min-w-0 pl-4 pr-3">
      {/* Stage */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:w-auto">
        <p className="font-medium text-textMuted text-[14px]">Stage:</p>
        <FormSelect
          options={courseStages}
          value={courseData.stage}
          onChange={(val) => handleChange("stage", val)}
          placeholder="All Grades"
          className="bg-[#F4F6FB] text-textCo font-medium w-full sm:w-auto"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
        <p className="font-medium text-textMuted text-[14px]">Subject:</p>
        <FormSelect
          options={courseSubjects}
          value={courseData.subject}
          onChange={(val) => handleChange("subject", val)}
          placeholder="All Subjects"
          className="bg-[#F4F6FB] text-textCo font-medium w-full sm:w-auto"
        />
      </div>
    </div>
  );
}
