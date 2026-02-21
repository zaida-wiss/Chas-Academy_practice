import './App.css';
import Zaida from "./components/zaida/Zaida";
import ProfileCard from "./components/ProfileCard/ProfileCard"

export default function App() {

  return (
    <>
      <main>
        <section><Zaida /></section>
        <section><ProfileCard
                    name= "Zaida"
                    titel= "Fullstackutvecklare"
                    description="Jag vill ut och jobba."
                    imageUrl="https://extra.alandstidningen.ax/sites/default/files/styles/max_650x650/public/images/birth/2024/november/648781259.jpg.webp?itok=BV5NRK6a"
                    /></section>
      </main>
    </>
  )
};

