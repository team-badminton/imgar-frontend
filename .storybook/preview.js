import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import { defaultTheme } from '@/theme/themes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux';

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
    <ReduxProvider store={store}>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Route path="*">
            <Story />
          </Route>
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  ),
];
