import { createContext, useState } from "react";

export const StatusContext = createContext({
    status: 'all',
    setStatus: () => {}
})

export const StatusProvider = ({children}) => {

    const [status , setStatus] = useState('all')

    const value = {
        status,
        setStatus
    }
    return (
        <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
    )
}