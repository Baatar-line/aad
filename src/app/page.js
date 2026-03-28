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

  const handleClick = () => {
    // 1111111111111 Хэрэглэгч input-д текст бичэх бүрд inputValue state шинэчлэгдэнэ.
    // ...tasks гэдэг нь spread оператор — хуучин жагсаалтыг хадгалж, шинээр нэмнэ гэсэн үг.
    setTasks([inputValue, ...tasks]);
    setInputValue("");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className=" flex flex-col min-w-[377px] min-h-[290px] bg-white
     text-black rounded-lg justify-center items-center text-xs gap-5"
      >
        {" "}
        <h1 className="text-cemibold text-xl">To-Do list</h1>
        <div className="flex w-[345px] min-h-[38px] justify-between gap-2">
          {/* 44444444444. setInputValue функцийг prop-оор дамжуулж
           өгснөөр Input доторх өөрчлөлт page.js дэх state-г шууд шинэчилж чадна. */}
          <Input setInputValue={setInputValue} />
          <botton
            // 22222222222 Шинэ task-ыг жагсаалтын эхэнд нэмнэ
            onClick={handleClick}
            className="border-black flex items-center bg-green-300 border rounded-lg p-1 px-4"
          >
            add
          </botton>
        </div>
        <div className="flex gap-3 border-black ">
          {/* <botton className=" border rounded-lg py-2 px-4 ">
            All
          </botton>
          <p className=" border rounded-lg py-2 px-4">Active</p>
          <p className="border rounded-lg py-2 px-4">Completed</p> */}
          <Tabs/>
        </div>
        {/* <botton onClick={()=> setTasks(tasks + 1 )}>{tasks}times clicked</botton> */}
        {/* 3333333333333 tasks массив доторх бүх элементийг давтаж, <p> tag-аар харуулна. */}
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <div className="flex flex-col justify-between gap-1">
            {/* tasks массив доторх бүх элементийг давтаж, <p> tag-аар харуулна. */}
            {tasks.map((task, index) => {
              return (
                <div className="flex justify-between  w-[250px] border border-black rounded-lg px-6 py-2 bg-emerald-100">
                  <input type="checkbox" />
                  <p key={index}>{task} </p>
                  <input type="button" />
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
