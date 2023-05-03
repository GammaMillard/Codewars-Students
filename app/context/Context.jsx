'use client'
import { useContext, useState } from "react"


export const StudentsContext = useContext(null)

const Context = ({children}) => {

    const [studentsObject, setStudentsObject] = useState({})

    return (
        <StudentsContext.Provider value={{studentsObject, setStudentsObject}}>
            {children}
        </StudentsContext.Provider>
    )
}

export default Context