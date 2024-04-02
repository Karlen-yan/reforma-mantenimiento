'use client'
import Link from 'next/link'
const MainMenu = () => {
  return (
    <ul className='w-[90%]  bg-secondary text-white border-b-2'>
      <li className='flex flex-col lg:flex-row text-2xl justify-center gap-10 m-2 font-serif'>
        <Link
          href='/#about'
          className='py-2 px-4 border-b-2 border-secondary transition-colors duration-300 text-white font-serif  hover:text-gray-400 '
        >
          Sobre Mí
        </Link>
        <Link
          href='/#services'
          className='py-2 px-4 border-b-2  border-transparent hover:border-secondary transition-colors duration-300 text-white font-serif hover:text-gray-400'
        >
          Servicios
        </Link>
        <Link
          href='/#foto'
          className='py-2 px-4 border-b-2  border-transparent hover:border-secondary transition-colors duration-300 text-white font-serif hover:text-gray-400'
        >
          Fotos
        </Link>
        <Link
          href='/#videos-page'
          className='py-2 px-4 border-b-2  border-transparent hover:border-secondary transition-colors duration-300 text-white font-serif hover:text-gray-400'
          >
          Videos

        </Link>
        <Link
          href='/#contact'
          className='py-2 px-4 border-b-2  border-transparent hover:border-secondary transition-colors duration-300 text-white font-serif hover:text-gray-400'
        >
          Contacto
        </Link>
      
      </li>
    </ul>
  )
}

export default MainMenu
