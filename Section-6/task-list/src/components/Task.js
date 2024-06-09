import React from 'react'

const Task = ({ task, onDeleteTask, onToggleItem }) => {
  return (
    <div style={{ display: "inline-flex", alignItems: "end" }}>
      <li
        style={task.completed ? { textDecorationLine: "line-through" } : null}
      >
        <input
          id={task.title}
          type="checkbox"
          checked={task.completed}
          value={task.completed}
          onChange={() => onToggleItem(task.id)}
        />
        <label htmlFor={task.title}>
          <span style={{ position: "relative" }}>
            <em
              style={{
                fontWeight: "lighter",
                fontSize: "medium",
              }}
            >
              {task.dueDate}
            </em>
            <br />
            {task.title}
            {task.description !== "" && (
              <span className="title">{task.description}</span>
            )}
          </span>
        </label>
      </li>
      <span style={{ cursor: "pointer" }} onClick={() => onDeleteTask(task.id)}>
        ❌
      </span>
    </div>
  );
};

export default Task