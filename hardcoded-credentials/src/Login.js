// src/Login.js

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hard-coded credentials
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'ilovekrasno123';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
      console.log('Login successful!');
      setError('');
      // Redirect or show success message
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Krasno AI</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div style={{ display: 'none' }}>
        {/* Hardcoded credentials: username: admin, password: ilovekrasno123 */}
        <p>Try me: ilovekrasno123</p>
      </div>
    </div>
  );
};

export default Login;
