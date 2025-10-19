function TodoInput({ input, setInput, addTask }) {
  return (
    <div className="input-group">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;
