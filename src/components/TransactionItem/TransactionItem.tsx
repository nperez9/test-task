import React from 'react';

import { TransactionItemProps } from './TransactionItem.types';
import RoundLogo from '../../library/RoundLogo';
import { dolarAmount } from '../../utils';

const TransactionItem: React.FC<TransactionItemProps> = ({ date, amount }) => {
	
  return (
		<div>
			<RoundLogo source='/img/etherum.png' alt='Etherum logo' isInlineBlock />
			<div>
				<span>Send ether</span>
				<span>{date}</span>
			</div>
			<div>
				<span>{amount} eth</span>
				<span>{dolarAmount(amount)} usd</span>
			</div>
		</div>
	);
}

export default TransactionItem;