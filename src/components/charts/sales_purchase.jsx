import ApexCharts from 'apexcharts'
import { Card } from "antd";

const SalesVsPurchases = () => {
  const series = [
    {
      name: "Purchases",
      data: [
        44, 55, 41, 67, 22, 43, 12, 78, 91, 23, 64, 34,
      ],
    },
    {
      name: "Sales",
      data: [
        13, 23, 22, 17, 9, 21, 42, 12, 23, 11, 27, 12,
      ],
    },
  ];

  return (
    <Card title="Sales vs Purchases">
      <Chart  series={series} height={350} />
    </Card>
  );
};

export default SalesVsPurchases;