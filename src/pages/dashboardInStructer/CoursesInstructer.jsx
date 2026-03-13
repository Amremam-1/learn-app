import CardsCoursesInstructer from "../../components/CoursesInstructer/CardsCoursesInstructer"
import EngagementOverTime from "../../components/CoursesInstructer/EngagementOverTime";
import TopPerformingStudents from "../../components/CoursesInstructer/TopPerformingStudents"
import NeedsAttention from './../../components/CoursesInstructer/NeedsAttention';
import { useParams } from "react-router-dom";
import {dashboardCourses} from '../../data/mockData';

const CoursesInstructer = () => {
  // this is the id of the course
  const {courseId} = useParams()
  const courId = dashboardCourses.find(
     (c) => c.id === Number(courseId)
  );
  
  return <>
      <section>
        {/* address */}
        <div>
          <h2 className="text-[#2B2E33] text-2xl font-bold"> {courId.title}</h2>
          {/* <h2 className="text-[#2B2E33] text-2xl font-bold"> Advanced Physics & Thermodynamics</h2> */}
          <p className="text-[#838996]"> Section A • Spring Semester 2024.</p>
        </div>
  
        <div className="space-y-5">
          {/* cards */}
          <CardsCoursesInstructer />
  
          {/* charts */}
          <div className=" pb-10">
            <EngagementOverTime />
          </div>
    
          {/* Top Performing Students & Needs Attention */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TopPerformingStudents />
            <NeedsAttention />
          </div>
        </div>
      </section>
  
  </>
import React, { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { courses } from "../../data/homeData"

import Container from "../../components/Ui/Container"
import Header from "../../components/new-course/Header"
import AddCourseBtn from "../../components/Course/AddCourseBtn"
import SearchBar from "../../components/Course/SearchBar"
import Filter from "../../components/Course/Filter"
import CoursesList from "../../components/Course/CoursesList"

const CoursesInstructer = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({ stage: "", subject: "" })

  // Filtered courses based on search + filters
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Search filter
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.students && course.students.toString().includes(searchTerm))

      // Stage filter
      const matchesStage = filters.stage
        ? course.grade.toLowerCase() === filters.stage.toLowerCase()
        : true

      // Subject filter
      const matchesSubject = filters.subject
        ? course.subject === filters.subject
        : true

      return matchesSearch && matchesStage && matchesSubject
    })
  }, [searchTerm, filters])

  function addCourse() {
    navigate("//instructer/courses/new")
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
  )
}

export default CoursesInstructer
