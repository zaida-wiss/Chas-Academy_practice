import CounterReducer from "./components/CounterReducer/CounterReducer";
import './App.css';
import Form from "./components/Form/Form";
import FokusInput from "./components/FokusInput/FokusInput";
import ProductList from "./components/ProductList/ProductList";

export default function App() {

  return (
    <>
      <ProductList />
      <FokusInput />
      <Form />
      <CounterReducer />
    </>
  );
};
