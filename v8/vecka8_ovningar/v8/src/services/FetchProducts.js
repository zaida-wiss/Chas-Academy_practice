export default function FetchProducts() {
    const [error, setError] = useState(null);
     const [products, setProducts]= useState([]);
     
useEffect (() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => {
      if (!res.ok) throw new Error("Något gick fel vid hämtningen!");
      return res.json();
    })
    .then(data => setProducts(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
  }, []);

};

