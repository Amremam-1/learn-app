import Cards from "../../components/DashboardAdmin/Cards"
import RecentActivity from "../../components/DashboardAdmin/RecentActivity"
import MonthlyPerformanceChart from "../../components/DashboardAdmin/MonthlyPerformanceChart.jsx"

export default function Dashboard() {
  return (
    <>
      <section>
        {/* address */}
        <div>
          <h2 className="text-[#2B2E33] text-2xl font-bold">
            Dashboard Overview
          </h2>
          <p className="text-[#838996]">
            Monitor student performance and get AI-powered insights
          </p>
        </div>

        <div className="space-y-5">
          {/* cards */}
          <Cards />
          {/* Recharts */}
          <MonthlyPerformanceChart />
          {/* 4 div Recent Activity */}
          <RecentActivity />
        </div>
      </section>
    </>
  )
}
