import { Link, generatePath, useSearchParams } from 'react-router';

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

type SortKey = 'name' | 'price';

function sortProducts(items: Product[], sort: string | null): Product[] {
  if (sort === 'price') return [...items].sort((a, b) => a.price - b.price);
  if (sort === 'name') return [...items].sort((a, b) => a.name.localeCompare(b.name));

  return items;
}

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const sorted = sortProducts(products, sort);

  const setSort = (value: SortKey | 'none') => {
    const next = new URLSearchParams(searchParams);
    if (value === 'none') {
      next.delete('sort');
    } else {
      next.set('sort', value);
    }
    setSearchParams(next);
  };

  return (
    <section>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button onClick={() => setSort('none')}>No sort</button>
        <button onClick={() => setSort('name')}>Name</button>
        <button onClick={() => setSort('price')}>Price</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sorted.map((product) => {
          const to = generatePath('/products/:productId', {
            productId: product.id,
          });
          return (
            <li
              key={product.id}
              style={{
                padding: '12px',
                marginBottom: '8px',
                border: '1px solid #EEE',
                borderRadius: '8px',
              }}
            >
              <Link to={to} style={{ textDecoration: 'none', color: '#2578aa' }}>
                {product.name} - {product.price} kr
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
