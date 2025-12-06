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

  getItems("/customers", <UserOutlined />, "Customers", [
    getItems("/customers/list", null, "List Customers"),
    getItems("/customers/add", null, "Add Customer"),
  ]),

  getItems("/suppliers", <TeamOutlined />, "Suppliers", [
    getItems("/suppliers/list", null, "List Suppliers"),
    getItems("/suppliers/add", null, "Add Supplier"),
  ]),

  getItems("/expenses", <FileTextOutlined />, "Expenses"),

  getItems("/analytics", <BarChartOutlined />, "Analytics"),
];

export const itemDropdown = [
  {
    icon: <AppstoreOutlined/>,
    label: "Category"
  },
  {
    icon: <ProductOutlined/>,
    label: "Product"
  },
  {
    icon: <ShoppingOutlined/>,
    label: "Purchase"
  },
  {
    icon: <ShoppingCartOutlined/>,
    label: "Sale"
  },
  {
    icon: <FileTextOutlined/>,
    label: "Expense"
  },
  {
    icon: <ReloadOutlined/>,
    label: "Returns"
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

