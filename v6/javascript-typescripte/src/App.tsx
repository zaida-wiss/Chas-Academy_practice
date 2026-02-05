// import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
return (
<div style={{ padding: "20px" }}>
<h1>TypeScript Demo</h1>

<UserCard
name="Robin Andersson"
email="robin.andersson1@chasacademy.se"
age={42}
/>

<UserCard
name="Marcus Johansson"
email="marcus.johansson@chasacademy.se"
age={15} 
/>
</div>
);
}

export default App;