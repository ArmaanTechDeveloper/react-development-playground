import { useContext } from 'react'

import './task.styles.css'
import { InputContext } from '../../context/input.context'
import { useDispatch, useSelector } from 'react-redux'
import { selectTasksArray } from '../../store/tasks/tasks.selector'
import { setTasksArray } from '../../store/tasks/tasks.slice'

const Task = ({id , content , status}) => {
    const dispatch = useDispatch()
    const tasksArray = useSelector(selectTasksArray)
    
    const { setCurrentText , setMode , setEditId} = useContext(InputContext)

    const handleChange = (id) => {
        dispatch(setTasksArray(
            tasksArray.map((task) => {
                if(task.id === id){
                    if(task.status === 'active') task.status = 'completed'
                    else task.status = 'active'
                }
                return task
            }))
        )
    }

    const handleRemove = (id) => {
        setMode('edit')
        const filteredArray = tasksArray.filter((task) => {
            return task.id !== id
        })
        dispatch(setTasksArray(filteredArray))
    }

    const handleEdit = (id) => {
        tasksArray.forEach((task) => {
            if(task.id === id) {
                setCurrentText(task.content)
                setEditId(id)
                setMode('edit')
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