import React, { useContext, useState } from 'react';
import Container from '../library/Container';
import AppContext from '../context/background/AppContext';
import { Steps } from './Wallet.types';

const SendMoney = () => {
	const { state, setState, addTransaction } = useContext(AppContext);

	const [amount, setAmount] = useState<number>(0);
	const [recipent, setRecipient] = useState<string>('');
	const [errorMessage, setErrorMesage] = useState<string>(''); 

	const cancelHandler = () => {
		setState({...state, step: Steps.RESUME});
	}

	const doneHandler = async () => {
		const { transactions } = state;

		await addTransaction({
			value: amount,
			date: new Date().toISOString(),
			id: transactions[transactions.length -1 ].id + 1,
			to: recipent,
			from: '1123023'
		});
		console.log(state);
		setState({...state, step: Steps.DONE});
	}

  return (
		<Container>
			<header>
				<span>Send money</span>
			</header>
			<div>
				<div>
					<label htmlFor="amount">Amount</label>
					<input type="number" name="amount" placeholder="0.00" required/>
				</div>
				<div>
					<label htmlFor="recipent">Add Recipient</label>
					<input type="text" name="recipent" placeholder="Public Recipient" required/>
				</div>
				<div>
					<button onClick={() => {cancelHandler()}}>Cancel</button>
					<button onClick={() => {doneHandler()}}>Done</button>
				</div>
			</div>
		</Container>
	);
};

export default SendMoney;