import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Product from "./pages/product.jsx";
import AllProducts from "./pages/all_products.jsx";
import Categories from "./pages/categories.jsx";
import Customers from "./pages/customers.jsx";
import Suppliers from "./pages/suppliers.jsx";
import AddReturn from "./pages/add_return.jsx";
import Purchases from "./pages/purchases.jsx";
import AddPurchase from "./pages/add-purchase.jsx";
import Returns from "./pages/returns.jsx";
import Sales from "./pages/online_sales.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/add" element={<Product />} />
          <Route path="/products/list" element={<AllProducts />} />
          <Route path="/categories/list" element={<Categories />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/purchases/list" element={<Purchases/>} />
          <Route path="/purchases/add" element={<AddPurchase/>} />
          <Route path="/returns/add" element={<AddReturn/>} />
          <Route path="/returns/list" element={<Returns/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/suppliers" element={<Suppliers/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
