import CounterReducer from "./components/CounterReducer/CounterReducer";
import './App.css';
import Form from "./components/Form/Form";
import FokusInput from "./components/FokusInput/FokusInput"

export default function App() {

  return (
    <>
      <FokusInput />
      <Form />
      <CounterReducer />

    </>
  )
};
