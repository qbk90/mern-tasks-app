import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";
import { useTask } from "../context/TaskContext";

function TaskForm() {
const { createTask } = useTask()

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            createTask(values)
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>Description</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
