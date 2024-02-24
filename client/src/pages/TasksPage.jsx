import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div className="flex-col">
      <h1 className="text-center text-3xl">Tasks</h1>
      <div className="flex flex-wrap justify-center p-5">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
