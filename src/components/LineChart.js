import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend:{
              display: false,
            },
          },
          borderWidth: 2,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.3,
          showLine: true
        }}
      />
    </>
  );
}
export default LineChart;

