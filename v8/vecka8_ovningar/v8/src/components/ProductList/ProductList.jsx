import "./ProductList.css";
import useFetchProducts from "../hooks/useFetchProducts";

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();

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