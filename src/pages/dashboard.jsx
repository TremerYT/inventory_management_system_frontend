import DashboardCards from "../components/ui/dashboard_cards.jsx";
import useAuth from "../hooks/useAuth.js";
import {Col, Row, Typography} from "antd";
import { useEffect } from "react";
import {cardInfo} from "../utils/card_info.jsx";
const { Title, Text } = Typography;
const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <Row gutter={[16, 16]} className="w-full">
        <Col xs={24} lg={8}>
          <Title level={2}>
            Hi {user?.sub}, {" "}
            {`Good ${
              new Date().getHours() < 12
                ? "Morning"
                : new Date().getHours() < 18
                  ? "Afternoon"
                  : "Evening"
            }`}
          </Title>
          <Text type="secondary">
            Your dashboard gives you views of key performance or business processes.
          </Text>
        </Col>

        <Col xs={24} lg={16}>
          <Row gutter={[16, 16]}>
            {cardInfo.map((card, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <DashboardCards {...card} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
