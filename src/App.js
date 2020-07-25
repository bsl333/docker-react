import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const techUsed = ['node', 'docker', 'travis', 'aws'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ paddingTop: '20px' }}> Powered By: </div>
        <ul style={{ textAlign: 'left' }}>
          {techUsed.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
