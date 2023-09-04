import React, { useState } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import './style/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => { 
      e.preventDefault();
      
      try {
        //const response = await axios.post('/api/signup', {
        //  username,
        //  password
        //});

        // If successfully logged in, redirect to the explore page
        // const { jwtToken } = response.data;         // Receive the token from the response
        // localStorage.setItem('jwtToken', jwtToken); // Store the token in local storage

        // console.log('Successfully logged in');
        // Redirect to the explore page
        //  window.location.href = '/explore';

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