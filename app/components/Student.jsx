'use client'

import { useState } from "react"
import StudentModal from "./StudentModal"

const Student = ({ student: { name, username, honor, ranks: { overall }, codeChallenges: { totalCompleted } }, img, position }) => {

    const [openModal, setOpenModal] = useState(true)






    return (
        <>
            <div className={`p-5 text-white bg-[hsl(240,4.92%,11.96%)] animate-[appear_1s_${position * 0.2}s_both] hover:scale-105 transition-all duration-300 rounded-lg flex flex-col justify-center items-center gap-4 ${position === 1 ? "shadow-gold" : position === 2 ? "shadow-silver" : position === 3 ? "shadow-bronze" : "image-shadow"}`}>
                <img src={`https://www.codewars.com/users/${username}/badges/micro`} alt="" className="w-full" />
                <img className="w-32 h-32 rounded-full shadow-3xl" src={img} alt="" />
                <div className="flex justify-center items-center gap-4 w-full">
                    <p className="text-3xl font-bold">{`#${position}`}</p>
                    <p className="text-2xl">{name}</p>
                </div>
                <div className="flex justify-center gap-2">
                    <p className="text-sm">{`Katas: ${totalCompleted}`}</p>
                    <p className="text-sm">{`Honor: ${honor}`}</p>
                </div>
                <button onClick={() => setOpenModal(true)} className="p-2 border border-dark-red rounded hover:scale-105 hover:bg-dark-red" >Open</button>
            </div>
            {
                // openModal && <StudentModal setOpenModal={setOpenModal}/>
            }
        </>
    )
}

export default Student