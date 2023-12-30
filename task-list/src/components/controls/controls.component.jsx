import { useContext } from 'react'
import { useDispatch } from 'react-redux'

import './controls.styles.css'
import { StatusContext } from '../../context/status.context'
import { setTasksArray } from '../../store/tasks/tasks.slice'


const Controls = () => {
    const dispatch = useDispatch()

    const {status , setStatus} = useContext(StatusContext)
    

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
        dispatch(setTasksArray([]))
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