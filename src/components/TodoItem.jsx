function TodoItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(index)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(index)}>❌</button>
    </li>
  );
}

export default TodoItem;
