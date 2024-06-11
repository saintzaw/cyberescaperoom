// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:3001/users?username=${username}`);
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="App">
      <h1>Krasno AI SQLi Demo</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.password}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
