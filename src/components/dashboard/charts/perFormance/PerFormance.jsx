import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PerFormance = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Volunteer",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Donor",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Survivors",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "85%",
          borderRadius: 2,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jun",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        axisBorder: {
          show: false, // Hide the border of the X-axis
        },
        axisTicks: {
          show: false, // Hide ticks on the X-axis
        },
        labels: {
          show: true, // Show the category labels
        },
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
        axisBorder: {
          show: false, // Hide the border of the Y-axis
        },
        axisTicks: {
          show: false, // Hide ticks on the Y-axis
        },
      },
      grid: {
        show: false, // Remove grid lines from the chart
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default PerFormance;
