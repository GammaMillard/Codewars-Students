"use client"
import { useState } from "react"
import Student from "./Student"

import StudentModal from "./StudentModal"

const List = ({ data, cats }) => {

    const [openModal, setOpenModal] = useState({
        isActive: false
    });

    const sortedList = data.sort((a, b) => b.honor - a.honor)

    return (
        <div className="flex flex-wrap justify-center items-center gap-8">
            {
                sortedList.map((student, i) => <Student data={{ ...student, position: i + 1, img: cats[i].url }} key={i} setOpenModal={setOpenModal} />)
            }
            {
                openModal.isActive && <StudentModal openModal={openModal} setOpenModal={setOpenModal} />
            }
        </div>
    )
}

export default List