import React, { useState } from "react";

const AddTask = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-600 text-white px-2 py-1 rounded-lg
         uppercase font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500"
        type="button"
        onClick={() => setAddModal(true)}
      >
        + New
      </button>
      {addModal ? (
        <>
          <div
            className="overflow-x-hidden overflow-y-auto fixed inset-0
           z-100 flex items-center justify-center mt-5"
          >
            <div
              className="flex flex-col  border rounded-md
               bg-white w-9/12 shadow-md relative "
            >
              <div
                className="flex flex-row justify-around items-center p-5 
               bg-white w-full"
              >
                <h3 className="bg-white px-2 py-3 rounded font-bold text-2xl">
                  Add new task
                </h3>

                <button
                  className="bg-red-600 text-white px-2 py-1.5 rounded-lg 
              font-semibold text-lg mx-1.5 hover:opacity-85 
              transition-opacity duration-500"
                  type="button"
                  onClick={() => setAddModal(false)}
                >
                  X
                </button>
              </div>
              <form className=" p-6">
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
                    rows={3}
                    placeholder="Task description"
                  />
                </div>
              </form>
              <div className="">
                <button className="" type="">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddTask;
