'use client'

import { IconContext } from 'react-icons'
import Link from 'next/link'
const Challenge = ({ name, students, rank, url }) => {
  
  return (
    <div className="group text-white p-4 bg-card-background border border-dark-red rounded-lg flex justify-between hover:scale-105 transition-all duration-300">
      <div className='flex flex-col justify-center items-start gap-4'>
        <p className='text-xl font-bold'>{name}</p>
        <p className='py-px px-1 border border-white rounded'>{rank}</p>
        <div className="flex p-1 gap-3 ">
          {
            students && students.map((e, i) => <p key={i}>{e}</p>)
          }
        </div>
      </div>
      <IconContext.Provider value={{ size: '4em', className:'p-4 bg-black rounded-full group-hover:animate-wiggle' }} >
        <Link href={url} className='flex justify-center items-center'> <FaArrowRight /> </Link>
      </IconContext.Provider>

    </div>
  )
}

export default Challenge