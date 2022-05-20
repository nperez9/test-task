import React, { useContext, useEffect } from 'react';

import ResumeCard from '../components/ResumeCard/ResumeCard';
import TransactionItem from '../components/TransactionItem/TransactionItem';
import ResumeHeader from '../components/ResumeHeader/ResumeHeader';
import AppContext from '../context/background/AppContext';
import TransactionData from '../utils/constants'

import Container from '../library/Container';
import { Steps } from './Wallet.types';

const Resume = () => {
  const { state: { transactions }, setState, getTransactions } = useContext(AppContext);

  useEffect(() => {
    if (!transactions.length) {
      getTransactions();
    }
  }, []);

	const sendHandler = () => {
		setState({ transactions, step: Steps.SEND});
	}

  const renderTransactions = (): any => {
    return transactions.map(({date, value, id }) => (
        <TransactionItem  date={date} amount={value} key={id} />
      )
    );
  }

	return (
    <Container>
      <ResumeHeader publicAddress={TransactionData.publicAddress} />
      <ResumeCard amount={TransactionData.accountBalance} clickHandler={sendHandler}/>
      {renderTransactions()}
    </Container>
  );
}

export default Resume;