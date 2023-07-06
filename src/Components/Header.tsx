import React from 'react';
import headerImg from '../assets/headerImg.jpg';
import './Styled/HeaderStyled.css'

export const Header = () => {
    return(
        <header className="App-header">
            <h3 className='titleHeader'><b>Github</b> Jobs</h3>
            <div className="Logo">
                <img src={headerImg}></img>
            </div> 
        </header>
    );
};
export default Header;