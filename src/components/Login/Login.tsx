import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useAuth } from '../../AuthContext';



const Login = () => {
  const { login } = useAuth();
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });

  console.log(formData);

  const navigate = useNavigate();

  const handleChange = (e:any) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    console.log(formData)

  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8080/api/v1/users/login',formData);

      console.log(response.data);
      login();

      window.localStorage.setItem("isLoggedIn",String(true));
      navigate('/');
    } catch(error:any){
      console.log('Login failed',error.message);
    }
  }


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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