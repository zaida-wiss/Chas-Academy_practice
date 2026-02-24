import "./ProductList.css";
import {useState} from "react";
import useFetchProducts from "../../hooks/useFetchProducts";

export default function ProductList() {
  const [reload, setReload] = useState(0);
  const {products, loading, error} =useFetchProducts(reload);


  return (
    <>
      <button onClick={() => setReload(reload +1)}>Ladda om produkter</button>
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