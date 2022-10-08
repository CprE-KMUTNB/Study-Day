import React from 'react'
import {Link} from 'react-router-dom';
import "../Styles/Regist.css"
function Register_page(){
    return (
        <div className='Regist'>
            <div className='RegistBox'>
                <h1>Register</h1>
                <form id="regist-form" method="POST">
                    <label htmlFor="name">Name</label>
                    <input type='text' name='Name' placeholder='Name'></input>
                    <label htmlFor="lastname">Last name</label>
                    <input type='text' name='Last name' placeholder='Last name'></input>
                    <label htmlFor="Email">Email</label>
                    <input type='text' name='Email' placeholder='Email'></input>
                    <label htmlFor="Username">Username</label>
                    <input type='text' name='Username' placeholder='Username'></input>
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' placeholder='password'></input>
                    <button className='Registbtn'> Register </button>
                </form >
            </div>
        </div>
    );
}
export default Register_page