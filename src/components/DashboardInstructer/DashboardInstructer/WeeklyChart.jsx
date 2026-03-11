import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { weeklyEngagement } from "../../../data/mockData";

export default function WeeklyChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow ">
      <h3 className="font-semibold">Weekly Student Engagement</h3>
      <p className="text-sm text-gray-400 mb-4"> Average engagement rate throughout the week</p>
      <div className="pt-4">

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={weeklyEngagement}>

          <defs>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.6}/>
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <XAxis dataKey="day" />
          <YAxis domain={[0, 100]} ticks={[0,25,50,75,100]} />

          <Tooltip />

          <Legend verticalAlign="bottom"  height={1} />

          <Area
            type="monotone"
            dataKey="value"
            name="Engagement Rate (%)"
            stroke="#6366F1"
            fill="url(#colorEngagement)"
            strokeWidth={3}
            dot={{ r: 2, fill: "#6366F1" }}
            activeDot={{ r: 6 }}
            />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}