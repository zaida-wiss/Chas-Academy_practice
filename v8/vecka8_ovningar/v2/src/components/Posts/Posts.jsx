import {useState, useEffect} from "react";
import "./Posts.css";

export default function Posts () {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState ("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then (res => res.json())
    .then (data => {
      setPosts(data);
      setLoading(false);
    })
    .catch(err => {
      setError("Något gick fel.." + err.message);
      setLoading(false);
    });
  },[]);


  return (
    <div className="filter-container">
      <input
      type="text"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      />
    {loading && <p>Loading...</p>}
    {error && <p style={{color: "red"}}>{error}</p>}
    <ul>
      {posts
      .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map(post => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))
      }
    </ul>
    </div>
  )
};