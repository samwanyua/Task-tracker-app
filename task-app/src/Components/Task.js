import Role from "./Role"


const Task = ({tasks}) => {
    
  return (
    <>
    {tasks.map((task) =>(
        <Role key={task.id} task = {task}/>
    ))}
    </>
  )
}

export default Task