import { useTasks } from '../context/TaskContext';

export const useTasksHook = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  return { tasks, addTask, updateTask, deleteTask };
};