export function fetchProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then(res => {
      if (!res.ok) throw new Error("Något gick fel vid hämtningen!");
      return res.json();
    });
}

