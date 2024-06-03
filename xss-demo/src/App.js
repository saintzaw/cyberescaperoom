import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Krasno AI Tool Search</h1>
        <form>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
        </form>
        {/*xss payload: <img src="x" onerror="alert('XSS')" />*/}
        <p>Search Results for: <span dangerouslySetInnerHTML={{ __html: query }} /></p>
      </header>
    </div>
  );
}

export default App;

