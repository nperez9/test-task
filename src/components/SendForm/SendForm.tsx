import React from 'react';
import { Container } from '../../library';

import styles from './SendForm.module.scss';
import { SendFormProps } from './SendForm.types';

const SendForm: React.FC<SendFormProps> = ({ updateAmount, updateRecipent, errorMessage }) => {
  return (
    <Container classname={styles.SendForm}>
      <div className={styles.FormControl}>
        <label htmlFor="amount">Amount (Eth)</label>
        <input type="number" name="amount" placeholder="0.00 ETH" required onChange={(e) => {
          updateAmount(e.target.value);
        }} />
      </div>
      <div className={styles.FormControl}>
        <label htmlFor="recipent">Add Recipient</label>
        <input type="text" name="recipent" placeholder="Public Recipient" required onChange={(e) => {
          updateRecipent(e.target.value);
        }} />
      </div>
      {errorMessage  && (
          <div className={styles.errorInput}>
            {errorMessage}
          </div>
        )
      }
    </Container>
  );
};

export default SendForm;
