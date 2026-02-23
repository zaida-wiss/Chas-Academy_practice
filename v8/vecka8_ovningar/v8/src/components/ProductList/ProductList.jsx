import "./ProductList.css";
import {useState, useEffect} from "react";

export default function ProductList() {
 
  const [loading, setLoading] = useState(true);


  useEffect (() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => {
      if (!res.ok) throw new Error("Något gick fel vid hämtningen!");
      return res.json();
    })
    .then(data => setProducts(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <div className="confirmMessage">Sidan laddas...</div>}
      {error && <div className= "confirmMessage" style={{color: "red"}}>{error}</div>}
      {!loading && !error && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title} - {product.price} kr
            </li>
          ))}
        </ul>
      )}
    </>
  );
}