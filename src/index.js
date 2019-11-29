import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider, globalTheme } from 'clui-ui';
import App from './App';
import myTheme from './globalTheme';

// ReactDOM.render(<App />, document.getElementById('root'));

export const init = (config) => {
    ReactDOM.render(
      (        
        <ThemeProvider theme={myTheme(globalTheme, config.theme)}>
          <CookiesProvider>
            <App config={config} />
          </CookiesProvider>
        </ThemeProvider>
      ), 
      document.querySelector(config.selector || "")
    );
}

let globalObject = window[window['NuiPlayer']];
if (globalObject) {
  let queue = globalObject.q;
  if (queue) {
      for (var i = 0; i < queue.length; i++) {
          if (queue[i][0].toLowerCase() === 'init') {
            init(queue[i][1]);
          }
      }
  }
}