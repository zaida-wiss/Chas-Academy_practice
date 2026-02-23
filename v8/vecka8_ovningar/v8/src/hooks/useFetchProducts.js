import {useState, useEffect} from "react";
import {fetchProducts} from "../services/fetchProducts";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetchProducts()
      .then(setProducts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  },[]);

  return {products, error, loading}
}