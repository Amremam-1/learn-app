import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts"
import { dataCardsCoursesInstructer } from "../../../../data/mockData"

export default function EngagementChart() {
  return (
    <div className="w-full h-8">
      <ResponsiveContainer>
        <BarChart data={dataCardsCoursesInstructer}>
          <Bar dataKey="value" radius={[3, 3, 0, 0]}>
            {dataCardsCoursesInstructer.map((entry, index) => (
              <Cell key={index} fill={index === 2 ? "#E66666" : "#E2E8F0"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
