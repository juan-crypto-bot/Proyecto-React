import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import "./HomeLayoutStyle.css"
import Footer from '../Components/Footer';

export const HomeLayout = () => {
  return (
    <div className='App'>
      <Header/>
      <div className='outlet'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
