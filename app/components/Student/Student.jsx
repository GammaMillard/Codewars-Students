'use client'
import classNames from "classnames"
import { useRef, useState } from "react"
import './style.css'




const Student = ({ student: { name, username, honor, ranks: { overall } }, img, position }) => {

  
    return (
        <div className={classNames('p-5', 'text-white', 'bg-[hsl(240,4.92%,11.96%)]', `animate-[appear_${position}s]`)}>
            <img src={`https://www.codewars.com/users/${username}/badges/large`} alt="" />
            <p>{position}</p>
            <p>{name}</p>
            <img className="w-32 h-32" src={img} alt="" />
            <p>{overall.name}</p>
            <p>{honor}</p>
        </div>
    )
}

export default Student