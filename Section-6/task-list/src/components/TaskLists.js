import React from "react";
import Task from "./Task";

const TaskLists = ({ 
  taskData , 
  onDeleteTask,
  onToggleTask,
  onClearList,}) => {
  return (
    <div className="list">
      <ul>
        {taskData.map((t) => (
          <div>
            <Task
              task={t}
              key={t.id}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask}
            />
          </div>
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={(e) => onClearList}>Clear list 🗑️</button>
      </div>
    </div>
  );
};

export default TaskLists;
