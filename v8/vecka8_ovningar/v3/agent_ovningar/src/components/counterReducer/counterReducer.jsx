import { useReducer, useState } from "react";
import "./counterReducer.css";

const initialState = { count: 0, step: 1};

function reducer(state, action) {
switch(action.type) {
  case "increment":
    return{...state, count: state.count + state.step};
  case "decrement":
    return {...state, count: state.count - state.step};
  case "setStep":
    return {...state, step: action.value};
    case "reset":
      return initialState;
      default:
        return state;
}
}


export default function counterReducer () {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <h2>Räknare</h2>
      <p>Värde: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment"})}>Öka</button>
      <button onClick={() => dispatch({ type: "decrement"})}>Minska</button>
      <button onClick={() => dispatch({ type: "reset"})}>Återställ</button>
    </div>
  );

};

