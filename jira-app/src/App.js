import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTask] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
   ];
  setTask(createdTask);
}
return (
  <div className="App">
    <TaskCreate onCreate={createTask} />
    <h1>Görevler</h1>
    <TaskList tasks={tasks} />
  </div>
);
}

export default App;
