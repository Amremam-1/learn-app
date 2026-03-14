import React from "react";

import { MdOutlineLayers } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-[16px] shadow-md overflow-hidden w-full max-w-[320px] mx-auto">
      {/* Image with badges */}
      <div className="relative">
        <img
          src={course.image || "/images/course-placeholder.png"}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
            {course.grade || "GRADE 11"}
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {course.status || "PUBLISHED"}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[20px] leading-[28px] font-semibold">
          {course.title}
        </h3>
        <p className="text-textMuted text-[14px] leading-[20px] line-clamp-2 font-normal">
          {course.description || "No description available."}
        </p>

        {/* Stats */}
        <div className="flex justify-center items-center text-desc text-sm mt-8 gap-4">
          <div className="flex items-center gap-1 font-semibold">
            <span>
              <IoPeopleOutline className="size-4" />
            </span>
            {course.students || 0}
            <span className="font-normal">Students</span>
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <span>
              <MdOutlineLayers className="size-4" />
            </span>
            {course.units || 0}
            <span className="font-normal">Units</span>
          </div>
        </div>

        {/* Instructor avatars */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {course.status !== "DRAFT" ? (
              <>
                {course.instructors?.map((inst, idx) => (
                  <img
                    key={idx}
                    src={inst.image}
                    alt={inst.name}
                    className={`w-6 h-6 rounded-full border-2 border-white ${
                      idx !== 0 ? "-ml-2" : ""
                    }`} // negative margin to overlap
                  />
                ))}
                {course.extraStudents && (
                  <span className="ml-2 text-[8px] font-bold leading-[12px] text-textCo">
                    +{course.extraStudents}
                  </span>
                )}
              </>
            ) : (
              <span className="text-sm text-iconGray">
                Last edited {course.lastEdited}
              </span>
            )}
          </div>

          <div>
            <Link 
              to={`${course.id}/CoursesInstructer`}
              className="text-primary font-bold text-[12px] leading-[20px] mt-2 hover:underline"
            >
              View Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
