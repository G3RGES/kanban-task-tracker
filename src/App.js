import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-3 py-4 px-6">
        Kanban Task Tracker
      </h1>

      <p className="text-xl px-6">
        <span>Hi there </span>
        <span>Click </span>
        <AddTask />
        <span> to add a new task</span>
      </p>
    </>
  );
}

export default App;
