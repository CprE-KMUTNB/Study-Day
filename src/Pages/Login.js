import React from 'react'
import "../Styles/Login.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
function Login_page(){
    return (
    <div className='Login'>
        <div className='logintext'>
            <h1>Manage your time</h1>
            <h2>Creating task with calendar</h2>
            <h3>More productivity</h3>
            <div className='Checked1'><CheckBoxOutlinedIcon /></div>
            <div className='Checked2'><CheckBoxOutlinedIcon /></div>
            <div className='Checked3'><CheckBoxOutlinedIcon /></div>
        </div>
        <div className='LoginBox'>
            <h1>Login</h1>
            <h2>Username</h2>
            <h3>Password</h3>
            <form>
                <input type='text' name='username' placeholder='username'></input>
                <input type='password' name='password' placeholder='password'></input>
                <button className='Loginbtn'> Login </button>
            </form>
            <button className='Register'> Register </button>
        </div>
    </div>
    )
}
export default Login_page