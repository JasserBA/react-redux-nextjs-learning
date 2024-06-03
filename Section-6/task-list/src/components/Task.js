import React, { useState } from 'react'

const Task = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.completed)
  return (
    <div style={{ display: "inline-flex", alignItems: "end" }}>
      <li style={isChecked ? { textDecorationLine: "line-through" } : null}>
        <input
          id={task.title}
          type="checkbox"
          checked={isChecked ? true : false}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor={task.title}>
          <span style={{ position: "relative" }}>
            <em
              style={{
                fontWeight: "lighter",
                fontSize: "medium"
              }}
            >
              {task.dueDate}
            </em>
            <br />
            {task.title}
            <span className="title">{task.description}</span>
          </span>
        </label>
      </li>
      <span style={{ cursor: "pointer" }}>❌</span>
    </div>
  );
};

export default Task