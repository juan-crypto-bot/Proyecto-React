import { useState, useEffect } from 'react';
import { HomeLayout } from './Layouts/HomeLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home ,{action as homeAction} from './Pages/Home';
import Error404 from './Pages/Error404';

function App() {
  
  const router = createBrowserRouter([{
    path:"/",
    element:<HomeLayout/>,
   
    children:[
      {
        index:true,
      element:<Home/>,
      action:homeAction
    },
    {
      path:"*", 
      element:<Error404/>    
    }
    ]
  }])

  return (<RouterProvider router={router}/>
  )
}

export default App;
