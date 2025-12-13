import {
  AppstoreOutlined, BarChartOutlined,
  DashboardOutlined, FileTextOutlined,
  ProductOutlined, ReloadOutlined, SettingOutlined,
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
  ]),

  getItems("/returns", <ReloadOutlined />, "Returns", [
    getItems("/returns/list", null, "List Returns"),
    getItems("/returns/add", null, "Add Return"),
  ]),

  getItems("/people", <UserOutlined />, "People", [
    getItems("/customers", null, "Customers"),
    getItems("/suppliers", null, "Suppliers"),
  ]),
  getItems("/expenses", <FileTextOutlined />, "Expenses"),
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
    path: '/purchases/list'
  },
  {
    icon: <ShoppingCartOutlined/>,
    label: "Sale",
    path: '/sales/list'
  },
  {
    icon: <FileTextOutlined/>,
    label: "Expense",
    path: '/expenses/list'
  },
  {
    icon: <ReloadOutlined/>,
    label: "Returns",
    path: '/returns/list'
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

