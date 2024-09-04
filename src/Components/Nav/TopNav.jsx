import React from 'react'
import { NavLink } from 'react-router-dom'
 
function TopNav() {
  return (
    <div className='w-full h-14 flex items-center justify-between px-4 '>
        <NavLink to={'/'} className="Logo oswald font-bold text-2xl">Gaama.</NavLink>
        <div className='flex h-12 px-3 gap-6 rounded-lg items-center justify-between'>
            <ul className='ul flex items-center gap-2 justify-start '>
                <li><NavLink className={`normal-font hover:bg-[#253745] px-2 py-1 rounded-md transition-transform`} to='/'>Home</NavLink></li>
                <li><NavLink className={`normal-font hover:bg-[#253745] px-2 py-1 rounded-md transition-transform`} to='/About'>About</NavLink></li>
                <li><NavLink className={`normal-font hover:bg-[#253745] px-2 py-1 rounded-md transition-transform`} to='/Contact'>Contact</NavLink></li>
                <li><NavLink className={`normal-font hover:bg-[#253745] px-2 py-1 rounded-md transition-transform`} to='/Price'>Price</NavLink></li>
            </ul>
            <div className='flex items-center justify-between gap-3'>
                <NavLink to={`/profile`} className=' size-7 bg-[#253745] rounded-full flex items-center justify-center overflow-hidden hover:scale-[1.13] transition-transform hover:border'><img src="https://cdn.pixabay.com/photo/2023/09/04/17/53/pelican-8233306_1280.jpg" className='w-full h-full rounded-full object-cover opacity-70' /></NavLink>
                <NavLink to={`/signup`} className=' w-20 h-7 bg-[#253745] rounded-full flex items-center justify-center font-medium text-sm'>Sign up</NavLink>
            </div>
        </div>
    </div>
  )
}

export default TopNav