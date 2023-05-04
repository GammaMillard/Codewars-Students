'use client'
import { useContext, useState, createContext} from "react"


export const StudentsContext = createContext({})

const Context = ({children}) => {

    const [studentsObject, setStudentsObject] = useState({})

    

    return (
        <StudentsContext.Provider value={{studentsObject, setStudentsObject}}>
            {children}
        </StudentsContext.Provider>
    )
}

export default Context