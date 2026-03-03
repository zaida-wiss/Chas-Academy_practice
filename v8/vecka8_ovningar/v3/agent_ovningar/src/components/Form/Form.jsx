import "./Form.css";
import {useReducer} from "react";

const initialState = { values: {}, touched: {}, errors: {}, status: ""}

function validate(values) {
  const errors = {};
  if (!values.username) errors.username = "Username required";
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
    case "BLUR":
      return {
        ...state,
        touched: {
          ...state.touched, [action.name]: true
        }
      };
      case "SUBMIT":
        const errors = validate(state.values);
        if (Object.keys(errors).length === 0) {
          return {
            ...state,
            status: "Login successful!",
            errors: {},
            touched: {username: true, password: true}
          };
        } else {
          return {
            ...state,
            status: "Please fix errors",
            errors,
            touched: {username: true, password: true }
          };
        }

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

    function handleBlur(e) {
      dispatch({
        type: "BLUR",
        name: e.target.name,
      });
    };

    function handleSubmit(e) {
      e.preventDefault();
      dispatch({
        type: "SUBMIT",
        name: e.target.name
      });
    };

      return (
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={state.values.username || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
          {state.touched.username && state.errors.username && (<span style={{color: "red"}}>{state.errors.username}</span>
          )}

        <input
          name="password"
          type="password"
          value={state.values.password || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
          {state.touched.password && state.errors.password && (<span style={{color: "red"}}>{state.errors.password}</span>
        )}

        <button type="submit">Submit</button>

        {state.status && <div>{state.status}</div>}
      </form>
      );
};