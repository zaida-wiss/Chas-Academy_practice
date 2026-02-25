import { useParams, Link } from 'react-router';

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { id: 'p1', name: 'Keyboard', price: 799, category: 'Accessory' },
  { id: 'p2', name: 'Mouse', price: 399, category: 'Accessory' },
  { id: 'p3', name: 'MonitorRGB', price: 4999, category: 'Monitor' },
  { id: 'p4', name: 'Headset', price: 1999, category: 'Sound' },
];

export default function ProductDetailsPage() {
  const { productId } = useParams();

  if (!productId) {
    return (
      <section>
        <h1>No product selected</h1>
        <p>Parameter productId is missing from the URL.</p>
        <Link to="/products">Back to Products Listing</Link>
      </section>
    );
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <section>
        <h1>Product couldn't be found</h1>
        <p>No products with the productId of {productId} could be located.</p>
        <Link to="/products">Back to Products Listning</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <p>Price: {product.price}kr</p>
      <p>Category: {product.category}</p>
    </section>
  );
}
