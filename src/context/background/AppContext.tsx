import { createContext } from 'react';
import { Steps } from '../../containers/Wallet.types';
import { Transaction } from '../../services/TransactionsService';
import { initAppState } from './AppDefaultState';
import { IAppState } from './AppState';


type ContextType = {
  state: IAppState,
  addTransaction: (transaction: Transaction) => void
  setState: (state: IAppState) => void
  getTransactions: () => void,
  setStep: (step: Steps) => void
}

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
  getTransactions: () => {},
  setStep: () => {},
});

export default AppContext;
