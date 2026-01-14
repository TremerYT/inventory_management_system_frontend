import {Card} from "antd";
import Chart from "react-apexcharts";

const options = {
  chart: {
    type: "area",
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.4,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [0, 90, 100],
    },
  },
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: { colors: "#6B7280" },
    },
  },
  grid: {
    borderColor: "#f1f5f9",
    strokeDashArray: 4,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  colors: ["#3B82F6", "#F97316"], // blue = revenue, orange = cost
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const series = [
  {
    name: "Revenue",
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
  },
  {
    name: "Cost",
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
  },
];

const RevenueVsCost = () => {
  return (
    <Card title="Revenue vs Cost">
      <Chart
        options={options}
        series={series}
        type="area"
        height={335}
      />
    </Card>
  );
};

export default RevenueVsCost;

