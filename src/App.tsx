import { useState, useEffect } from 'react';
import { HomeLayout } from './Layouts/HomeLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';


function App() {
  
  const router = createBrowserRouter([{
    path:"/",
    element:<HomeLayout/>,
    children:[
      {index:true,
      element:<Home/>}
    ]
  }])

  return (<RouterProvider router={router}/>
  )
}

export default App;
