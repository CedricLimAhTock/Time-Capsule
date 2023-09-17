import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './style/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
      e.preventDefault();
      
      try {
        const response = await axios.post('http://localhost:5555/signup', {
         username,
         password
        });

        navigate("/login")
        console.log(response.message)
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className="login-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-element'>
          <input 
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        <div className='form-element'>
          <input
            type='password'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-element'>
          <input
            type='submit'
            value= 'Sign up'
          />
          <Link to="/login">Have an account? Log in here</Link>
        </div>
        </div>
      </form>
    </div>
  )
}
export default Login