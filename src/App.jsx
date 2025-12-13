import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Product from "./pages/product.jsx";
import AllProducts from "./pages/all_products.jsx";
import Categories from "./pages/categories.jsx";
import OnlineSales from "./pages/online_sales.jsx";
import PosSales from "./pages/pos_sales.jsx";
import Customers from "./pages/customers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/add" element={<Product />} />
          <Route path="/products/list" element={<AllProducts />} />
          <Route path="/categories/list" element={<Categories />} />
          <Route path="/sales/online" element={<OnlineSales />} />
          <Route path="/sales/pos" element={<PosSales />} />
          <Route path="/customers" element={<Customers/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
