import {useState, useEffect} from "react";
import api, {createProduct} from "../services/axiosProductService";
import  {getAxiosErrorMessage } from "../utils/axiosErrorHelper";

export function useAxiosProducts() {
  const [products, setProducts] =useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    // Behövs bara om jag t.ex. vill ha en uppdateringsknapp
    // setLoading(true);
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => setError(getAxiosErrorMessage(err)))
      .finally(() => setLoading(false));
    }, []);

const addProduct = async (data) => {
  setLoading(true);
  try {
    await createProduct(data);
    //Hämta om produkterna igen för att uppdatera listan
    const res = await api.get("/products");
    setProducts(res.data);
    setError(null);
  } catch (err) {
    setError(getAxiosErrorMessage(err));
  } finally {
    setLoading(false);
  }
}

  return {products, loading, error, addProduct};
}