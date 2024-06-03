import {useState} from "react"
import Header from "./components/Header";
import TaskLists from "./components/TaskLists";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [taskData, setTaskData] = useState([]);
  function handleAddTasks(task) {
    setTaskData((tasks) => [...tasks, task]);
  }
  return (
    <div className="App">
      <Header />
      <Form onAddtasks={handleAddTasks} />
      <TaskLists taskData={taskData} />
      <Footer />
    </div>
  );
}

export default App;
