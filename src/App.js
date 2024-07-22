import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";
import { useDrop } from "react-dnd";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");

    if (array) {
      setTaskList(JSON.parse(array));
    }
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) =>
      addToCompleted(
        item.id,
        item.projectName,
        item.taskDescription,
        item.timestamp,
        item.duration
      ),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToCompleted = (
    id,
    projectName,
    taskDescription,
    timestamp,
    duration
  ) => {
    const moveTask = taskList.filter((task) => id === task.id);
    setCompleted((completed) => [
      ...completed,
      { moveTask, projectName, taskDescription, timestamp, duration },
    ]);
  };

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
      <div className="flex flex-row">
        <div className="w-full">
          <h2
            className="bg-[#D4BDAC] my-4 ml-6 text-xl w-3/4 max-w-lg font-semibold text-center
        rounded-lg py-2 px-4"
          >
            To Do:
          </h2>

          <div className="ml-6 flex flex-col-reverse">
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
        </div>

        <div className="w-full flex flex-col" ref={drop}>
          <h2
            className="bg-[#D4BDAC] my-4 text-xl w-3/4 max-w-lg font-semibold text-center
        rounded-lg py-2 px-4"
          >
            Completed:
          </h2>
          {completed.map((task, idx) => (
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
      </div>
    </>
  );
}

export default App;
