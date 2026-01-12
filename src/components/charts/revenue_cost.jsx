import { Card } from "antd";
import Chart from "react-apexcharts";

const series = [
  {
    name: "Revenue",
    type: "column",
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
  },
  {
    name: "Cost",
    type: "line",
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
  },
];

const options = {
  chart: {
    height: 350,
    type: "line",
  },
  stroke: {
    width: [0, 4],
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  yaxis: [
    {
      title: {
        text: "Revenue",
      },
    },
    {
      opposite: true,
      title: {
        text: "Cost",
      },
    },
  ],
};

const RevenueVsCost = () => {
  return (
    <Card title="Revenue vs Cost">
      <Chart options={options} series={series} height={350} />
    </Card>
  );
};

export default RevenueVsCost;