import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) return <p>No tasks yet 😴</p>;

  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
