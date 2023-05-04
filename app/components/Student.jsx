'use client'

import { useState } from "react"
import StudentModal from "./StudentModal"

const Student = ({ student: { name, username, honor, ranks: { overall } }, img, position }) => {

    const [openModal, setOpenModal] =useState(true)


    



    return (
        <>
        <div className={`p-5 text-white bg-[hsl(240,4.92%,11.96%)] animate-[appear_1s_${position * 0.2}s_both]
        hover:scale-105 
        transition-all duration-300
        rounded-lg
        `}>
            <img src={`https://www.codewars.com/users/${username}/badges/large`} alt="" />
            <p>{position}</p>
            <p>{name}</p>
            <img className="w-32 h-32" src={img} alt="" />
            <p>{overall.name}</p>
            <p>{honor}</p>
            <button onClick={() => setOpenModal(true)} className="p-2 bg-blue-500 hover:scale-105" >Open</button>
        </div>
            {
                openModal && <StudentModal />
            }
        </>
    )
}

export default Student