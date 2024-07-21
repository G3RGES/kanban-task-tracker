import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-3 py-4 px-6">
        Kanban Task Tracker
      </h1>
      <div className="flex flex-row">
        <p className="text-xl pl-1">Hi there, </p>
        <p className="text-xl pl-1"> Click </p>
        <AddTask />
        <p className="text-xl pl-1">to add a new task </p>
      </div>
    </>
  );
}

export default App;
