import React from 'react'
import './Loginform.css';
import { FaRegUserCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

function Loginform() {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
          <FaRegUserCircle className='icon'/>

        </div>
        <div className='input-box'>
          <input type='Password' placeholder='Password' required />
          <CiLock className='icon' />

        </div>
        <div className="remember-forgot">
          <label><input type = 'checkbox'/>Remember me</label>
          <a href='#'>Forgot Password?</a>
          </div>
          <button type='submit'>Login</button>
          <div className="registerlink">
            <p>Don't have an account<a href='#'>Register</a></p>
          </div>
        
      </form>
      
    </div>
  )
}

export default Loginform
