import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Product from "./pages/product.jsx";
import AllProducts from "./pages/all_products.jsx";
import Categories from "./pages/categories.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/add" element={<Product />} />
          <Route path="/products/list" element={<AllProducts />} />
          <Route path="/categories/list" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
