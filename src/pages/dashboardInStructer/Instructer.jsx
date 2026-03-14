import CardsInstructer from "../../components/instructorComponents/DashboardInstructer/CardsInstructer"
import PerformancePie from "../../components/instructorComponents/DashboardInstructer/PerformancePie"
import WeeklyChart from "../../components/instructorComponents/DashboardInstructer/WeeklyChart"
import CourseCompletionCard from "../../components/instructorComponents/DashboardInstructer/CourseCompletionCard"
import UpcomingLiveSessions from "../../components/instructorComponents/DashboardInstructer/UpcomingLiveSessions"
import RecentActivities from "../../components/instructorComponents/DashboardInstructer/RecentActivities"

export default function Instructer() {
  return (
    <section>
      {/* address */}
      <div>
        <h2 className="text-[#2B2E33] text-2xl font-bold">
          Overview Dashboard
        </h2>
        <p className="text-[#838996]">
          Welcome back! Here's what's happening in your university today.
        </p>
      </div>

      <div className="space-y-5">
        {/* cards */}
        <CardsInstructer />

        {/* charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WeeklyChart />
          <PerformancePie />
        </div>

        {/* Course Completion Card */}
        <CourseCompletionCard />

        {/* Upcoming Live Sessions & Recent Activity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UpcomingLiveSessions />
          <RecentActivities />
        </div>
      </div>
    </section>
  )
}
