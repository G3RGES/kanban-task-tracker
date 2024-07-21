import React from "react";
import EditTask from "./EditTask";

const Todo = ({ task, index, taskList, setTaskList }) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-6 px-6
      w-3/4 max-w-lg "
      >
        <div className="w-full flex flex-row justify-between items-center">
          <p className="font-semibold text-xl ">{task.projectName}</p>

          <EditTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <p className="text-lg py-2 ">{task.taskDescription}</p>

        <div className="w-full flex flex-row justify-center">
          <button
            className="bg-[#A0153E] text-white px-6 py-3 rounded
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500 mt-6 mb-1"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
