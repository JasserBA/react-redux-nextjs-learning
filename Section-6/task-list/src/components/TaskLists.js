import React from "react";
import Task from "./Task";

const TaskLists = ({ taskData }) => {
  return (
    <div className="list">
      <ul>
        {taskData.map((t) => (
          <div key={t.id}>
            <Task task={t} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskLists;
