import Role from "./Role"


const Task = ({tasks, onDelete}) => {
    
  return (
    <>
    {tasks.map((task) =>(
        <Role key={task.id} task = {task} onDelete={onDelete}/>
    ))}
    </>
  )
}

export default Task