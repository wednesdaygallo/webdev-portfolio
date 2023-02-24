import React from 'react'
// import './index.scss';
import './global.css'

import arrow from '../assets/arrow.svg';
import wlogo from '../assets/wlogo.png';
import featuredApp from '../images/featured-app.png';
import pokedex from '../images/pokedex.png';
import todo from '../images/todo-app.png';
import chat from '../images/react-chat-app.png';
import clone from '../images/clone-site.png';

import react from '../assets/reactjs-icon.svg';
import webdev from '../assets/webdev.svg';
import eye from '../assets/eye.svg';

//Import React Icons
import {AiFillLinkedin, AiFillGithub, AiOutlineCopyrightCircle} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

export default function index() {
  return (
    <div className='bg-black text-white'>

      <main>
          <section className="min-h-screen">
            {/* Navigation */}
            <nav className="px-7 py-5 flex justify-between items-center md:px-20 lg:px-40 xl:px-64 2xl:px-80">
              <a href="/"><h1 className="text-teal-500 font-origintech text-5xl hover:scale-110 transition-transform lg:text-6xl">W</h1></a>
              
              <div className='text-2xl flex justify-center gap-10 text-gray-600'>
                <a className='hover:text-teal-500' href='mailto:wednesdaygallo@gmail.com?subject=Mail from wednesdaygallo.com'><SiGmail /></a>
                <a className='hover:text-teal-500' href='https://github.com/wednesdaygallo'><AiFillGithub /></a>
                <a className='hover:text-teal-500' href='https://www.linkedin.com/in/wednesday-gallo-065469264/'><AiFillLinkedin /></a>
              </div>
            </nav>
            
          {/* Hero Section */}
          <div className='text-center p-10 bg-gradient-to-b from-black to-gray-900'>
              <h2 className='text-5xl py-2 font-medium tracking-widest font-poppins md:text-6xl lg:text-7xl'>Welcome.</h2>
              <h3 className='text-xl py-2 tracking-tight text-teal-400 md:text-2xl'>My name is Wednesday Gallo</h3>
              <p className='text-md py-5 leading-8 text-gray-300 max-w-lg md:mx-auto lg:text-lg'>I am a fullstack developer who is passionate about making the web beautiful and functional. Taking these amazing tools we have and creating a beautiful internet.</p>
            </div>
            {/* Profile Photo */}
            <div className='bg-gradient-to-b from-pink-600 rounded-full w-80 h-80 mt-20 mx-auto mb-10'>
            </div>
          </section>

          {/* Skills Section  */}
          <section className='px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80'>
            <div>
              <h3 className='text-3xl py-1 text-teal-400 md:text-4xl'>Skills</h3>
              <p className='text-md py-2 leading-8 text-gray-400 lg:text-lg'>A well rounded knowledge of modern web development technologies. I am a quick study and very self motivated to keep up with modern tools and frameworks.</p>
            </div>
            {/* Cards */}
            <div className='lg:flex gap-5'>
              <div className='text-center bg-gray-900 p-10 rounded-xl my-10 border-solid border-2 border-cyan-300 max-w-xl mx-auto '>
                <img src={webdev} alt='web dev icon' className='mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>HTML5/CSS3</h3>
                <p className='py-2'>Strong knowledge of modern HTML and CSS that includes semantic html, flexbox, and grid. Creating powerful, stylized, and accesible layouts with relative ease.</p>
              </div>
              <div  className='text-center bg-gray-900 p-10 rounded-xl my-10 border-solid border-2 border-cyan-300 max-w-xl mx-auto '>
                <img src={react} alt='react icon' className='mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Reactjs</h3>
                <p className='py-2'>Firm grasp of React&apos;s main concepts and programming style including JSX, components, props, and event handling. React has been a main focus from the beginning of my coding journey.</p>
              </div>
              <div  className='text-center bg-gray-900 p-10 rounded-xl my-10 border-solid border-2 border-cyan-300 max-w-xl mx-auto '>
                <img src={eye} alt='eye icon' className='mx-auto' />
                <h3 className='text-lg font-medium pt-8 pb-2'>Eye for Design</h3>
                <p className='py-2'>A background in art not only gives me advantages in design and color but also in seeing the big picture of how one would interact and experience a website or web app.</p>
              </div>
            </div>
          </section>

          {/* Portfolio Sec */}
          <section className='px-10 md:px-20 lg:px-40 xl:px-64 2xl:px-80'>
            <div className='mb-4'>
              <h3 className='text-3xl py-1 text-teal-400 md:text-4xl'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-400'>A sampling of smaller projects to showcase my wide range of knowledge for design and development.</p>
            </div>
            {/* Portfolio Cards */}
            <div className='flex flex-col md:grid grid-cols-2 gap-3 md:gap-10 2xl:grid-cols-3'>
              <figure className='mb-10'>
                <h3 className='text-2xl text-center'>Pokédex</h3>
                <figcaption className='text-pink-500 text-center uppercase mb-2 text-xs'>React, Api connected</figcaption>
                <img src={pokedex} alt='pokedex app screenshot' className='rounded-sm' />
                <div className='text-sm flex justify-center gap-5 mt-2'>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='http://wednesdaygallo.com/pokedex/'>Demo</a>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='https://github.com/wednesdaygallo/pokedex'>Github</a>
                </div>
              </figure>
              <figure className='mb-10'>
                <h3 className='text-2xl text-center'>Real-time Chat</h3>
                <figcaption className='text-pink-500 text-center uppercase mb-2 text-xs'>React, Socket.io</figcaption>
                <img src={chat} alt='chat app screenshot' className='rounded-sm' />
                <div className='text-sm flex justify-center gap-5 mt-2'>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='http://wednesdaygallo.com/chat-app/'>Demo</a>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='https://github.com/wednesdaygallo/chat-app'>Github</a>
                </div>
              </figure>
              <figure className='mb-10'>
                <h3 className='text-2xl text-center'>Todo List</h3>
                <figcaption className='text-pink-500 text-center uppercase mb-2 text-xs'>React</figcaption>
                <img src={todo} alt='todo app screenshot' className='rounded-sm' />
                <div className='text-sm flex justify-center gap-5 mt-2'>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='http://wednesdaygallo.com/todo/'>Demo</a>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='https://github.com/wednesdaygallo/todo-app'>Github</a>
                </div>
              </figure>
              <figure className='mb-10'>
                <h3 className='text-2xl text-center'>Clone Site</h3>
                <figcaption className='text-pink-500 text-center uppercase mb-2 text-xs'>html/css</figcaption>
                <img src={clone} alt='website screenshot' className='rounded-sm' />
                <div className='text-sm flex justify-center gap-5 mt-2'>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='http://wednesdaygallo.com/clone-site/'>Demo</a>
                  <a className='bg-gray-600 px-2 py-0.5 rounded-md hover:bg-teal-600' href='https://github.com/wednesdaygallo/clone-site'>Github</a>
                </div>
              </figure>
            </div>
          </section>
      </main>

      <footer className='h-14 bg-gray-900 mt-10 px-5 py-2 text-white flex justify-between items-center md:px-12 lg:px-14 2xl:px-40'>
          <p className='flex items-center'><AiOutlineCopyrightCircle/> 2023, Wednesday Gallo</p>
          <p>Built with <a href="https://www.gatsbyjs.com">Gatsby</a></p>
        </footer>
    </div>
  )
}
