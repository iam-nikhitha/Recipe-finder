import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Correct usage of useNavigate

  Axios.defaults.withCredentials = true; // Allow cookies to be included in requests
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Axios.post("http://localhost:3000/auth/Login", { // Assuming this is the correct login endpoint
      email,
      password
    })
    .then(response => {
      if (response.data.status) {
        navigate('/cook.io/index.html');  // Navigate to cook.io on successful login
      } else {
        alert(response.data.message); // Show an error message if login fails
      }
    })
    .catch(err => {
      console.log(err);  // Log any errors from the request
    });
  };

  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Login Recipe Finder</h2>

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          autoComplete='off'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} 
          value={email} // Add value to bind the input
        />

        <label htmlFor='password'>Password:</label>
        <input 
          type='password' 
          placeholder='******'
          onChange={(e) => setPassword(e.target.value)} 
          value={password} // Add value to bind the input
        />

        <button type='submit'>Login Recipe Finder </button>
        <Link to="/ForgotPassword"> Forgot Password?</Link>
        <p>
          Don't have an Account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
