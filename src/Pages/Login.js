import React from 'react'
import "../Styles/Login.css"
import {Link} from 'react-router-dom';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

function Login_page(){
    return (
    <div className='Login'>
        <div className='logintext'>
            <h1>Manage your time</h1>
            <h2>Creating task with calendar</h2>
            <h3>More productivity</h3>
        </div>
        <div className='LoginBox'>
            <h1>Login</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Username</label>
                <input type='text' name='username' placeholder='username'></input>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' placeholder='password'></input>
                <button className='Loginbtn'> Login </button>
            </form >
            <p>Don't have acount yet?</p>
            <Link to="/register">
            <button className='Registbtn'> Register </button>
            </Link>
        </div>
    </div>
    );
}
export default Login_page