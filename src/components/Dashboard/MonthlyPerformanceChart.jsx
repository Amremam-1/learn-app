import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default function MonthlyPerformanceChart() {
    const data = [
        { name: "Jan", success: 65, fail: 28 },
        { name: "Feb", success: 72, fail: 25 },
        { name: "Mar", success: 68, fail: 30 },
        { name: "Apr", success: 85, fail: 22 },
        { name: "May", success: 78, fail: 26 },
        { name: "Jun", success: 90, fail: 21 },
        { name: "Jul", success: 88, fail: 24 },
        { name: "Aug", success: 95, fail: 19 },
        { name: "Sep", success: 92, fail: 22 },
        { name: "Oct", success: 98, fail: 17 },
        { name: "Nov", success: 94, fail: 20 },
        { name: "Dec", success: 102, fail: 15 }
    ];
  return (
    <>
     <section>
        <div className="border-[1px] border-[#DFE0E2] p-5 shadow-md rounded-xl mt-4">
            <p className="text-[#2B2E33] font-bold">Monthly Performance Trends</p>
            <div>
                <div className="w-full h-[300px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>

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

