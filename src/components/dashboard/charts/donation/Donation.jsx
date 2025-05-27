
import React, { useState } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { useGetChartQuery } from "../../../../redux/dashboardFeatures/getDashboardChartApi"
import CustomLoading from "../../../../pages/dashboard/shared/CustomLoading"






const formatYAxis = (value) => {
  return `$${value / 1000}k`
}

export default function Donation() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleChange = (e) => {
    setSelectedYear(e.target.value);
  };


let year = "";

if (selectedYear === "2025") {
  year = "thisYear"

}else if(selectedYear === "2024"){
  year = "lastYear"
}

  // ========================= chart data dynamic start ================
  const { data,isLoading } = useGetChartQuery(year);

  const chartData = data?.data?.[year]?.map(item => ({
    month: item.month,
    value: Number(item.data), 
  }));

  // ========================= chart data dynamic end ================




  // static data
  // const data = [
  //   { month: "January", value: 250.5 },
  //   { month: "February", value: 641 },
  //   { month: "March", value: 641 },
  //   { month: "April", value: 641 },
  //   { month: "May", value: 2494 },
  //   { month: "June", value: 0 },
  //   { month: "August", value: 0 },
  //   { month: "September", value: 0 },
  //   { month: "October", value: 0 },
  //   { month: "November", value: 0 },
  //   { month: "December", value: 0 },
  // ]



if(isLoading) return <CustomLoading />

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        padding: "24px",
      }}
    >
      {/* select years */}
      <div className=" pb-8">
        <select
          value={selectedYear}
          onChange={handleChange}
          name="" id="" className="w-[80px] bg-transparent border border-[#ccc] text-[#ccc] rounded-md cursor-pointer px-2 py-1">
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div style={{ height: "500px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(74, 222, 128, 0.2)" />
                <stop offset="100%" stopColor="rgba(167, 139, 250, 0.05)" />
              </linearGradient>
            </defs>

            {/* custom grid line remove or add ============================= */}
            {/* <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" /> */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              tickFormatter={false} // left-side customize
            />
            <Tooltip cursor={false} wrapperStyle={{ outline: "none" }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#colorGradient)"
              fill="url(#fillGradient)"
              strokeWidth={2}
              activeDot={{
                r: 6,
                fill: "#4ade80",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
