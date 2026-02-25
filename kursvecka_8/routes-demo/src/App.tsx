import { Routes, Route } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailsPage from './pages/Product/ProductDetailsPage';
import PageNotFound from './pages/404/PageNotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
