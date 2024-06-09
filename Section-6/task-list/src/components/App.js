import {useEffect, useState} from "react"
import Header from "./Header";
import TaskLists from "./TaskLists";
import Form from "./Form";
import Footer from "./Footer";

// retrieve the saved tasks from localStorage, if none are found, it default the an empty array []
const tasksData = JSON.parse(localStorage.getItem("tasks") || []);
function App() {
  const [taskData, setTaskData] = useState(tasksData);
    useEffect(()=>{
      //stringify means converts a JavaScript value to a JavaScript Object Notation (JSON) string
      localStorage.setItem("tasks", JSON.stringify(taskData));
    },[taskData])

  function handleAddTask(task) {
    setTaskData((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTaskData((tasks)=>tasks.filter((task)=>task.id !== id))    
  }

  function handleClaerAllTasks() {
    setTaskData(() => []);
  }

  function onHandleToggleItem(id) {
    setTaskData((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <div className="App">
      <Header />
      <Form onAddtask={handleAddTask} />
      <TaskLists
        taskData={taskData}
        onDeleteTask={handleDeleteTask}
        onClearAllTasks={handleClaerAllTasks}
        onToggleItem={onHandleToggleItem}
      />
      <Footer />
    </div>
  );
}

export default App;
