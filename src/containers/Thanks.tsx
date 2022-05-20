import React, { useContext } from 'react';
import ThanksBody from '../components/ThanksBody/ThanksBody';

import ThanksFooter from '../components/ThanksFooter/ThanksFooter';
import AppContext from '../context/background/AppContext';
import { Steps } from './Wallet.types';

const Thanks = () => {
	const { setStep } = useContext(AppContext);

		const doneHandler = () => {
			setStep(Steps.RESUME);
		}

    return (
			<>
				<ThanksBody />
				<ThanksFooter doneHandler={doneHandler} />
			</>
    );
};

export default Thanks;