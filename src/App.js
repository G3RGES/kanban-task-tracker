import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-3 py-4 px-6">
        Kanban Task Tracker
      </h1>
      <p className="text-xl pl-6">Hi there, </p>
      <div className="flex flex-row items-center ">
        <p className="text-xl pl-6"> Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className="text-xl my-2">to add a new task </p>
      </div>
      {taskList.map((task, idx) => (
        <div key={idx}>
          <p className="">{task.projectName}</p>
          <p className="">{task.taskDescription}</p>
        </div>
      ))}
    </>
  );
}

export default App;
