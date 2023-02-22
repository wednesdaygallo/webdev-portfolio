import React from 'react'

import './Header.module.scss';

const handleClick = () => {
  const nav = document.querySelector('.nav-items');

  nav.classList.toggle('nav-active');
  console.log('heloooooooo the lcick is working');
}

export default function Header() {
    return (
        <header>
            <nav>
                <a href="/" className='logo'>Wednesday Gallo</a>
                <ul className='nav-items'>
                    <li><a href="#featured">Featured</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
                <div className='burger' onClick={handleClick}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>                
            </nav>
      </header>
    )
}
