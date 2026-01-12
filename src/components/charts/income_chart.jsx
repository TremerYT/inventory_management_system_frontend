import Chart from "react-apexcharts";
import { Card } from "antd";

const IncomeChart = () => {
  const series = [
    {
      name: "Income",
      data: [320, 420, 380, 460, 510, 490, 530],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 200,
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        top: 8,
        left: 0,
        blur: 8,
        opacity: 0.25,
      },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#f97316"],

    grid: {
      show: false,
    },

    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },

    yaxis: {
      show: false,
    },

    legend: {
      show: false,
    },

    tooltip: {
      enabled: true,
      theme: "dark",
    },

    markers: {
      size: 0,
    },
  };

  const totalIncome = series[1].data.reduce((a, b) => a + b, 0);

  return (
    <Card className="rounded-xl shadow-md border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Income Overview
        </h3>
      </div>

      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Total Income</p>
          <p className="text-2xl font-bold text-orange-500">
            KES {totalIncome.toLocaleString()}
          </p>
        </div>
      </div>

      <Chart options={options} series={series} type="line" height={200} />
    </Card>
  );
};

export default IncomeChart;
