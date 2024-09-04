import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNav() {
  return (
    <div className='w-full h-14 flex items-center justify-between px-4'>
        <div className="Logo oswald font-bold text-2xl">Gaama.</div>
        <div className='flex h-12 px-3 gap-6 rounded-lg items-center justify-between'>
            <ul className='ul flex items-center gap-2 justify-start'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
                <li><NavLink to='/Contact'>Contact</NavLink></li>
                <li><NavLink to='/Price'>Price</NavLink></li>
            </ul>
            <div className='flex items-center justify-between gap-3'>
                <NavLink className=' size-7 bg-green-400 rounded-full flex items-center justify-center overflow-hidden'><img src="https://cdn.pixabay.com/photo/2024/04/12/08/22/background-8691370_1280.png" className='w-full h-full rounded-full object-cover' /></NavLink>
                <NavLink className=' w-20 h-7 bg-green-400 rounded-full flex items-center justify-center font-medium text-sm'>Sign up</NavLink>
            </div>
        </div>
    </div>
  )
}

export default TopNav