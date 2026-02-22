import './App.css';
import Zaida from "./components/zaida/Zaida";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import {ProductList} from "./components/Products/Products";
import {products} from "./data/products";
import { Card, WarningCard, InfoCard } from "./components/Cards";


export default function App() {

  return (
    <>
      <main>
        <section><Zaida /></section>
        <section><ProfileCard
                    name= "Zaida"
                    title= "Fullstackutvecklare"
                    description="Jag vill ut och jobba."
                    imageUrl="https://extra.alandstidningen.ax/sites/default/files/styles/max_650x650/public/images/birth/2024/november/648781259.jpg.webp?itok=BV5NRK6a"
                    /></section>
        <section><ProfileCard
                    name= "lars"
                    title= "målare"
                    description="bevarar det gamla."
                    imageUrl="https://extra.alandstidningen.ax/sites/default/files/styles/max_650x650/public/images/birth/2024/november/648781259.jpg.webp?itok=BV5NRK6a"
                    /></section>
        <section><ProfileCard
                    name= "moa"
                    title= "frisör"
                    description="en mästare på färg och form."
                    imageUrl="https://extra.alandstidningen.ax/sites/default/files/styles/max_650x650/public/images/birth/2024/november/648781259.jpg.webp?itok=BV5NRK6a"
                    /></section>
        <section><ProductList products={products}/></section>
        <section>
          <WarningCard>Varning: detta är viktigt!</WarningCard>
          <InfoCard>Info: detta är bara information</InfoCard>
        </section>
      </main>
    </>
  );
}

