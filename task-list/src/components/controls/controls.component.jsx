import { useDispatch, useSelector } from 'react-redux'

import './controls.styles.css'
import { setTasksArray } from '../../store/tasks/tasks.slice'
import { selectStatus } from '../../store/status/status.selector'
import { setStatus } from '../../store/status/status.slice'

const Controls = () => {
    const dispatch = useDispatch()

    const status = useSelector(selectStatus)
    

    const handleAll = () => {
        dispatch(setStatus('all'))
    }
    const handleActive = () => {
        dispatch(setStatus('active'))
    }
    const handleCompleted = () => {
        dispatch(setStatus('completed'))
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