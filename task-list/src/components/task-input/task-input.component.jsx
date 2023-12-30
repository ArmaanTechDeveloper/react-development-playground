import './task-input.styles.css'

import { IonIcon } from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';

import { selectTasksArray } from '../../store/tasks/tasks.selector';
import { setTasksArray } from '../../store/tasks/tasks.slice';
import { selectCurrentText } from '../../store/input/input.selector';
import { selectMode } from '../../store/input/input.selector';
import { selectEditId } from '../../store/input/input.selector';
import { setCurrentText  , setMode , setEditId} from '../../store/input/input.slice';


const TaskInput = () => {

    const dispatch = useDispatch()
    
    const currentText = useSelector(selectCurrentText)
    const mode = useSelector(selectMode)
    const editId = useSelector(selectEditId)
    const tasksArray = useSelector(selectTasksArray)

    const handleChange = (e) => {
        dispatch(setCurrentText(e.target.value))
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter' && mode ==='new'){
            const elementID = tasksArray.reduce((currentMax , task) => {
                if(task.id > currentMax){
                    return task.id
                }
            }, 0)
            const obj = {
                id: elementID+1,
                content: currentText,
                status: 'active'
            }
            dispatch(setTasksArray([...tasksArray , obj]))
            dispatch(setCurrentText(''))
        }
        else if(e.key === 'Enter' && mode === 'edit') {
            const newArray = tasksArray.map((task) => {
                if(task.id === editId) {
                    return {
                        ...task,
                        content: currentText
                    }
                }
                return task
            })
            dispatch(setTasksArray(newArray))
            dispatch(setMode('new'))
            dispatch(setCurrentText(''))
            dispatch(setEditId(undefined))
        }
    }


    return (
        <div className="task-input">
            <IonIcon icon={createOutline} />
            <input type="text" placeholder="Add a New Task + Enter" onChange={handleChange} onKeyDown={handleEnter} value={currentText}/>
        </div>
    )
}

export default TaskInput