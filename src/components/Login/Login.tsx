import React, { useState } from 'react'
//import axios from 'axios';
import './Login.css'

const Login = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  console.log(formData);
  const handleChange = (e:any) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    console.log(formData)

  };


  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Please Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" >Login</button>
      </form>
    </div>
  )
}


export default Login