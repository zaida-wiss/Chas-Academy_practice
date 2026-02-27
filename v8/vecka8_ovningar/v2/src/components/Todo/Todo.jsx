import "./Todo.css";
import {useState} from "react";



export default function Todo() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState ([]);


  const submitHandler=(e) =>{
  e.preventDefault();
  setTodos([...todos, {id: Date.now(),title}]);
  setTitle("");
  };

  const TodoDelete = (id) => {
  setTodos(todos.filter(todo=>todo.id !== id));
  };


  return (
    <>
    <form onSubmit={submitHandler}>
      <input type="text"
              value= {title}
              onChange={e => setTitle(e.target.value)} />
      <button type="submit">Lägg till</button>
    </form>
      <div className="Todo">
        <ul>
             {todos.map(todo=>(
          <li key={todo.id} style={{textDecoration: todo.done ? "line-through": "none"}}>
            {todo.title}
            <button onClick= {()=>TodoDelete(todo.id)} style={{color:"blue"}}>×</button>
          </li>))}
        </ul>
      </div>
    </>
  )
}