import React from 'react';
import AppState from './context/background/AppState';

import Wallet from './containers/Wallet';

const App = () => {
  return (
    <AppState>
      <Wallet />
    </AppState>
  );
};

export default App;
