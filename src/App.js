import { useState } from "react"
import Header from './components/Header'
import Task from './components/Task'

function App() {
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

  return (
    <div className="container">
      <Header />
      <Task tasks={ tasks } />
      
    </div>
  );
}

export default App;
