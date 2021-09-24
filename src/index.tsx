import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App';
import { store } from './redux';
import GlobalStyle from './styles/GlobalStyle';
import { defaultTheme } from './theme/themes';

ReactDOM.render(
  <>
    <React.StrictMode>
      <ReduxProvider store={store}>
        <Router>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </Router>
      </ReduxProvider>
    </React.StrictMode>
  </>,
  document.getElementById('root'),
);
