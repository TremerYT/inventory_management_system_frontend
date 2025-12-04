import {Avatar, Button, Layout, Menu} from "antd";
import {useState} from "react";
import {useNavigate, useLocation} from "react-router"
import {items} from "../../utils/menu_items.jsx";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {Outlet} from "react-router-dom";

const {Sider, Header, Content} = Layout;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout className="!min-h-screen">
      <Sider
        width={220}
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        className="fixed left-0 top-0 h-screen shadow"
      >
        <div className="flex justify-center items-center py-9">
          <Avatar icon={<UserOutlined/>} size={64}/>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-120px)]">
          <Menu
            theme="light"
            items={items}
            mode="inline"
            selectedKeys={[location.pathname]}
            onClick={(item) => navigate(item.key)}
          />
        </div>
      </Sider>
      <Layout>
        <Header className="!bg-white shadow flex items-center !px-4 sticky top-0 z-10">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{fontSize: 18, width: 48, height: 48}}
          />
        </Header>
        <Content className="p-6 bg-gray-100 overflow-y-auto h-[calc(100vh-80px)]">
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default PageLayout;