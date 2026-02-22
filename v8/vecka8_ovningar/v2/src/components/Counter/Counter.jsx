import {useState} from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount]=useState(0);
  const [step, setStep] = useState(1);

  return(
    <>
  <section className="counter-context">
    <input
      className= "setStepInput"
      type="number"
      value ={step}
      onChange={e => setStep(Number(e.target.value))}
      min={1}
    />
      <button onClick= {() => setCount(count + step)}>Öka</button>
      <button onClick= {() =>setCount(count - step)}>Minska</button>
      <button onClick= {() => setCount(0)}>Nollställ</button>
      <p>Du har nu {count} poäng</p>
      </section>
    </>
  )

};