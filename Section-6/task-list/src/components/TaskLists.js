import React from "react";
import Task from "./Task";

const TaskLists = ({
  taskData,
  onDeleteTask,
  onClearAllTasks,
  onToggleItem,
}) => {
  return (
    <div className="list">
      <ul>
        {taskData.map((t) => (
            <Task
              task={t}
              key={t.id}
              onDeleteTask={onDeleteTask}
              onToggleItem={onToggleItem}
            />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAllTasks}>Clear list 🗑️</button>
      </div>
    </div>
  );
};

export default TaskLists;
