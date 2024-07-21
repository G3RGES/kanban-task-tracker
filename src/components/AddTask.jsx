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
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-100 flex items-center justify-center">
            <h3 className="bg-white px-2 py-3 rounded font-bold text-2xl">
              Add new task
            </h3>
            <button
              className="bg-red-600 text-white px-2 py-1 rounded-lg font-semibold text-sm mx-1.5 hover:opacity-85 
         transition-opacity duration-500"
              type="button"
              onClick={() => setAddModal(false)}
            >
              X
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddTask;
