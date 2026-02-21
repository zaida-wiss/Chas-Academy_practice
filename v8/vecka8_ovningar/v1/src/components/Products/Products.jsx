export function ProductItem({product}) {
  return(
    <li>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.category}</p>
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