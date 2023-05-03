'use client'

const Student = ({ student: { name, username, honor, ranks: { overall } }, img, position }) => {

    
    return (
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
        </div>
    )
}

export default Student