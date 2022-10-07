import React from 'react'
import decoration from '../img/Group 37.svg';
import '../Styles/Home.css'
import {Link} from 'react-router-dom';
import { WrapText } from '@mui/icons-material';

function Home() {
  return (
    <div className='home'>
        <div className='imgdec'>
          <img src={decoration} />
        </div>
        <div className='headerContainer'>
          
          <h1>Create your Productivity</h1>
          <h2>Manage your time just a simple click</h2>
          
          <Link to="/login">
          <button className='Joinbtn'> Join now </button>
          </Link>
        </div>
    </div>
  );
}

export default Home
