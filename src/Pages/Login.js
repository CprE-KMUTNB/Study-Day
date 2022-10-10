import React , {useState} from 'react'
import "../Styles/Login.css"
import "../Styles/Login.css"
import {Link} from 'react-router-dom';

function Login_page(){

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }


    return (
    <div className='Login'>
        <div className='logintext'>
            <h1>Manage your time</h1>
            <h2>Creating task with calendar</h2>
            <h3>More productivity</h3>
        </div>
        <div className='LoginBox'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder='username'
                    value={inputs.username || ""} 
                    onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder='password'
                    value={inputs.password || ""} 
                    onChange={handleChange}/>

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