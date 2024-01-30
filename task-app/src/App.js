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
  return (
    <div className="container"> 
      <Header />
      <Task tasks ={tasks}/>
    </div>
  );
}



export default App;
// empty angle brackets --> fragments