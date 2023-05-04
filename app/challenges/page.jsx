import Challenge from "../components/Challenge"
import { getData } from "../utilities/utilities"
import { students } from "../utilities/students"

// const challengesFetch = async (array) => {
//     const promise = await Promise.all(array.map(async (student, i) => {
//         const data = await getData(`https://www.codewars.com/api/v1/users/${student.username}/code-challenges/completed`)
//         data.name = student.name
//         return data
//     }))

//     return promise
// }




const ChallengesPage = async () => {
    console.clear()
    // {Data es el array que viene en el fetch}
    const { data } = await getData('https://www.codewars.com/api/v1/users/GammaMillard/code-challenges/completed')

    const promise = await Promise.all(students.map(async (student, i) => {
        const data = await getData(`https://www.codewars.com/api/v1/users/${student.username}/code-challenges/completed`)
        data.name = student.name
        return data
    }))

    // CompleatedList Genera un Array con esta Interface : { id : string, data: string[]}

    const compleatedList = promise.reduce((acc, { name, data }, i) => {
        
        for (let i = 0; i < data.length; i++) {
            const challenge = data[i].id
            if (!Object.hasOwn(acc, challenge)) {
                acc[challenge] = []
                acc[challenge].push(name)
                continue
            }
            acc[challenge].push(name)

        }


        return acc
    }, {})


    return (
        <div className="flex flex-col p-10 ">
            {/* {Name} es el nombre de cada challenge */}
            {
                data.map(({ name, id }, i) => <Challenge key={i} name={name} students={compleatedList[id]} />)
            }
        </div>
    )
}

export default ChallengesPage