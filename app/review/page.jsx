import { students } from "../utilities/students";
import { review } from "../utilities/review";
import { getData } from "../utilities/utilities";
import StudentIcon from "../components/StudentIcon";
import Challenge from "../components/Challenge";

const getChallenges = async (array) => {
    const challenges = await Promise.all(array.map(async (challenge, i) => {
        const data = await getData(`https://www.codewars.com/api/v1/code-challenges/${challenge}`);
        return data
    }))
    return challenges
}

const getStudentCompletedChallenges = async () => {
    const completedChallenges = await Promise.all(students.map(async (student, i) => {
        const data = await getData(`https://www.codewars.com/api/v1/users/${student.username}/code-challenges/completed`);
        data.name = student.name
        return data
    }))

    const completedList = completedChallenges.reduce((acc, { name, data }, i) => {
        for (let i = 0; i < data.length; i++) {
            const challenge = data[i].id
            if (!Object.hasOwn(acc, challenge)) {
                acc[challenge] = [name]
                continue
            }
            acc[challenge].push(name)

        }
        return acc
    }, {})
    return completedList
}


export default async function Reviews() {

    const challenges = await getChallenges(review);
    const studentCompletedChallenges = await getStudentCompletedChallenges();

    return (
        <main className='flex flex-col gap-4 p-12 text-white'>
            {
                challenges.map((challenge, i) => {
                    return (
                        <Challenge name={challenge.name} students={studentCompletedChallenges[challenge.id] ? studentCompletedChallenges[challenge.id] : []} rank={challenge.rank.name} url={`https://www.codewars.com/kata/${challenge.id}`} />
                    )
                })
            }
        </main>
    )
}
