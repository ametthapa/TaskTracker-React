import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div 
            className={`task ${task.remainder ? 'remainder' : ''}`}  
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3> 
                {task.text} 
                <FaTimes 
                    onClick={() => onDelete(task.id)} 
                    style={h3Styling}
                /> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

const h3Styling ={
    color:'red',
    cursor:'pointer',
}

export default Task