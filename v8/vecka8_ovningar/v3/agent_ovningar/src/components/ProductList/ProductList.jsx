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

//Lägg till en produkt
function handleSubmit (e) {
  e.preventDefault();
    if (newItem.trim() === "") return;
    setProducts([...products, {id: products.length + 1, title: newItem, price: 0}]);
    setNewItem("");
  };
  function handleNewItem (e) {
    setNewItem(e.target.value)
  };
  function handleSearch (e) {
    setSearch(e.target.value)
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())
  );
},[products, search]);


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