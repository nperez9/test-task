import React, { useContext, useState } from 'react';

import { Steps } from './Wallet.types';
import AppContext from '../context/background/AppContext';

import SendMoneyHeader from '../components/SendMoneyHeader/SendMoneyHeader';
import SendForm from '../components/SendForm/SendForm';
import SendFooter from '../components/SendFooter/SendFooter';

const SendMoney = () => {
	const { state, addTransaction, setStep } = useContext(AppContext);

	const [amount, setAmount] = useState<number>(0);
	const [recipent, setRecipient] = useState<string>('');
	const [errorMessage, setErrorMesage] = useState<string>(''); 

	const cancelHandler = () => {
		setStep(Steps.RESUME);
	}

	const validateInputs = (): string => {
		let error = '';
		if (!amount) {
			error = 'You must complete the amount';
		}
		if (!recipent) {
			error = 'You must complete Recipent';
		}
		return error;
	}

	const doneHandler = async () => {
		const { transactions } = state;
		const validation = validateInputs();

		if (validation) {
			setErrorMesage(validation);
			return;
		}

		await addTransaction({
			value: amount,
			date: new Date().toISOString(),
			id: transactions[transactions.length -1 ].id + 1,
			to: recipent,
			from: '1123023'
		});
		console.log('state', state);
		setStep(Steps.DONE);
	}

  return (
		<>
			<SendMoneyHeader cancelHandler={cancelHandler} />
			<SendForm updateAmount={setAmount} updateRecipent={setRecipient} errorMessage={errorMessage} />
			<SendFooter  cancelHandler={cancelHandler} doneHandler={doneHandler} />
		</>
	);
};

export default SendMoney;