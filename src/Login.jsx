import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <div className="login-container">
        <h2 className='log'>Login</h2>
        <form id="login-form">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button type="submit">Login</button>
            <button type="submit" className='mt-2'> <Link style={{textDecoration:'none', color:'white'}}  to="/signup" >Signup</Link></button>
        </form>
    </div>
    </>
  )
}
