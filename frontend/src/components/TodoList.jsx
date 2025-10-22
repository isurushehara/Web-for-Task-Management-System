import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask, editTask }) {
  if (tasks.length === 0) return <p>No tasks yet 😴</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
