import React, { useState } from 'react'
import './Register.css'
const Register = () => {

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
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("working");
  }


  return (
    <div className="registration-container">
      <form className="registration-form">
        <h2>Create an Account to Book Your Favorite Movies</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default Register