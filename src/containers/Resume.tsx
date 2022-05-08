import React from 'react';

import ResumeCard from '../components/ResumeCard/ResumeCard';
import TransactionItem from '../components/TransactionItem/TransactionItem';
import TransactionList from '../components/TransactionsList/TransactionsList';

import Container from '../library/Container';

const Resume = () => {

	const sendHandler = () => {
		console.info('this is a test');
	}

	return (
    <Container>
      <TransactionList />
      <ResumeCard ethAmount={0} dolarAmount={0} OnClick={sendHandler}/>
    </Container>
  );
}

export default Resume;