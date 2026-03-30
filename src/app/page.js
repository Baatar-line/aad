"use client";

import { Input } from "@/components/Input";
import Tabs from "@/components/Tabs";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  //  Жагсаалтанд байгаа бүх task-ууд
  const [tasks, setTasks] = useState([]);
  // Input дотор бичсэн текст
  const [inputValue, setInputValue] = useState("");
const [currentFilter, setCurrentFilter] = useState("All");
  const handleClick = () => {
    if (inputValue === "" && inputValue.length === 0){
      alert("Write a task name")
    }
    // 1111111111111 Хэрэглэгч input-д текст бичэх бүрд inputValue state шинэчлэгдэнэ.
    // ...tasks гэдэг нь spread оператор — хуучин жагсаалтыг хадгалж, шинээр нэмнэ гэсэн үг.
    setTasks([{taskName:inputValue , isCompleted:false, id:Math.random()} , ...tasks]);
    setInputValue("");
  };
  const handleCheck = (taskId)=> {
    const updatedTasks = tasks.map((task)=>{
      if (task.id === taskId){
        return{...task, isCompleted: !task.isCompleted };
      }else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  // console.log(tasks);
   const filteredTask = tasks.filter((task) => {
    if (currentFilter === "Active") return ! task.isCompleted;
    if (currentFilter === "Completed") return task.isCompleted;
    return true;
  });
  filteredTask.map((task) => (
  <div key={task.id}></div>))
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className=" flex flex-col max-w-[377px] min-h-[290px] bg-white
     text-black rounded-lg justify-center items-center text-xs gap-5 p-3"
      >
        <h1 className="text-cemibold text-xl">To-Do list</h1>
        <div className="flex max-w-[345px] min-h-[38px] justify-between gap-2">
          {/* 44444444444. setInputValue функцийг prop-оор дамжуулж
           өгснөөр Input доторх өөрчлөлт page.js дэх state-г шууд шинэчилж чадна. */}
          <Input setInputValue={setInputValue} inputValue={inputValue}/>
          <button
            // 22222222222 Шинэ task-ыг жагсаалтын эхэнд нэмнэ
            onClick={handleClick}
            className="border-black flex items-center bg-green-300 border rounded-lg p-1 px-4"
          >
            add
          </button>
        </div>
        <div className="flex gap-3 border-black ">
              <Tabs setCurrentFilter={setCurrentFilter}/>
        </div>
        {/* <botton onClick={()=> setTasks(tasks + 1 )}>{tasks}times clicked</botton> */}
        {/* 3333333333333 tasks массив доторх бүх элементийг давтаж, <p> tag-аар харуулна. */}
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <div className="flex flex-col justify-between gap-1">
            {/* tasks массив доторх бүх элементийг давтаж, <p> tag-аар харуулна. */}
            {filteredTask.map((task) => {
            return (
                 <div key={task.id} className="flex justify-between w-[300px] border border-black rounded-lg px-3 py-2 bg-emerald-100">
                  <input type="checkbox" onClick={() => handleCheck(task.id)} />
                  <p>{task.taskName}</p>
                    <button className="px-5 py-2 bg-red-100 rounded-lg text-red-500">Delete</button>
                   </div>
                     );
              })}
          </div>
        )}
        <div className="flex justify-center gap-3">
          {" "}
          <p>Powered by</p>
          <p>Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
