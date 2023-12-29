import { createContext, useState } from "react";

export const TasksContext = createContext({
    tasksArray: [],
    setTasksArray: () => {}
})

export const TasksProvider = ({children}) => {
    const [tasksArray , setTasksArray] = useState([])

    const value = {
        tasksArray,
        setTasksArray
    }

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    )
}