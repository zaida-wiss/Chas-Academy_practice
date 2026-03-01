import "./Form.css";
import {useReducer} from "react";

const initialState = { values: {}, touched: {}, errors: {}, status: ""}

function validate(values) {
  const errors ={};
  if (!values.username) errors.username = "Username reqiored";
  if (!values.password) errors.password = "Password required";
  return errors;
}

function reducer (state, action) {
  switch(action.type) {
    case "CHANGE":
      return {
        ...state,
        values: {
        ...state.values,
        [action.name]: action.value
        },
        errors: validate({
          ...state.values, [action.name]: action.value
        })
    };
    case "BLUR";
    return {
      ...state,
      touched: {
        ...state.touched, [action.name]: true
      }
    };
    case "SUBMIT":
      const errors = validate(state.values);
      if (Object.keys(errors).length === =)

    default:
      return state;
    }
  }


  export default function Form(){
    const [state, dispatch]
    = useReducer(reducer, initialState)

    function handleChange(e) {
      dispatch({
        type: "CHANGE",
        name: e.target.name,
        value: e.target.value
      });
    }

      return (
      <>
        <input
          name="username"
          value={state.values.username || ""}
          onChange={handleChange} />

        <input
          name="password"
          value={state.values.password || ""}
          onChange={handleChange} />
      </>
      );
};