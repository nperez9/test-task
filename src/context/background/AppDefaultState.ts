import { Steps } from '../../containers/Wallet.types';
import { Transaction } from '../../services/TransactionsService';
import TransactionData from '../../utils/constants';
import { IAppState } from './AppState';

const defaultTransactions = (): Array<Transaction> => {
    return Object.keys(TransactionData.pastTransactions).map((key: string, index: number) => {
    // @ts-ignore
    const trs = TransactionData.pastTransactions[parseInt(key)];
    return {
      id: index,
      from: TransactionData.publicAddress,
      to: trs.recipient,
      date: trs.date,
      value: parseInt(trs.amount)
    };
  });
};

export const initAppState: IAppState = {
  transactions: defaultTransactions(),
  step: Steps.RESUME,
};