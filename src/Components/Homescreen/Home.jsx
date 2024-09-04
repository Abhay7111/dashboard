import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full overflow-y-auto h-calc-56 rounded-xl flex items-start justify-start gap-2 p-2'>
        <div className='h-full w-20 border border-[#253745] rounded-xl flex flex-col items-center justify-start gap-2 py-3'>
            <div>
                <div className='size-12 bg-[#253745] rounded-md flex items-center justify-center text-sm'><NavLink className={`w-full h-full rounded-md flex items-center justify-center font-medium text-[0.8rem]`}>Home</NavLink></div>
            </div>
        </div>
        <div className='w-full h-full bg-[#142633] overflow-y-auto gap-2 flex flex-wrap items-start justify-start rounded-2xl px-3 py-3'>
          <div className='w-72 h-80 bg-[#253745] rounded-2xl flex flex-col gap-2 p-2 relative'>
            <div className='flex gap-2 items-center text-[1.9rem] font-medium tracking-tight'><div className='tracking-wider size-14 flex items-center justify-center rounded-full bg-[#06141b] text-xl font-semibold oswald overflow-x-auto'><span className='w-8 px-2 flex items-center justify-start cursor-pointer'>3132</span></div> Number of clints</div>
            <div className='absolute bottom-0 left-0 w-16 h-[50%] rounded-bl-2xl rounded-tr-3xl flex flex-col items-center justify-start py-2 gap-2.5 bg-[#06141b]'>
              <NavLink to={`/`} className='size-10 bg-[#ccd0cf] rounded-lg hover:scale-[1.1] cursor-pointer transition-transform flex items-center justify-center relative'><img src="https://cdn.pixabay.com/photo/2020/08/21/15/37/building-5506466_640.jpg" className='size-full object-cover object-center rounded-lg opacity-85' /></NavLink>
              <NavLink to={`/`} className='size-10 bg-[#ccd0cf] rounded-lg hover:scale-[1.1] cursor-pointer transition-transform flex items-center justify-center relative'><img src="https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_640.jpg" className='size-full object-cover object-center rounded-lg opacity-85' /></NavLink>
              <NavLink to={`/`} className='size-10 bg-[#ccd0cf] rounded-lg hover:scale-[1.1] cursor-pointer transition-transform flex items-center justify-center relative'><img src="https://cdn.pixabay.com/photo/2024/05/24/18/14/astronaut-8785566_640.png" className='size-full object-cover object-center rounded-lg opacity-85' /></NavLink>
            </div>
            <div className='size-5 bg-[#06141b] rounded-full absolute top-2 right-2 cursor-grab active:cursor-grabbing'></div>
          </div>
        </div>
    </div>
  )
}

export default Home