import {Button, Layout, Menu} from "antd";
import {useState} from "react";
import {useNavigate, useLocation} from "react-router"
import {items} from "../utils/menu_items.jsx";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const {Sider, Header, Content} = Layout;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout className="!min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          items={items}
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={(item) => navigate(item.key)}
        />
      </Sider>
      <Layout>
        <Header className="!bg-white shadow flex items-center !px-4">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: 18, width: 48, height: 48 }}
          />
        </Header>
        <Content className="p-6 bg-gray-100">
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default PageLayout;