import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/HelloWorld';
import HelloWorld from "./components/HelloWorld";
import List from "./components/List";


const avengers = [
  'Captain America',
  'Iron Man',
  'Black Widow',
  'Thor',
  'Hawkeye'
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <HelloWorld />
          <List data={avengers} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
