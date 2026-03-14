import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/homeData";

import Container from "../../components/Ui/Container";
import Header from "../../components/new-course/Header";
import Filter from "../../components/instructorComponents/Course/Filter";
import CoursesList from "../../components/instructorComponents/Course/CoursesList";
import SearchBar from "../../components/instructorComponents/Course/SearchBar";
import AddCourseBtn from "../../components/instructorComponents/Course/AddCourseBtn";

const Courses = () => {
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
    navigate("/admin/courses/new");
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  mt-6 rounded-lg border border-borderCard bg-white">
          {/* Search */}
          <div className="w-full sm:flex-1">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>

          {/* Filter */}
          <Filter courseData={filters} setCourseData={setFilters} />
        </div>
        {/* Contetnt */}
        <CoursesList courses={filteredCourses} />{" "}
      </Container>
    </div>
  );
};

export default Courses;
