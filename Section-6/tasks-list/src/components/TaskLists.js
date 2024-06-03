import React from 'react'
import Task from "./Task";
import taskData from "../tasks.json";

const TaskLists = () => {
  return (
    <div className='list'>
      {taskData.tasks.map((t)=>{
        return t.description
      })}
    <Task/>
    </div>
  )
}

export default TaskLists