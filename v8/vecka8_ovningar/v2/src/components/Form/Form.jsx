import {useState} from "react";
import "./Form.css";

export default function Form(){
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError]= useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  let valid = true;

  if (name.length <2) {
  setNameError("Namnet måste vara längre än 2 tecken");
  valid= false;
  }

  if (email.length <2) {
  setEmailError("Emailen måste vara längre än 2 tecken");
  valid = false;
  }

  if (password.length <2){
  setPasswordError("Ditt lösenord behöver vara längre än 2 tecken");
  valid = false;
  }

  if (valid) {
    setIsLoggedIn(true);
  }
};

if (isLoggedIn) {
  return (
    <div>Välkommen, {name}
      <button onClick={()=> setIsLoggedIn(false)}>Logga ut</button>
    </div>
  )
}

return (
  <form onSubmit={handleSubmit}>
      <input
          className="nameInput"
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
            if (e.target.value.length <2) {
              setNameError("Namnet måste vara längre än två tecken")}else {
                setNameError("");
              }
          }}
          placeholder="Namn"
      />
      {nameError && <div className="error">{nameError}</div>}

      <input
          className="emailInput"
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            if (e.target.value.length <2) {
              setEmailError("E-postadressen är orimligt kort")
            } else {
              setEmailError("");
            }
          }}
          placeholder= "E-post"
          />
          {emailError && <div className="error">{emailError}</div>}
      <input
          className="passwordInput"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            if (e.target.value.length <2) {
              setPasswordError("Ditt lösenord måste vara längre än två tecken")
            }else {setPasswordError("");
            }
          }}
          placeholder="lösenord"
      />
      {passwordError &&<div className="error">{passwordError}</div>}

      <button
        className="logInBtn"
        type="submit"
      >Logga in</button>

    </form>
  );
}