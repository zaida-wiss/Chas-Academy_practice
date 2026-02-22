import "./Products.css";

export function ProductItem({product}) {
  return(
       <li style={{opacity: product.inStock===0? 0.5 : 1}}>
      <h4>{product.name}
      {product.isOffer && <span className="badge">Erbjudande!</span>}</h4>
      <p>{product.price}kr</p>
      <p>{product.category}</p>
      <p>{product.sale}%</p>
      <p>Lagersaldo: {product.inStock}</p>
    </li>
  );
}

export function ProductList ({products}) {
  return (
    <ul>
      {products.map(product =>(
        <ProductItem key= {product.id} product= {product} />
      ))}
    </ul>
  );
}