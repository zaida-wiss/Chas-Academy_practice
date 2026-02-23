import {useState} from "react";
import "./Form.css";

export default function Form(){
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

const [nameError, setNameError] = useState("");
const [emailError, setEmailError]= useState("");
const [passwordError, setPasswordError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setEmailError(e.target.value.length <2 ? "Emailen måste vara längre än två tecken":"");
  setPasswordError(e.target.value.length<2 ? "ditt lösenord behöver vara längre än 2 tecken":"")

};

  return (
    <form onSubmit={handleSubmit} action="">
      <input
          className="nameInput"
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
            setNameError(e.target.value.length <2 ? "Namnet måste vara minst 2 tecken": "");
          }}
          placeholder="Namn"
      />
      <input
          className="emailInput"
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder= "E-post"
      />
      <input
          className="passwordInput"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value.length<2 ? "Lösenordet måste vara längre än 2 tecken":"");
          }}
          placeholder="lösenord"
      />

      <button
        className="logInBtn"
        type="submit"
      >Logga in</button>

      {/* Visa felmeddelande: */}
    {nameError && <div className="error">{nameError}</div>}

    {emailError && <div className="error">{emailError}</div>}

    {passwordError && <div className="error">{passwordError}</div>}

    </form>
  );
}