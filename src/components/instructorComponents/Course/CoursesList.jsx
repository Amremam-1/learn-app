import React from "react";
import CourseCard from "./CourseCard";

export default function CoursesList({ courses }) {
  return (
    <div>
      {/* Course Cards */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <span className="block pt-8 text-center text-textMuted">
          No courses found
        </span>
      )}
    </div>
  );
}
