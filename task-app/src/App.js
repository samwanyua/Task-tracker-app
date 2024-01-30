import Header from "./Components/Header";
import Task from "./Components/Task";
import { useState } from "react"

function App() {
  const [tasks, setTasks ] = useState(
    [
        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ])

    // Delete task  function
    const deleteTask = (id) => {
      // console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container"> 
      <Header />
      {tasks.length > 0 ? <Task tasks ={tasks} onDelete={deleteTask}/> : 'No tasks available!'}
    </div>
  );
}



export default App;
// empty angle brackets --> fragments