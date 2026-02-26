import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get<Todo[]>("http://localhost:3001/todos")
      .then(res => setTodos(res.data));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.done ? "✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
