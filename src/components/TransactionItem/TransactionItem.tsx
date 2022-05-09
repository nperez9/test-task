import React from 'react';

import { TransactionItemProps } from './TransactionItem.types';
import RoundLogo from '../../library/RoundLogo';
import { dolarAmount } from '../../utils';
import styles from './TransactionItem.module.scss';

const TransactionItem: React.FC<TransactionItemProps> = ({ date, amount }) => {
	
  return (
		<div className={styles.TransactionItem}>
			<RoundLogo source='/img/etherum.png' alt='Etherum logo' isInlineBlock />
			<div>
				<span className={styles.Title}>Send ether</span>
				<span className={styles.Subtitle}>{date}</span>
			</div>
			<div className={styles.AmountLabel}>
				<span className={styles.Title}>-{amount} ETH</span>
				<span className={styles.Subtitle}>{dolarAmount(amount)} USD</span>
			</div>
		</div>
	);
}

export default TransactionItem;