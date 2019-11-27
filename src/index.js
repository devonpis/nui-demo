import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, globalTheme } from 'clui-ui';
import App from './App';
import myTheme from './globalTheme';

// ReactDOM.render(<App />, document.getElementById('root'));
export const init = (config) => {
    ReactDOM.render(
      (        
        <ThemeProvider theme={myTheme(globalTheme, config.theme)}>
          <App config={config} />
        </ThemeProvider>
      ), 
      document.querySelector(config.selector || "")
    );
}