import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todo";
import { v4 as uuidv4 } from "uuid";

export const NewTodo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const changeTextHandler = (e) => {
    // e.preventDefault();
    setText(e.target.value);
  };

  const addTodoHandler = () => {
    const newTodo = {
      completed: false,
      id: uuidv4(),
      title: text,
      userId: uuidv4(),
    };
    setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
    setText("");
    localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
  };

  return (
    <>
      <input type="text" value={text} onChange={changeTextHandler} />
      <button onClick={addTodoHandler}>Add Todo</button>
    </>
  );
};
