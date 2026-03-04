import {useRef} from "react";

export default function FokusInput () {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  };

  return (
    <form>
      <input
        type="text"
        ref= {inputRef}
      />
      <button
        type="button"
        onClick={handleClick}
        >Fokusera input</button>
    </form>
  );

};