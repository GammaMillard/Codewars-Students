import Challenge from "../components/Challenge"
import { getData } from "../utilities/utilities"
import { students } from "../utilities/students"
import ChallengesList from "../components/ChallengesList"

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
    const list = await Promise.all(data.map(({ slug }) => getData(`https://www.codewars.com/api/v1/code-challenges/${slug}`)))

    const promise = await Promise.all(students.map(async (student, i) => {
        const data = await getData(`https://www.codewars.com/api/v1/users/${student.username}/code-challenges/completed`)
        data.name = student.name
        return data
    }))

    // CompleatedList Genera un Array con esta Interface : { id : string, data: string[]}

    const compleatedList = await promise.reduce((acc, { name, data }, i) => {
        
        data.forEach(challenge => {

            if (!Object.hasOwn(acc, challenge.id)) {
                acc[challenge.id] = [name]
            }
            acc[challenge.id].push(name)
        })

        return acc
    }, {})


    return (
        <div className="flex flex-col p-10 gap-10 ">
            {/* {Name,rank,id} Pertencen a `Challenge` */}
            <ChallengesList list={list} compleatedList={compleatedList} />
            {/* {
                list.map(({name,rank,id}, i) => <Challenge key={i} name={name} rank={rank.name} students={compleatedList[id]} />)
            } */}
        </div>
    )
}

export default ChallengesPage