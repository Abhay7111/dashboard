import React from 'react';
import TopNav from '../Nav/TopNav';
import { Outlet } from 'react-router-dom';

function Local() {
  return (
    <div className='w-full h-screen'>
        <TopNav/>
        <div className='px-5'><Outlet/></div>
    </div>
  )
}

export default Local