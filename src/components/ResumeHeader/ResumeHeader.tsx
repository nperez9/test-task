import React from 'react';

import RoundLogo from '../../library/RoundLogo';
import styles from './ResumeHeader.module.scss';
import { ResumeHeaderProps } from './ResumeHeader.types';

const ResumeHeader: React.FC<ResumeHeaderProps> = ({publicAddress}) => {
  return (
    <header className={styles.ResumeHeader}>
      <RoundLogo source='/img/black-square.png' alt='Wallet logo' classname={styles.Logo} isInlineBlock/>
      <div className={styles.Info}>
        <h1 className={styles.Title}>Account</h1>
        <h2 className={styles.Subtitle}>{publicAddress}</h2>
      </div>
    </header>
  );
};

export default ResumeHeader;
