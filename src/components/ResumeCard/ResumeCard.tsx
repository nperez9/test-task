import React from 'react';

import styles from './ResumeCard.module.scss';
import { ResumeCardProps } from './ResumeCard.types';

import RoundLogo from '../../library/RoundLogo';
import { dolarAmount } from '../../utils';

const ResumeCard: React.FC<ResumeCardProps> = ({ amount, clickHandler}) => {
  return (
    <div className={styles.ResumeCard}>
      <h3>{amount} ETH</h3>
      <span className={styles.DolarLabel}>${dolarAmount(amount)} USD</span>
      <div onClick={() => {clickHandler()}}>
        <RoundLogo source='/img/uparrow.png' alt='up-arrow' classname={styles.ArrowImage} />
        <span className={styles.SendLabel}>Send</span>
      </div>
    </div>
  );
};

export default ResumeCard;