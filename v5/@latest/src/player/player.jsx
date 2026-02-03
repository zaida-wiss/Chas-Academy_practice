import { useState, useEffect  } from 'react';

export default function Player () {
const [name, setName] = useState("");
const [players, setPlayers] = useState([]);

    //Läs in sparat namn en gång
      useEffect(() => {
        const storedName = localStorage.getItem("players");
        if (storedName) setName(storedName);
        }, []);

      //Spara namn vid ändring
      useEffect(() => {
       if (name) localStorage.setItem("players", name);
      }, [name]);

      useEffect(() => {
        const storedPlayers = localStorage.getItem("players");
        if(storedPlayers) {
          setPlayer(JSON.parse(storedPlayers));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("players", JSON.stringify(players));
      }, [players]);

      //Hanterar ändring i inputfältet
      const handleChange = (e) => {
        const value = e.target.value.toUpperCase();
        setName(value);
        console.log("Spelare: " + e.target.value + " är tillagd.");
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Enter' && name.trim() !== "") {
          setPlayers([...players, name]);
          setName(""); //töm inputfältet
        }
      };

  return (
    <>
      <input
        className= "FirstNameInput"
        type="text"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Förnamn"/>

        <h2>Spelare:</h2>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
        <div>
          <span className="map">{name}</span>
          </div>
    </>
  );
}
