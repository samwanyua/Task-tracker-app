import Role from "./Role"


const Task = ({tasks, onDelete, onToggle}) => {
    
  return (
    <>
    {tasks.map((task) =>(
        <Role key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Task