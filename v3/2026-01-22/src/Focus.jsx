import {useRef, useState, eseEffect } from 'react';


export default function Focus() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  }
  const handleSelectAll = () => {
    inputRef?.current?.select();
  }
  const start = () => {
    if(isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(
      () => {
        //setSeconds(preSeconds => prevSeconds + 1);
        setSeconds
      }, 1000
      };
  }

  const reset = () => {
    stop();
    setSeconds(0);
  }

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  useEffect(() => {
    return () => {clearInterval(intervalRef.current);
  }, 
return(
  <div>
    <h2>useRef example </h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..." />
  </div>
)
}