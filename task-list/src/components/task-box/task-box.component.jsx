import { useSelector } from 'react-redux'

import './task-box.styles.css'
import Task from '../task/task.component'
import { selectTasksArray } from '../../store/tasks/tasks.selector'
import { selectStatus } from '../../store/status/status.selector'

const TaskBox = () => {
    
    const tasksArray = useSelector(selectTasksArray)
    const status = useSelector(selectStatus)

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