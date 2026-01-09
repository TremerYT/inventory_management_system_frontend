import {Card, Typography} from "antd";
import {BiShoppingBag} from "react-icons/bi";

const {Title, Text} = Typography;
const DashboardCards = ({ icon: Icon, iconColor, bgIconColor, value, label }) => {
  return (
    <Card
      className="rounded-lg"
    >
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-full text-2xl flex items-center justify-center"
          style={{ backgroundColor: bgIconColor, color: iconColor }}
        >
          <Icon/>
        </div>
        <div className="text-right">
          <Title level={4} className="mb-0!">
            {value}
          </Title>
          <Text type="secondary">
            {label}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default DashboardCards;