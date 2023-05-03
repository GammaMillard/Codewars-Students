import Challenge from "../components/Challenge"
import { getData } from "../utilities/utilities"

const ChallengesPage = async () => {


    // {Data es el array que viene en el fetch}
    const { data } = await getData('https://www.codewars.com/api/v1/users/GammaMillard/code-challenges/completed')
    
    
    return (
        <div className="flex flex-col p-10 ">
            {/* {Name} es el nombre de cada challenge */}
            {
                data.map(({name}, i) => <Challenge key={i} name={name}/> ) 
            }
        </div>
    )
}

export default ChallengesPage