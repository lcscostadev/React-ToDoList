import { useState, useEffect } from 'react'
import { Tasks, AddTasks, Header, Footer, Clock } from './components'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  // READ
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  })
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  // CREATE
  const handleTaskAddition = (taskTitle) => {

    const newTasks = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTasks);
  }


  // COMPLETE
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {
        ...task,
        completed: !task.completed
      }
      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskUpdate = (taskId, newTitle) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle
        };
      }
      return task;
    });
    setTasks(newTasks);
  }


  // DELETE
  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <>
      <div className='App'>
        <Clock />
        <Header />
        <div>
          <AddTasks tasks={tasks} handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} handleTaskUpdate={handleTaskUpdate} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
