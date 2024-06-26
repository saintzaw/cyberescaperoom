import React, { useState } from 'react';
import axios from 'axios';
URL = 'http://localhost:3001/users/getdetails';

const App = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [chatDetails, setChatDetails] = useState(null);

  const handleCheck = async () => {
    try {
      const response = await axios.post(URL, {
        query,
      });

      setChatDetails(response.data);
      setError('');
    } catch (err) {
      setChatDetails(null);
      setError('No matching messages found!');
    }
  };

  const darkTheme = {
    container: {
      width: '100%',
      height: '800px',
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#222',
      color: '#ffff',
    },
    userDetails: {
      marginTop: '20px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
    },
    inputContainer: {
      marginBottom: '15px',
      width: '400px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
      backgroundColor: '#333',
      color: '#fff',
      border: '1px solid #555',
    },
    buttonContainer: {
      margin: '15px 0',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      cursor: 'pointer',
      border: 'none',
      width: '200px',
    },
    errorContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px',
    },
    error: {
      color: 'red',
    },
    table: {
      width: '80%',
      margin: 'auto',
      borderCollapse: 'collapse',
      marginTop: '20px',
      border: '1px solid #555',
      alignItems: 'center',
      color: '#fff',
    },
    th: {
      background: '#4CAF50',
      color: 'white',
      padding: '12px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #555',
      padding: '12px',
      textAlign: 'left',
    },
    oddRow: {
      background: '#333',
    },
    evenRow: {
      background: '#444',
    },
  };

  return (
    <div style={darkTheme.container}>
      <h1 style={darkTheme.header}>Krasno SQL Injection</h1>
      <h2 style={darkTheme.header}>always true</h2>
      <div style={darkTheme.inputContainer}>
        <label style={darkTheme.label}>Query:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={darkTheme.input}
        />
      </div>
      <div style={darkTheme.buttonContainer}>
        <button style={darkTheme.button} onClick={handleCheck}>
          Get Chat Details
        </button>
      </div>
      {error && (
        <div style={darkTheme.errorContainer}>
          <p style={darkTheme.error}>{error}</p>
        </div>
      )}
      {chatDetails && (
        <div style={darkTheme.userDetails}>
          <h2>Chat Details</h2>
          <table style={darkTheme.table}>
            <thead>
              <tr>
                <th style={darkTheme.th}>ID</th>
                <th style={darkTheme.th}>Agent</th>
                <th style={darkTheme.th}>Message</th>
              </tr>
            </thead>
            <tbody>
              {chatDetails.map((chat, index) => (
                <tr key={chat.ID} style={index % 2 === 0 ? darkTheme.evenRow : darkTheme.oddRow}>
                  <td style={darkTheme.td}>{chat.ID}</td>
                  <td style={darkTheme.td}>{chat.Agent}</td>
                  <td style={darkTheme.td}>{chat.Message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
