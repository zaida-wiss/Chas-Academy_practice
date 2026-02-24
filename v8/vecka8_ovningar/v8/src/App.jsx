import './App.css'
import ProductList from "./components/ProductList/ProductList";
import { AxiosProducts } from './components/AxiosProducts/AxiosProducts';
import ProductForm from ":/components/Form/ProductForm"

export default function App() {

  return (
    <>
    {/* <ProductList /> */}
    <ProductForm />
    <AxiosProducts/>
    </>
  )
}


