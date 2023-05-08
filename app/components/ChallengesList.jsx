'use client'

import { useState } from "react"
import Challenge from "./Challenge"

const ChallengesList = ({ list, compleatedList }) => {



    const [filterList, setFilterList] = useState(list)

    
    const handleClick = (e) => {
        console.log(e);

        setFilterList(() => {
            return list.filter( ({rank}) => rank.name == e.target.innerText) 
        })
    }


    return (
        <div>
            <ul className="flex gap-10">
                <li><button onClick={handleClick} className="px-2 py-3 bg-red-500 text-white">8 kyu</button></li>
                <li><button onClick={handleClick} className="px-2 py-3 bg-red-500 text-white">7 kyu</button></li>
            </ul>
            <div className="grid grid-cols-1 p-10 gap-10 lg:grid-cols-3">
                {
                    filterList.map(({ name, rank, id, url, description, createdBy : username }, i) => <Challenge key={i} name={name} rank={rank.name} students={compleatedList[id]} username={username} description={description} url={url} />)
                }

            </div>


        </div>
    )
}

export default ChallengesList