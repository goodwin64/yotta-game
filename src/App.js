import React from 'react';
import './App.css';
import { GameField } from './components/GameField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" />
        <h1>Yotta game is now online!</h1>
        <a
          className="App-link"
          href="https://desktopgames.com.ua/iota.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
      <GameField/>
    </div>
  );
}

export default App;
