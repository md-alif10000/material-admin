
import './login.css'
import React from 'react'
import NewUser from '../newUser/NewUser'
export default function Login() {
    return (
      <div className="login">
        <div className="loginWrapper">
          <h1 className="loginTitle">Login</h1>
          <form action="" className="loginForm">
            <div className="loginUserItem">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="loginUserItem">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="password" />
            </div>

            <div className="loginUserItem">
              <button className="loginUserButton">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
}
