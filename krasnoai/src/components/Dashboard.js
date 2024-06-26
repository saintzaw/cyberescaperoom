// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const botResponse = getBotResponse(input);
    const botMessage = { sender: 'bot', text: botResponse };
    setMessages([...messages, userMessage, botMessage]);
    
    setInput('');
  };

  const getBotResponse = (input) => {
    const responses = {
      'Explain quantum computing in simple terms': 'Quantum computing is a type of computing that takes advantage of the strange ability of subatomic particles to exist in more than one state at any time.',
      'Got any creative ideas for a 10 year old’s birthday?': 'How about a treasure hunt, a science-themed party, or an outdoor adventure?',
      'How do I make an HTTP request in Javascript?': 'You can use the Fetch API or XMLHttpRequest for making HTTP requests in JavaScript.'
    };

    return responses[input] || "I'm sorry, I don't understand that.";
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    // For example, clearing user session data, redirecting to login page, etc.
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <button className="new-chat-btn">+ New chat</button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><button>Upgrade to Plus <span className="new-badge">NEW</span></button></li>
            <li><button>Dark mode</button></li>
            <li><button>Updates & FAQ</button></li>
            <li><button onClick={handleLogout}>Log out</button></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>ChatGPT</h1>
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
