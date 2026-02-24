import './App.css'
import ProductList from "./components/ProductList/ProductList";
import { AxiosProducts } from './components/AxiosProducts/AxiosProducts';

export default function App() {

  return (
    <>
    {/* <ProductList /> */}
    <AxiosProducts style={{color:"green"}}/>
    </>
  )
}


