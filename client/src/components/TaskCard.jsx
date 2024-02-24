import { useTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTask();

  const navigate = useNavigate();

  const handleDone = async () => {
    console.log(task.done);
    await toggleTaskDone(task.id);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-6 indicator">
      <span className="indicator-item badge badge-primary text-xl py-5">
        {task.done === 1 ? "✅" : "🎯"}
      </span>
      <div className="card-body">
        <h1 className="card-title">{task.title}</h1>
        <p>{task.description}</p>
        <span>{task.createdAt}</span>
        <div className="card-actions justify-end">
          <button
            className="btn btn-neutral btn-sm"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            Edit
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleDone(task.id)}
          >
            Toggle Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
