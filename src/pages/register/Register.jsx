
import './register.css'

import React from 'react'

export default function Register() {
    return (
      <div className="register">
        <div className="registerWrapper">
          <div className="newUser">
            <h1 className="newUserTitle">Register</h1>
            <form action="" className="newUserForm">
              <div className="newUserItem">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="full name" />
              </div>
              <div className="newUserItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="username" />
              </div>
              <div className="newUserItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="full name" />
              </div>
              <div className="newUserItem">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="newUserItem">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" />
              </div>
              <div className="newUserItem">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="phone-number" />
              </div>

              <div className="newUserItem">
                <label htmlFor="">Gender</label>
                <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="female" value="male" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="newUserItem">
                <label htmlFor="">Active</label>
                <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="newUserItem">
                <button className="newUserButton">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
