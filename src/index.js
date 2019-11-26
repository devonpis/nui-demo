import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
export const init = (config) => {
    ReactDOM.render(
      <App config={config} />, 
      document.querySelector(config.selector || "")
    );
}