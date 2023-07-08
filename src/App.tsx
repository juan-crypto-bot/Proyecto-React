import { useState, useEffect } from 'react';
import { HomeLayout } from './Layouts/HomeLayout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

function App() {
  
  const router = createBrowserRouter([
    {
      element: <HomeLayout/>,
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"*",
        element:<Error404/>
      },
    ],
  },
  ])

  // const router = createBrowserRouter([{
  //   path:"/",
  //   element:<HomeLayout/>,
  //   children:[
  //     {
  //       index:true,
  //     element:<Home/>,
  //   },
  //   {
  //     path:"*", 
  //     element:<Error404/>    
  //   }
  //   ]
  // }])

  return (<RouterProvider router={router}/>
  )

}

export default App;
