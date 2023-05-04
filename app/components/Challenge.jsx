'use client'
import { FaArrowRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Link from 'next/link'
const Challenge = ({ name, students, rank, url }) => {

  return (
    <div className="group text-white p-10 bg-red-500 rounded-lg flex justify-between">
      <div>
        <p>{name}</p>
        <p>{rank}</p>
        <div className="flex p-1 gap-3 ">
          {
            students && students.map((e, i) => <p key={i}>{e}</p>)
          }
        </div>
      </div>
      <IconContext.Provider value={{ size: '6em', className: 'p-4 bg-black rounded-full group-hover:animate-wiggle' }} >
        <Link href={url}> <FaArrowRight /> </Link>
      </IconContext.Provider>

    </div>
  )
}

export default Challenge