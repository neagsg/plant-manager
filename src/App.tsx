import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Welcome } from './screens/Welcome';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
