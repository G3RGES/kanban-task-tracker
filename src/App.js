import { useState } from "react";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";

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
      <div className="">
        <h2
          className="bg-[#D4BDAC] my-4 ml-6 text-xl w-3/4 max-w-lg font-semibold text-center
        rounded-lg py-2 px-4"
        >
          To Do:
        </h2>
        {taskList.map((task, idx) => (
          <Todo
            // key={new Date().getMilliseconds().toPrecision() + Math.random()}
            key={idx}
            task={task}
            index={idx}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
