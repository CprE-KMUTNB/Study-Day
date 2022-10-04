import React from 'react';
import Logo from '../img/Logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <img src={Logo} />
        </div>
        <div className='rightSide'>
          <Link to='/'> Home</Link>
          <Link to='/about'> About us</Link>
          <Link to='/login'> Login</Link>
          <button>
          <ReorderIcon />
          </button>
          
        </div>
    </div>
  )
}

export default Navbar