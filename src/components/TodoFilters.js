import { useRecoilState } from "recoil";
import { filterState } from "../atoms/todo";

export const TodoFilters = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const changeFilterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select value={filter} onChange={changeFilterHandler}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
  );
};
