import { deleteTaskRequest } from "../api/tasks.api";
import { useTask } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useTask();

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✅" : "🎯"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
