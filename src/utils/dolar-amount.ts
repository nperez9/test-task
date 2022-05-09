// TODO: obtain this from an API
import TransactionData from './constants';
const exchangeValue = TransactionData.ethPrice;

/**
 * Returns the eth amount in dollars 
 * @param int ethAmount
 * @returns int
 */
export const dolarAmount = (ethAmount: number): number => {
	return ethAmount * exchangeValue;
};