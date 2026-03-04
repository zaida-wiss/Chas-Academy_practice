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

  function handleChange () {
    e.target.value =()=>setSearch(Products.title)
  }
  return (
      <form>
        <input
          type="text"
          onChange={handleChange}
        />
      </form>

  );

}