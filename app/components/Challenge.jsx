'use client'
import { AiOutlineLink } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import Link from 'next/link'

const Challenge = ({ name, students, rank, url, description, username }) => {

  const ranks = {
    '8 kyu': 'border-gray-400',
    '7 kyu': 'border-gray-600',
    '6:kyu': 'border-yellow-500'
  }




  return (
    <div className={`relative text-white  bg-[hsl(240,5%,17%)]  p-10 border-b-4 ${ranks[rank]} rounded-lg flex justify-between`}>
      <p className='text-xl'>{name}</p>
      <Link href={url} target='_blank'> <AiOutlineLink /></Link>
      {/* <div className='absolute -bottom-4 right-1/4'>
        <Medal rank={rank}/>      </div> */}
    </div>
  )
}

export default Challenge