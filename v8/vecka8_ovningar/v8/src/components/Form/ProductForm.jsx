import "./ProductForm.css";

import {createProduct} from "../../services/axiosProductService";
import {useState} from "react";

function ProductForm() {
  const [title, setTitle] =useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({title});
    }catch (err) {
      setMessage("Fel: " + err.message);
    }
  }

    return (
      <form onSubmit={handleSubmit}>
        <input value= {title} onChange={e => setTitle(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Skapa produkt</button>

        <div>{message}</div>
        <button></button>
      </form>
    );
  }