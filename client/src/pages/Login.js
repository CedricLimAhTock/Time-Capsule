import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5555/login', {
        username,
        password
      });

      const { token } = response.data; 
      if (token) {
        localStorage.setItem('jwtToken', token);
        console.log('Successfully logged in');

        window.location.href = '/timeline';
      } else {
        console.log('Token is undefined in the response');
      }
    } catch (err) {
      console.log(err);
    }
}

  return (
    <div className="login-container">
      <h2>Login</h2>
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
            value= 'Log In'
          />
          <Link to="/signup">Don't have an account? Sign up here</Link>
        </div>
        </div>
      </form>
    </div>
  )
}
export default Login