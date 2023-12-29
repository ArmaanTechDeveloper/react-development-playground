import { useContext } from 'react'

import './task.styles.css'
import { TasksContext } from '../../context/tasks.context'
import { InputContext } from '../../context/input.context'

const Task = ({id , content , status}) => {

    const {tasksArray , setTasksArray} = useContext(TasksContext)
    const { setCurrentText , setMode , setEditId} = useContext(InputContext)

    const handleChange = (id) => {
        setTasksArray(
            tasksArray.map((task) => {
                if(task.id === id){
                    if(task.status === 'active') task.status = 'completed'
                    else task.status = 'active'
                }
                return task
            })
        )
    }

    const handleRemove = (id) => {
        setMode('edit')
        const filteredArray = tasksArray.filter((task) => {
            return task.id !== id
        })
        setTasksArray(filteredArray)
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