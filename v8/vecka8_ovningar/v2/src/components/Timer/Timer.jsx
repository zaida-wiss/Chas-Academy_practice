import "./Timer.css";
import {useState, useEffect} from "react";


export default function Timer () {
  const [hour, setHour]= useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);


  const Start =()=>{
    setIsRunning(true);
  };

  const Stop =()=> {
    setIsRunning(false)
  };

  const Restart =()=> {
    setHour(0);
    setMin(0);
    setSec(0);

  };

  const Lap =() => {
    setLaps([...laps, `${pad(hour)}:${pad(min)}:${pad(sec)}`])
  }
  function pad(num) {
    return num.toString().padStart(2, "0")
  }

  useEffect(()=> {
    let interval=null;
    if (isRunning) {
      interval=setInterval(() => {
        setSec(prevSec => {
          if (prevSec===59){
            setMin(prevMin => {
              if (prevMin ===59) {
                setHour(prevHour =>prevHour +1);
                return 0;
              }
              return prevMin +1
            });
            return 0;
          }
          return prevSec +1
        });
      }, 1000);
    }
    return () => clearInterval(interval);
    },[isRunning]);


  return(
    <div className="timer">
      <div className="timer-display">
      {pad(hour)}:{pad(min)}:{pad(sec)}</div>
        <button onClick= {Start}>Start</button>
        <button onClick= {Stop}>Stopp</button>
        <button onClick= {Lap}>Varv</button>
        <button onClick= {Restart}>Restart</button>
        <ul>
          {laps.map((lap, i) =>(
            <li key= {i}>Varv {i+1}: {lap}</li>
          ))}
        </ul>
      </div>
    );
    };
