import { statsData } from "../../data/homeData"

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center bg-white">
      {statsData.map((item, index) => (
        <div key={index} className="py-8">
          <h3 className="text-primary text-3xl font-bold">{item.number}</h3>

          <p className="text-sm text-desc uppercase tracking-wider">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default StatsSection
