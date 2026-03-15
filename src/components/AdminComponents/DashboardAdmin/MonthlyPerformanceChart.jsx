import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { dataCharts } from "../../../data/mockData.js"

export default function MonthlyPerformanceChart() {

    return (
    <>
     <section>
        <div className="border-[1px] border-[#DFE0E2] p-5 shadow-md rounded-xl mt-4">
            <p className="text-[#2B2E33] font-bold">Monthly Performance Trends</p>
            <div>
                <div className="w-full h-[300px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={dataCharts}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="success"
                            stroke="#10B981"
                            fill="#10B98133"
                            strokeWidth={2}
                        />

                        <Area
                            type="monotone"
                            dataKey="fail"
                            stroke="#EF4444"
                            fill="#EF444433"
                            strokeWidth={2}
                        />

                        </AreaChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>   
     </section> 
    </>
  )
}

