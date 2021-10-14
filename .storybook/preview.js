import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import { defaultTheme } from '@/theme/themes';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'backgroundGray',
    values: [
      {
        name: 'backgroundGray',
        value: `#2e3035`,
      },
      {
        name: 'backgroundNavy',
        value: `#061234`,
      },
    ],
  },
};

export const decorators = [
  Story => {
    return (
      <ReduxProvider store={store}>
        <Router>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Route path="/">
              <Story />
            </Route>
          </ThemeProvider>
        </Router>
      </ReduxProvider>
    );
  },
];
