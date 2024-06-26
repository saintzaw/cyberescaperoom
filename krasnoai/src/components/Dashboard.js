// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
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
            <li><button>Log out</button></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>ChatGPT</h1>
        <div className="features">
          <div className="feature">
            <h2>Examples</h2>
            <ul>
              <li>“Explain quantum computing in simple terms” →</li>
              <li>“Got any creative ideas for a 10 year old’s birthday?” →</li>
              <li>“How do I make an HTTP request in Javascript?” →</li>
            </ul>
          </div>
          <div className="feature">
            <h2>Capabilities</h2>
            <ul>
              <li>Remembers what user said earlier in the conversation</li>
              <li>Allows user to provide follow-up corrections</li>
              <li>Trained to decline inappropriate requests</li>
            </ul>
          </div>
          <div className="feature">
            <h2>Limitations</h2>
            <ul>
              <li>May occasionally generate incorrect information</li>
              <li>May occasionally produce harmful instructions or biased content</li>
              <li>Limited knowledge of world and events after 2021</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
