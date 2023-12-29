import { useContext } from 'react'

import './task-box.styles.css'
import { TasksContext } from '../../context/tasks.context'
import { StatusContext } from '../../context/status.context'
import Task from '../task/task.component'

const TaskBox = () => {
    
    const { tasksArray } = useContext(TasksContext)
    const { status } = useContext(StatusContext)

    return (
        <ul className="task-box">
            {
                

                status === 'all' ?
                    (tasksArray.map((task) => (<Task key={task.id} id={task.id} content={task.content} status={task.status}/>)))
                :
                    (tasksArray.filter((task) => {
                        if(task.status === status){
                            return task
                        }
                    })
                    .map((task) => (<Task key={task.id} id={task.id} content={task.content} status={task.status}/>)))
                
            }
        </ul>
    )
}

export default TaskBox