import Link from 'next/link'
import Logo from './Logo'

const NavBar = () => {
  return (
    <nav className='  flex justify-between w-full gap-3 py-10 text-white'>œ
        <Logo />
        <ul className='flex gap-24 text-xl' >
            <li className='py-2  px-2 rounded-lg hover:scale-110
            transition-all duration-75 cursor-pointer
            '><Link href={'/'}>LeaderBoard</Link> </li>
            <li className='py-2  px-2 rounded-lg hover:scale-110
            transition-all duration-75 cursor-pointer
            '><Link href={'./challenges'}>Challenges</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar