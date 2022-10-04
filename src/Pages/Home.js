import React from 'react'
import decoration from '../img/Group 37.svg';
import '../Styles/Home.css'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <div className='headerContainer'>
        <h1>Create your Productivity</h1>
        <p>Manage your time just a simple click</p>
        <Link to="/login">
        <button className='Joinbtn'> Join now </button>
        </Link>
      </div>
      <div className='imgdec'>
        <img src={decoration} />
      </div>
    </div>
    
  )
}

export default Home
