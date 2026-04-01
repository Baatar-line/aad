"use client";

import { Delete } from "@/components/Delete";
import { Input } from "@/components/Input";
import Tabs from "@/components/Tabs";
import { Tasks } from "@/components/Tasks";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

  // ➕ Task нэмэх
  const handleClick = () => {
    if (inputValue === "") {
      alert("Write a task name");
      return;
    }
    setTasks([
      { text: inputValue, completed: false, id: Date.now() },
      ...tasks,
    ]);
    setInputValue("");
  };

  // Checkbox
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  Filter + sort
  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "Active") return !task.completed;
    if (currentFilter === "Completed") return task.completed;
    return true;
  });
  // ✅ Эдгээр мөрүүдийг filteredTasks-ийн дараа нэмэх
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col max-w-94.25 min-h-72.5 bg-white text-black rounded-lg justify-center items-center text-xs gap-5 p-3 mt-10">
        <h1 className="text-semibold text-xl">To-Do list</h1>

        <div className="flex max-w-86.25 min-h-9.5 justify-between gap-2">
          <Input setInputValue={setInputValue} inputValue={inputValue} />
          <button
            onClick={handleClick}
            className="border-black flex items-center bg-green-300 border rounded-lg p-1 px-4"
          >
            add
          </button>
        </div>

        <div className="flex gap-3">
          <Tabs
            setCurrentFilter={setCurrentFilter}
            currentFilter={currentFilter}
          />
        </div>

        {filteredTasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <Tasks
            filteredTasks={filteredTasks}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        )}

        <div className="flex justify-between w-75 border-t-1 border-grey-200 pt-2">
          <p>
            {completedCount} of {totalCount} tasks completed
          </p>
          {/* <button onClick={clearCompleted} className="text-red-500">
            clear completed
          </button> */}
          <Delete clearCompleted={clearCompleted} />
        </div>
        <div className="flex justify-center gap-3">
          <p>Powered by</p>
          <p className="text-green-500">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
