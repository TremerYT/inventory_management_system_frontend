import {
  AppstoreOutlined, BarChartOutlined,
  DashboardOutlined, FileTextOutlined,
  ProductOutlined, ReloadOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined, TeamOutlined, UserOutlined
} from "@ant-design/icons";

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
    getItems("/products/list", null, "List Products"),
    getItems("/products/add", null, "Add Product"),
  ]),

  getItems("/categories", <AppstoreOutlined />, "Categories", [
    getItems("/categories/list", null, "List Categories"),
    getItems("/categories/add", null, "Add Category"),
  ]),

  getItems("/sales", <ShoppingCartOutlined />, "Sales", [
    getItems("/sales/list", null, "List Sales"),
    getItems("/sales/add", null, "Add Sale"),
  ]),

  getItems("/purchases", <ShoppingOutlined />, "Purchases", [
    getItems("/purchases/list", null, "List Purchases"),
    getItems("/purchases/add", null, "Add Purchase"),
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

  getItems("/reports", <FileTextOutlined />, "Reports"),

  getItems("/analytics", <BarChartOutlined />, "Analytics"),
];
