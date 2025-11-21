import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import { getTasks, createTask, updateTask, deleteTask } from "./api/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // ✅ Load tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // ✅ Create task
  const addTask = async () => {
    if (!input.trim()) return;
    try {
      const newTask = await createTask(input);
      setTasks([...tasks, newTask]);
      setInput("");
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  // ✅ Toggle or edit task
  const handleUpdate = async (id, updatedData) => {
    try {
      const updatedTask = await updateTask(id, updatedData);
      setTasks(tasks.map((t) => (t._id === id ? updatedTask : t)));
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  // ✅ Delete task
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="container">
      <h1>🌐 Full Stack To-Do App</h1>

      <TodoInput input={input} setInput={setInput} addTask={addTask} />
      <FilterButtons setFilter={setFilter} clearAll={() => setTasks([])} />

      <TodoList
        tasks={filteredTasks}
        toggleTask={(id) => {
          const task = tasks.find((t) => t._id === id);
          if (!task) {
            console.error("Task not found:", id);
            return;
          }
          handleUpdate(id, { completed: !task.completed });
        }}

        deleteTask={handleDelete}
        editTask={(id, newTitle) => handleUpdate(id, { title: newTitle })}
      />
    </div>
  );
}

export default App;
