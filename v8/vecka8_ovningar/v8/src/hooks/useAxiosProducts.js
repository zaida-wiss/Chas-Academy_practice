import {useState, useEffect} from "react";
import api from "../services/axiosProductService";

export function useAxiosProducts() {
  const [products, setProducts] =useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    setLoading(true);

    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {products, loading, error};
}