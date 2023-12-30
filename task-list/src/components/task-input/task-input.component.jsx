import './task-input.styles.css'

import { IonIcon } from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputContext } from '../../context/input.context';
import { selectTasksArray } from '../../store/tasks/tasks.selector';
import { setTasksArray } from '../../store/tasks/tasks.slice';

const TaskInput = () => {

    const dispatch = useDispatch()
    
    const { currentText , setCurrentText , mode , setMode ,  editId , setEditId} = useContext(InputContext)
    const tasksArray = useSelector(selectTasksArray)

    const handleChange = (e) => {
        setCurrentText(e.target.value)
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
            setCurrentText('')
        }
        else if(e.key === 'Enter' && mode === 'edit') {
            const newArray = tasksArray.map((task) => {
                if(task.id === editId) {
                    task.content = currentText
                }
                return task
            })
            dispatch(setTasksArray(newArray))
            setMode('new')
            setCurrentText('')
            setEditId(undefined)
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