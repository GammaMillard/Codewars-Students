import {  students } from "../utilities/students"
import { getData } from "../utilities/utilities"
import Student from "./Student/Student"

const List = async () => {

    const cats = await getData(`https://api.thecatapi.com/v1/images/search?limit=10`)
  

   

    const data = await Promise.all(students.map(async(student,i) => {
        const info = await getData(`https://www.codewars.com/api/v1/users/${student.username}`)
        info.name = students[i].name
        return info
    }))
   
    const sortedList = data.sort( (a,b) => b.honor - a.honor)


   
    return (
        <div className="flex flex-wrap justify-between gap-4">
            {
                sortedList.map( (e,i) => <Student student={e} key={i} position={i + 1} img={cats[i].url}/>)
            }
        </div>
    )
}

export default List