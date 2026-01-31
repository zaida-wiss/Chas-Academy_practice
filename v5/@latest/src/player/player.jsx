import { React, useState } from 'react';
import App from '../App.jsx';

export default function Player () {
const [name, setName] = useState("");

const handleBoarder = (e) => {
  setName(e.target.value.toUpperCase());
  localStorage.setItem("player", e.target.value);
  console.log("Spelare: " + e.target.value + " är tillagd.");
}
  return (
    <>
      <input
        className= "FirstNameInput"
        type="text"
        value={name}
        onChange={handleBoarder} placeholder="Förnamn"/>
        <h2>Spelare:</h2>
        <div><names className="map">{name} </names></div>
    </>
  )
};
