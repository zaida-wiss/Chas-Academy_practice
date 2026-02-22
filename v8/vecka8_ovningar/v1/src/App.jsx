import './App.css';
import Zaida from "./components/zaida/Zaida";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import {ProductList} from "./components/Products/Products";
import {products} from "./data/products";
import Card from "./components/Cards/Card";
import WarningCard from "./components/Cards/WarningCard";
import InfoCard from "./components/Cards/InfoCard";
import Navigation from "./components/Navigation/Navigation";


const links = [
  { name: "Hem", url: "/"},
  {name: "Produkter", url: "/proodukter"},
  {name: "Om oss", url: "/om"}
];


export default function App() {

  return (
    <>
      <header>
        <Navigation links={links}/>
      </header>
      <main>
        <section className="content">
        <section className="omMigSection"><Zaida /></section>
        <section className="ProfileCardSection">
          <ProfileCard
                    name= "Zaida"
                    title= "Fullstackutvecklare"
                    description="Jag vill ut och jobba."
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_35PYlOuJBsLMa5xGVaCXCFtqw0bMqJ9Rw&s"
                    /></section>
          <ProfileCard
                    name= "lars"
                    title= "målare"
                    description="bevarar det gamla."
                    imageUrl="https://extra.alandstidningen.ax/sites/default/files/styles/max_650x650/public/images/birth/2024/november/648781259.jpg.webp?itok=BV5NRK6a"
                    />
          <ProfileCard
                    name= "moa"
                    title= "frisör"
                    description="en mästare på färg och form."
                    imageUrl="https://extra.alandstidningen.ax/sites/default/files/styles/max_650x650/public/images/birth/2024/november/648781259.jpg.webp?itok=BV5NRK6a"
                    />
          <ProductList products={products}/>
          </section>
        <aside>
          <section className="asideSection">
            <WarningCard>Varning: detta är viktigt!</WarningCard>
            <InfoCard>Info: detta är bara information</InfoCard>
          </section>
        </aside>
      </main>
    </>
  );
}

