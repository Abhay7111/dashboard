import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import './Components/Css/Statice.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Local from './Components/Local/Local.jsx';

  const routes = createBrowserRouter([
    {path:'/', element:<Local/>,}
  ])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
