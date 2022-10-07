import React , {useState} from 'react';
import Logo from '../img/Logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Styles/Navbar.css'


function Navbar() {

    const [openLinks, setOpenLinks]=useState(false);
    const toggleNavbar =() =>{
      setOpenLinks(!openLinks);
    };
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ?"open" : "close"}>
          <Link to='/'>
          <img src={Logo} />
          </Link>
          <div className='hiddenLinks'>
            <Link to='/'> Home</Link>
            <Link to='/about'> About us</Link>
            <Link to='/login'> Login</Link>
          </div>
        </div>
        <div className='rightSide'>
          <Link to='/'> Home</Link>
          <Link to='/about'> About us</Link>
          <Link to='/login'> Login</Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon />
          </button>
          
        </div>
    </div>
  );
}

export default Navbar