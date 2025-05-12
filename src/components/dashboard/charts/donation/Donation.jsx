// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const Donation = () => {
//   const seriesColors = ["#1E90FF", "#00C49F"];
//   const [state, setState] = useState({
//     series: [
//       {
//         name: "This year",
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//       },
//       {
//         name: "Last year",
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//       },
//     ],
//     options: {
//       colors: seriesColors,
//       chart: {
//         type: "bar",
//         height: 280,
//         toolbar: {
//           show: false,
//         },
//         zoom: {
//           enabled: false,
//         },
//       },
//       legend: {
//         show: false,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "85%",
//           borderRadius: 2,
//           borderRadiusApplication: "end",
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth", // Smooth line
//         width: 1,
//       },
//       markers: {
//         size: 2,
//         hover: {
//           sizeOffset: 3,
//         },
//       },
//       xaxis: {
//         categories: [
//           "Jun",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//         ],
//         axisBorder: {
//           show: false, // Hide the border of the X-axis
//         },
//         axisTicks: {
//           show: false, // Hide ticks on the X-axis
//         },
//         labels: { style: { colors: "#ccc" } },
//       },
//       yaxis: {
//         axisBorder: {
//           show: false, // Hide the border of the Y-axis
//         },
//         axisTicks: {
//           show: false, // Hide ticks on the Y-axis
//         },
//         labels: { style: { colors: "#ccc" } },
//       },
//       grid: {
//         show: false, // Remove grid lines from the chart
//       },
//       fill: {
//         opacity: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return "$ " + val;
//           },
//         },
//       },
//     },
//   });
//   return (
//     <div className="p-2 md:p-[20px]">
//       <div className="flex flex-col md:flex-row justify-between items-center md:mb-4">
//         {/* Left */}
//         <div>
//           <h1 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
//             Donation
//           </h1>
//           <h1 className="font-semibold font-roboto text-[20px] text-[#ffffff]">
//             $126,560
//           </h1>
//         </div>

//         {/* Right (Dynamic Legend) */}
//         <div className="flex flex-col md:flex-row gap-4">
//           {state.series.map((item, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <span
//                 className="w-3 h-3 rounded-full"
//                 style={{ backgroundColor: seriesColors[index] }}
//               ></span>
//               <span className="text-white font-medium">{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div id="chart">
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="area"
//           height={600}
//         />
//       </div>
//     </div>
//   );
// };

// export default Donation;




import React from "react"
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


  // const { data, isLoading } = useGetChartQuery()
  // console.log(data)

  // const thisYearData = data?.data
  // const lastYearData = data?.data
  // console.log(thisYearData)




const data = [
  { month: "Jan", value: 1000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 2000 },
  { month: "Apr", value: 4500 },
  { month: "May", value: 3500 },
  { month: "Jun", value: 4000 },
  { month: "Jul", value: 2500 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const currentIndex = data.findIndex((item) => item.month === label)
    const previousValue = currentIndex > 0 ? data[currentIndex - 1].value : 0
    const currentValue = payload[0].value
    const difference = currentValue - previousValue
    const formattedDifference = (difference / 1000).toFixed(1)

    const date = new Date()
    const day = date.getDate()
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    const currentMonth = monthNames[date.getMonth()]
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`

    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ fontWeight: 600, color: "#333", margin: "0 0 4px 0" }}>
          {difference > 0 ? "+" : ""}
          {formattedDifference}k
        </p>
        <p style={{ fontSize: "12px", color: "#888", margin: "0" }}>
          {day} {currentMonth}, {formattedTime}
        </p>
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "#4ade80",
            margin: "4px auto 0",
          }}
        ></div>
      </div>
    )
  }

  return null
}

const formatYAxis = (value) => {
  return `$${value / 1000}k`
}

export default function Donation() {
  // if (isLoading) return <CustomLoading />
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        padding: "24px",
      }}
    >
      <div style={{ height: "600px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
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
              tickFormatter={formatYAxis}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} wrapperStyle={{ outline: "none" }} />
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
