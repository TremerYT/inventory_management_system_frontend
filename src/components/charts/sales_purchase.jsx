import { Card } from "antd";
import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "sales-vs-purchase",
    stacked: true,

  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded"
    }
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"
    ]
  }
}

const series = [
  {
    name: "Purchases",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  },
  {
    name: "Sales",
    data: [20, 30, 45, 60, 70, 80, 95, 110, 130]
  }
]

const SalesVsPurchase = () => {
  return (
    <Card title="Sales vs Purchase" bordered={false} style={{ marginBottom: 24 }}>
      <Chart type="bar" options={options} series={series} height={350} />
    </Card>
  )
}

export default SalesVsPurchase;