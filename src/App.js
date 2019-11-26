import React from 'react';
import './App.css';
import { Button } from 'clui-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Button 
          variant="contained"
          color="primary"
        >
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
