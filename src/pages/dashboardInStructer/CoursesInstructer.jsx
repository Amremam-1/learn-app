import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/homeData";

import Container from "../../components/Ui/Container";
import Header from "../../components/new-course/Header";
import AddCourseBtn from "../../components/Course/AddCourseBtn";
import SearchBar from "../../components/Course/SearchBar";
import Filter from "../../components/Course/Filter";
import CoursesList from "../../components/Course/CoursesList";

const CoursesInstructer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ stage: "", subject: "" });

  // Filtered courses based on search + filters
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search filter
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.students && course.students.toString().includes(searchTerm));

      // Stage filter
      const matchesStage = filters.stage
        ? course.grade.toLowerCase() === filters.stage.toLowerCase()
        : true;

      // Subject filter
      const matchesSubject = filters.subject
        ? course.subject === filters.subject
        : true;

      return matchesSearch && matchesStage && matchesSubject;
    });
  }, [searchTerm, filters]);

  function addCourse() {
    navigate("//instructer/courses/new");
  }

  return (
    <div>
      <Container>
        {/* Title + subTitle + addBtn */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Header
            title="My Courses "
            subTitle="Manage and monitor your active teaching courses across all grades."
          />
          <div className="sm:self-auto self-start">
            <AddCourseBtn onClick={addCourse} />
          </div>
        </div>
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap mt-6 rounded-lg border border-borderCard bg-white overflow-hidden">
          <div className="w-full min-w-0 sm:flex-1 sm:min-w-[200px]">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
          <div className="w-full sm:w-auto sm:flex-shrink-0 pl-4 pr-3 md:pl-0 sm:pr-3">
            <Filter courseData={filters} setCourseData={setFilters} />
          </div>
        </div>
        {/* Contetnt */}
        <CoursesList courses={filteredCourses} />{" "}
      </Container>
    </div>
  );
};

export default CoursesInstructer;
