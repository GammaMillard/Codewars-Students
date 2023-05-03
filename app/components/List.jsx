import { getData, students } from "../utilities/students"
import Student from "./Student";

const List = async () => {

    const cats = await getData(`https://api.thecatapi.com/v1/images/search?limit=10`)
    console.log(cats);
   

    const data = await Promise.all(students.map(async(student,i) => {
        const info = await getData(`https://www.codewars.com/api/v1/users/${student.username}`)
        info.name = students[i].name
        return info
    }))
   
    console.log(data);
    return (
        <div className="flex flex-wrap justify-between gap-4">
            {
                data.map( (e,i) => <Student student={e} key={i} img={cats[i].url}/>)
            }
        </div>
    )
}

export default List