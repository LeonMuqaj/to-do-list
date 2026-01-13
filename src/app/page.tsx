"use client";

import React from "react";
import DemoDataLoader from "@/components/DemoDataLoader";
import TodoForm from "@/components/TodoForm";

const Page = () => {

  return (
    <div className="max-w-screen-sm mx-auto py-4 px-4">
      {/* Ngarkon të dhëna demo nëse nuk ka detyra */}
      <DemoDataLoader />

      {/* Titulli kryesor dhe butoni për dark/light mode */}
      <div className="mb-10 mt-8 flex items-center justify-center">
        <h1 className="text-center font-Figtree text-[44px] font-medium leading-none text-gray-700">To Do List</h1>
        
      </div>

      {/* Forma për shtim të detyrave DHE LISTA */}
      <TodoForm />
    </div>
  );
};

export default Page;






