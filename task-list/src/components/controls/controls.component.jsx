import { useContext } from 'react'
import { StatusContext } from '../../context/status.context'
import './controls.styles.css'
import { TasksContext } from '../../context/tasks.context'



const Controls = () => {

    const {status , setStatus} = useContext(StatusContext)
    const {tasksArray , setTasksArray} = useContext(TasksContext)
    

    const handleAll = () => {
        setStatus('all')
    }
    const handleActive = () => {
        setStatus('active')
    }
    const handleCompleted = () => {
        setStatus('completed')
    }
    const handleClear = () => {
        setTasksArray([])
    }

    return (
        <div className="controls">
            <div className="filters">
                <span id="all" onClick={handleAll} className={status === 'all'?'active': ''}>All</span>
                <span id="active" className={status === 'active'?'active': ''} onClick={handleActive}>Active</span>
                <span id="completed" className={status === 'completed'?'active': ''} onClick={handleCompleted}>Completed</span>
            </div>
            <button className="clear-btn" onClick={handleClear}>Clear All</button>
        </div>
    )
}

export default Controls