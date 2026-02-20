import { Routes, Route } from "react-router";
import RootLayout from "./components/RootLayout";
import ProductsPage from "./components/ProductsPage";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* 'index' visar denna när vi är på exakt "/" [cite: 166] */}
        <Route index element={<h1>Välkommen Hem</h1>} />

        {/* En vanlig route [cite: 75] */}
        <Route path="products" element={<ProductsPage />} />

        {/* En dynamisk route med parameter [cite: 173, 177] */}
        <Route path="products/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}