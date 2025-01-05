import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TasksFormPage() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      navigate("/tasks");
    } catch (error) {
      console.log(error);
      window.location.href = "/";
    }
  };
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      {" "}
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title"> title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}
          <label htmlFor="description">description</label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-green-500 px-4 py-2 rounded-md">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default TasksFormPage;
