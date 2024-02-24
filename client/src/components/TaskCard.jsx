import { useTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTask();

  const navigate = useNavigate();

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✅" : "🎯"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  );
}

export default TaskCard;
