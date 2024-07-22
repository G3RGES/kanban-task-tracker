import React, { useEffect, useState } from "react";
import EditTask from "./EditTask";

const Todo = ({ task, index, taskList, setTaskList }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleDelete = (itemID) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => todo.id !== itemID)
    );
  };

  const handleStop = () => {
    setRunning(false);

    let taskIndex = taskList.indexOf(task);

    taskList.splice(taskIndex, 1, {
      projectName: task.projectName,
      taskDescription: task.taskDescription,
      timestamp: task.timestamp,
      duration: time,
    });
  };

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

        <div className="w-full flex flex-row items-center justify-evenly ">
          <div className="w-1/4 text-xl font-semibold py-4 ">
            <span className="">
              {("0" + Math.floor((time / 360000) % 24)).slice(-2)}:
            </span>
            <span className="">
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="">
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
            <span className="text-sm">
              :{("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>

          <div className=" flex flex-row justify-evenly  gap-4">
            {running ? (
              <button
                className="border rounded-lg py-1 px-3 "
                onClick={handleStop}
              >
                Stop
              </button>
            ) : (
              <button
                className="border rounded-lg py-1 px-3 "
                onClick={() => setRunning(true)}
              >
                Start
              </button>
            )}
            <button
              className="border rounded-lg py-1 px-3 bg-[#B43F3F] text-[#f9f6ee]"
              onClick={() => setTime(0)}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center">
          <button
            className="bg-[#A0153E] text-white px-6 py-3 rounded
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500 mt-6 mb-1"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
