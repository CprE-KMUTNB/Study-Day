import React from 'react'
import '../Styles/regist_s.css'
import {Link} from 'react-router-dom';
import manbun from '../img/Group 4.svg';


function regist_suc() {
  return (
    <div className='container'>
        <h1>Congratulation</h1>
        <ul>
          <li>Create your plan and reminder</li>
        </ul>
        <Link to="/login">
          <button>Let's get started</button>
        </Link>
        <img src={manbun} />
    </div>
  )
}

export default regist_suc