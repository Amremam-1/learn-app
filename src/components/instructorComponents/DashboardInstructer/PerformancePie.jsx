import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

import { performanceDistributioninstructer } from "../../../data/mockData"

const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) / 2

  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {(percent * 100).toFixed(0)}%
    </text>
  )
}

export default function PerformancePie() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold">Student Performance Distribution</h3>
      <p className="text-sm text-gray-400 mb-4">
        Overall grade breakdown across all courses
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={performanceDistributioninstructer}
            dataKey="value"
            nameKey="label"
            outerRadius={90}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {performanceDistributioninstructer.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            align="center"
            formatter={(value, entry) => `${value} ${entry.payload.value}%`}
            wrapperStyle={{ marginTop: 20 }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-1 text-center gap-2 text-sm text-gray-400 mb-4">
        <p>Total Students Evaluated</p>
        <p className="text-[24px] font-bold">284</p>
      </div>
    </div>
  )
}
