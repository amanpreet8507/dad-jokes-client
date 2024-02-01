import React from 'react'
import './Header.scss'
import logo from '../../assets/images/dadjoke.jpg';

const Header = () => {
  return (
    <div className='header__container'>
        <div className='header'>    
            <img className="header__profile-img" src={logo}></img>  
            <h1 className="header__h1">Dad Jokes </h1>
        </div>
        <p className='header__p'>Joke of the day</p>
    </div>

  )
}

export default Header
