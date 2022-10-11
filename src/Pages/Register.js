import React , {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import "../Styles/Regist.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Register_page(){
    const navigate=useNavigate()

    const MySwal = withReactContent(Swal)

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
  }

    const handleSubmit = (event) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "name": inputs.name,
          "surname": inputs.surname,
          "email": inputs.email,
          "password": inputs.password,
          "username": inputs.username
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://127.0.0.1:8000/api/register", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if (result.id) {
                navigate('/regist_complete')
            }
            else {
              MySwal.fire({
                  html: <i>{result.email}</i>,
                  icon: 'error'
                })
          }
        
        })
          .catch(error => console.log('error', error));
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

                    <label htmlFor="surname">surname</label>

                    <input 
                    type="text" 
                    name="surname" 
                    placeholder='surname'
                    value={inputs.surname || ""} 
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