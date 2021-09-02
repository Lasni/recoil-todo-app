import "./App.css";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { todoListState } from "./atoms/todo";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";

function App() {
  const setTodos = useSetRecoilState(todoListState);
  const [loading, setLoading] = useState(false);

  // componentDidMount behaviour for fetching from API
  useEffect(() => {
    setLoading(true);
    const fetchTodos = async (url) => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const firstFive = json.slice(0, 5);
        if (localStorage.getItem("todos") === null) {
          setTodos(firstFive);
          localStorage.setItem("todos", JSON.stringify(firstFive));
        } else {
          setTodos(JSON.parse(localStorage.getItem("todos")));
        }
        setLoading(false);
      } catch (error) {
        console.log(`Error: ${error}`);
        setLoading(false);
      }
    };
    fetchTodos("https://jsonplaceholder.typicode.com/todos");
  }, [setTodos]);

  return (
    <div className="App">
      <NewTodo />
      <br />
      {loading ? <p>Loading...</p> : <TodoList />}
    </div>
  );
}

export default App;
