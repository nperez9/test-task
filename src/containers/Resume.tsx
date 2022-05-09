import React, { ReactNode, useContext, useEffect } from 'react';

import ResumeCard from '../components/ResumeCard/ResumeCard';
import TransactionItem from '../components/TransactionItem/TransactionItem';
import ResumeHeader from '../components/ResumeHeader/ResumeHeader';
import AppContext from '../context/background/AppContext';

import Container from '../library/Container';
import { Steps } from './Wallet.types';

const Resume = () => {
  const { state: { transactions }, setState, getTransactions } = useContext(AppContext);

  useEffect(() => {
    getTransactions();
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
      <ResumeHeader />
      <ResumeCard ethAmount={0} dolarAmount={0} clickHandler={sendHandler}/>
      {renderTransactions()}
    </Container>
  );
}

export default Resume;