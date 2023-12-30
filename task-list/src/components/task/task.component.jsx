import { useDispatch, useSelector } from 'react-redux'

import './task.styles.css'
import { selectTasksArray } from '../../store/tasks/tasks.selector'
import { setTasksArray } from '../../store/tasks/tasks.slice'
import { setCurrentText } from '../../store/input/input.slice'
import { setMode } from '../../store/input/input.slice'
import { setEditId } from '../../store/input/input.slice'

const Task = ({id , content , status}) => {
    const dispatch = useDispatch()
    const tasksArray = useSelector(selectTasksArray)
    

    const handleChange = (id) => {
        const newArray = tasksArray.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    status: task.status === 'active' ? 'completed' : 'active',
                };
            }
            return task;
        });
        dispatch(setTasksArray(newArray))
    }

    const handleRemove = (id) => {
        dispatch(setMode('edit'))
        const filteredArray = tasksArray.filter((task) => {
            return task.id !== id
        })
        dispatch(setTasksArray(filteredArray))
    }

    const handleEdit = (id) => {
        tasksArray.forEach((task) => {
            if(task.id === id) {
                dispatch(setCurrentText(task.content))
                dispatch(setEditId(id))
                dispatch(setMode('edit'))
                return
            }
        })
    }

    return (
        <li className='task'>
            <div className='left-elements'>
                <input type="checkbox" onChange={() => handleChange(id)} checked={status === 'completed'}/>
                <p className={status==='completed'? "strike-off" : ""}>{(content.length < 30 )? content : `${content.substring(0 , 30)}...`}</p>
            </div>

            <div className='right-elements'>
                <p onClick={() => handleEdit(id)}>E</p>
                <p onClick={() => handleRemove(id)}>X</p>
            </div>
        </li>
    )
}

export default Task