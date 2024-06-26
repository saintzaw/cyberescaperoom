import React, { useState } from 'react';
import axios from 'axios';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './Dashboard.css';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const botResponse = await getBotResponse(input);
    const botMessage = { sender: 'bot', text: botResponse };
    setMessages([...messages, userMessage, botMessage]);
    
    setInput('');
  };

  const getBotResponse = async (input) => {
    const api_key = '';
    const api_url = 'https://api.openai.com/v1/chat/completions';
    
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }],
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1
    };

    try {
      const response = await axios.post(api_url, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${api_key}`
        }
      });
      
      const botMessage = response.data.choices[0].message.content;
      return botMessage;
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return "I'm sorry, I don't understand that.";
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    // For example, clearing user session data, redirecting to login page, etc.
    window.location.href = '/login'; // Redirect to login page
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
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
        <h1>KrasnoAI</h1>
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                {message.sender === 'bot' ? (
                  <Typist avgTypingDelay={10} stdTypingDelay={5} cursor={{ show: false }}>
                    {message.text}
                  </Typist>
                ) : (
                  message.text
                )}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
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
