import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todo";
import { removeItemAtIndex, replaceItemAtIndex } from "../helpers/helpers";

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.indexOf(item);

  // console.log(todoList);

  const editTextHandler = (e) => {
    e.preventDefault();
    const newItem = {
      ...item,
      title: e.target.value,
    };
    const newList = replaceItemAtIndex(todoList, index, newItem);
    setTodoList(newList);
  };

  const toggleCheckedHandler = () => {
    const newItem = {
      ...item,
      completed: !item.completed,
    };
    const newList = replaceItemAtIndex(todoList, index, newItem);
    setTodoList(newList);
  };

  const deleteHandler = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  return (
    <div>
      <input type="text" value={item.title} onChange={editTextHandler} />
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCheckedHandler}
      />
      <button onClick={deleteHandler}>X</button>
    </div>
  );
};
