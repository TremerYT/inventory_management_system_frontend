import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import ProductDetails from "./pages/product_details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/add" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
