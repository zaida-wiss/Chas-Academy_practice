import './App.css'
// import ProductList from "./components/ProductList/ProductList";
import { AxiosProducts } from './components/AxiosProducts/AxiosProducts';
import ProductForm from "./components/Form/ProductForm"

export default function App() {
const {products, loading, error, addProduct } = AxiosProducts();
  return (
    <>
    {/* <ProductList /> */}
    <ProductForm addProduct={addProduct}/>
    <AxiosProducts products = {products} loading={loading} error={error}/>
    </>
  );
}


