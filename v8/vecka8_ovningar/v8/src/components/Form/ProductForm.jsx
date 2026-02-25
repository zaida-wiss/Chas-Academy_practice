import "./ProductForm.css";
import {useAxiosProducts} from "../../hooks/useAxiosProducts";
import {useState} from "react";

export default function ProductForm() {
  const [title, setTitle] =useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const {addProduct} = useAxiosProducts("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct({title});
      setMessage("Produkt skapad");
      setTitle(""); //Töm inputsfältet
      setPrice(""); //Töm prisfältet
    }catch (err) {
      setMessage("Fel: " + err.message);
    }
  };

    return (
      <form onSubmit={handleSubmit}>
        <input value= {title} onChange={e => setTitle(e.target.value)} placeholder="Titel"/>
        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Pris" />
        <button type="submit">Skapa produkt</button>
        <div>{message}</div>
      </form>
    );
  }