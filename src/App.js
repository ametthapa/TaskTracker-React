import { useState } from "react"


import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
 
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
        id: 1,
        text: 'Doctors App',
        day: 'Feb 10',
        remainder: true,
    },
    {
        id: 2,
        text: 'HomeWork',
        day: 'Feb 10 at 1:30',
        remainder: true,
    },
    {
        id: 3,
        text: 'Shooping',
        day: 'Feb 5th at 3pm',
        remainder: false,
    },
])

//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = { id, ...task}
  setTask([...tasks, newTask])
}

//Del;ete TAsk
const deleteTask = (id) =>{
  setTask(
    tasks.filter((task) =>
      task.id !== id 
    )
  )
}

// Toggle Remainder value
const toggleRemainder =(id) =>{
  setTask(
    tasks.map((task) => 
      task.id === id ? { ...task, remainder:
        !task.remainder } : task 
    )
  )
}

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleRemainder}
                />
              ) : (
                "No Task To Show"
              )}
            </>
          )}
        />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
