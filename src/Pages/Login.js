import React , {useState} from 'react'
import "../Styles/Login.css"
import {Link,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Login_page(){
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
        myHeaders.append("Cookie", "jwt=token");

        var raw = JSON.stringify({
        "password": inputs.password,
        "email": inputs.email
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/login", requestOptions)
        .then(response => response.json())

        .then(result => {
            console.log(result)
            if (result.jwt) {
                MySwal.fire({
                    html: <i>You have logged in!</i>,
                    icon: 'success'
                  }).then((value) => {
                localStorage.setItem('token',result.jwt)
                localStorage.setItem('username',result.username)
                navigate('/main')
                })

            }
            else {
                MySwal.fire({
                    html: <i>Username or passsword is incorrect!</i>,
                    icon: 'error'
                  })
            }
        
        })
        .catch(error => console.log('error', error));
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
                <label htmlFor="email">email</label>
                <input 
                    type="text" 
                    name="email" 
                    placeholder='email'
                    value={inputs.email || ""} 
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