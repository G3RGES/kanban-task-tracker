import React from "react";

const Todo = ({ task }) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-6 px-6
      w-3/4 max-w-lg "
      >
        <div className="w-full flex flex-row justify-between items-center">
          <p className="font-semibold text-xl ">{task.projectName}</p>

          <button
            className="bg-[#677D6A] text-white px-6 py-3 rounded
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500"
            type="button"
          >
            Edit
          </button>
        </div>
        <p className="text-lg py-2 ">{task.taskDescription}</p>

        <div className="w-full flex flex-row justify-center">
          <button
            className="bg-[#A0153E] text-white px-6 py-3 rounded
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
