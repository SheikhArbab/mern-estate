import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl md:text-2xl flex flex-wrap'>
          <span className='text-slate-500'>Arbab</span>
          <span className='text-slate-700'>Estate</span>
        </h1>

        <form className='bg-slate-100 p-2 rounded-lg flex items-center justify-between'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600 cursor-pointer' />
        </form>
        <ul className='flex gap-4'>
          <li className='capitalize hidden sm:inline font-bold text-slate-700 hover:underline duration-700 transition-all'><NavLink to={'/'}>home</NavLink></li>
          <li className='capitalize hidden sm:inline font-bold text-slate-700 hover:underline duration-700 transition-all'><NavLink to={'/about'}>about</NavLink></li>
          <li className='capitalize  font-bold text-slate-700 hover:underline duration-700 transition-all'><NavLink to={'/sign-in'}>sign in</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
