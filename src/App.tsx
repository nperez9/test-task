import React from 'react';
import AppState from './context/background/AppState';

import TransactionList from './components/TransactionsList/TransactionsList';

const App = () => {
  return (
    <AppState>
      <TransactionList />
    </AppState>
  );
};

export default App;
