import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import './Components/Css/Statice.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Local from './Components/Local/Local.jsx';
import Home from './Components/Homescreen/Home.jsx';

  const routes = createBrowserRouter([
    {path:'/', element:<Local/>,
      children:[
        {path:'', element:<Home/>,},
      ]
    },
    {path:'*', element:'Sorry this page not found',}
  ])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)