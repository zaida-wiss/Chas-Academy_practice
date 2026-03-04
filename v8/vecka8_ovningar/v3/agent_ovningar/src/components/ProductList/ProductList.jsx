import "./components/ProductList/ProductList"
import {useState, useMemo} from "react";

const Products = [
  {id:1, title: "bord", price: 1589},
  {id:2, title: "stol", price: 589},
  {id:3, title: "vas", price: 89},
  {id:4, title: "bordsduk", price: 89}
]

export default function ProductList () {
const [search, setSearch] = useState("");
const [newItem, setNewItem] = useState("");
const [products, setProducts]=useState(Products);

  function handleNewItem (e) {
    setNewItem(e.target.value)
  };
  function handleSearch (e) {
    setSearch(e.target.value)
  };
  function handleSubmit (e) {
    e.preventDefault();
    setNewItem(e.target.value)=(e)=> {
      setNewItem(products.map)
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <input
          type="text"
          value={newItem}
          onChange={handleNewItem}
        />
        <button>Lägg till produkt</button>
      </form>
  );
}