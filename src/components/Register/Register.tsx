import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="registration-container">
      <form className="registration-form">
        <h2>Create an Account to Book Your Favorite Movies</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register