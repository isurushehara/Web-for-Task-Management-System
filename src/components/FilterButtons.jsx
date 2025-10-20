function FilterButtons({ setFilter, clearAll }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button className="clear" onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default FilterButtons;
