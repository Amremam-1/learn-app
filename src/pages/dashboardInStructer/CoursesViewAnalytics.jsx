import CardsCoursesInstructer from "../../components/instructorComponents/Course/CoursesInstructerViewAnalytics/CardsCoursesInstructer"
import EngagementOverTime from "../../components/instructorComponents/Course/CoursesInstructerViewAnalytics/EngagementOverTime"
import TopPerformingStudents from "../../components/instructorComponents/Course/CoursesInstructerViewAnalytics/TopPerformingStudents"
import NeedsAttention from "../../components/instructorComponents/Course/CoursesInstructerViewAnalytics/NeedsAttention"
import { useParams } from "react-router-dom"
import { dashboardCourses } from "../../data/mockData"

const CoursesViewAnalytics = () => {
  const { courseId } = useParams()
  const courId = dashboardCourses.find((c) => c.id === Number(courseId))

  return (
    <section>
      {/* address */}
      <div>
        <h2 className="text-[#2B2E33] text-2xl font-bold"> {courId.title}</h2>
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
  )
}

export default CoursesViewAnalytics
