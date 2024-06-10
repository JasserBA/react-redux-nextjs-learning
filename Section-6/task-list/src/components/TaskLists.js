import React, { useState } from "react";
import Task from "./Task";

const TaskLists = ({
  taskData,
  onDeleteTask,
  onClearAllTasks,
  onToggleItem,
}) => {

  const [sortBy,setSortBy] = useState("input");

  let sortedTasks;

  if (sortBy==="input") sortedTasks = taskData;

  if (sortBy === "title")
    // The localeCompare() method compares two strings in the current locale.
    // returns sort order -1, 1, or 0 (for before, after, or equal).
    sortedTasks = taskData
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));

  if(sortBy==="done")
    sortedTasks=taskData.slice().sort((a,b)=>Number(a.completed)-Number(b.compleeted));

  return (
    <div className="list">
      <ul>
        {sortedTasks.map((t) => (
          <Task
            task={t}
            key={t.id}
            onDeleteTask={onDeleteTask}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="title">Sort by title</option>
          <option value="done">Sort by listed status</option>
        </select>
        <button onClick={onClearAllTasks}>Clear list 🗑️</button>
      </div>
    </div>
  );
};

export default TaskLists;
