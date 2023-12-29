import { createContext, useState } from "react";

export const InputContext = createContext({
    currentText: '',
    setCurrentText: () => {},
    mode: 'new',
    setMode: () => {},
    editId: undefined,
    setEditId: () => {}
})

export const InputProvider = ({children}) => {

    const [currentText,setCurrentText] = useState('')
    const [mode,setMode] = useState('new')
    const [editId , setEditId] = useState(undefined)
    
    const value = {
        currentText,
        setCurrentText,
        mode,
        setMode,
        editId,
        setEditId
    }
    return(
        <InputContext.Provider value={value}>{children}</InputContext.Provider>
    )
}