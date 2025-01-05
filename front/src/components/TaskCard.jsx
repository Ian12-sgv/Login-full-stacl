import React from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold ">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => deleteTask(task._id)}
            className="bg-red-500 px-4 py-2 rounded-lg "
          >
            Delete
          </button>
          <Link
            to={`/task/${task._id}`}
            className="bg-blue-500 px-4 py-2 rounded-lg "
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-zinc-300">{task.description}</p>
      <p>{dayjs.utc(task.date).format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default TaskCard;
