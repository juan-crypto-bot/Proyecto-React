import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <div className='App'>
      <Header/>
      <Outlet/>
    </div>
  )
}
