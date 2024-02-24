import { Form, Formik } from "formik";
import { useTask } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTask();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const taskResponse = await getTask(params.id);
        setTask({
          title: taskResponse.title,
          description: taskResponse.description,
        });
        console.log(taskResponse);
      }
    };
    loadTask();
  }, []);

  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="text-center text-3xl m-5">
        {params.id ? "Edit task" : "New task"}
      </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            if (params.id) {
              await updateTask(params.id, values);
            } else {
              await createTask(values);
            }
            setTask({
              title: "",
              description: "",
            });
            navigate("/");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="flex card w-96 bg-base-100 shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="card-body">
              <label className="card-title">Title</label>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="text"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={values.title}
              />
              <label className="card-title">Description</label>
              <textarea
                className="textarea textarea-secondary"
                name="description"
                rows="5"
                placeholder="Write a description"
                onChange={handleChange}
                value={values.description}
              ></textarea>
              <button
                className="btn btn-accent"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
