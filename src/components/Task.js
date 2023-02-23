import {FaTimes} from 'react-icons/fa';
const Task = ({task, onDelete, onToggle})=>{
    return(
        <div style={{position: 'relative', margin: '5px'}} className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>{onToggle(task.id)}}>
            <FaTimes style={{color: 'red', cursor: 'pointer', position: 'absolute', right: '10px'}} onClick={()=>onDelete(task.id)}/>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}
export default Task;