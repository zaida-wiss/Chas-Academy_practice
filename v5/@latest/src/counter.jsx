import React, {useState} from "react";
import App from "./App.jsx";

export default function Counter () {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    console.log("knappen klickades "+ count+" gånger");
  }


  return (
    <div>
      <p>Count: {count}</p>
      <button className="clickBtn btn" onClick ={handleClick}>Öka</button>

    </div>
  );
}

