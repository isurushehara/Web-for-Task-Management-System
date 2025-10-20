import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import { loadTasks, saveTasks } from "./utils/storage";

function App() {
  // ✅ loadTasks() runs immediately to set initial state
  const [tasks, setTasks] = useState(() => loadTasks());
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // ✅ Save every time tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: input.trim(), completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, title: newTitle } : t
    ));
  };

  const clearAll = () => setTasks([]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>📝 Smart To-Do App</h1>

      <TodoInput input={input} setInput={setInput} addTask={addTask} />

      <FilterButtons setFilter={setFilter} clearAll={clearAll} />

      <TodoList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
