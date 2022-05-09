// TODO: obtain this from an API
const exchangeValue = 2500;

/**
 * Returns the eth amount in dollars 
 * @param int ethAmount
 * @returns int
 */
export const dolarAmount = (ethAmount: number): number => {
	return ethAmount * exchangeValue;
};