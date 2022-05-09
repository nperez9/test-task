import React, { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import Actions from '../contextActions';
import { Transaction, TransactionsService } from '../../services/TransactionsService';
import { Steps } from '../../containers/Wallet.types';
import { initAppState } from './AppDefaultState';

export interface IAppState {
  transactions: Array<Transaction>;
  step: Steps;
}

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);
  const transactionService = new TransactionsService(initAppState);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };
  
  // TODO: Complete the addTransaction method
  const addTransaction = async (transaction: Transaction) => {  
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: [...state.transactions, transaction]
    });
    return await transactionService.addTransaction(transaction);
  }

  const getTransactions = async () => {
    const transactions = await transactionService.getListOfTransactions();
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: transactions,
    });
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
        getTransactions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
