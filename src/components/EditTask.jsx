import React, { useEffect, useState } from "react";

const EditTask = ({ task, taskList, setTaskList }) => {
  const [editModal, setEditModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
  }, [task.projectName, task.taskDescription]);

  const handleUpdate = (e) => {
    e.preventDefault();

    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: projectName,
      taskDescription: taskDescription,
      timestamp: task.timestamp,
      duration: task.duration,
    });

    localStorage.setItem("taskList", JSON.stringify(taskList));

    window.location.reload();

    setEditModal(false);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "projectName") setProjectName(value);

    if (name === "taskDescription") setTaskDescription(value);

    console.log(projectName);
    console.log(taskDescription);
  };

  return (
    <>
      <button
        className="bg-[#677D6A] text-white px-6 py-3 rounded
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500"
        type="button"
        onClick={() => setEditModal(true)}
      >
        Edit
      </button>

      {editModal ? (
        <>
          <div
            className="overflow-x-hidden overflow-y-auto fixed inset-0
           z-100 flex items-center justify-center mt-[100px]"
          >
            <div
              className="flex flex-col rounded-md
               bg-white w-9/12 max-w-lg shadow-md relative "
            >
              <div
                className="flex flex-row justify-around items-center p-5 
               bg-white border-b border-slate-400 rounded-t"
              >
                <h3 className="bg-white px-2 py-3 rounded font-bold text-2xl">
                  Edit task
                </h3>

                <button
                  className=" text-[#E4003A] px-2 py-1.5 rounded-lg 
              font-semibold text-lg mx-1.5 hover:opacity-85 
              transition-opacity duration-500"
                  type="button"
                  onClick={() => setEditModal(false)}
                >
                  X
                </button>
              </div>
              <form className=" px-6 pt-6 pb-4">
                <div className="">
                  <label
                    className="tracking-wide uppercase text-gray-700 text-xs font-semibold
                mb-2 block"
                    htmlFor="project-name"
                  >
                    Project name
                  </label>
                  <input
                    className="w-full bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none
                  rounded-md px-4 py-3 mb-5 leading-tight focus:bg-white "
                    id="project-name"
                    type="text"
                    placeholder="project name"
                    name="projectName"
                    value={projectName}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="tracking-wide uppercase text-gray-700 text-xs font-semibold
                mb-2 block"
                    htmlFor="task-description"
                  >
                    Task description
                  </label>
                  <textarea
                    className="w-full bg-gray-200 text-gray-700 border border-gray-300 focus:outline-none
                  rounded-md px-4 py-3 mb-5 leading-tight focus:bg-white "
                    id="task-description"
                    rows={5}
                    placeholder="Task description"
                    name="taskDescription"
                    value={taskDescription}
                    onChange={handleInput}
                  />
                </div>
              </form>
              <div className="flex justify-end p-6 border-t border-slate-400 rounded-b">
                <button
                  className="bg-[#134B70] text-white px-6 py-3 rounded
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500"
                  type="submit"
                  onClick={handleUpdate}
                >
                  Edit Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditTask;
