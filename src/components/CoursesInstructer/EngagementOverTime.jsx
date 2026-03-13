
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";
// data
import {EngagementOverTimeFromInstructor} from '../../data/mockData';

export default function EngagementOverTime() {

  return (
    <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
      
      <p className="text-[#0A0A0A] mb-4">Engagement over Time</p>

      <div className="w-full h-48">
        <ResponsiveContainer>
          <AreaChart data={EngagementOverTimeFromInstructor}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              fill="#6366F1"
              fillOpacity={0.15}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
