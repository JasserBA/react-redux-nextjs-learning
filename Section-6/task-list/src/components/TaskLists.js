import React from "react";
import Task from "./Task";
import taskData from "../tasks.json";

const TaskLists = () => {
  return (
    <div className="list">
      <ul>
        {taskData.tasks.map((t) => (
          <div key={t.id}>
            <Task task={t} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskLists;
