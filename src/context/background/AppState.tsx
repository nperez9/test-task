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
    await transactionService.addTransaction(transaction);
    const transactions = await transactionService.getListOfTransactions();
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: transactions
    });
    console.log(transactions);
  }

  const getTransactions = async () => {
    const transactions = await transactionService.getListOfTransactions();
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: transactions,
    });
  }

  const setStep = (step: Steps) => {
    dispatch({
      type: Actions.SET_STEP,
      payload: step
    });
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
        getTransactions,
        setStep
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
