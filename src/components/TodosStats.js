import { todosStatsState } from "../atoms/todo";
import { useRecoilValue } from "recoil";

export const TodosStats = () => {
  const { totalNum, totalCompleted, totalUncompleted, percentageCompleted } =
    useRecoilValue(todosStatsState);
  return (
    <>
      <div>All: {totalNum}</div>
      <div>Completed: {totalCompleted}</div>
      <div>Incomplete: {totalUncompleted}</div>
      <div>Percentage completed: {percentageCompleted}</div>
    </>
  );
};
