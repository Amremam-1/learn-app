
import CardsInstructer from './CardsInstructer'
import PerformancePie from './PerformancePie'
import WeeklyChart from './WeeklyChart'
import CourseCompletionCard from './CourseCompletionCard';
import UpcomingLiveSessions from './UpcomingLiveSessions';
import RecentActivities from './RecentActivities';

export default function MainViewInstructer() {
  return (
    <>
      <section>
      
        {/* address */}
        <div>
          <h2 className="text-[#2B2E33] text-2xl font-bold">Overview Dashboard</h2>
          <p className="text-[#838996]">Welcome back! Here's what's happening in your university today.</p>
        </div>
      
        <div className="space-y-5">
          {/* cards */}
          <CardsInstructer />
            
          {/* charts */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <WeeklyChart />
            <PerformancePie />
          </div>
            
          {/* Course Completion Card */}
          <CourseCompletionCard />

          {/* Upcoming Live Sessions & Recent Activity */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <UpcomingLiveSessions />
            <RecentActivities />
          </div>

        </div>
      
      </section>
    </>
  )
}
