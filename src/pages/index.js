import React from 'react'
import './index.scss';

import arrow from '../assets/arrow.svg';
import featuredApp from '../images/featured-app.png';
import pokedex from '../images/pokedex.png';
import todo from '../images/todo-app.png';
import chat from '../images/react-chat-app.png';

import reactIcon from '../assets/reactjs-icon.svg';
import webdev from '../assets/webdev.svg';
import eye from '../assets/eye.svg';
import expressJS from '../assets/expressjs-icon.svg';

import Header from '../components/Header';


export default function index() {
  return (
    <main>
      <Header />
      <section className="hero-section">
        <div className="intro">
          <h1>Welcome.</h1>
          <h3 className="subtitle">My name is Wednesday</h3>
          <a href="mailto:wednesdaygallo@gmail.com"><button className='hire-me' >Contact Me</button></a>
          <img className='arrow' alt='arrow' src={arrow}></img>
        </div>
      </section>

      {/* <section className='featured' id="featured">
        <div className="words">
          <h3 className="subtitle">Featured Project</h3>
          <h2>Playlist Wizard</h2>
          <p>This React app works with the Spotify API to allow the user to quickly and easily search for songs and create a new playlist from their selections.</p>
        </div>
        <a href="https://playlist-wizard.herokuapp.com/"><img src={featuredApp} alt='app example screenshot'></img></a>
      </section> */}

      <section className="skills" id="skills">
        <div className="card">
          <div className='icon'>
            <img src={webdev} alt="Web Dev Icon"></img>
            <h3>HTML5/CSS3</h3>
          </div>
          <p className="skill-text">Strong knowledge of modern HTML and CSS that includes semantic html, flexbox, and grid. Creating powerful, stylized, and accesible layouts with relative ease.</p>
        </div>
        <div className="card">
          <div className='icon'>
            <img src={reactIcon} alt="React Logo"></img>
            <h3>React</h3>
          </div>
          <p className="skill-text">Firm grasp of React's main concepts and programming style including JSX, components, props, and event handling. React has been a main focus from the beginning of my coding journey.</p>
        </div>
        <div className="card">
          <div className='icon'>
            <img src={eye} alt="Eye icon"></img>
            <h3>Eye for Design</h3>
          </div>
          <p className="skill-text">A background in art not only gives me advantages in design and color but also in seeing the big picture of how one would interact and experience a website or web app.</p>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className='portfolio-item'>
            <p className="subtitle">Api-Connected</p>
            <h2 className="portfolio-title">Pokédex</h2>
          <a href="http://www.wednesdaynow.com/pokedex">
            <img src={pokedex} alt="Pokedex App"></img>
          </a>
        </div>
        
        <div className='portfolio-item'>
            <p className="subtitle">React</p>
            <h2 className="portfolio-title">ToDo List</h2>
          <a href="http://www.wednesdaynow.com/todo">
            <img src={todo} alt="ToDo List App"></img>
          </a>
        </div>

        <div className='portfolio-item'>
            <p className="subtitle">React/Express</p>
            <h2 className="portfolio-title">Chat</h2>
          <a href="http://www.wednesdaynow.com/react-chat-app">
            <img src={chat} alt="React Chat App"></img>
          </a>
        </div>
        {/* <div className='portfolio-item'>
          <p className="subtitle">Design</p>
          <h2 className="portfolio-title">El Gallo Machine</h2>
          <img src="#" alt="El Gallo Machine"></img>
        </div> */}
      </section>

      <footer><p>© 2023, Wednesday Gallo - Built with <a href="https://www.gatsbyjs.com">Gatsby</a></p></footer>
    </main>
  )
}
