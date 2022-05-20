import Actions, { SetStateAction, SetStepAction, SetTransactionAction } from '../contextActions';
import { IAppState } from './AppState';

type AppAction = SetTransactionAction | SetStateAction | SetStepAction;

const appReducer = (
  state: IAppState,
  action: AppAction
): IAppState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case Actions.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
