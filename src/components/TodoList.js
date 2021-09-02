import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../atoms/todo";
import { TodoItem } from "./TodoItem";
import { TodoFilters } from "./TodoFilters";
import { TodosStats } from "./TodosStats";

export const TodoList = () => {
  const todos = useRecoilValue(filteredTodoListState);
  // console.log(todos);
  return (
    <>
      <TodoFilters />
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      <TodosStats />
    </>
  );
};
