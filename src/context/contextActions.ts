import { Steps } from "../containers/Wallet.types";
import { Transaction } from "../services/TransactionsService";
import { IAppState } from "./background/AppState";

enum Actions {
  SET_TRANSACTIONS = 'SET_TRANSACTIONS',
  SET_STATE = 'SET_STATE',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  SET_STEP = 'SET_STEP',
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTIONS
  payload: Transaction[]
}

export interface SetStateAction {
  type: Actions.SET_STATE
  payload: Partial<IAppState>
}

export interface SetStepAction {
  type: Actions.SET_STEP
  payload: Steps,
}

export default Actions;
