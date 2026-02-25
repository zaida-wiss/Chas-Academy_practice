import {useAxiosProducts} from "../../hooks/useAxiosProducts";
import "./AxiosProducts.css";


export function AxiosProducts(){
  const {products, loading, error} =useAxiosProducts();

  if (loading) return <div>Laddar...</div>;
  if (error) return <div>Fel: {error.message}</div>

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}

      </ul>

    </div>
  );
}