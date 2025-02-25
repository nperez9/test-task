import { BaseService } from './infrastructure/BaseService';

/**
 * The transaction object
 * Value is of type `number` for simplification
 */
export interface Transaction {
  id: number;
  to: string;
  from: string;
  value: number;
  date: string;
}

export interface TransactionsServiceState {
  transactions: Array<Transaction>;
}

/**
 * TransacionsService class
 * TODO: Complete the addTransaction and the getListOfTransactions methods
 */
export class TransactionsService extends BaseService<TransactionsServiceState> {
  constructor(initialState: TransactionsServiceState) {
    super(
      initialState || {
        transactions: [],
      },
    );
  }

  /**
   * It adds a transaction to the list
   * TODO: Complete addTransaction code inside the Promise resolve function
   */
  public async addTransaction(newTransaction: Transaction): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const { transactions } = this.getState();
        this.updateState({ transactions: [...transactions, newTransaction] });
        resolve();
      }, 300);
    });
  }

  /**
   * It returns the list of transactions
   * TODO: Return the list via the promise resolve function
   */
  public async getListOfTransactions(): Promise<Array<Transaction>> {
    return new Promise<Array<Transaction>>((resolve) => {
      setTimeout(() => {
        const { transactions } = this.getState();
        resolve(transactions);
      }, 300);
    });
  }

  private SetTransactions(): void {

  }
}
