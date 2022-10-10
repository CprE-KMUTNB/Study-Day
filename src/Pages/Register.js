import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import "../Styles/Regist.css"
function Register_page(){

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
        <div className='Regist'>
            <div className='RegistBox'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">Name</label>
                    
                    <input 
                    type="text" 
                    name="name" 
                    placeholder='name'
                    value={inputs.name || ""} 
                    onChange={handleChange}/>

                    <label htmlFor="lastname">Last name</label>

                    <input 
                    type="text" 
                    name="lastname" 
                    placeholder='lastname'
                    value={inputs.lastname || ""} 
                    onChange={handleChange}/>

                    <label htmlFor="Email">Email</label>

                    <input 
                    type="text" 
                    name="email" 
                    placeholder='email'
                    value={inputs.email || ""} 
                    onChange={handleChange}/>

                    <label htmlFor="Username">Username</label>

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
                    <button className='Registbtn'> Register </button>
                </form >
            </div>
        </div>
    );
}
export default Register_page