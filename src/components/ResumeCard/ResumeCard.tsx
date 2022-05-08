import React from 'react';

import styles from './ResumeCard.module.scss';
import { ResumeCardProps } from './ResumeCard.types';

const ResumeCard: React.FC<ResumeCardProps> = ({ ethAmount, dolarAmount, OnClick}) => {
  return (
    <div className={styles.ResumeCard}>
      <h3>{ethAmount} ETH</h3>
      <span className={styles.DolarLabel}>${dolarAmount.toFixed()} usd</span>
      <div>
        <img src="" alt="up-arrow" onClick={() => OnClick}/>
        <span>Send</span>
      </div>
    </div>
  );
};

export default ResumeCard;