import { atom, selector } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist()

export const todoListState = atom({
  key: "todoListState",
  default: [],
  // effects_UNSTABLE: [persistAtom]
});

export const filterState = atom({
  key: "filterState",
  default: "All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(filterState);
    const todoList = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return todoList.filter((item) => item.completed);
      case "Show Uncompleted":
        return todoList.filter((item) => !item.completed);
      default:
        return todoList;
    }
  },
});

export const todosStatsState = selector({
  key: "todosStatsState",
  get: ({ get }) => {
    const todosList = get(todoListState);
    const totalNum = todosList.length;
    const totalCompleted = todosList.filter((todo) => todo.completed).length;
    const totalUncompleted = todosList.filter((todo) => !todo.completed).length;
    const percentageCompleted = Math.round((totalCompleted / totalNum) * 100);

    return {
      totalNum,
      totalCompleted,
      totalUncompleted,
      percentageCompleted,
    };
  },
});
