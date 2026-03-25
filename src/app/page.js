import { Input, Tod } from "@/components/Todo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className=" flex flex-col min-w-[377px] min-h-[290px] bg-white
     text-black rounded-2xl justify-center items-center text-xs gap-5"
      >
        {" "}
        <h1 className="text-cemibold text-xl">To-Do list</h1>
        <div className="flex w-[345px] min-h-[38px] justify-between gap-1">
          <Input />
          <div className="border-white bg-blue-600 border rounded-xl p-1 px-4">
            add
          </div>
        </div>
        <div className="flex gap-3 border-black ">
          {" "}
          <botton className=" border rounded-xl py-2 px-4 bg-blue-600">All</botton>
          <p className=" border rounded-xl py-2 px-4">Active</p>
          <p className="border rounded-xl py-2 px-4">Completed</p>{" "}
        </div> 
        <p>No tasks yet. Add one above!</p>
        <div className="flex flex-col justify-center items-center">
        {" "}
        <p>Powered by</p>
        <p>Pinecone academy</p>
      </div>
      </div>

      
    </div>
  );
}
