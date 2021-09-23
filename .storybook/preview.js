import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import { defaultTheme } from '../src/theme/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Route path="/" component={Story} />
      </ThemeProvider>
    </Router>
  ),
];
