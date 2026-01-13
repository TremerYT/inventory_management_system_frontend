import DashboardCards from "../components/ui/dashboard_cards.jsx";
import useAuth from "../hooks/useAuth.js";
import {Col, Row, Typography, Table, Card} from "antd";
import { cardInfo, statsCards } from "../utils/card_info.jsx";
import StatsCards from "../components/ui/stats_cards.jsx";
import SalesVsPurchases from "../components/charts/sales_purchase.jsx";
import RevenueVsCost from "../components/charts/revenue_cost.jsx";
import ExpensesChart from "../components/charts/expenses_chart.jsx";
import IncomeChart from "../components/charts/income_chart.jsx";
import {outOfStockData} from "../mock/mock_data.jsx";
import {outOfStockColumns} from "../utils/columns.jsx";
const { Title, Text } = Typography;
const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="mb-4">
        <Row gutter={[16, 16]} className="w-full flex items-center">
          <Col xs={24} lg={8}>
            <h1 className="mb-2">
              Hi {user?.sub},{" "}
              {`Good ${
                new Date().getHours() < 12
                  ? "Morning"
                  : new Date().getHours() < 18
                  ? "Afternoon"
                  : "Evening"
              }`}
            </h1>
            <p>
              Your dashboard gives you views of key performance or business
              processes.
            </p>
          </Col>

          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]} className="mb-4">
              {cardInfo.map((card, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <DashboardCards {...card} />
                </Col>
              ))}
            </Row>
            <Row gutter={[16, 16]}>
              {statsCards.map((card, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <StatsCards {...card} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <SalesVsPurchases />
        </Col>
        <Col span={12}>
          <RevenueVsCost />
        </Col>
      </Row>
      <Row gutter={[16,16]}>
        <Col span={6}>
          <Row className={"mb-4"}>
            <Col span={24}>
              <IncomeChart/>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ExpensesChart/>
            </Col>
          </Row>
        </Col>
        <Col span={9}>
          <Card className={"h-full"}>
            <Table dataSource={outOfStockData} columns={outOfStockColumns} />
          </Card>
        </Col>
        <Col span={9}>
          <Card>
            <Table/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
