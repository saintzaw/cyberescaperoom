// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'agent' && password === 'ilovekrasno123') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src="/cia-logo.png" alt="CIA Logo" />
        </div>
        <h2>KrasnoAI Login</h2>
        <h3>For agents of Krasnovia</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Agent ID</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="login-footer">
          You are entering a secured Krasnovia Government system, which may be used only for authorized purposes. Modification of any information on this system is subject to a criminal prosecution. The agency monitors all usage of this system. ALL persons are hereby notified that use of this system constitutes consent to such monitoring and audition.
        </p>
      </div>
      <div style={{ display: 'none' }}>
        {/* Hardcoded credentials: username: admin, password: ilovekrasno123 */}
        <p>Try me: ilovekrasno123</p>
      </div>
    </div>
  );
};

export default Login;