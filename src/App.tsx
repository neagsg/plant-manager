import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { UserIdentification } from './screens/UserIdentification';

// import { Welcome } from './screens/Welcome';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Welcome /> */}
      <UserIdentification />
    </ThemeProvider>
  );
};

export default App;
