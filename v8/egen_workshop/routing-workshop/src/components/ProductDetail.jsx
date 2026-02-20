import { useParams } from "react-router";

export default function ProductDetail() {
  const { productId } = useParams(); // Hämtar ID:t direkt från URL:en [cite: 174]

  return (
    <section>
      <h1>Produktdetaljer</h1>
      <p>Du tittar på produkt med ID: {productId}</p>
    </section>
  );
}