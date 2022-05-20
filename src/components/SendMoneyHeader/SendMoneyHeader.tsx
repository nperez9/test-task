import React from 'react';
import { Card } from '../../library';

import styles from './SendMoneyHeader.module.scss';
import { SendMoneyHeaderProps } from './SendMoneyHeader.types';


const SendMoneyHeader: React.FC<SendMoneyHeaderProps> = ({ cancelHandler }) => {
  return (
    <Card classname={styles.SMHeader}>
      <h1>Send Money</h1>
      <span onClick={() => { cancelHandler()}}>X</span>
    </Card>
  );
};

export default SendMoneyHeader;