import DashboardCards from "../components/ui/dashboard_cards.jsx";
import useAuth from "../hooks/useAuth.js";
import {Col, Row, Typography} from "antd";
import { useEffect } from "react";
import {cardInfo, statsCards} from "../utils/card_info.jsx";
import StatsCards from "../components/ui/stats_cards.jsx";
const { Title, Text } = Typography;
const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        <Row gutter={[16, 16]} className="w-full flex items-center">
          <Col xs={24} lg={8}>
            <h1 className="mb-2">
              Hi {user?.sub}, {" "}
              {`Good ${
                new Date().getHours() < 12
                  ? "Morning"
                  : new Date().getHours() < 18
                    ? "Afternoon"
                    : "Evening"
              }`}
            </h1>
            <p>
              Your dashboard gives you views of key performance or business processes.
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
                  <StatsCards{...card} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>

  );
};

export default Dashboard;
