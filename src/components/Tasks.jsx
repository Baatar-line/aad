import React from "react";

export const Tasks = ({ filteredTasks, toggleComplete, handleDelete }) => {
  return (
    <div className="flex flex-col gap-2">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-center w-75 border border-black rounded-lg px-3 py-2
                  ${task.completed ? "bg-gray-100 opacity-60" : "bg-emerald-100"}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.text}
          </span>

          <button
            // onClick={() => handleDelete(task.id)}
            onClick={() => {
              if (window.confirm("Устгах уу?")) {
                handleDelete(task.id);
              }
            }}
            className="px-5 py-2 bg-red-100 rounded-lg text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
