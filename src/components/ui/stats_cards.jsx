import {Card, Typography} from "antd";
const {Title, Text} = Typography;

const StatsCards = ({label, value, icon: Icon, bgColor}) => {
  return (
    <Card
      className="rounded-lg"
      style={{ backgroundColor: bgColor,}}
    >
      <div className="flex justify-between">
        <div className="text-left">
          <Title level={3} className="mb-0! text-white!">
            {value}
          </Title>
          <Text type="primary" className="text-white!">
            {label}
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white"
          >
            <Icon/>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StatsCards;