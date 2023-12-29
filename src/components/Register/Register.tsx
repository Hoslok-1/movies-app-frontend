import React, { useState } from 'react'
import axios from 'axios';
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

  const [errorRegister,setErrorRegister] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await axios({
        method:'post',
        url:'http://localhost:8080/api/v1/users/add',
        data:formData
      });
      setErrorRegister(false)
      resetFields();
    } catch(e:any){

      if(e.response.status === 400){
        console.log("email already in use");
      } else {
        console.log("unexpected error")
      }
      setErrorRegister(true)
    }

  }

  const resetFields = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

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
        {errorRegister ? <p>Error!, Email already in use!</p> : <p></p>}
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default Register