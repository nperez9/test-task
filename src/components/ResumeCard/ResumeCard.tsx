import React from 'react';

import styles from './ResumeCard.module.scss';
import { ResumeCardProps } from './ResumeCard.types';

import RoundLogo from '../../library/RoundLogo';

const ResumeCard: React.FC<ResumeCardProps> = ({ ethAmount, dolarAmount, clickHandler}) => {
  return (
    <div className={styles.ResumeCard}>
      <h3>{ethAmount} ETH</h3>
      <span className={styles.DolarLabel}>${dolarAmount.toFixed()} usd</span>
      <div onClick={() => {clickHandler()}}>
        <RoundLogo source='/img/uparrow.png' alt='up-arrow' classname={styles.ArrowImage} />
        <span className={styles.SendLabel}>Send</span>
      </div>
    </div>
  );
};

export default ResumeCard;