import { useState } from "react";

function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (!newTitle.trim()) return;
    editTask(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
          />
          <button className="save-btn" onClick={handleEdit}>💾</button>
        </div>
      ) : (
        <>
          <span
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTask(task.id)}
          >
            {task.title}
          </span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => deleteTask(task._id)}>❌</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
