import {
  AppstoreOutlined, BarChartOutlined, ContainerOutlined,
  DashboardOutlined, FileTextOutlined, InboxOutlined,
  ProductOutlined, ReloadOutlined, SettingOutlined, ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined, TeamOutlined, UserOutlined
} from "@ant-design/icons";
import {Avatar} from "antd";

const getItems = (key, icon, label, children) => {
  return {
    key,
    icon,
    children,
    label
  }
}

export const items = [
  getItems("/dashboard", <DashboardOutlined />, "Dashboard"),

  getItems("/products", <ProductOutlined />, "Products", [
    getItems("/products/add", null, "Add Product"),
    getItems("/products/list", null, "List Products"),
  ]),

  getItems("/categories", <AppstoreOutlined />, "Categories", [
    getItems("/categories/list", null, "List Categories"),
  ]),

  getItems("/sales", <ShoppingCartOutlined />, "Sales", [
    getItems("/sales/online", null, "Online Sales"),
    getItems("/sales/pos", null, " Pos Sales"),
  ]),

  getItems("/purchases", <ShoppingOutlined />, "Purchases", [
    getItems("/purchases/list", null, "List Purchases"),
    getItems("/purchases/add", null, "Add Purchases"),
  ]),

  getItems("/returns", <ReloadOutlined />, "Returns", [
    getItems("/returns/list", null, "List Returns"),
    getItems("/returns/add", null, "Add Return"),
  ]),

  getItems("/people", <UserOutlined />, "People", [
    getItems("/customers", null, "Customers"),
    getItems("/suppliers", null, "Suppliers"),
  ]),
  getItems("/analytics", <BarChartOutlined />, "Analytics"),
];

export const itemDropdown = [
  {
    icon: <ProductOutlined/>,
    label: "Product",
    path: '/Products/add'
  },
  {
    icon: <ShoppingOutlined/>,
    label: "Purchase",
    path: '/purchases/add'
  },
  {
    icon: <ShoppingCartOutlined/>,
    label: "Sale",
    path: '/sales/list'
  },
  {
    icon: <ShopOutlined/>,
    label: "Store",
    path: null
  },
  {
    icon: <ContainerOutlined/>,
    label: "Warehouse",
    path: null
  },
  {
    icon: <ReloadOutlined/>,
    label: "Returns",
    path: '/returns/add'
  },
];

export const profileDropdown = [
  {
    icon: <UserOutlined/>,
    label: "My Profile"
  },
  {
    icon: <BarChartOutlined/>,
    label: "Analytics"
  },
  {
    icon: <SettingOutlined/>,
    label: "Settings"
  }
  ];

