import React, { useContext } from 'react';
import AppContext from '../context/background/AppContext';
import Container from '../library/Container';
import { Steps } from './Wallet.types';

const Thanks = () => {
	const { state, setState } = useContext(AppContext);

		const doneHandler = () => {
			setState({...state, step: Steps.RESUME})
		}

    return (
			<Container>
				<h1>Successfully!</h1>
				<button onClick={() => {doneHandler();}}> Done </button>
			</Container>
    );
};

export default Thanks;